import React from 'react';
import '../styles/index.scss';

const Index = () => (
  <div>
    <div className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg justify-content-between mb-5">
          <a href="/" className="navbar-brand">
            <span className="font-weight-regular">Feature</span>
            <span className="font-weight-light">Ready</span>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sign-in">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="text-center p-md-5">
          <h1>Delightful tools for product teams</h1>
          <h4 className="font-weight-light">A set of tools that makes shipping features easier</h4>
          <a href="/get-started" className="btn btn-primary btn-lg px-5 py-2 my-md-5">
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div className="bg-white py-5">
      <div className="container">
        <div className="text-muted text-center">FEATURES</div>
        <div className="py-3" />
        <div className="row align-items-center my-5">
          <div className="col-md-4 px-5">
            <h3>Feature 1</h3>
            <h5 className="font-weight-light text-secondary">Lorem ipsum dolor sit amet</h5>
          </div>
          <div className="col-md-8">
            <img className="img-fluid" src="/static/browser.png" />
          </div>
        </div>
        <div className="py-3" />
        <div className="row align-items-center my-5">
          <div className="col-md-4 px-5 order-2">
            <h3>Feature 2</h3>
            <h5 className="font-weight-light text-secondary">Lorem ipsum dolor sit amet</h5>
          </div>
          <div className="col-md-8">
            <img className="img-fluid" src="/static/browser.png" />
          </div>
        </div>
        <div className="py-3" />
        <div className="row align-items-center my-5">
          <div className="col-md-4 px-5">
            <h3>Feature 3</h3>
            <h5 className="font-weight-light text-secondary">Lorem ipsum dolor sit amet</h5>
          </div>
          <div className="col-md-8">
            <img className="img-fluid" src="/static/browser.png" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-muted text-center">GET NOTIFIED</div>
        <div className="py-3" />
        <div className="text-center py-3">
          <h3>Join the mailing list</h3>
          <h5 className="font-weight-light text-secondary">
            We are launching new features every few weeks - get notified first!
          </h5>
          <div className="my-5 row justify-content-center">
            <div className="col-md-5">
              <form>
                <div className="input-group input-group-lg">
                  <input type="email" className="form-control" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <nav className="navbar navbar-expand-lg justify-content-between pt-3 pb-5">
        <a href="/" className="navbar-brand">
          <span className="font-weight-regular">Feature</span>
          <span className="font-weight-light">Ready</span>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sign-in">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Index;
