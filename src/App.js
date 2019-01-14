import React, { Component } from 'react';
import './scss/App.scss';
import 'bulma/css/bulma.css';
import { getMembers, getMessages } from './data';
import _ from 'lodash';
import moment from 'moment';
import MessagesContainer from './MessagesContainer'

class App extends Component {

  state = {
    messages: [],
    members: [],
    loading: false,
    errorMessage: ''
  }

  componentDidMount(){
    this.setState({loading: true});
    getMembers().then((membersResponse) => {
      _.map(membersResponse, m => {
        m.userId = m.id;
        delete m.id;
      })
      this.setState({members: membersResponse}, () => {
        getMessages().then((messagesResponse) => {
            console.log(messagesResponse);
            this.cleanUpAndDispatch(messagesResponse);
          }).catch((err) => {
            this.setState({loading: false, errorMessage: "No messages could be fetched"});
          });
      });
    }).catch((err) => {
      this.setState({loading: false, errorMessage: "No members could be fetched"});
    });
  }

  cleanUpAndDispatch(fetchedMessages){

    console.log(fetchedMessages);

    fetchedMessages = _.orderBy(fetchedMessages, ['timestamp'], 'desc');

    _.map(fetchedMessages, e => {
      return e.timestamp = moment(e.timestamp).format('MMMM Do YYYY, h:mm:ss a');
    });

    let members = this.state.members;

    _.map(members, m => {

      let messagesCurrentMember = _.filter(fetchedMessages, e => {
          return e.userId == m.userId;
      });

      m.messages = messagesCurrentMember;

    })

    this.setState({ members: members}, () => {
      this.setState({loading: false});
    });
    console.log(this.state.members);

  }

  render() {
    return (
      <div className="container is-fluid">
      <div className="notification">
        <div className="title is-1">Messages</div>
        <div className="title is-6"><i>Luisfer Romero Calero, 2019</i></div>
        <div className="title is-5">{this.state.errorMessage}</div>
      </div>
      {this.state.loading ? "Loading" :
        <MessagesContainer members={this.state.members} />
      }
      </div>
    );
  }
}

export default App;
