import React, { useState } from "react";
import { Bridge } from "@test-mfa/communication";

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
  const [message, setMessage] = useState("");
  const sayHello = () => {
    Bridge.send(message);
  };
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
        <div className="row gx-1 float-end">
          <div class="col-auto">
            <input
              type="text"
              onChange={(event) => setMessage(event.target.value)}
              className="form-control"
            />
          </div>
          <div class="col-auto">
            <button className="btn btn-primary" onClick={sayHello}>
              Send message
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
