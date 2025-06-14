import React from "react";

export default (props) => (
  <nav className="navbar navbar-inverse bg-inverse">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
      </div>
      <ul className="nav navbar-nav flex flex-row">
        <li>
          <a href="/todos">Tasks</a>
        </li>
        <li className="ml-4">
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  </nav>
);
