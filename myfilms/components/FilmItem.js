import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import FadeInView from '../components/FadeInView';

const FilmItem = (props) => {
    const imgLink = props.backdrop_path ? "https://image.tmdb.org/t/p/w500/" + props.backdrop_path : "https://image.tmdb.org/t/p/w500/" + props.poster_path
    return (
        <FadeInView style={styles.container}>
            <Image style={styles.thumbnail} source={{ uri: imgLink }} />
            <Text style={styles.title}>{props.original_title}
            </Text>
            {props.release_date && <Text style={styles.release}>
                Data di uscita: {props.release_date.substr(8, 2)}-{props.release_date.substr(5, 2)}-{props.release_date.substr(0, 4)}
            </Text>}
            <Text style={styles.overview}>{props.overview}</Text>
        </FadeInView>
    );
}
export default FilmItem

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderBottomWidth: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    thumbnail: {
        resizeMode: "contain",
        margin: 10,
        borderRadius: 10,
        height: 90,
    },
    overview: {
        margin: 15,
    },
    release: {
        textAlign: 'center',
        fontStyle: 'italic'
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    rightBox: {
        flex: 1,
    },
    name: {
        marginBottom: 8,
        textAlign: 'center',
    },
});