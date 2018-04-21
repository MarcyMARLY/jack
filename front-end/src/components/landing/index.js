import React, {Component} from 'react';
import '../landing/styles.css';
import Header from '../header/index'
import OHeader from '../organization/organzationHeader'
import Registration from '../registration/RegistrationModal'
import Login from '../Login/LoginModal'
import Footer from '../footer/index'

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegistration: false,
            isLogin: false
        };
        console.log(this.props.organizationId)
    }

    handleRegistrationOpen = () => {
        this.setState({
            isRegistration: true,
            isLogin: false
        });
    };

    handleLoginOpen = () => {
        this.setState({
            isRegistration: false,
            isLogin: true
        });
    };

    handleRegistrationClose = () => {
        this.setState({
            isRegistration: false,
            isLogin: false
        });
    };

    handleLoginClose = () => {
        this.setState({
            isRegistration: false,
            isLogin: false
        });
    };

    handleLogId = (id) => {
      console.log(id);
      this.props.userLoged(id)
    }

    updateSelf = () => {
      console.log('puda')
      this.forceUpdate();
    }

    render() {
      let id = sessionStorage.getItem("organizationId")
        let html =
            <div class="inner cover">
                <div class='jackTitle'>
                    <h1 class='jack-heading'> Jack</h1>
                    <p class='leadJ'>All your gift cards in one place</p>
                </div>
                <div class="organization-body">
                    <h1>Our customers</h1>
                    <div class="row">
                        <div class="col-lg-4">
                            <img class="rounded-circle"
                                 src="https://res.cloudinary.com/abdalimov/image/upload/v1524249050/rumi-logo.png;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                 alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Rumi</h2>
                            <p>
                                The center of Kazakh hospitality
                                RUMI Almaty. Here you can enjoy
                                breakfast, lunch and dinner,
                                come with friends or the whole
                                big family or to invite foreign
                                guests. We work from 8 am to 3 am.
                                Welcome! Our menu consists of the
                                3 types of pilaf and 15 tea
                                (each pick up their "right"
                                dried fruit), as well as manty,
                                kuyrdak, samosa and bauyrsaki.
                            </p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle"
                                 src="https://res.cloudinary.com/abdalimov/image/upload/v1524249245/starbucks-logo.png;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                 alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Starbucks</h2>
                            <p>
                                Starbucks Corporation is an American
                                coffee company and coffeehouse chain.
                                Starbucks was founded in Seattle,
                                Washington in 1971. As of 2017,
                                the company operates 27,339 locations
                                worldwide.Starbucks is considered
                                the main representative of
                                "second wave coffee", initially
                                distinguishing itself from other
                                coffee-serving venues in the US by
                                taste, quality, and customer
                                experience while popularizing
                                darkly roasted coffee.
                            </p>
                        </div>
                        <div class="col-lg-4">
                            <img class="rounded-circle"
                                 src="https://res.cloudinary.com/abdalimov/image/upload/v1524249565/gym-logo.png;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                 alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Power strength gym</h2>
                            <p>
                                If you are just starting your
                                fitness journey or if you have already
                                become a Bodybuilder, Powerlifter, Strongman,
                                Cross Trainer or anywhere in between,
                                we have everything you need to grow,
                                improve and be the best!
                            </p>
                        </div>
                    </div>
                </div>
            </div>;

        if (this.state.isLogin) {
            return (
                <div class="base-jack">
                    <Login userLoged={this.handleLogId} onLoginClose={this.handleLoginClose} update={this.updateSelf}/>
                    <div class="main">
                        <div class="site-wrapper">
                            <div class="site-wrapper-inner">
                                <div class="masthead clearfix">

                                  <Header onRegistrationOpen={this.handleRegistrationOpen}
                                          onLoginOpen={this.handleLoginOpen}
                                          update={this.updateSelf}/> :


                                </div>
                                {html}
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.isRegistration) {
            return (
                <div class="base-jack">
                    <Registration onRegistrationClose={this.handleRegistrationClose}/>
                    <div class="main">
                        <div class="site-wrapper">
                            <div class="site-wrapper-inner">
                                <div class="masthead clearfix">
                                {id == null ?
                                  <Header onRegistrationOpen={this.handleRegistrationOpen}
                                          onLoginOpen={this.handleLoginOpen}/> :
                                    <OHeader onRegistrationOpen={this.handleRegistrationOpen}
                                            onLoginOpen={this.handleLoginOpen}
                                            userLoged={this.props.userLoged}
                                            update={this.updateSelf}/>
                                  }
                                </div>
                                {html}
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="main">
                    <div class="site-wrapper">
                        <div class="site-wrapper-inner">
                            <div class="masthead clearfix">
                            {id == null ?
                              <Header onRegistrationOpen={this.handleRegistrationOpen}
                                      onLoginOpen={this.handleLoginOpen}/> :
                                <OHeader onRegistrationOpen={this.handleRegistrationOpen}
                                        onLoginOpen={this.handleLoginOpen}
                                        userLoged={this.props.userLoged}
                                        update={this.updateSelf}/>
                              }


                            </div>
                            {html}
                        </div>
                        <Footer/>
                    </div>
                </div>
            );
        }
    }
}

export default Landing;
