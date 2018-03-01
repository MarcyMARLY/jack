import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../header/styles.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {



    render () {
        return (

          <div class = "main">
            <div className="navigation-container">
                <nav className="navbar navbar-expand-lg navigation-container">
                                    <h3 class="masthead-brand-jack">JACK</h3>
                    <div className="collapse navbar-collapse justify-content-end navigation-container" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">

                                <Link className ="nav-link" to="/organization">Organization</Link>
                            </li>
                            <li className="nav-item">
                                <Link className ="nav-link" to="/board">Board</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link btn-like" href="#">Log out</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
          </div>
        )
    }
}

export default Header
