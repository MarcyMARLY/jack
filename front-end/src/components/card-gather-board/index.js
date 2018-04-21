import React from 'react'
import GatherList from "../card-gather/gather-list";
import GatherMaker from "../card-gather/gather-maker";
import Header from "../header";
import axios from 'axios';

class CardsBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gathers: [
                {
                    id: 1,
                    title: "First Gather",
                    cards: [
                        {
                            id: "1",
                            title: "Coffee",
                            deactivate_at: "12.12.12"
                        },
                        {
                            id: "2",
                            title: "Gym",
                            deactivate_at: "12.12.14"
                        },
                        {
                            id: "3",
                            title: "Beauty",
                            deactivate_at: "12.12.14"
                        }
                    ]
                }
            ]
        }
    }
    componentDidMount = async () => {
      let gathers = []
      await axios.get('http://127.0.0.1:3001/api/organizations/1/gathers/').then(res =>{
          gathers = res.data
        console.log(gathers);
      })

      for(var i=0;i<gathers.length;i++) {
        console.log(gathers[i].id)
        gathers[i]['cards'] = []
        await axios.get('http://127.0.0.1:3001/api/organizations/1/gathers/' + gathers[i].id + '/cards').then(res =>{
          gathers[i].cards = res.data
          console.log(res.data);
        })
      }
      this.setState({
        gathers: gathers,
      });
      console.log('current state ')
      console.log(this.state)
    }

    createCard = (e, t, d, gatherId) => {
        axios.post('http://127.0.0.1:3001/api/organizations/1/gathers/'+gatherId+'/cards',{title:e, card_image:"https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",created_at:t,deactivate_at: t,
        description: d, gather:gatherId
        })
        .then(res => {
        });
        let gather = this.state.gathers.slice();

        gather.filter(gather => gather.id === gatherId)[0].cards.push({
            title: e,
            deactivate_at: t,
            description: d,
        });

        this.setState({
            gathers: gather
        });
    };

    handleGatherCreation = (gatherObject) => {
        axios.post('http://127.0.0.1:3001/api/organizations/1/gathers/',{id:gatherObject.id, title:gatherObject.title, organization:1
        })
        .then(res => {
        });
        let gatherListCopy = this.state.gathers.slice();
        gatherListCopy.push(gatherObject);
        this.setState({
            gathers: gatherListCopy
        });
        console.log(this.state.gathers)
    };

    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <GatherList gathers={this.state.gathers} onCreateCard={this.createCard} />
                    <GatherMaker onGatherCreateModalSubmit={this.handleGatherCreation} />
                </div>
            </div>
        )
    }
}

export default CardsBoard
