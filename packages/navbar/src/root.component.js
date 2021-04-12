import React from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";

export default function Root(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link) => {
              return (
                <li key={link.href} className="nav-item">
                  <Link className="nav-link" to={link.href}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
