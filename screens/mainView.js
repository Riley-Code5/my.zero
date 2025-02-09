import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../assets/iconhelper/helper';

const MainAccountView = (props) => {
    return (
    <>
    <View style={styles.topBarMainAccountView}>
        <Icon icon={'cog'} style={styles.gearIconTopBarMainAccount}/>
        <Image source={props.profileImage} />
        <Text style={styles.topBarMainAccountViewText}>Hello, {props.fullName}</Text>
    </View>
        <View style={styles.mainAccountViewContainer}>
            <View>
                <View>
                    <Image source={props.profileImage} />
                    <View>
                        <TouchableOpacity style={styles.mainAccountViewButton}>
                        <Icon icon={'corkboard'} style={styles.mainAccountViewButtonIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.mainAccountViewButton}>
                        <Icon icon={'chain'} style={styles.mainAccountViewButtonIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.mainAccountViewButton}>
                            <Icon icon={'paper'} style={styles.mainAccountViewButtonIcon}/>
                        </TouchableOpacity>
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
