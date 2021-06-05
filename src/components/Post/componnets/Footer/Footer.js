import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ADIcon from 'react-native-vector-icons/AntDesign'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FAIcons from 'react-native-vector-icons/FontAwesome'



export default function Footer({ likesCount : likesCountProp, caption, postedAt }) {

    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const onLikedPressed = () => {
        setIsLiked(!isLiked);

        const amount = isLiked ? 1 : -1;
        setLikesCount(likesCount + amount);
    }

    useEffect(() => {
        setLikesCount(likesCountProp);
    }, [])

    return (
        <View style={styles.conainer}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikedPressed}>
                        {
                            isLiked ?
                                <ADIcon name="heart" size={24} color={"#c30000"}/> :
                                <ADIcon name="hearto" size={24} color={"#545454"}/>
                        }
                    </TouchableWithoutFeedback>
                    <FontistoIcon name="comment" size={24} color={"#545454"}/>
                    <IonIcons name="paper-plane-outline" size={24} color={"#545454"}/>
                </View>
                <FAIcons name="bookmark-o" size={24} color={"#545454"}/>
            </View>
            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conainer: {
        margin: 5
    },
    iconsContainer: {
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: "space-between"
    },
    leftIcons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 100
    },
    likes: {
        fontWeight: "bold",
        margin: 3
    },
    caption: {
        margin: 3
    },
    postedAt: {
        color: "#8c8c8c",
        margin: 3
    }
})
