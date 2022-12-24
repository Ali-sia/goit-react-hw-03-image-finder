import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import { ImageList } from './ImageGallery.styled';

const ImageGallery = () => {
  return (
    <ImageList>
      <ImageGalleryItem />
      <ImageGalleryItem />
      <ImageGalleryItem />
      <ImageGalleryItem />
      <ImageGalleryItem />
    </ImageList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {};
