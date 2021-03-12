import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import fetchImages from "./services/fetchImages";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    value: "",
    images: [],
    page: 1,
    button: true,
    loadSpin: false,
    modal: false,
    modalImage: {},
  };

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

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        {this.state.loadSpin && <Loader />}
      </div>
    );
  }
}

export default App;
