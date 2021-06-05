import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Story from '../Story/Story'

const data = [
    {
        imageUri: 'https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-1/c29.0.100.100a/p100x100/185778797_325772208961386_3882116359879855565_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=1otnPKk8GwUAX9ZQINV&_nc_ad=z-m&_nc_cid=1666&_nc_ht=scontent.ftun7-1.fna&tp=27&oh=e04664be475532662663f90359aef402&oe=60C67B2F',
        name: 'سرين حمودة'
    },
    {
        imageUri: 'https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-1/p100x100/182863130_1882545818574360_8459926489308573443_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=OR-LKE6JiIwAX-MI3-S&_nc_ad=z-m&_nc_cid=1666&_nc_ht=scontent.ftun7-1.fna&tp=6&oh=4b29186d9fe36249dabed828dee5b3c6&oe=60C7553E',
        name: 'Kouja'
    },
    {
        imageUri: 'https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-1/p100x100/160615077_3178330235826459_2704305965300882236_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=wcJg1lWbvTQAX98PuPC&_nc_ad=z-m&_nc_cid=1666&_nc_ht=scontent.ftun7-1.fna&tp=6&oh=2ec866274598c320749bc69fd18fa6d7&oe=60C93D45',
        name: 'Roua Gmïza'
    },
    {
        imageUri: 'https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-1/p100x100/123058971_1822801101207909_5798569627713507706_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=VJg7tkxnhNwAX9qpjnA&_nc_ad=z-m&_nc_cid=1666&_nc_ht=scontent.ftun7-1.fna&tp=6&oh=75de86ac80e8011439c80d5e9eac73e6&oe=60CFF543',
        name: 'Nesrine Essaies'
    },
    {
        imageUri: 'https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-1/c329.547.882.882a/s100x100/184840815_4093265527386080_5738650000505315550_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=7206a8&_nc_ohc=mdAT953sMnkAX9YLjmr&_nc_ad=z-m&_nc_cid=1666&_nc_ht=scontent.ftun7-1.fna&tp=28&oh=58ff557c8e099e4b96019c2bfee2fe5b&oe=60CED6A6',
        name: 'Ben Hassine Khairi'
    },
    {
        imageUri: 'https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-1/p100x100/117589125_10213731537202927_2730784939726146995_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=xmoW2cW_wecAX9Nb4Dx&_nc_ad=z-m&_nc_cid=1666&_nc_ht=scontent.ftun7-1.fna&tp=6&oh=52d94cee7dc1df59a8e97aab15fc3cec&oe=60D0473E',
        name: 'Smix'
    },
    {
        imageUri: 'https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/37003572_2216304728601569_3916878185312026624_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=J83dspZyZ-YAX_SwTDx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=5240cd1697edb6ce19c625cd6226d2a2&oe=60ABC64D',
        name: 'Mokhtar Ben Ahmed'
    },
]

export default function Stories() {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={({ name }) => name}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom:15,
    }
})
