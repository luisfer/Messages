import React, { Component } from 'react';
import './scss/App.scss';
import 'bulma/css/bulma.css';
import ReactTooltip from 'react-tooltip';

class MessagesContainer extends Component {

  componentDidMount(){
  }

  render() {


    return (
      <div style={{marginBottom: '20px'}}>
      {this.props.members.map((d) => (
          <div key={d.id} className="card columns">
            <div className="column is-1">
              <img src="http://lorempixel.com/640/360/" />
            </div>
            <div className="column is-one-half">
              <div><a className="button title is-4 is-primary" data-tip={d.email}>{d.lastName}, {d.firstName}</a><ReactTooltip place="top" type="info" effect="float"/>
              <br/></div>
              {d.messages && d.messages.map((m) => (
                <div>
                <div key={m.id}>
                <br/>
                <div><span className="is-size-5">{m.message}</span>
                <br/>
                <i>{m.timestamp}</i><br/>
                </div>
                </div>
                </div>
              ))}
            </div>
        </div>
      ))}
      </div>
    )
  }

}

export default MessagesContainer;
