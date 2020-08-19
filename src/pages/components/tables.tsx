import React from 'react'
import Layout from '../../components/layout/layout'
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/table/table'
import { Helmet } from 'react-helmet'
import traces from '../../data/traces.yml'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Tables</title>
      </Helmet>

      <Table>
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Endpoint</Th>
            <Th className="th-right">Latency</Th>
            <Th className="th-right">Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {traces.map((trace, index) => {
            return (
              <Tr key={index}>
                <Td>{trace.status}</Td>
                <Td>{trace.endpoint}</Td>
                <Td className="th-right">{trace.latency}</Td>
                <Td className="th-right">{trace.timestamp}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Layout>
  );
}
