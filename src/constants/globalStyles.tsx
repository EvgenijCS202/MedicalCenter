import { StyleSheet } from "react-native"
import { width } from "."
import { blue, gray } from "./colors"

export const globalStyles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        fontSize: 18
    },
    buttonSt: {
        width: '80%',
        height: '10%',
        alignSelf: 'center',
        backgroundColor: 'gold',
        borderRadius: 15,
        marginVertical: 10
    },


    avatarStyle: {
          width: width*0.16,
          height: width*0.16,
          borderRadius: 10,
    },
    H1: {
        fontFamily: 'Manrope-Regular',
        fontSize: 28,
        color: '#000000'
    },
    H1B: {
        fontFamily: 'Manrope-Regular',
        fontWeight: '700',
        fontSize: 28,
        color: '#000000'
    },
    H2: {
        fontFamily: 'Manrope-SemiBold',
        fontSize: 24,
        color: '#000000'
    },
    H3: {
        fontFamily: 'Manrope-SemiBold',
        fontSize: 18,
        color: '#000000'
    },
    H4: {
        fontFamily: 'Manrope-SemiBold',
        fontSize: 14,
        color: '#000000'
    },
    H5: {
        fontFamily: 'Manrope-SemiBold',
        fontSize: 12,
        color: '#000000'
    },
    Links: {
        fontFamily: 'Manrope-Medium',
        fontSize: 14,
        color: blue,
    },
    Captures: {
        fontFamily: 'Manrope-Medium',
        fontSize: 12,
        color: gray,
    },
    text: {
        fontFamily: 'Manrope-Regular',
        fontSize: 14,
        color: '#000000'
    },
    smallText: {
        fontFamily: 'Manrope-Regular',
        fontSize: 12,
        color: '#000000'
    }
})