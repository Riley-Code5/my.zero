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
    const contactCard = [{service: 'teams', name: 'R Waghorn (24)'}];
    if (info.emailUsernameCorrelation) {
        contactCard.push({service: 'mail', name: props.username + info.emailSuffix});
    }
    let timetable = [];
    const links = info.schoolLinks;
    if (info.flags.exampleTimeTable){
    timetable = [
        { name: 'Science', room: 'S114', teacher: 'C Keyes', period: 1, date: 'Monday', week: 1 },
        { name: 'Textiles', room: 'M2', teacher: 'R Patrick', period: 2, date: 'Monday', week: 1 },
        { name: 'History', room: 'T10', teacher: 'K Yu', period: 3, date: 'Monday', week: 1 },
        { name: 'English Literature', room: 'M11', teacher: 'J Cooke', period: 4, date: 'Monday', week: 1 },
        { name: 'Chemistry', room: 'S213', teacher: 'C Ince', period: 5, date: 'Monday', week: 1 },
        { name: 'Biology', room: 'S101', teacher: 'A Cambell', period: 1, date: 'Tuesday', week: 1 },
        { name: 'Geography', room: 'T4', teacher: 'L Adams', period: 2, date: 'Tuesday', week: 1 },
        { name: 'Art', room: 'S212', teacher: 'S Garrot', period: 3, date: 'Tuesday', week: 1 },
        { name: 'Music', room: 'H1', teacher: 'A Fullerton', period: 4, date: 'Tuesday', week: 1 },
        { name: 'Physical Education', room: 'Sports Hall', teacher: 'C Keyes', period: 5, date: 'Tuesday', week: 1 },
        { name: 'English Literature', room: 'M11', teacher: 'J Cooke', period: 1, date: 'Wednesday', week: 1 },
        { name: 'Mathematics', room: 'S115', teacher: 'R Talling', period: 2, date: 'Wednesday', week: 1 },
        { name: 'History', room: 'T10', teacher: 'K Yu', period: 3, date: 'Wednesday', week: 1 },
        { name: 'Physics', room: 'S201', teacher: 'M Batey', period: 4, date: 'Wednesday', week: 1 },
        { name: 'Chemistry', room: 'S213', teacher: 'C Ince', period: 5, date: 'Wednesday', week: 1 },
        { name: 'Biology', room: 'S101', teacher: 'A Cambell', period: 1, date: 'Thursday', week: 1 },
        { name: 'Geography', room: 'T4', teacher: 'L Adams', period: 2, date: 'Thursday', week: 1 },
        { name: 'Art', room: 'S212', teacher: 'S Garrot', period: 3, date: 'Thursday', week: 1 },
        { name: 'Music', room: 'H1', teacher: 'A Fullerton', period: 4, date: 'Thursday', week: 1 },
        { name: 'Physical Education', room: 'Sports Hall', teacher: 'C Keyes', period: 5, date: 'Thursday', week: 1 },
        { name: 'Textiles', room: 'T3', teacher: 'R Patrick', period: 1, date: 'Friday', week: 1 },
        { name: 'Science', room: 'S214', teacher: 'R Poole', period: 2, date: 'Friday', week: 1 },
        { name: 'Dance', room: 'Dance Studio', teacher: 'D Morris', period: 3, date: 'Friday', week: 1 },
        { name: 'Computer Science', room: 'T5', teacher: 'J Tyson', period: 4, date: 'Friday', week: 1 },
        { name: 'Worldviews', room: 'M8', teacher: 'A Diamond', period: 5, date: 'Friday', week: 1 },

        { name: 'Science', room: 'S114', teacher: 'C Keyes', period: 1, date: 'Monday', week: 2 },
        { name: 'Textiles', room: 'M2', teacher: 'R Patrick', period: 2, date: 'Monday', week: 2 },
        { name: 'History', room: 'T10', teacher: 'K Yu', period: 3, date: 'Monday', week: 2 },
        { name: 'English Literature', room: 'M11', teacher: 'J Cooke', period: 4, date: 'Monday', week: 2 },
        { name: 'Chemistry', room: 'S213', teacher: 'C Ince', period: 5, date: 'Monday', week: 2 },
        { name: 'Biology', room: 'S101', teacher: 'A Cambell', period: 1, date: 'Tuesday', week: 2 },
        { name: 'Geography', room: 'T4', teacher: 'L Adams', period: 2, date: 'Tuesday', week: 2 },
        { name: 'Art', room: 'S206', teacher: 'S Garrot', period: 3, date: 'Tuesday', week: 2 },
        { name: 'Music', room: 'H1', teacher: 'A Fullerton', period: 4, date: 'Tuesday', week: 2 },
        { name: 'Physical Education', room: 'Sports Hall', teacher: 'C Keyes', period: 5, date: 'Tuesday', week: 2 },
        { name: 'English Literature', room: 'M11', teacher: 'J Cooke', period: 1, date: 'Wednesday', week: 2 },
        { name: 'Mathematics', room: 'S115', teacher: 'R Talling', period: 2, date: 'Wednesday', week: 2 },
        { name: 'History', room: 'T10', teacher: 'K Yu', period: 3, date: 'Wednesday', week: 2 },
        { name: 'Physics', room: 'S201', teacher: 'M Batey', period: 4, date: 'Wednesday', week: 2 },
        { name: 'Chemistry', room: 'S213', teacher: 'C Ince', period: 5, date: 'Wednesday', week: 2 },
        { name: 'Biology', room: 'S101', teacher: 'A Cambell', period: 1, date: 'Thursday', week: 2 },
        { name: 'Geography', room: 'T4', teacher: 'L Adams', period: 2, date: 'Thursday', week: 2 },
        { name: 'Art', room: 'S206', teacher: 'S Garrot', period: 3, date: 'Thursday', week: 2 },
        { name: 'Music', room: 'H1', teacher: 'A Fullerton', period: 4, date: 'Thursday', week: 2 },
        { name: 'Physical Education', room: 'Sports Hall', teacher: 'C Keyes', period: 5, date: 'Thursday', week: 2 },
        { name: 'Textiles', room: 'L3', teacher: 'R Patrick', period: 1, date: 'Friday', week: 2 },
        { name: 'Science', room: 'S214', teacher: 'R Poole', period: 2, date: 'Friday', week: 2 },
        { name: 'Dance', room: 'Dance Studio', teacher: 'D Morris', period: 3, date: 'Friday', week: 2 },
        { name: 'Computer Science', room: 'T5', teacher: 'J Tyson', period: 4, date: 'Friday', week: 2 },
        { name: 'Worldviews', room: 'M8', teacher: 'A Diamond', period: 5, date: 'Friday', week: 2 },
    ];
    }

    return (
        <View style={styles.container}>
            <AccountMainView
            fullName={'Riley Waghorn'}
            profileImage={require('../assets/image/profile.png')}
            contactInfo={contactCard}
            links={links}
            timetable={timetable}/>
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
