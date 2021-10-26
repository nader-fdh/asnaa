import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from '../../actions/productAction';
import widgetdata from '../../data/widgetdata.json';

function Sidebar() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  console.log(products);

  const auth = useSelector(state => state.auth);
  console.log(auth.user);

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <>
      <div className="col-lg-4">
        <aside className="sidebar-area">
          <div className="widget widget-recent-post">
            <h2 className="widget-title">{widgetdata.latestposts.title}</h2>
            <ul>
              {products != null
                ? products.map((value, index) => {
                    return (
                      <li key={index}>
                        <div className="media  riyaqas-nav">
                          <img src={value.image} alt="widget" />
                          <div className="media-body">
                            <h6 className="title riyaqas-nav">
                              <Link>{value.name}</Link>
                            </h6>
                            <span className="post-date">{value.createdAt}</span>
                          </div>
                        </div>
                      </li>
                    );
                  })
                : true}
            </ul>
          </div>
          <div className="widget widget_categories product_category">
            <h2 className="widget-title">Product categories</h2>
            <ul className=" riyaqas-nav">
              {widgetdata.categorywidget.listitems.map((value, index) => {
                return (
                  <li key={index}>
                    <Link>{value.item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
