import React from "react";

export default function Root(props) {
  return <section>
    <div className="card">
      <div className="card-header">
        Featured(React JS Micro frontend)
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Trending</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary">more...</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Latest News</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary">more...</a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Featured Items</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="btn btn-primary">more...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
