import React from 'react'
import Layout from '../../components/layout/layout'
import { Helmet } from 'react-helmet'
import './tables.sass'
import traces from './traces.yml'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Tables</title>
      </Helmet>

      <div className="table">
        <div className="thead">
          <div className="th">Status</div>
          <div className="th">Endpoint</div>
          <div className="th">Latency</div>
          <div className="th">Timestamp</div>
        </div>
        <div>
          {traces.map((trace, index) => {
            return (
              <div className="tr" key={index}>
                <div className="td">{trace.status}</div>
                <div className="td">{trace.endpoint}</div>
                <div className="td">{trace.latency}</div>
                <div className="td">{trace.timestamp}</div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  );
}
