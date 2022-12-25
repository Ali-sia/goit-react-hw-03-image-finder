import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  SearcHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
  };

  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({
      searchQuery: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return alert('enter query');
    }
    this.props.onSearch(this.state.searchQuery);

    this.setState({ searchQuery: '' });
    e.target.searchQuery.value = '';
  };

  render() {
    return (
      <SearcHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <SearchInput
            type="text"
            name="searchQuery"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearcHeader>
    );
  }
}
