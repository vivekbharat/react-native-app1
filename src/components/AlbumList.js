import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import axios from "axios";

import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({ albums: res.data }));
  }

  renderAlbums = () => {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  };

  render() {
    return (
      <ScrollView>
        <Text />
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
