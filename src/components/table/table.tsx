import React from 'react'
import './table.sass'

export function Table({ children }) {
  return (
    <table className="table">
      {children}
    </table>
  )
}

export function Thead({ children }) {
  return (
    <thead className="thead">
      {children}
    </thead>
  )
}

export function Tbody({ children }) {
  return (
    <tbody className="tbody">
      {children}
    </tbody>
  )
}

export function Tr({ children }) {
  return (
    <tr className="tr">
      {children}
    </tr>
  )
}

export function Th({ children }) {
  return (
    <th className="th">
      {children}
    </th>
  )
}

export function Td({ children }) {
  return (
    <td className="td">
      {children}
    </td>
  )
}
