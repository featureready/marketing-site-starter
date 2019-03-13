import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/index.scss';

const Meta = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <script
      defer
      src="https://pro.fontawesome.com/releases/v5.7.2/js/all.js"
      integrity="sha384-I3Hhe9TkmlsxzooTtbRzdeLbmkFQE9DVzX/19uTZfHk1zn/uWUyk+a+GyrHyseSq"
      crossOrigin="anonymous"
    />
  </Head>
);

export default Meta;

Meta.propTypes = {
  title: PropTypes.string
};

Meta.defaultProps = {
  title: 'FeatureReady: Delightful tools for product teams'
};
