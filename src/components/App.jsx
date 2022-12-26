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
import fetchPhotosAPI from '../services/photos-api';

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
    photos: [],
    totalPages: 0,
    searchQuery: '',
    showModal: false,
    error: null,
    status: 'idle',
    page: 1,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });
      fetchPhotosAPI(nextQuery, this.state.page)
        .then(({ hits, totalHits }) => {
          if (totalHits === 0) {
            return Promise.reject(
              new Error(`Cant find anithing by your query ${nextQuery}`)
            );
          }
          this.setState(prevState => ({
            page: 1,
            photos: hits,
            status: 'resolved',
            totalPages: totalHits,
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      fetchPhotosAPI(nextQuery, this.state.page)
        .then(({ hits, totalHits }) => {
          if (totalHits === 0) {
            return Promise.reject(
              new Error(`Cant find anithing by your query ${nextQuery}`)
            );
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...hits],
            status: 'resolved',
            totalPages: totalHits,
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  onOpenModal = (url, tags) => {
    this.setState({ largeImageURL: url, tags });

    this.toggleModal();
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log('this.state.page :>> ', this.state.page);
  };

  render() {
    const {
      showModal,
      photos,
      totalPages,
      error,
      status,
      largeImageURL,
      tags,
    } = this.state;

    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
        <Searchbar onSearch={this.handleFormSubmit} />

        {status === 'rejected' && (
          <PendingErrorMessage message={error.message} />
        )}
        {status === 'pending' && <Loader />}
        {status === 'idle' && <div>enter your photo query</div>}
        {status === 'resolved' && (
          <ImageGallery photos={photos} onOpenModal={this.onOpenModal} />
        )}

        {status === 'resolved' &&
          photos.length > 0 &&
          photos.length < totalPages && <Button onLoadMore={this.onLoadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageURL} alt={tags} />
        )}
        <GlobalStyle />
      </Box>
    );
  }
}
