import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/image/web_dental2.png";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>We are here to create a beautiful and healthy smile</h1>
                  <h2 className="my-3">
                    A team of dental experts to solve your dental problems.
                  </h2>

                  <div className="mt-3 ml-0">
                    <NavLink to="/" className="btn btn-primary">
                      Make An Appointment
                    </NavLink>
                  </div>

                  <div className="mt-4 d-flex">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/appledentalnepal/"
                      className="btn btn-info"
                    >
                      Facebook Contact
                    </a>
                  </div>

                  <div className="mt-4">
                    <h5>Phone: +977-9851083905</h5>
                  </div>
                </div>

                <div className="col-lg-6 pt-5 header-img order-2 order-lg-2">
                  <img
                    src={web}
                    className="rounded img-fluid "
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
