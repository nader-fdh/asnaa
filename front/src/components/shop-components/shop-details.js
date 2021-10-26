import React, { useState, useEffect } from 'react';
import sectiondata from '../../data/product.json';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/productAction';
import Navbar from '../global-components/navbar';
import Footer_V2 from '../global-components/footer-v2';
import '../../assets/css/style.scss';
import Popup from './popup';
import './popupStyle.css';

const ShopDetails = ({ match }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);
  console.log('test test', product);
  const id = match.params.id;
  useEffect(() => {
    dispatch(getSingleProduct(id));
    // getImages();
  }, [dispatch]);
  let publicUrl = '';
  const images = product.file;
  if (product.file !== undefined) {
    console.log('-------------', images.length);
    images.map(el => {
      const img = el;

      console.log('-*-*-*--*-*-*--**-*-', img);
    });
  }
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      {isOpen && <Popup handleClose={togglePopup} />}

      <div>
        <div className="single-product-area pd-top-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="product-thumbnail-wrapper">
                  <div className="row custom-gutters-16">
                    <div className="col-3">
                      <div className="product-thumbnail-carousel">
                        <div className="single-thumbnail-item">
                          <img src={product.image} alt="shop" />
                        </div>
                        <div className="single-thumbnail-item">
                          <img src={product.file} alt="shop" />
                        </div>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="single-thumbnail-slider">
                        <div className="slider-item">
                          <img src={product.image} alt="shop" />
                        </div>
                        <div className="slider-item">
                          <img src={product.file} alt="shop" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="product-description">
                  <span className="customer-review">
                    <i className="fa fa-star" />
                    4.8 <span>(10 Customer review)</span>
                  </span>
                  <h4 className="title">{product.name}</h4>
                  <div className="price">
                    <span>Prix: {product.prix} TND </span>
                    <del> </del>
                  </div>
                  <p className="content">{product.description}</p>

                  <div className="row">
                    <div className="col-sm-6 col-7">
                      <Link className="btn btn-green" to={`/checkout/${product._id}`}>
                        Proceed to Checkout
                      </Link>
                    </div>
                    <button className="btn btn-gray ml-xl-5 ml-sm-4 cart-btn" type="button" onClick={togglePopup} id="cart-btn">
                      Add to sssssssscart <i className="fa fa-shopping-cart" />
                    </button>
                  </div>
                  <div className="category">
                    <span>Category: </span>
                    <a href="#"> {product.category} </a>
                  </div>
                  <div className="tags">
                    <span>Tag: </span>
                    <a href="#">Watch,</a>
                    <a href="#">Smart Watch,</a>
                    <a href="#">Time</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="product-information">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="descr-tab"
                        data-toggle="tab"
                        href="#descr"
                        role="tab"
                        aria-controls="descr"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="reviews-tab"
                        data-toggle="tab"
                        href="#reviews"
                        role="tab"
                        aria-controls="reviews"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="descr" role="tabpanel" aria-labelledby="descr-tab">
                      <div className="row">
                        <div className="col-lg-11">
                          <div className="description-tab-content">
                            <p>
                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                              some form, by injected humour, or randomised words which don't look even slightly believable. There are many
                              variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                            </p>
                            <p className="mb-0">
                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                              some form, by injected humour, or randomised words which don't look even slightly believable. There are many
                              variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                              injected humour, or randomised words which don't look even slightly believable.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                      <div className="row">
                        <div className="col-lg-10">
                          <div className="review-area">
                            <h6 className="review-title">Reviews (32)</h6>
                            <div className="single-review">
                              <div className="media">
                                <img className="media-left" src={publicUrl + 'assets/img/blog/comments/1.png'} alt="img" />
                                <div className="media-body">
                                  <span>Jabel Ali</span>
                                  <p>CEO</p>
                                </div>
                              </div>
                              <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                                some form, by injected humour, or randomised words which don't look even slightly believable. There are many
                                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                                injected humour, or randomised words which don't look even slightly believable.
                              </p>
                            </div>
                          </div>
                          <div className="review-area">
                            <div className="single-review">
                              <div className="media">
                                <img className="media-left" src={publicUrl + 'assets/img/blog/comments/1.png'} alt="img" />
                                <div className="media-body">
                                  <span>Jabel Ali</span>
                                  <p>CEO</p>
                                </div>
                              </div>
                              <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                                some form, by injected humour, or randomised words which don't look even slightly believable. There are many
                                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                                injected humour, or randomised words which don't look even slightly believable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 className="review-title">Your Reviews</h6>
                      <form className="riyaqas-form-wrap">
                        <div className="row custom-gutters-16">
                          <div className="col-md-6">
                            <div className="single-input-wrap">
                              <textarea className="single-input textarea" cols={20} defaultValue={''} />
                              <label className="single-input-label">Review</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="single-input-wrap">
                              <input type="text" className="single-input" />
                              <label>Name</label>
                            </div>
                            <div className="single-input-wrap">
                              <input type="text" className="single-input" />
                              <label>E-mail</label>
                            </div>
                          </div>
                          <div className="col-12 text-right">
                            <a className="btn btn-green" href="#">
                              Submit
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_V2 />
    </div>

    // ----------------------------------------------------------------------------------------------------
    // <div style={{ backgroundColor: 'white' }}>
    //   {isOpen && (
    //     <Popup
    //       content={
    //         <>
    //           <h3>aaaaaaaaaaaaaaaaaaa</h3>
    //           <h3>aaaaaaaaaaaaaaaaaaa</h3>
    //           <h3>aaaaaaaaaaaaaaaaaaa</h3>
    //           <h3>aaaaaaaaaaaaaaaaaaa</h3>
    //           <h3>aaaaaaaaaaaaaaaaaaa</h3>
    //         </>
    //       }
    //       handleClose={togglePopup}
    //     />
    //   )}

    //   <div>
    //     <div className="single-product-area pd-top-120">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-7">
    //             <div className="product-thumbnail-wrapper">
    //               <div className="row custom-gutters-16">
    //                 <div className="col-3">
    //                   <div className="product-thumbnail-carousel">
    //                     <div className="single-thumbnail-item">
    //                       <img src={publicUrl + 'assets/img/shop-details/01.png'} alt="shop" />
    //                     </div>
    //                     <div className="single-thumbnail-item">
    //                       <img src={publicUrl + 'assets/img/shop-details/02.png'} alt="shop" />
    //                     </div>
    //                     <div className="single-thumbnail-item">
    //                       <img src={publicUrl + 'assets/img/shop-details/03.png'} alt="shop" />
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-9">
    //                   <div className="single-thumbnail-slider">
    //                     <div className="slider-item">
    //                       <img src={publicUrl + 'assets/img/shop-details/1.png'} alt="shop" />
    //                     </div>
    //                     <div className="slider-item">
    //                       <img src={publicUrl + 'assets/img/shop-details/2.png'} alt="shop" />
    //                     </div>
    //                     <div className="slider-item">
    //                       <img src={publicUrl + 'assets/img/shop-details/3.png'} alt="shop" />
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-5">
    //             <div className="product-description">
    //               <span className="customer-review">
    //                 <i className="fa fa-star" />
    //                 4.8 <span>(10 Customer review)</span>
    //               </span>
    //               <h4 className="title">Stylish Watch Red color</h4>
    //               <div className="price">
    //                 <span>$160.00</span>
    //                 <del>$190.00</del>
    //               </div>
    //               <p className="content">
    //                 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
    //               </p>
    //               <div className="quantity-wrap">
    //                 <div className="quantity float-left">
    //                   <input type="number" step={1} min={0} max={100} defaultValue={1} title="Qty" className="input-text qty text" />
    //                 </div>
    //                 <input type="button" value="Click to Open Popup" onClick={togglePopup} />
    //                 <button className="btn btn-gray ml-xl-5 ml-sm-4 cart-btn" type="button" id="cart-btn">
    //                   Add to sssssssscart <i className="fa fa-shopping-cart" />
    //                 </button>
    //               </div>
    //               <span className="d-block check-box-area">
    //                 <input id="1checkbox" type="checkbox" />
    //                 <label htmlFor="1checkbox">I Agree with the terms and conditions</label>
    //               </span>
    //               <div className="row">
    //                 <div className="col-sm-6 col-7">
    //                   <button className="w-100 btn btn-gray" type="button">
    //                     Buy it now
    //                   </button>
    //                 </div>
    //               </div>
    //               <div className="category">
    //                 <span>Category: </span>
    //                 <a href="#">Watch</a>
    //               </div>
    //               <div className="tags">
    //                 <span>Tag: </span>
    //                 <a href="#">Watch,</a>
    //                 <a href="#">Smart Watch,</a>
    //                 <a href="#">Time</a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-12">
    //             <div className="product-information">
    //               <ul className="nav nav-tabs" id="myTab" role="tablist">
    //                 <li className="nav-item">
    //                   <a
    //                     className="nav-link active"
    //                     id="descr-tab"
    //                     // data-toggle="tab"
    //                     href="#descr"
    //                     role="tab"
    //                     aria-controls="descr"
    //                     aria-selected="true"
    //                   >
    //                     Description
    //                   </a>
    //                 </li>
    //                 <li className="nav-item">
    //                   <a
    //                     className="nav-link"
    //                     id="reviews-tab"
    //                     // data-toggle="tab"
    //                     href="#reviews"
    //                     role="tab"
    //                     aria-controls="reviews"
    //                     aria-selected="false"
    //                   >
    //                     Reviews
    //                   </a>
    //                 </li>
    //               </ul>
    //               <div className="tab-content" id="myTabContent">
    //                 <div className="tab-pane fade show active" id="descr" role="tabpanel" aria-labelledby="descr-tab">
    //                   <div className="row">
    //                     <div className="col-lg-11">
    //                       <div className="description-tab-content">
    //                         <p>
    //                           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
    //                           some form, by injected humour, or randomised words which don't look even slightly believable. There are many
    //                           variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
    //                         </p>
    //                         <p className="mb-0">
    //                           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
    //                           some form, by injected humour, or randomised words which don't look even slightly believable. There are many
    //                           variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
    //                           injected humour, or randomised words which don't look even slightly believable.
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
    //                   <div className="row">
    //                     <div className="col-lg-10">
    //                       <div className="review-area">
    //                         <h6 className="review-title">Reviews (32)</h6>
    //                         <div className="single-review">
    //                           <div className="media">
    //                             <img className="media-left" src={publicUrl + 'assets/img/blog/comments/1.png'} alt="img" />
    //                             <div className="media-body">
    //                               <span>Jabel Ali</span>
    //                               <p>CEO</p>
    //                             </div>
    //                           </div>
    //                           <p>
    //                             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
    //                             some form, by injected humour, or randomised words which don't look even slightly believable. There are many
    //                             variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
    //                             injected humour, or randomised words which don't look even slightly believable.
    //                           </p>
    //                         </div>
    //                       </div>
    //                       <div className="review-area">
    //                         <div className="single-review">
    //                           <div className="media">
    //                             <img className="media-left" src={publicUrl + 'assets/img/blog/comments/1.png'} alt="img" />
    //                             <div className="media-body">
    //                               <span>Jabel Ali</span>
    //                               <p>CEO</p>
    //                             </div>
    //                           </div>
    //                           <p>
    //                             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
    //                             some form, by injected humour, or randomised words which don't look even slightly believable. There are many
    //                             variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
    //                             injected humour, or randomised words which don't look even slightly believable.
    //                           </p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <h6 className="review-title">Your Reviews</h6>
    //                   <form className="riyaqas-form-wrap">
    //                     <div className="row custom-gutters-16">
    //                       <div className="col-md-6">
    //                         <div className="single-input-wrap">
    //                           <textarea className="single-input textarea" cols={20} defaultValue={''} />
    //                           <label className="single-input-label">Review</label>
    //                         </div>
    //                       </div>
    //                       <div className="col-md-6">
    //                         <div className="single-input-wrap">
    //                           <input type="text" className="single-input" />
    //                           <label>Name</label>
    //                         </div>
    //                         <div className="single-input-wrap">
    //                           <input type="text" className="single-input" />
    //                           <label>E-mail</label>
    //                         </div>
    //                       </div>
    //                       <div className="col-12 text-right">
    //                         <a className="btn btn-green" href="#">
    //                           Submit
    //                         </a>
    //                       </div>
    //                     </div>
    //                   </form>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="shop-page-area single-shop-related-product mg-top-105">
    //       <div className="container">
    //         <div className="section-title">
    //           <h2 className="title">Related Products</h2>
    //         </div>
    //         <div className="row custom-gutters-16">
    //           <div key="" className="col-lg-3 col-sm-6">
    //             <div className="single-shop">
    //               <div className="thumb">
    //                 <a className={'product-badge btn-blue '} href="#">
    //                   New
    //                 </a>
    //                 <img src="" alt="" />
    //                 <div className="cart-btn">
    //                   <div className="cart-btn-wrap">
    //                     <Link className="btn btn-red" to="/shop">
    //                       Add to card <i className="fa fa-shopping-cart" />
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="content">
    //                 <div className="rating">
    //                   <i className="fa fa-star" />
    //                   <i className="fa fa-star" />
    //                   <i className="fa fa-star" />
    //                   <i className="fa fa-star" />
    //                   <i className="fa fa-star" />
    //                 </div>
    //                 <Link to="/shop">sssssssssss</Link>
    //                 <div className="price">
    //                   <span>sssssssssssssss</span>
    //                   <del>ssssssssssssss</del>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ShopDetails;
