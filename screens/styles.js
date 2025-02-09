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
        padding: 15,
        margin: 50,
        marginTop: '35%',
        borderRadius: 400,
        borderWidth: 1,
    },
    mainAccountViewButton: {
        padding: 15,
        marginHorizontal: 15,
        alignContent: 'center',
        width: '15%',
    },
    mainAccountViewButtonIcon: {
        height: 50,
        width: 50,
    },
    topBarMainAccountView: {
        padding: 20,
        backgroundColor: 'lightblue',
        borderWidth: 0.5,
        borderColor: '#818181',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    gearIconTopBarMainAccount: {
        height: 25,
        width: 25,
        padding: 5,
    },
    topBarMainAccountViewText: {
        fontSize: 18,
    },
});

export default styles;
