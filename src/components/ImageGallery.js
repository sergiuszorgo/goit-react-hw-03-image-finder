import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map((img) => (
        <ImageGalleryItem key={img.id} img={img} toggleModal={toggleModal} />
      ))}
    </ul>
  );
};

export default ImageGallery;
