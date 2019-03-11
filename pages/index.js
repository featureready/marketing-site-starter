import React from 'react';
import '../styles/index.scss';
import BrowserFrame from '../components/BrowserFrame';

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
            <h3>Generate Asana task numbers</h3>
            <h5 className="font-weight-light text-secondary mt-3">
              Reduce team confusion when referring to tasks within Asana.
            </h5>
            <h5 className="font-weight-light text-secondary mt-3">
              This tool automatically generates a task number for each newly created card on Asana.
              (eg FR-12)
            </h5>
            <h5 className="font-weight-light text-secondary my-3">
              Asana does not generate these kind of running numbers for cards by default.
            </h5>
            <a
              href="https://github.com/featureready/asana-github-tools"
              className="btn btn-primary mt-3"
            >
              Get this tool
            </a>
          </div>
          <div className="col-md-8">
            <BrowserFrame alt="Asana Task Numbers" src="/static/asana-running-numbers.gif" />
          </div>
        </div>
        <div className="py-3" />
        <div className="row align-items-center my-5">
          <div className="col-md-4 px-5 order-2">
            <h3>Sync GitHub with Asana cards</h3>
            <h5 className="font-weight-light text-secondary mt-3">
              Visually identify which cards are being worked on, waiting for PR review or ready for
              testing on a staging server.
            </h5>
            <h5 className="font-weight-light text-secondary mt-3">
              Sync across GitHub commits and pull requests to Asana feature cards.
            </h5>
            <a
              href="https://github.com/featureready/asana-github-tools"
              className="btn btn-primary mt-3"
            >
              Get this tool
            </a>
          </div>
          <div className="col-md-8">
            <BrowserFrame alt="Asana GitHub Sync" src="/static/asana-github-sync.png" />
          </div>
        </div>
        <div className="py-3" />
        <div className="row align-items-center my-5">
          <div className="col-md-4 px-5">
            <h3>Startup marketing site + blog boilerplate</h3>
            <h5 className="font-weight-light text-secondary my-3">
              Get started quickly with all the commonly required features of a startup marketing
              site
            </h5>
            <h5 className="font-weight-light text-secondary mt-3">
              <ul>
                <li className="my-2">Home page (like this one!)</li>
                <li className="my-2">
                  Easily create more pages with React components for jumbotrons, product features,
                  and pricing
                </li>
                <li className="my-2">
                  Blog - write articles in Markdown, stored within the same Git repo
                </li>
                <li className="my-2">
                  Built with Next.js for server-side rendering out of the box. Bootstrap 4.
                </li>
              </ul>
            </h5>
            <a
              href="https://github.com/featureready/marketing-site-starter"
              className="btn btn-primary mt-3"
            >
              Get this tool
            </a>
          </div>
          <div className="col-md-8">
            <BrowserFrame
              alt="Marketing Site Boilerplate"
              src="/static/marketing-site-boilerplate.png"
            />
          </div>
        </div>
        <div className="py-3" />
        <div className="row align-items-center my-5">
          <div className="col-md-5 px-5 order-2">
            <h3>SAAS app boilerplate</h3>
            <h5 className="font-weight-light text-secondary">
              Get started quickly with all the commonly required features of a SAAS app (API only)
            </h5>
            <h5 className="font-weight-light text-secondary mt-3">
              <ul>
                <li className="my-2">User sign up / sign in / reset password (JWT auth)</li>
                <li className="my-2">Creating an organization, sending invites</li>
                <li className="my-2">
                  Stripe integration - add credit card, subscribe to a plan, payment history,
                  updating user account based on Stripe hooks
                </li>
                <li className="my-2">Segment integration (analytics)</li>
                <li className="my-2">SendGrid integration (emails)</li>
                <li className="my-2">Node.js, Sequelize and GraphQL</li>
              </ul>
            </h5>
            <a
              href="https://github.com/featureready/node-apollo-saas-boilerplate"
              className="btn btn-primary mt-3"
            >
              Get this tool
            </a>
          </div>
          <div className="col-md-7">
            <BrowserFrame alt="SaaS App Boilerplate" src="/static/saas-app-boilerplate.png" />
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
          <div className="mt-4 row justify-content-center">
            <div className="col-md-5">
              <a href="http://eepurl.com/gj6_5H" className="btn btn-lg btn-primary">
                Subscribe
              </a>
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
