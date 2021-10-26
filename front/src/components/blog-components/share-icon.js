import React, { Component } from 'react';

class Shareicons extends Component {
  render() {
    let anchor = '#'
    return (
      <div>
      <h2 className="mb-3 sb-inner-title d-sm-inline-block">Share the Post : </h2>
      <ul className="social-icon d-sm-inline-block">
          <li>
              <a className="facebook" href={anchor} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
          </li>
          <li>
              <a className="twitter" href={anchor} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
          </li>
          <li>
              <a className="linkedin" href={anchor} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          </li>
          <li>
              <a className="pinterest" href={anchor} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
          </li>
      </ul>
      </div>
    );
  }
}

export default Shareicons;
