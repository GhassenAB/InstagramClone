import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './componnets/Header/Header'
import Body from './componnets/Body/Body'
import Footer from './componnets/Footer/Footer'

export default function Post({post}) {
    return (
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name} />
            <Body uri={post.imageUri}/>
            <Footer
                likesCount={post.likesCount}
                caption={post.caption}
                postedAt={post.postedAt}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
