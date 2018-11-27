import styled from 'react-emotion';

import theme from '../theme';

export const SiteWrapper = styled('div')`
  @media (min-width: ${theme.breakPoints.tablet}) {
    padding-left: ${theme.menuWidth};
  }
`;


export const PaddedContainer = styled('div')`
  padding: 30px;
`