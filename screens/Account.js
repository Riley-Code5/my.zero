import React from 'react';
import { Edulink } from 'edulinkone-api';
import { Text, Button, View, TextInput, Image } from 'react-native';
import styles from './styles';
import MainPage from './Main.js';
import { info } from '../info.js';

const Account = () => {
    const [password, setPassword] = React.useState(info.flags.persistentPassword);
    const [Email, setEmail] = React.useState(info.flags.persistentEmail);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [loggingIn, setLoggingIn] = React.useState(info.flags.startLoggedIn);
    var [studentErrorText, setStudentErrorText] = React.useState('')
    if (loggingIn) {
        logIn();
        setLoggingIn(false);
    }
    async function logIn() {
        if (info.flags.useEdulinkAPI) {
            const edulink = new Edulink(info.flags.edulinkSchoolId, info.flags.edulinkUsername, info.flags.edulinkPassword, 1);
            await edulink.Authenticate();
        } else if (info.flags.useLOCALHOSTsql) {
            if (info.flags.isTunneled) {
                fetch(`https://${info.flags.localTunnel}:${info.flags.port}/`);
            } else {
                setStudentErrorText('The program can\'t connect right now because the computer system is blocked. Please tell your school\'s IT support team to fix the connection settings.');
                if (info.flags.verbose) {setStudentErrorText('Port exposure check failed: Server configuration not registered in info.js . The application expects explicit port configuration in manifest but received other values. Update info.js with your exposed port settings.');}
                console.error('SQL is not set as tunneled inside info.js');
                studentErrorText = 'shouldnt be seen';
            }
        }
        if (!studentErrorText) {setLoggedIn(true);}
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
