import React from 'react'
import './table.sass'
import classNames from 'classnames/bind'

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

export function Th({ children, ...props }) {
  props.className = classNames(props.className, 'th')

  return (
    <th {...props}>
      {children}
    </th>
  )
}

export function Td({ children, ...props }) {
  props.className = classNames(props.className, 'td')

  return (
    <td {...props}>
      {children}
    </td>
  )
}
