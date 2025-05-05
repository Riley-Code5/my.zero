import React from 'react';
import { Edulink } from 'edulinkone-api';
import { Text, Button, View, TextInput, Image } from 'react-native';
import styles from './styles';
import MainPage from './Main.js';
import { info } from '../info.js';

const Account = () => {
    const [password, setPassword] = React.useState(info.flags.persistentPassword);
    const [Email, setEmail] = React.useState(info.flags.persistentEmail);
    const [loggedIn, setLoggedIn] = React.useState(info.flags.startLoggedIn);
    if (info.flags.production) {
        setLoggedIn(false);
        setEmail('');
        setPassword('');
    }
    async function logIn() {
        if (info.flags.useEdulinkAPI) {
            const edulink = new Edulink(info.flags.edulinkSchoolId, info.flags.edulinkUsername, info.flags.edulinkPassword, 1);
            await edulink.Authenticate();
        }
        setLoggedIn(true);
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
            </View>
        );
    }
    return (
        <MainPage username={Email} />
    );
};

export default Account;
