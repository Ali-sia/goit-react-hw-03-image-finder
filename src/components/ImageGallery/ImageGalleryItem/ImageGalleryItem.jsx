// import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  id,
  openModal,
  webformatURL,
  tags,
  largeimageURL,
}) => {
  return (
    <GalleryItem id={id} onClick={openModal}>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        largeimageurl={largeimageURL}
      />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {};
