import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import widgetdata from '../../data/widgetdata.json';

class Sidebar extends Component {
  render() {
   let imgattr = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'

    return (
      <div className="col-lg-4">
            <aside className="sidebar-area">
               <div className="widget widget_search">
                  <form className="search-form">
                        <div className="form-group">
                           <input type="text" placeholder="Search"/>
                        </div>
                        <button className="submit-btn" type="submit"><i className="fa fa-search"></i></button>
                  </form>
               </div>
               <div className="widget widget-recent-post">
                  <h2 className="widget-title">{widgetdata.latestposts.title}</h2>
                  <ul>
                  {widgetdata.latestposts.listitems.map( ( value, index ) => {
                     return <li key={index}>
                     <div className="media">
                        <img src={publicUrl+value.image} alt="widget"/>
                        <div className="media-body">
                              <h6 className="title riyaqas-nav"><Link to={ value.url }>{value.title}</Link></h6>
                              <span className="post-date">{value.date}</span>
                        </div>
                     </div>
                  </li>

                  } )}
                     
                  </ul>
               </div>
               <div className="widget widget_categories">
                  <h2 className="widget-title">{widgetdata.categorywidget.title}</h2>
                  <ul className="riyaqas-nav">
                     {widgetdata.categorywidget.listitems.map( ( value, index ) => {
                        return <li key={index}><Link  to={ value.url }>{value.item}</Link></li>
                     } )}
                  </ul>
               </div>
               <div className="widget widget_archive">
                  <h2 className="widget-title">{widgetdata.archives.title}</h2>
                  <ul className="riyaqas-nav">
                     {widgetdata.archives.listitems.map( ( value, index ) => {
                        return <li key={index}><Link to={ value.url }>{value.item}</Link></li>
                     } )}
                  </ul>
               </div>
               <div className="widget widget_tag_cloud">
                  <h3 className="widget-title">{widgetdata.tagscloud.title}</h3>
                  <div className="tagcloud riyaqas-nav">
                     {widgetdata.tagscloud.listitems.map( ( value, index ) => {
                        return <Link key={index} to={ value.url }>{value.title}</Link>
                     } )}
                  </div>
               </div>
               <div className="widget widget-gallery">
                  <h3 className="widget-title">{widgetdata.gallery.title}</h3>
                  <div className="row custom-gutters-16 riyaqas-nav">
                     {widgetdata.gallery.listitems.map( ( value, index ) => {
                        return <div key={index} className="col-4">
                        <Link to={ value.url } className="thumb">
                           <img className="w-100" src={publicUrl+value.image_url} alt={imgattr}/>
                        </Link>
                     </div>
                     } )}
                  </div>
               </div>
               <div className="widget widget-newslatter">
                  <h3 className="widget-title">{widgetdata.newslatter.title}</h3>
                  <div className="newsletter-subcribe">
                        <form id="news-subcribeform" className="subcribe-form">
                           <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your E-mail..." name="mail" required=""/>
                              <button type="submit" className="btn-blue subcribe-submit">submit</button>
                           </div>
                        </form>
                  </div>
               </div>
            </aside>
      </div>

    );
  }
}

export default Sidebar;
