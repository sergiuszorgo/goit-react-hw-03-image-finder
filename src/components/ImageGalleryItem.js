const ImageGalleryItem = ({ img, toggleModal }) => {
  const { webformatURL, tags } = img;
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => toggleModal(img)}
      />
    </li>
  );
};

export default ImageGalleryItem;
