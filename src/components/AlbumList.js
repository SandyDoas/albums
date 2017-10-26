import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';


class ALbumList extends Component {
    state = { albums: [] }; // default or initial component state
    componentWillMount() {
        console.log('Component will mount');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }
    renderAlbums() {
        return this.state.albums.map(album =>
             <AlbumDetails key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default ALbumList;
