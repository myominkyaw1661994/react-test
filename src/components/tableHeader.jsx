import React, { Component } from 'react';


class TableHeader extends Component {

    raiseSort = path => {

        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path == path) {
            sortColumn.order = sortColumn.order == 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }

        this.props.onSort(sortColumn);
    };

    renderSortIcon = (coloum) => {
        if (coloum.path !== this.props.sortColumn.path) return null;

        if (this.props.sortColumn.order === 'asc') return <i className='fa fa-sort-asc' aria-hidden="ture"></i>;
        return <i className='fa fa-sort-desc' aria-hidden="ture"></i>;
    };



    render() {
        return (
            <>
                <thead>
                    <tr>
                        {this.props.colums.map(colum => <th key={colum.path || colum.key} onClick={() => this.raiseSort(colum.path)}>{colum.lable}{ this.renderSortIcon(colum)}</th>)}
                    </tr>
                </thead>
            </>
        );
    }
}

export default TableHeader;