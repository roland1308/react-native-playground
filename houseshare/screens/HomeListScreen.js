import React from 'react';
import { FlatList } from 'react-native';
import HouseItem from '../components/HouseItem';
class HomeListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://www.akshatpaul.com/list-properties");
            const responseJson = await response.json();
            this.setState({
                dataSource: responseJson,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => <HouseItem {...item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

export default HomeListScreen