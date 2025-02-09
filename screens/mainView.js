/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../assets/iconhelper/helper';

const MainAccountView = (props) => {
    return (
    <>
    <View style={styles.topBarMainAccountView}>
        <Image source={props.profileImage} style={styles.profileImageTopBar}/>
    </View>
        <View style={styles.mainAccountViewContainer}>
            <View>
                <View>
                    <Image source={props.profileImage} style={styles.profileImageTreadmill}/>
                        <View style={styles.mainAccountViewContainerLeft}>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide1, {backgroundColor: 'lightgrey'}]}>
                                    <Icon icon={'corkboard'} style={styles.mainAccountViewButtonIcon}/>
                                    <Text style={styles.mainAccountViewButtonText}>Notices</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide1, {backgroundColor: 'pink'}]}>
                                    <Icon icon={'paper'} style={styles.mainAccountViewButtonIcon}/>
                                    <Text style={styles.mainAccountViewButtonText}>Work</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    <View style={styles.mainAccountViewContainerRight}>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide2, {backgroundColor: 'lightgreen'}]}>
                                    <Icon icon={'chain'} style={styles.mainAccountViewButtonIcon}/>
                                    <Text style={styles.mainAccountViewButtonText}>Links</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={[styles.mainAccountViewButtonSide2, {backgroundColor: 'lightyellow'}]}>
                                    <Icon icon={'cog'} style={styles.mainAccountViewButtonIcon}/>
                                    <Text style={styles.mainAccountViewButtonText}>Lessons</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </View>
        </View>
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

export default MainAccountView;
