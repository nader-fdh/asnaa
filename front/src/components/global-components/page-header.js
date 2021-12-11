import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {
  render() {
    let HeaderTitle = this.props.headertitle;
    let publicUrl = process.env.PUBLIC_URL + '/';
    const inlineStyle = {
      backgroundImage: 'url(' + publicUrl + 'assets/img/page-title-bg.png)',
    };
    return (
      <div>
        <div className="breadcrumb-area" style={inlineStyle}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner">
                  <h1 className="page-title">{HeaderTitle}</h1>
                  <ul className="page-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>{HeaderTitle}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page_header;
