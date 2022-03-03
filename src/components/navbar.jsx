import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">Navbar</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NavLink class="nav-item nav-link active" to="/movies">Movies</NavLink>
                <NavLink class="nav-item nav-link" to="/customers">Customers</NavLink>
                  <NavLink class="nav-item nav-link" to="/rentals">Rentals</NavLink>
                  <NavLink class="nav-item nav-link" to="/login">Login</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar


             

//  <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <Link class="navbar-brand" to="/">Navbar</Link>
//         <div class="collapse navbar-collapse" id="navbarNav">
//             <div class="navbar-nav">
//                 <NavLink class="nav-item nav-link" to="/">Movies</NavLink>
//                 <NavLink class="nav-item nav-link" to="/customers">Customer</NavLink>
//                 <NavLink class="nav-item nav-link" to="/rentals">Rental</NavLink>
//             </div>
//         </div>
//     </nav>