// Create table component using compound component pattern
// use only html table element


import React from 'react';

const Table = ({children, ...props}) => {
    return (
        <table {...props}>
            {children}
        </table>
    );

}

const Head = ({children, ...props}) => {
    return (
        <thead {...props}>
        {children}
        </thead>
    );
}

const Body = ({children, ...props}) => {
    return (
        <tbody {...props}>
        {children}
        </tbody>
    );
}

const Row = ({children, ...props}) => {
    return (
        <tr {...props}>
            {children}
        </tr>
    );
}

const Cell = ({children, show = true, ...props}) => {
    return show && (
        <td {...props}>
            {children}
        </td>
    );
}

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;

