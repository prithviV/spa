import React from "react";
import { Link } from "@reach/router";
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Featured",
    href: "/featured",
  },
  {
    name: "Single SPA",
    href: "/spa",
  },
];

export default function Root(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div id="navbarNav">
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
