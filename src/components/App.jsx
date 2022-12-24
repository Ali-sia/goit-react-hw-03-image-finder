import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Title } from './App.styled';

export class App extends Component {
  static propTypes = {
    // contacts: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     id: PropTypes.string.isRequired,
    //     name: PropTypes.string.isRequired,
    //     number: PropTypes.string.isRequired,
    //   })
    // ),
    // filter: PropTypes.string,
  };

  state = {
    // contacts: [],
    // filter: '',
  };

  componentDidMount() {
    // const parsedCcontacts = JSON.parse(localStorage.getItem('contacts'));
    // if (parsedCcontacts) {
    //   this.setState({ contacts: parsedCcontacts });
    // }
  }

  componentDidUpdate(_, prevState) {
    // if (this.state.contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // }
  }

  render() {
    return (
      <Box pr={4} pl={4} color="text" width="400px">
        <Title>Add contact</Title>

        <GlobalStyle />
      </Box>
    );
  }
}

// Створи компоненти
