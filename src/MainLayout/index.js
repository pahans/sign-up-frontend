import React, { Component } from 'react';
import Link from 'react-router';

class MainLayout extends Component {
  render() {
    const { children }  = this.props;
    return (
      <div className="wrapper">
        main
        { children }
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: React.PropTypes.node,
};
export default MainLayout;
