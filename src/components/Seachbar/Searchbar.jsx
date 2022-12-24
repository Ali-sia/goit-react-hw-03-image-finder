import PropTypes from 'prop-types';
import {
  SearcHeader,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

const Searchbar = () => {
  return (
    <SearcHeader>
      <SearchForm>
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>

        <SearchInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearcHeader>
  );
};

export default Searchbar;

Searchbar.propTypes = {};
