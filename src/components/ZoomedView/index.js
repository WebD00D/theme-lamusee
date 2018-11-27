import React, { Component } from 'react';
import styled from 'react-emotion';
import theme from '../../theme';

import Logo from '../Brand/Logo';

const ZoomedView = styled('div')`
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: 3;
  background-color: rgba(255, 255, 255, 0.95);

  &.zoom {
    transform: translateY(100%);
  }

  &.zoom--open {
    transform: translateY(0);
  }

  img {
    height: 60vh;
    width: auto;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: ${theme.breakPoints.tablet}) {
      height: 320px;
    }
  }
`;

const Description = styled('div')`
  max-width: 400px;

  font-family: ${theme.fonts.sans};
  font-size: ${theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2;
  text-align: center;

  @media (max-width: ${theme.breakPoints.tablet}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const CloseMe = styled('div')`
  position: absolute;
  right: 30px;
  top: 30px;

  font-family: ${theme.fonts.sans};
  font-size: ${theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2;
  text-decoration: underline;
  cursor: pointer;
`;

const LogoWrap = styled('div')`
  position: absolute;
  left: 30px;
  top: 30px;
`;

export default class Index extends Component {
  render() {
    const zoomClass = this.props.expandPhoto ? 'zoom zoom--open' : 'zoom';
    return (
      <ZoomedView className={zoomClass}>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <CloseMe onClick={() => this.props.handleCloseZoom()}>Close</CloseMe>
        <img src={this.props.photo} />
        <Description>{this.props.description}</Description>
      </ZoomedView>
    );
  }
}
