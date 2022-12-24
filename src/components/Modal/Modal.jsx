import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <img src="#" alt="large picture" loading="lazy" />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

// const Modal = () => {
// return (
//   <Overlay>
//     <ModalContainer>
//       {/* <img src="#" alt="large picture" /> */}
//       {this.props.children}
//     </ModalContainer>
//   </Overlay>
// );
// };

// export default Modal;

// Modal.propTypes = {};
