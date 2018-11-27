import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styled from 'react-emotion';

const SingleItemView = styled('div')``;

export default class Index extends Component {
  render() {
    return (
      <SingleItemView>
        <Link to="/">Back</Link>
        {this.props.title}
        <img src={this.props.photo} />
      </SingleItemView>
    );
  }
}
