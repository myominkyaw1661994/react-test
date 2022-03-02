import React from 'react'

const MovieForm = ({match, history}) => {
    return (
      <div>
        <div>Movies id is - {match.params.id}</div>
        <button className='btn btn-danger' onClick={()=> history.replace("/movies")}>Save</button>
      </div>
    )
}       

export default MovieForm