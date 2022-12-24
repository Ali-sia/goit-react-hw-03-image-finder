import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul>
      <ImageGalleryItem />
      <ImageGalleryItem />
      <ImageGalleryItem />
      <ImageGalleryItem />
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {};
