import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';

import Searchbar from './Seachbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

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
    // contacts: [],
    // filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // componentDidMount() {
  //   // const parsedCcontacts = JSON.parse(localStorage.getItem('contacts'));
  //   // if (parsedCcontacts) {
  //   //   this.setState({ contacts: parsedCcontacts });
  //   // }
  // }

  // componentDidUpdate(_, prevState) {
  //   // if (this.state.contacts !== prevState.contacts) {
  //   //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   // }
  // }

  render() {
    const { showModal } = this.state;
    return (
      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
        <button type="button" onClick={this.toggleModal}>
          open Modal
        </button>
        <Searchbar />

        <ImageGallery />

        <Button />

        {showModal && <Modal onClose={this.toggleModal} />}
        <GlobalStyle />
      </Box>
    );
  }
}
