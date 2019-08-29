import React from 'react';
import styled from 'styled-components';

import rickImg from '../assets/images/rickmorty.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: darkgreen;
`;

const StyledImg = styled.img`
  height: 800px;
`;

const SomePage = () => (
  <Wrapper>
    <Title>Some page</Title>
    <StyledImg src={rickImg} alt="rick ant morty" />
  </Wrapper>
);

export default SomePage;
