import React, { Component } from 'react';
import './styles.css';
import Header from '../header/index'

class App extends Component {
  render() {
    return (
      <div class= "main">
      <div class="site-wrapper">
        <div class="site-wrapper-inner">
          <div class="masthead clearfix">

            <Header />
          </div>
          <div class="inner cover">
            <div class = 'jackTitle'>
              <h1 class = 'jack-heading'> Jack</h1>
              <p class = 'leadJ'>All your gift cards in one place</p>
            </div>
            <div class = "organization-body">
              <div class="row">
                <div class="col-lg-4">
                  <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                  <h2>Organization</h2>
                  <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
                <div class="col-lg-4">
                  <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                  <h2>Organization</h2>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
                <div class="col-lg-4">
                  <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                  <h2>Organization</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class = 'jack-footer'>
          <p class = 'float-left'><label>Contacts</label></p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
