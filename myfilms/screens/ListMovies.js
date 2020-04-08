import React from 'react';
import { FlatList } from 'react-native';
import FilmItem from '../components/FilmItem';

const axios = require("axios");
const apiKey = process.env.REACT_APP_TMDB_API_KEY

class ListMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "9f6dd5e62da09313ec5a88f6c5cad285",
            films: [],
            language: "it-IT",
            sort_by: "popularity.desc",
            adult: false,
            video: false,
            page: 1
        }
    }

    componentDidMount() {
        console.log(this.state)
        this.getList()
    }

    changePage = (direction) => {
        let newPage = this.state.page + direction
        console.log(newPage)
        this.setState({
            page: newPage
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.page !== prevState.page) {
            this.getList();
        }
    }

    async getList() {
        try {
            let url =
                "https://api.themoviedb.org/3/discover/movie?api_key=" + this.state.apiKey +
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
        return (
            <FlatList
                data={this.state.films}
                renderItem={({ item }) => <FilmItem {...item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

export default ListMovies