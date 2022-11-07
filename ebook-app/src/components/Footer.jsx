import React, { Component } from "react";
import { Footer } from "flowbite-react";

class Footers extends Component {
  render() {
    return (
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1"></div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Tourism" year={2022} />
          </div>
        </div>
      </Footer>
    );
  }
}

export default Footers;
