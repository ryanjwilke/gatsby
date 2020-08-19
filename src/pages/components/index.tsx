import React from 'react'
import Layout from '../../components/layout/layout'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Components</title>
      </Helmet>

      <h1>Components</h1>
      <ul>
        <li><Link to="buttons">Buttons</Link></li>
        <li><Link to="tables">Tables</Link></li>
      </ul>
    </Layout>
  );
}
