import Modal from 'react-modal';

import css from './ImageModal.module.css'
import { ImageData } from "../../api";


interface ImageModalProps {
  image: ImageData;
  onClose: () => void;
}

Modal.setAppElement("#root");


const ImageModal: React.FC <ImageModalProps> = ({ image, onClose }) => {
  return (
    <div>
      <Modal overlayClassName={css.overlay} isOpen={true} onRequestClose={onClose} className={css.modalWindow}>
        <button  onClick={onClose} className={css.modalBtn}>X</button>
        <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage} width={600} height={500} />
        <p>{image.description}</p>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>      
      </Modal>
    </div>
  );
};

export default ImageModal;
