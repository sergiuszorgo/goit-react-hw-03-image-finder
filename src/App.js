import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import fetchImages from "./services/fetchImages";
import Loader from "./components/Loader";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    value: "",
    images: [],
    page: 1,
    button: true,
    loadSpin: false,
    modal: false,
    largeImage: {},
  };
  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  // подгрузка изображений из формы
  onFormSubmit = (value) => {
    if (value) {
      this.setState({ loadSpin: true });
      fetchImages(value, 1)
        .then(({ data }) => data.hits)
        .then((data) =>
          this.setState({
            images: data,
            value: value,
            page: 2,
            loadSpin: false,
          })
        )
        .catch((error) => console.error({ error }));
    } else {
      alert("Нет данных");
    }
  };
  // подгрузка изображений по кнопке
  loadMore = () => {
    const { images, value, page } = this.state;
    this.setState({ loadSpin: true });
    fetchImages(value, page)
      .then(({ data }) => data.hits)
      .then((data) =>
        this.setState({
          images: [...images, ...data],
          loadSpin: false,
          button: data.length,
        })
      );
    this.setState((state) => {
      return { page: page + 1 };
    });
  };
  // ВКЛ-ВЫКЛ Модалки
  toggleModal = (img) => {
    const { modal } = this.state;
    img
      ? this.setState({ modal: !modal, largeImage: img })
      : this.setState({ modal: !modal });
  };

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageGallery
          images={this.state.images}
          toggleModal={this.toggleModal}
        />
        {this.state.images.length !== 0 && this.state.button && (
          <Button loadMore={this.loadMore} />
        )}
        {this.state.loadSpin && <Loader />}
        {this.state.modal && (
          <Modal
            toggleModal={this.toggleModal}
            largeImage={this.state.largeImage}
          />
        )}
      </div>
    );
  }
}

export default App;
