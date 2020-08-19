import React from 'react'
import Layout from '../../components/layout/layout'
import { Helmet } from 'react-helmet'
import './tables.sass'
import traces from '../../data/traces.yml'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Tables</title>
      </Helmet>

      <table className="table">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Status</th>
            <th className="th">Endpoint</th>
            <th className="th th-right">Latency</th>
            <th className="th th-right">Time</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {traces.map((trace, index) => {
            return (
              <tr className="tr" key={index}>
                <td className="td">{trace.status}</td>
                <td className="td">{trace.endpoint}</td>
                <td className="td th-right">{trace.latency}</td>
                <td className="td th-right">{trace.timestamp}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout>
  );
}
