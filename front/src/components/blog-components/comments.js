import React, { Component } from 'react';

class Comments extends Component {
  render() {
   let anchor = '#'
   let imgattr = '#'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
      <div>
      <div className="comments-area">
         <h3 className="comments-title">Comments <span>(10)</span></h3>
         <ul className="comment-list mg-bottom-0-991">
            <li>
               <div className="single-comment-wrap">
                     <div className="thumb">
                        <img src={publicUrl+ 'assets/img/blog/comments/1.png'} alt={imgattr} />
                     </div>
                     <div className="content">
                        <h4 className="title">Charles</h4>
                        <span className="date">17 SEP 2019</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <a href={anchor} className="reply">Reply</a>
                     </div>
               </div>
            </li>
            <li>
               <div className="single-comment-wrap">
                     <div className="thumb">
                        <img src={publicUrl+ 'assets/img/blog/comments/2.png'} alt={imgattr} />
                     </div>
                     <div className="content">
                        <h4 className="title">Laurie</h4>
                        <span className="date">17 SEP 2019</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <a href={anchor} className="reply">Reply</a>
                     </div>
               </div>
            </li>
            <li>
               <div className="single-comment-wrap">
                     <div className="thumb">
                        <img src={publicUrl+ 'assets/img/blog/comments/3.png'} alt={imgattr} />
                     </div>
                     <div className="content">
                        <h4 className="title">David V</h4>
                        <span className="date">17 SEP 2019</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        <a href={anchor} className="reply">Reply</a>
                     </div>
               </div>
            </li>
         </ul>
      </div>
      <div className="comment-form-area mg-top-80">
         <form action={anchor} className="riyaqas-form-wrap">
            <div className="row custom-gutters-16">
               <div className="col-md-6">
                     <div className="single-input-wrap">
                        <input type="text" className="single-input"/>
                        <label>Name</label>
                     </div>
               </div>
               <div className="col-md-6">
                     <div className="single-input-wrap">
                        <input type="text" className="single-input"/>
                        <label>E-mail</label>
                     </div>
               </div>
               <div className="col-md-12">
                     <div className="single-input-wrap">
                        <textarea className="single-input textarea" cols="20"></textarea>
                        <label className="single-input-label">Message</label>
                     </div>
               </div>
               <div className="col-12">
                     <div className="single-input-wrap input-checkbox">
                        <input type="checkbox"/>
                        <span className="input-checkbox-text">I agree that my submitted data is being <span>collected and stored</span></span>
                     </div>
               </div>
               <div className="col-12">
                     <a className="btn btn-red mt-0" href={anchor}>Leave A Comment</a>
               </div> 
            </div>
         </form>
      </div>
      </div>
    )
  }
}

export default Comments;
