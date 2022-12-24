import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import Searchbar from './Seachbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

const API_KEY = '13420675-ac3576debf8258c428cd202e5';

export class App extends Component {
  // static propTypes = {
  //   // contacts: PropTypes.arrayOf(
  //   //   PropTypes.shape({
  //   //     id: PropTypes.string.isRequired,
  //   //     name: PropTypes.string.isRequired,
  //   //     number: PropTypes.string.isRequired,
  //   //   })
  //   // ),
  //   // filter: PropTypes.string,
  // };

  state = {
    photos: null,
    searchQuery: '',
    loading: false,
    showModal: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(photos => this.setState({ photos }))
      .finally(() => this.setState({ loading: false }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  // componentDidUpdate(_, prevState) {
  //   // if (this.state.contacts !== prevState.contacts) {
  //   //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   // }
  // }

  render() {
    const { showModal } = this.state;
    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
        <Searchbar onSearch={this.handleFormSubmit} />

        {this.state.loading && <h2>...load...</h2>}
        {this.state.photos && (
          <div>photo cards: {this.state.photos.hits[0].tags}</div>
        )}

        {/* <ImageGallery /> */}

        {/* <Button /> */}

        {showModal && <Modal onClose={this.toggleModal} />}
        <GlobalStyle />
      </Box>
    );
  }
}
