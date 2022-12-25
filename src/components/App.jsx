import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import Searchbar from './Seachbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import PendingErrorMessage from './PendingErrorMessage';

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
    // loading: false,
    showModal: false,
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidMount() {
    // this.setState({ loading: true });
    // fetch(
    //   `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then(response => response.json())
    //   .then(photos => this.setState({ photos }))
    //   .finally(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          // return Promise.reject(
          //   new Error(`Cant find anithing by your query ${nextQuery}`)
          // );
        })
        .then(photos => {
          this.setState({ photos, status: 'resolved' });
          if (photos.total === 0) {
            return Promise.reject(
              new Error(`Cant find anithing by your query ${nextQuery}`)
            );
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(() => this.setState({ loading: false }));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  openModal = () => {
    console.log('open big img');
  };

  render() {
    const { showModal, photos, error, status } = this.state;
    const { largeimageURL, tags } = photos.hits;

    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
        <Searchbar onSearch={this.handleFormSubmit} />

        {status === 'rejected' && (
          <PendingErrorMessage message={error.message} />
        )}
        {status === 'pending' && <Loader />}
        {status === 'idle' && <div>enter your photo query</div>}
        {status === 'resolved' && (
          <>
            <ImageGallery photos={photos} openModal={this.openModal} />
            <Button />
          </>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} src={largeimageURL} alt={tags} />
        )}
        <GlobalStyle />
      </Box>
    );
  }
}
