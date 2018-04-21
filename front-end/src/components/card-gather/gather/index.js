import React from 'react'
import './style.css'
import CardContainer from "../../card-container";
import {MdDeleteForever} from "react-icons/lib/md/index";
import axios from 'axios';

class CardGather extends React.Component {

    deleteGather = async () => {
      console.log(this.props.id)
      let id = sessionStorage.getItem("organizationId")
      await axios.delete(`http://127.0.0.1:3001/api/organizations/${id}/gathers/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    };

    render() {
        return (
            <div className="card-gather container">
                <h1 className="gather-header">{this.props.title}</h1>
                <div onClick={this.deleteGather} className="gather-delete">
                    <MdDeleteForever size={50}/>
                </div>
                <hr/>
                <CardContainer cards={this.props.cards} gatherId={this.props.id}
                               onCreateCard={this.props.onCreateCard}/>
            </div>
        )
    }
}

export default CardGather
