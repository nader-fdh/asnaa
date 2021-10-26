import React, { Component } from 'react';

class Pagination extends Component {
  render() {
   let anchor = '#'
    return (
      <div>
         <div className="riyaqas-pagination margin-top-60">
            <ul>
                  <li><a className="prev page-numbers" href={anchor}><i className="ti-angle-left"></i></a></li>
                  <li><span className="page-numbers">1</span></li>
                  <li><span className="page-numbers current">2</span></li>
                  <li><a className="page-numbers" href={anchor}>3</a></li>
                  <li><a className="page-numbers" href={anchor}>4</a></li>
                  <li><a className="next page-numbers" href={anchor}><i className="ti-angle-right"></i></a></li>
            </ul>                          
         </div>
      </div>
    )
  }
}

export default Pagination;
