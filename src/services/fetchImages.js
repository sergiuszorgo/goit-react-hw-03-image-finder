import axios from "axios";

const fetchImages = (value, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=19813353-ad59abac9068a994c96bcb173&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default fetchImages;
