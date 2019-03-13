import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/index.scss';

const Meta = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  </Head>
);

export default Meta;

Meta.propTypes = {
  title: PropTypes.string
};

Meta.defaultProps = {
  title: 'FeatureReady: Delightful tools for product teams'
};
