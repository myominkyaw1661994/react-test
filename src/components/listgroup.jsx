import React, { Component } from 'react';
import { getGenres } from '../services/fakeGenreService'; 

class ListGroup extends Component{
    render(){
        const {selectedGenre, onItemSelect, genresList} = this.props; 
        

        return <>
                <div className="mt-5">
                    <ul className="list-group">
                        {genresList.map(item => (
                            <li
                            onClick={() => onItemSelect(item)}    
                            key={item.name} className={item === selectedGenre ? "list-group-item active":"list-group-item"}>{item.name}</li> 
                        ))}
                    </ul>
                </div>
            
            </>
    }
}

ListGroup.defaultProps = {
    textValue : "name",
    valueProperty : "_id"
}

export default ListGroup;
