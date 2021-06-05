import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from '../Post/Post'
import Stories from '../Stories/Stories'

const posts = [
    {
        user: {
            imageUri: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-1/p100x100/37003572_2216304728601569_3916878185312026624_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BpAo-Cv8ie0AX-1846w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftun8-1.fna&tp=6&oh=0178dc6c0f890e4690d52668312bb300&oe=60E3254D',
            name: 'Mokhtar Ben Ahmed'
        }, 
        imageUri: 'https://z-p3-scontent.ftun7-1.fna.fbcdn.net/v/t1.15752-9/123138648_469028080728018_6021091115917634323_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=nsOCN2dnX0MAX_k6M9k&_nc_ht=z-p3-scontent.ftun7-1.fna&oh=13d4b06970fe3928dd2915e71555cb35&oe=60CF0263',
        caption: 'Mahmoud Darouich',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-1/p100x100/37003572_2216304728601569_3916878185312026624_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BpAo-Cv8ie0AX-1846w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftun8-1.fna&tp=6&oh=0178dc6c0f890e4690d52668312bb300&oe=60E3254D',
            name: 'Mokhtar Ben Ahmed'
        }, 
        imageUri: 'https://z-p3-scontent.ftun7-1.fna.fbcdn.net/v/t1.15752-9/123138648_469028080728018_6021091115917634323_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=nsOCN2dnX0MAX_k6M9k&_nc_ht=z-p3-scontent.ftun7-1.fna&oh=13d4b06970fe3928dd2915e71555cb35&oe=60CF0263',
        caption: 'Mahmoud Darouich',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-1/p100x100/37003572_2216304728601569_3916878185312026624_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BpAo-Cv8ie0AX-1846w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftun8-1.fna&tp=6&oh=0178dc6c0f890e4690d52668312bb300&oe=60E3254D',
            name: 'Mokhtar Ben Ahmed'
        }, 
        imageUri: 'https://z-p3-scontent.ftun7-1.fna.fbcdn.net/v/t1.15752-9/123138648_469028080728018_6021091115917634323_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=nsOCN2dnX0MAX_k6M9k&_nc_ht=z-p3-scontent.ftun7-1.fna&oh=13d4b06970fe3928dd2915e71555cb35&oe=60CF0263',
        caption: 'Mahmoud Darouich',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri: 'https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-1/p100x100/37003572_2216304728601569_3916878185312026624_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BpAo-Cv8ie0AX-1846w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftun8-1.fna&tp=6&oh=0178dc6c0f890e4690d52668312bb300&oe=60E3254D',
            name: 'Mokhtar Ben Ahmed'
        }, 
        imageUri: 'https://z-p3-scontent.ftun7-1.fna.fbcdn.net/v/t1.15752-9/123138648_469028080728018_6021091115917634323_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=nsOCN2dnX0MAX_k6M9k&_nc_ht=z-p3-scontent.ftun7-1.fna&oh=13d4b06970fe3928dd2915e71555cb35&oe=60CF0263',
        caption: 'Mahmoud Darouich',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageUri: 'https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/37003572_2216304728601569_3916878185312026624_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=J83dspZyZ-YAX_SwTDx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=5240cd1697edb6ce19c625cd6226d2a2&oe=60ABC64D',
            name: 'Mokhtar Ben Ahmed'
        }, 
        imageUri: 'https://z-p3-scontent.ftun7-1.fna.fbcdn.net/v/t1.15752-9/123138648_469028080728018_6021091115917634323_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=nsOCN2dnX0MAX_k6M9k&_nc_ht=z-p3-scontent.ftun7-1.fna&oh=13d4b06970fe3928dd2915e71555cb35&oe=60CF0263',
        caption: 'Mahmoud Darouich',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    },
]

export default function Feed() {
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                ListHeaderComponent={Stories}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
