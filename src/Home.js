import React, { Component } from "react";
import "./Home.css";
import "./Home.scss";
import { withRouter } from "react-router-dom";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import ModalVideo from "react-modal-video";

class Home extends Component {
  constructor() {
    super();
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  handleClick(path) {
    this.props.history.push("/problems");
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    return (
      <>
        <div className="bigger-wrapper">
          <section className="header">
            <div className="wrapper">
              <h1 className="gamma lato thin uppercase ls-xlarge">
                Welcome To
                <br />
                <span className="open-sans tera ls-xlarge bold threeD">
                  66 Code
                </span>
                <br />
                <span className="epsilon ls-medium">
                  Prepare Your Coding Interview
                </span>
              </h1>

              <button className="learn-more" onClick={this.open}>
                Learn More
              </button>
            </div>
            <Menu />
          </section>

          <React.Fragment>
            <ModalVideo
              channel="youtube"
              isOpen={this.state.open}
              videoId="B7xai5u_tnk"
              onClose={() => this.setState({ open: false })}
            />
          </React.Fragment>
        </div>

        <Footer />
      </>
    );
  }
}

export default withRouter(Home);
