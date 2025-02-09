/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../assets/iconhelper/helper'; // Or your icon library import

const MainAccountView = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [contactDetails, setContactDetails] = useState([]);

    const loadContactCard = () => {
        setContactDetails(props.contactInfo);
        setModalVisible(true);
    };

    const renderContactItems = () => {
        return contactDetails.map((item, index) => (
            <View key={index} style={modalStyles.contactItem}>
                <Icon icon={item.service} style={modalStyles.contactIcon} />
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
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide1, { backgroundColor: 'lightgrey' }]}>
                                    <Icon icon={'corkboard'} style={styles.mainAccountViewButtonIcon} />
                                    <Text style={styles.mainAccountViewButtonText}>Notices</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide1, { backgroundColor: 'pink' }]}>
                                    <Icon icon={'paper'} style={styles.mainAccountViewButtonIcon} />
                                    <Text style={styles.mainAccountViewButtonText}>Work</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.mainAccountViewContainerRight}>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide2, { backgroundColor: 'lightgreen' }]}>
                                    <Icon icon={'chain'} style={styles.mainAccountViewButtonIcon} />
                                    <Text style={styles.mainAccountViewButtonText}>Links</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide2, { backgroundColor: 'lightyellow' }]}>
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
        </>
    );
};

MainAccountView.propTypes = {
    fullName: PropTypes.string.isRequired,
    timeTable: PropTypes.array,
    assignments: PropTypes.array,
    noticeboard: PropTypes.array,
    resources: PropTypes.array,
    behavior: PropTypes.array,
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
