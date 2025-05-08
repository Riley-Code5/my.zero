import React, { useEffect } from 'react';
import { Edulink } from 'edulinkone-api';
import { Text, Button, View, TextInput, Image } from 'react-native';
import styles from './styles';
import MainPage from './Main.js';
import { info } from '../info.js';
import { openDatabase } from 'react-native-sqlite-storage';
import RNFS from 'react-native-fs';

const DB_NAME = 'users.db';

const Account = () => {
    const [password, setPassword] = React.useState(info.flags.persistentPassword);
    const [Email, setEmail] = React.useState(info.flags.persistentEmail);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [loggingIn, setLoggingIn] = React.useState(info.flags.startLoggedIn);
    var [studentErrorText, setStudentErrorText] = React.useState('');

    useEffect(() => {
        const copyDatabase = async () => {
            console.log('MainBundlePath:', RNFS.MainBundlePath);
            const dbPath = `${RNFS.DocumentDirectoryPath}/${DB_NAME}`;
            const sourcePath = RNFS.MainBundlePath + '/assets/' + DB_NAME;

            console.log('Destination DB Path:', dbPath);
            console.log('Source DB Path:', sourcePath);

            try {
                const dbExists = await RNFS.exists(dbPath);
                console.log('Database exists at destination:', dbExists);

                if (!dbExists) {
                    const sourceExists = await RNFS.exists(sourcePath);
                    console.log('Database exists at source:', sourceExists);

                    if (sourceExists) {
                        console.log('Attempting to copy database...');
                        await RNFS.copyFile(sourcePath, dbPath);
                        console.log('Database copied successfully to', dbPath);
                    } else {
                        console.warn('Database file NOT found in assets:', sourcePath);
                        setStudentErrorText('Database file missing in the app bundle.');
                    }
                } else {
                    console.log('Database already exists at', dbPath);
                }
            } catch (error) {
                console.error('Error during copyDatabase:', error);
                setStudentErrorText(`Error setting up local database: ${error.message}`);
            }
        };
        if(info.flags.usePreDefinedSQL && info.flags.useFile){copyDatabase();}
    }, []);

    if (loggingIn) {
        logIn();
        setLoggingIn(false);
    }

    async function logIn() {
        console.log('Log In function called');
        setStudentErrorText(''); // Reset error text on login attempt
        if (info.flags.useEdulinkAPI) {
            const edulink = new Edulink(info.flags.edulinkSchoolId, info.flags.edulinkUsername, info.flags.edulinkPassword, 1);
            try {
                await edulink.Authenticate();
                setLoggedIn(true); // Log in immediately after successful Edulink authentication
                return;
            } catch (error) {
                console.error("Edulink Authentication Error:", error);
                setStudentErrorText("Failed to log in with Edulink.");
                return;
            }
        } else if (info.flags.useLOCALHOSTsql) {
            if (info.flags.isTunneled) {
                try {
                    async function downloadDatabase() {
                        var continueUrl = '/continue/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOiIyMDI1LTA1LTA4VDE3OjAwOjM4Ljc5OFoiLCJzdWJkb21haW4iOiJ0dzc4ZXI2dGNzODl3IiwiaXAiOiIxNDUuMjI0LjY2LjE1MiIsImVuZHBvaW50SXAiOiIxNDUuMjI0LjY2LjE1MiIsImlhdCI6MTc0NjcyMzYzOH0.mmVSlqqD-Z9MMTKdnCCVyM-f7NJyaZs8g7k57A55oac';
                        try {
                          const response = await fetch(continueUrl, {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              endpoint: '',
                            }),
                            redirect: 'manual', // To handle potential redirects
                          });

                          if (response.ok) {
                            // The POST to /continue was likely successful.
                            // Now, let's try to fetch the database file.
                            const databaseResponse = await fetch(`${info.flags.localTunnel}/${DB_NAME}`);
                            if (databaseResponse.ok) {
                              const dbData = await databaseResponse.blob();
                              // Process the database data (e.g., save it locally)
                              console.log('Database downloaded successfully');
                              // ... your logic to handle the downloaded database ...
                              return dbData;
                            } else {
                              console.error('Failed to download database:', databaseResponse.status, databaseResponse.statusText);
                            }
                          } else {
                            console.error('Failed to authenticate with localtunnel:', response.status, response.statusText);
                            const responseText = await response.text();
                            console.log('Authentication response:', responseText);
                          }
                        } catch (error) {
                          console.error('Error during database download:', error);
                        }
                      }
                      
                      // Call this function when you need to download the database
                      setStudentErrorText(downloadDatabase());
                } catch (error) {
                    console.error("Localhost Connection Error:", error);
                    setStudentErrorText('The program can\'t connect right now because the computer system is not registered. Please tell your school\'s IT support team to fix the connection settings.');
                    if (info.flags.verbose) {
                        setStudentErrorText('Port exposure check failed: Server configuration not registered in info.js . The application expects explicit port configuration in the configuration settings but received other values.');
                    }
                }
            } else {
                setStudentErrorText('The program can\'t connect right now because the computer system is not registered. Please tell your school\'s IT support team to fix the connection settings.');
                if (info.flags.verbose) {
                    setStudentErrorText('Port exposure check failed: Server configuration not registered in info.js . The application expects explicit port configuration in the configuration settings but received other values.');
                }
            }
        } else if (info.flags.usePreDefinedSQL) {
            if (info.flags.useFile) {
                console.log('Entering usePreDefinedSQL and useFile blocks');
                const dbName = DB_NAME; // Use the constant
                try {
                    console.log('Before openDatabase');
                    openDatabase(
                        { name: dbName, location: 'default' },
                        (db) => {
                            console.log(`openDatabase success callback: Database ${dbName} opened`);
                            db.transaction((tx) => {
                                tx.executeSql(
                                    'SELECT * FROM classRef',
                                    [],
                                    (_, results) => {
                                        console.log('executeSql success:', results.rows.raw());
                                        setStudentErrorText(`User Query Example: ${JSON.stringify(results.rows.raw())}`);
                                        setLoggedIn(true);
                                    },
                                    (_, error) => {
                                        console.log('executeSql error:', error);
                                        setStudentErrorText(`Error executing user query: ${error.message}`);
                                        return false;
                                    }
                                );
                            });
                        },
                        (error) => {
                            console.log('openDatabase error callback:', error);
                            setStudentErrorText(`Could not connect to database: ${error.message}`);
                        }
                    );
                    console.log('After openDatabase');
                } catch (error) {
                    console.error('Error during openDatabase:', error);
                    setStudentErrorText(`An error occurred opening the database: ${error.message || error}`);
                }
                // const timetableDB = info.flags.timetablesDB; // You might need to handle this similarly if needed
            } else {
                setStudentErrorText('The local data is registered, but the program was unable to tell it was.');
                if (info.flags.verbose) {
                    setStudentErrorText('Local SQL check failed: File configuration incorrectly registered in info.js . The application expects explicit instruction to use a file database.');
                }
            }
        }
        // Removed the unconditional setLoggedIn(true) here.
        // Login is now handled within the success paths of each authentication method.
    }
    if (!loggedIn){
        return(
            <View style={styles.entryArea}>
                <Image source={require('../assets/image/tls.jpg')} style={styles.icoImg}/>
                <Text style={styles.entryAreaText}>My.Zero {info.schNameShortHand}</Text>
                <TextInput
                value={Email}
                style={styles.entryField}
                placeholderTextColor={'#141414'}
                onChangeText={(text) => setEmail(text)}
                placeholder={'Email'}/>
                <TextInput
                style={styles.entryField}
                placeholder={'Password'}
                placeholderTextColor={'#141414'}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}/>
                <Button
                title="Log In"
                onPress={() => logIn()}/>
                <Text>{studentErrorText}</Text>
            </View>
        );
    }
    return (
        <MainPage username={Email} />
    );
};

export default Account;
