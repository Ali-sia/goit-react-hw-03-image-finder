// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import { ImageList } from './ImageGallery.styled';

// export default class ImageGallery extends Component {
//   state = {};

//   // componentDidUpdate(prevProps, prevState) {
//   //   const prevQuery = prevProps.query;
//   //   console.log('🐉 ~ App ~ componentDidUpdate ~ prevQuery', prevQuery);
//   //   const nextQuery = this.props.query;
//   //   console.log('🐉 ~ App ~ componentDidUpdate ~ nextQuery', nextQuery);

//   //   if (prevQuery !== nextQuery) {
//   //     console.log('запрос поменялся');
//   //   }
//   // }

//   render() {
//     const { photos } = this.props;
//     const photoResponse = photos.hits;
//     return (
//       <ImageList>
//         {photoResponse.map(photo => (
//           <ImageGalleryItem photo={photo} />
//         ))}
//       </ImageList>
//     );
//   }
// }

const ImageGallery = ({ photos, openModal }) => {
  // const photoResponse = photos.hits;
  return (
    <ImageList>
      {photos.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          openModal={openModal}
        />
      ))}
    </ImageList>
  );
};

export default ImageGallery;

// ImageGallery.propTypes = {};
