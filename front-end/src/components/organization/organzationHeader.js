import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../header/styles.css'
import { Link } from 'react-router-dom';

class OHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logedIn: false
    }
  }

  logout = () => {
    sessionStorage.clear()
    this.props.update()
  }

    render () {
        return (

          <div class = "main">
            <div className="navigation-container">
                <nav className="navbar navbar-expand-lg navigation-container">
                    <div className="collapse navbar-collapse justify-content-end navigation-container" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className ="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className ="nav-link" to="/organization">Organization</Link>
                        </li>
                        <li className="nav-item">
                            <Link className ="nav-link" to="/board">Board</Link>
                        </li>

                        <li className="nav-item" onClick = {this.logout}>
                            <a className="nav-link">Log out</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
          </div>
        )
    }
}

export default OHeader
