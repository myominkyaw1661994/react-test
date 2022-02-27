import React, { Component } from 'react';
import _ from 'lodash';

class Pagnation extends Component{
    
    render(){
        const {itemCount, pageSize, currentPage} = this.props;
        const pageCount = Math.ceil(itemCount / pageSize);
        const page = _.range(1, pageCount + 1);

        if(pageCount === 1) return null;

        return (
            <nav>
                <ul className="pagination ml-5">
                    {page.map(page => (
                        <li className={page === currentPage ? 'page-item active': 'page-item'} key={page}>
                            <a className="page-link" onClick={() => this.props.onPageChange(page)}>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Pagnation;
