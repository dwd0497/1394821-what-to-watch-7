import React from 'react';
import { ReactComponent as Loader } from './loader.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #828282;
`;

function Loading() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}

export default Loading;
