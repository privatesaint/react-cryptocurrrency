import React, { Component } from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';

class List extends Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      timestamp: 0,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/assets`)
      .then(handleResponse)
      .then(resp => {
        const { data, timestamp } = resp;
        this.setState({
          currencies: data,
          timestamp,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    console.log(this.state.currencies);
    console.log(this.state.timestamp);
    return <div>List component</div>;
  }
}

export default List;
