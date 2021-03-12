import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className="ImageGallery">
      {images.map((img) => (
        <ImageGalleryItem key={img.id} img={img} />
      ))}
    </ul>
  );
};

export default ImageGallery;
