import React from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

const BrowserFrame = ({ alt, src }) => (
  <>
    <div>
      <img className="Frame img-fluid" alt="browser-frame" src="/static/browser.png" />
      <img className="Image img-fluid" alt={alt} src={src} />
    </div>
    <style jsx>{styles}</style>
  </>
);

export default BrowserFrame;

const styles = css`
  div {
    position: relative;
    overflow: hidden;
  }

  .Frame {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  .Image {
    margin-top: 20px;
    position: relative;
    z-index: 20;
  }
`;

BrowserFrame.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
