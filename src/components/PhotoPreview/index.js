import React, { Component } from 'react';
import styled from 'react-emotion';
import theme from '../../theme';

const PhotoPreview = styled('div')`
  position: fixed;
  right: 30px;
  bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  background-color: #f5f5f5;
  webkit-box-shadow: 0px 2px 13px -2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 2px 13px -2px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 2px 13px -2px rgba(0, 0, 0, 0.38);

  img {
    height: 300px;
    width: auto;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const PhotoDescription = styled('div')`
  position: absolute;
  left: -330px;
  max-width: 300px;
  bottom: 0;

  font-family: ${theme.fonts.sans};
  font-size: ${theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2;
  text-align: justify;
`;

export default class Index extends Component {
  render() {
    if (!this.props.photo) return null;
    return (
      <div>
        <PhotoPreview
          onMouseLeave={() => this.props.handleMouseLeave()}
          onMouseEnter={() =>
            this.props.handleMouseEnter(
              this.props.photo,
              this.props.description
            )
          }
        >
          <PhotoDescription>{this.props.description}</PhotoDescription>
          <img src={this.props.photo} />
        </PhotoPreview>
      </div>
    );
  }
}
