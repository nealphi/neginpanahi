import React, { useState } from 'react';
import Modal from 'react-modal';
import CoinFlip from './CoinFlip';

Modal.setAppElement('#root'); // Set the app root element for accessibility

const CoinFlipModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className='coinflipmodal'>
      <button onClick={openModal}>Open Coin Flip Modal</button>
      <Modal className={'modal'} isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close</button>
        <CoinFlip />
      </Modal>
    </div>
  );
};

export default CoinFlipModal;
