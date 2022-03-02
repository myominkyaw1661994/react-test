
import React from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = (props) => {
    const { colums, data, onLike, onDelete, sortColumn, onSort} = props;

  return (
     <table className="m-5 table">
                <TableHeader
                    colums={colums}
                    onSort={onSort}
                    sortColumn={sortColumn}
                />

                <TableBody
                    data={data}
                    colums={colums}
                    onLike={onLike}
                    onDelete={onDelete}
                />


            </table>
  )
}

export default Table;