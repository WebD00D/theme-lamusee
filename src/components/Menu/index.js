import React, { Component } from 'react';
import styled from 'react-emotion';

import * as UI from '../UI';
import Logo from '../Brand/Logo';

import Github from '../../images/icons/github.svg';
import Instagram from '../../images/icons/instagram.svg';
import Dribbble from '../../images/icons/dribble.svg';

import theme from '../../theme';

const Menu = styled('div')`
  @media (min-width: ${theme.breakPoints.tablet}) {
    width: ${theme.menuWidth};
    height: 100%;
    position: fixed;
    left: 0px;
    z-index: 3;
    border-right: 1px solid ${theme.colors.lightGrey};
  }
`;

const Byline = styled('div')`
  margin-bottom: ${props => props.mb};

  font-family: ${theme.fonts.sans};
  font-size: ${theme.fontSizes.xsmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 2;
  text-align: justify;
`;

const Social = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30px;

  @media (max-width: ${theme.breakPoints.tablet}) {
    bottom: initial;
    right: 30px;
    top: 30px;
  }
`;

const Icon = styled('img')`
  height: 16px;
  margin-right: 8px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

class Index extends Component {
  render() {
    return (
      <Menu>
        <UI.PaddedContainer>
          <Logo />
          <Byline mb="16px">
            A simple React theme ideal for showcasing your photography, art, or
            products.
          </Byline>
          <Byline>Made with 🖤 by Christian</Byline>
          <Social>
            <a target="_blank" href="https://www.instagram.com">
              <Icon src={Instagram} />
            </a>
            <a target="_blank" href="https://www.github.com">
              <Icon src={Github} />
            </a>
            <a target="_blank" href="https://www.dribbble.com">
              <Icon src={Dribbble} />
            </a>
          </Social>
        </UI.PaddedContainer>
      </Menu>
    );
  }
}

export default Index;
