import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

export default function Body({ uri }) {
    console.log("Body "+uri)
    return (
        <View>
            <Image source={{uri}} style={ styles.image }/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width
    }
})
