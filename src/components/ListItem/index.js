import React, { Component } from 'react';
import styled from 'react-emotion';
import theme from '../../theme';

const ListItem = styled('div')`
  min-height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid black;
  font-size: 12px;
  font-family: sans-serif;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s ease;
  opacity: 0.15;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const ItemSection = styled('div')`
  display: flex;
  align-items: center;
`;

const ItemIndex = styled('span')`
  margin-right: 8px;
  font-size: ${theme.fontSizes.xsmall};
  font-family: ${theme.fonts.mono};
`;

const Meta = styled('div')`
  margin-left: 8px;
  width: 50px;

  text-align: right;
  font-size: ${theme.fontSizes.xsmall};
`;

export default class Index extends Component {
  render() {
    const formattedIdx =
      this.props.num < 9
        ? `0${parseInt(this.props.num) + 1}`
        : parseInt(this.props.num) + 1;
    return (
      <ListItem
        onClick={() => this.props.handleClick()}
        onMouseLeave={() => this.props.handleMouseLeave()}
        onMouseEnter={() => this.props.handleMouseEnter()}
      >
        <ItemSection>
          <ItemIndex>{formattedIdx}</ItemIndex> {this.props.title}
        </ItemSection>
        <ItemSection>
          <Meta>{this.props.meta}</Meta>
        </ItemSection>
      </ListItem>
    );
  }
}
