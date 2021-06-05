import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePicture from '../ProfilePicture/ProfilePicture'

export default function Story({ imageUri, name }) {
    return (
        <View>
            <ProfilePicture uri={imageUri} />
            <Text style={styles.name}>{name.replace(" ", "\n")}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        textAlign: 'center'
    }
})
