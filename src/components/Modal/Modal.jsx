import PropTypes from 'prop-types';

import { Overlay, ModalContainer } from './Modal.styled';

const Modal = () => {
  return (
    <Overlay>
      <ModalContainer>
        <img src="#" alt="large picture" />
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

Modal.propTypes = {};
