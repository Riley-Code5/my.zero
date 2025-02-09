import React from 'react';
import { Text, Button, View, TextInput } from 'react-native';
import styles from './styles';
import MainPage from './Main.js';
import { info } from '../info.js';

const Account = () => {
    const [password, setPassword] = React.useState('');
    const [Email, setEmail] = React.useState('24r.waghorn@thelenham.viat.org.uk');
    const [schId, setSchId] = React.useState(info.schoolId);
    const [schIdE, setSchIdE] = React.useState(true);
    const [loggedIn, setLoggedIn] = React.useState(true);

    const logIn = () => {
        console.log('Email:', Email, 'Password:', password);
        setLoggedIn(true);
    };
    const passIdSch = () => {
        console.log('Switching to School ID / Forgot Password screen');
        setSchIdE(false);
    };
    const finishTransitionTemp = () => {
        console.log('School Transfer Complete.');
        setSchIdE(true);
    };
    if (!schIdE){
        return(
            <>
                <TextInput
                style={styles.schIdTextEntry}
                value={schId}
                onChange={(text) => setSchId(text)}
                placeholderTextColor={'School Id'}/>
                <Button
                title={'Switch School'}
                onPress={finishTransitionTemp}/>
                <Text style={styles.schResetInfoText}>{info.schResetInstructions}</Text>
            </>
        );
    }
    else if (!loggedIn){
        return(
            <View style={styles.entryArea}>
                <Text style={styles.entryAreaText}>My.Zero {info.schNameShortHand}</Text>
                <TextInput
                value={Email}
                style={styles.entryField}
                onChangeText={(text) => setEmail(text)}
                placeholder={'Email'}/>
                <TextInput
                style={styles.entryField}
                placeholder={'Password'}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}/>
                <Button
                title="Log In"
                onPress={() => logIn()}/>
                <Button
                title="Forgot Password? / Not your school?"
                onPress={() => passIdSch()}/>
            </View>
        );
    }
    return (
        <MainPage username={Email} />
    );
};

export default Account;
