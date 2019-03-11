import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BrowserFrame = ({ alt, src }) => (
  <Container>
    <Frame alt="browser-frame" className="img-fluid" src="/static/browser.png" />
    <Image alt={alt} className="img-fluid" src={src} />
  </Container>
);

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Frame = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

const Image = styled.img`
  margin-top: 20px;
  position: relative;
  z-index: 20;
`;

export default BrowserFrame;

BrowserFrame.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
