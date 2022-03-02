import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
    state = {}

    renderCell = (currentItem, colum) => {
        if (colum.content) {
            return colum.content(currentItem)
        }

        return _.get(currentItem, colum.path)
    };

    render() {
        const { data, colums, onLike, onDelete } = this.props;
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item._id}>
                        {colums.map(colum => <td key={colum.path || colum.key} >{this.renderCell(item, colum)}</td>)}
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;