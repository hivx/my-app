import { Box, styled } from '@mui/material';
import * as React from 'react';
import * as images from '../assets/image';

// // emotion
// const StyledLayout = styled('div')({
//   display: 'flex',
//   width: '100vw',
//   height: '100vh',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundImage: `url(${background})`,
// });
type LayoutProps = {
  children: React.ReactNode;
};

const ContentLayout = styled(Box)`
  background-color: ${(props) => props.theme.palette.background.paper};
`;


// styled-component
const StyledLayout = styled(ContentLayout)`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${images.background});
`;

export const AuthLayout = ({children}: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};
