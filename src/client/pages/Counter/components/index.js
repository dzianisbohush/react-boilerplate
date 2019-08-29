import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

import rickImg from 'src/client/pages/Counter/assets/images/rick.png';

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

const CounterPage = ({ counterValue, increaseCounter, decreaseCounter }) => (
  <Wrapper>
    <div>
      <Title>Current value: {counterValue}</Title>
      <Button onClick={decreaseCounter} type="primary">
        Decrease <Icon type="down" />
      </Button>
      <Button onClick={increaseCounter} type="primary">
        Increase <Icon type="up" />
      </Button>
    </div>
    <Link to="/some">go to some page</Link>
    <StyledImg src={rickImg} alt="rick ant morty" />
  </Wrapper>
);

export default CounterPage;
