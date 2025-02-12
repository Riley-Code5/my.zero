import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { info } from '../info.js';
import AccountMainView from './mainView.js';

const MainPage = (props) => {
    const screenHeight = Dimensions.get('window').height;
    const bottomContainerRef = useRef(null);
    const [bottomContainerHeight, setBottomContainerHeight] = useState(0);

    const handleBottomContainerLayout = () => {
        if (bottomContainerRef.current) {
            bottomContainerRef.current.measure((x, y, width, height) => {
                setBottomContainerHeight(height);
            });
        }
    };
    const contactCard = [
        {
            service: 'teams',
            name: 'R Waghorn (24)',
        },
        {
            service: 'mail',
            name: '24r.waghorn@thelenham.viat.org.uk',
        },
    ];

    return (
        <View style={styles.container}>
            <AccountMainView
            fullName={'Riley Waghorn'}
            profileImage={require('../assets/image/profile.png')}
            contactInfo={contactCard}/>
            <View
                ref={bottomContainerRef}
                style={[styles.bottomContainer, { top: screenHeight - bottomContainerHeight }]}
                onLayout={handleBottomContainerLayout}
            >
                <Text style={styles.accountDetails}>Email: {props.username}</Text>
                <Text style={styles.accountDetails}>School ID: {info.schoolId} {info.schIdContext}</Text>
                <Text style={styles.accountDetails}>Version {info.version}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    bottomContainer: {
        padding: 20,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        position: 'absolute', // Essential for absolute positioning
        left: 0,
        right: 0,
        height: 200,
    },
    accountDetails: {
        color: '#818181',
        margin: 7,
    },
});

export default MainPage;
