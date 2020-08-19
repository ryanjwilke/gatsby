import React from 'react'
import Layout from '../components/layout/layout'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <h1>404</h1>
    </Layout>
  );
}
