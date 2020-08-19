import React from 'react'
import Layout from '../components/layout/layout'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>404 - Page Not Found</title>
        </Helmet>
        <h1>404 - Page Note Found</h1>
      </main>
    </Layout>
  );
}
