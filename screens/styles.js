import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    entryField: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
        paddingBottom: 5,
        marginHorizontal: 20,
        paddingTop: 30,
        },
    entryArea: {
        paddingVertical: '50%',
        },
    entryAreaText: {
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'AmericanTypewriter-SemiBold',
        fontStyle: 'italic',
        },
    schIdTextEntry: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
        paddingBottom: 5,
        marginHorizontal: 20,
        paddingTop: 30,
    },
    schResetInfoText: {
        fontSize: 45,
        textAlign: 'center',
        padding: 100,
        marginTop: 100,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#818181',
    },
    mainAccountViewContainer: {
        padding: 20,
        margin: 50,
        marginTop: '35%',
        borderRadius: 400,
        height: 300,
        borderWidth: 1,
    },
    mainAccountViewButtonSide1: {
        padding: 15,
        margin: 20,
        borderRadius: 100,
        borderWidth: 1,
        alignContent: 'center',
        width: 75,
        height: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainAccountViewButtonIcon: {
        height: 20,
        width: 20,
    },
    topBarMainAccountView: {
        padding: 20,
        backgroundColor: 'lightblue',
        borderWidth: 0.5,
        borderColor: '#818181',
        alignItems: 'center',
        flexDirection: 'row',
    },
    gearIconTopBarMainAccount: {
        height: 25,
        width: 25,
        padding: 5,
    },
    topBarMainAccountViewText: {
        fontSize: 18,
    },
    mainAccountViewButtonSide2: {
        padding: 15,
        margin: 20,
        borderRadius: 100,
        borderWidth: 1,
        alignContent: 'center',
        width: 75,
        height: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainAccountViewContainerRight: {
        position: 'absolute',
        right: 20,
    },
    mainAccountViewLeft: {
        padding: 15,
        margin: 50,
        marginTop: '35%',
        borderRadius: 400,
        height: 300,
        borderWidth: 1,
    },
    profileImageTopBar: {
        height: 30,
        width: 30,
    },
    profileImageTreadmill: {
        height: 350,
        width: 350,
        position: 'absolute',
        right: 175,
        bottom: -73,
    },
    mainAccountViewButtonText: {
        fontSize: 10,
    },
});

export default styles;
