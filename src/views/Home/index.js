import React, { Component } from 'react';
import styled from 'react-emotion';

import ListItem from '../../components/ListItem';
import PhotoPreview from '../../components/PhotoPreview';
import ZoomedView from '../../components/ZoomedView';

import listItemData from '../../data';

const HomeView = styled('div')`
  position: relative;
`;

export default class Index extends Component {
  state = {
    photo: '',
    expandPhoto: false,
    description: ''
  };

  setPhoto(photo, description) {
    this.setState({
      photo,
      description
    });
  }

  clearPhoto() {
    if (!this.state.expandPhoto) {
      this.setState({
        photo: '',
        description: ''
      });
    }
  }

  expandPhoto() {
    this.setState({
      expandPhoto: true
    });

    document.body.style.overflow = 'hidden';
  }

  collapsePhoto() {
    this.setState({
      expandPhoto: false
    });
    document.body.style.overflow = '';
  }

  render() {
    const listItems =
      listItemData &&
      Object.keys(listItemData).map(key => {
        return (
          <ListItem
            key={key}
            num={key}
            handleClick={() => this.expandPhoto()}
            handleMouseLeave={() => this.clearPhoto()}
            handleMouseEnter={() =>
              this.setPhoto(
                listItemData[key].photo,
                listItemData[key].description
              )
            }
            title={listItemData[key].title}
            meta={listItemData[key].meta}
            photo={listItemData[key].photo}
          />
        );
      });

    return (
      <HomeView>
        <ZoomedView
          handleCloseZoom={() => this.collapsePhoto()}
          expandPhoto={this.state.expandPhoto}
          photo={this.state.photo}
          description={this.state.description}
        />
        <PhotoPreview
          handleMouseLeave={() => this.clearPhoto()}
          handleMouseEnter={(photo, description) =>
            this.setPhoto(photo, description)
          }
          photo={this.state.photo}
          description={this.state.description}
        />
        {listItems}
      </HomeView>
    );
  }
}
