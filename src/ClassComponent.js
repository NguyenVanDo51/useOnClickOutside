import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({ isModalOpen: false });
    }
  };

  setModalOpen = (isOpen = false) => {
    this.setState({ isModalOpen: isOpen });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="container">
        <div className="modal">
          {isModalOpen ? (
            <div ref={this.ref}>👋 Click bên ngoài để đóng modal</div>
          ) : (
            <button onClick={() => this.setModalOpen(true)}>Mở Modal</button>
          )}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
