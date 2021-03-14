import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  // нажатие ESC
  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.toggleModal();
    }
  };
  // клик по бекдропу
  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };
  render() {
    const { largeImage } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={largeImage.largeImageURL} alt={largeImage.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
