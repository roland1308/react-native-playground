import React, { createRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FilmItem from '../components/FilmItem';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { REACT_APP_TMDB_API_KEY } from 'react-native-dotenv'

const axios = require("axios");

class ListMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flatList: createRef(),
            isReady: false,
            films: [],
            language: "it-IT",
            sort_by: "popularity.desc",
            adult: false,
            video: false,
            page: 1
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.getList()
        this.setState({ isReady: true });
    }

    changePage = (direction) => {
        let newPage = this.state.page + direction
        this.setState({
            page: newPage
        })
        this.state.flatList.current.scrollToIndex({ index: 0 })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.getList();
        }
    }

    async getList() {
        try {
            let url =
                "https://api.themoviedb.org/3/discover/movie?api_key=" + REACT_APP_TMDB_API_KEY +
                "&language=" + this.state.language +
                "&sort_by=" + this.state.sort_by +
                "&include_adult=" + this.state.adult +
                "&include_video=" + this.state.video +
                "&page=" + this.state.page +
                "&region=IT"
            const response = await axios.get(url);
            this.setState({
                films: response.data.results,
                total_pages: response.data.total_pages
            })
        } catch (error) {
            console.log(error);
        }
        return;
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        let statusPrev = this.state.page == 1 ? 0 : 1
        let statusNext = this.state.page < this.state.total_pages ? 1 : 0
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => { this.changePage(-statusPrev) }}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>
                            Pagina {this.state.page}
                        </Title>
                    </Body>
                    <Right>
                        <Button onPress={() => { this.changePage(+statusNext) }}>
                            <Icon name='ios-arrow-forward' />
                        </Button>
                    </Right>
                </Header>
                <Body>
                    <FlatList
                        ref={this.state.flatList}
                        data={this.state.films}
                        renderItem={({ item }) => <FilmItem {...item} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Body>
            </Container>
        );
    }
}

export default ListMovies

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold'
    }
});
