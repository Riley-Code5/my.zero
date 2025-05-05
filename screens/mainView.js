/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../assets/iconhelper/helper'; // Or your icon library import

const MainAccountView = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleLessons, setModalVisibleLessons] = useState(false);
    const [contactDetails, setContactDetails] = useState([]);
    const [lessonDetails, setLessonDetails] = useState([]);
    const [modalVisibleLinks, setModalVisibleLinks] = useState(false);
    const [modalVisibleWork, setModalVisibleWork] = useState(false);
    const [linkDetails, setLinkDetails] = useState([]);
    const [workDetails, setWorkDetails] = useState([]);
    const [modalVisibleNotices, setModalVisibleNotices] = useState(false);
    const [noticeDetails, setNoticeDetails] = useState([]);

    const loadContactCard = () => {
        setContactDetails(props.contactInfo);
        setModalVisible(true);
    };
    const loadLessonsCard = () => {
        setLessonDetails(props.timetable);
        setModalVisibleLessons(true);
    };

    const renderContactItems = () => {
        return contactDetails.map((item, index) => (
            <View key={index} style={modalStyles.contactItem}>
                <Icon icon={item.service} style={modalStyles.contactIcon} />
                <Text style={modalStyles.contactText}>{item.name}</Text>
            </View>
        ));
    };

    const loadLinkCard = () => {
        setLinkDetails(props.links);
        setModalVisibleLinks(true);
    };

    const loadWorkCard = () => {
        setWorkDetails(props.work);
        setModalVisibleWork(true);
    };

    const loadNoticesCard = () => {
        setNoticeDetails(props.noticeboard);
        setModalVisibleNotices(true);
    };

    const renderLessonItems = () => {
        let lastDate = '';
        const week1 = lessonDetails.filter(item => item.week === 1);
        const week2 = lessonDetails.filter(item => item.week === 2);

        const renderWeekItems = (weekItems) => {
            return weekItems.map((item, index) => {
                const isFirstPeriod = item.date !== lastDate;
                lastDate = item.date;
                return (
                    <React.Fragment key={index}>
                        {isFirstPeriod && (
                            <>
                                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.date}</Text>
                                <View style={{ height: 1, backgroundColor: '#818181', marginVertical: 5 }} />
                            </>
                        )}
                        <View style={[modalStyles.contactItem, { flexDirection: 'column', padding: 15, borderWidth: 1, borderColor: '#818181', width: 600 }]}>
                            <Text style={modalStyles.contactText}>{item.name}</Text>
                            <Text style={modalStyles.contactText}>{item.teacher}</Text>
                            <Text style={modalStyles.contactText}>{item.room}</Text>
                        </View>
                    </React.Fragment>
                );
            });
        };


        return (
            <>
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>
                Week 1
            </Text>
            {renderWeekItems(week1)}
            <View style={{ height: 2, backgroundColor: '#000', marginVertical: 10 }} />
            <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10 }}>
                Week 2
            </Text>
            {renderWeekItems(week2)}
            </>
        );
    };
    const renderLinkItems = () => {
        return linkDetails.map((item, index) => (
            <View key={index} style={modalStyles.contactItem}>
                <Icon icon={item} style={modalStyles.contactIcon} />
                <Text style={modalStyles.contactText}>{item}</Text>
            </View>
        ));
    };

    const renderWorkItems = () => {
        return workDetails.map((item, index) => (
            <View key={index} style={modalStyles.contactItem}>
                <Text style={modalStyles.contactText}>{item.name}</Text>
            </View>
        ));
    };

    return (
        <>
            <View style={styles.topBarMainAccountView}>
                <Image source={props.profileImage} style={styles.profileImageTopBar} />
            </View>
            <View style={styles.mainAccountViewContainer}>
                <View>
                    <View>
                        <TouchableOpacity onPress={loadContactCard} style={styles.profileImageTreadmillButton}>
                            <Image source={props.profileImage} style={styles.profileImageTreadmill} />
                        </TouchableOpacity>
                        <View style={styles.mainAccountViewContainerLeft}>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide1, { backgroundColor: 'lightgrey' }]} onPress={loadNoticesCard}>
                                    <Icon icon={'corkboard'} style={styles.mainAccountViewButtonIcon} />
                                    <Text style={styles.mainAccountViewButtonText}>Notices</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide1, { backgroundColor: 'pink' }]} onPress={loadWorkCard}>
                                    <Icon icon={'paper'} style={styles.mainAccountViewButtonIcon} />
                                    <Text style={styles.mainAccountViewButtonText}>Work</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.mainAccountViewContainerRight}>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide2, { backgroundColor: 'lightgreen' }]} onPress={loadLinkCard}>
                                    <Icon icon={'chain'} style={styles.mainAccountViewButtonIcon} />
                                    <Text style={styles.mainAccountViewButtonText}>Links</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide2, { backgroundColor: 'lightyellow' }]} onPress={loadLessonsCard}>
                                    <Icon icon={'cog'} style={styles.mainAccountViewButtonIcon} />
                                    <Text style={styles.mainAccountViewButtonText}>Lessons</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <ScrollView>
                            {renderContactItems()}
                        </ScrollView>
                        <TouchableOpacity
                            style={[modalStyles.button, modalStyles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={modalStyles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleLessons}
                onRequestClose={() => {
                    setModalVisibleLessons(false);
                }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <ScrollView>
                            {renderLessonItems()}
                        </ScrollView>
                        <TouchableOpacity
                            style={[modalStyles.button, modalStyles.buttonClose]}
                            onPress={() => setModalVisibleLessons(false)}
                        >
                            <Text style={modalStyles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleLinks}
                onRequestClose={() => {
                    setModalVisibleLinks(false);
                }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <ScrollView>
                            {renderLinkItems()}
                        </ScrollView>
                        <TouchableOpacity
                            style={[modalStyles.button, modalStyles.buttonClose]}
                            onPress={() => setModalVisibleLinks(false)}
                        >
                            <Text style={modalStyles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleWork}
                onRequestClose={() => {
                    setModalVisibleWork(false);
                }}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <ScrollView>
                            {renderWorkItems()}
                        </ScrollView>
                        <TouchableOpacity
                            style={[modalStyles.button, modalStyles.buttonClose]}
                            onPress={() => setModalVisibleWork(false)}
                        >
                            <Text style={modalStyles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

MainAccountView.propTypes = {
    fullName: PropTypes.string.isRequired,
    timetable: PropTypes.array.isRequired,
    assignments: PropTypes.array,
    noticeboard: PropTypes.array,
    links: PropTypes.any.isRequired,
    profileImage: PropTypes.any,
    contactInfo: PropTypes.array,
};

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    contactIcon: {
        marginRight: 10,
        height: 30,
        width: 30,
    },
    contactText: {

    },
});

export default MainAccountView;
