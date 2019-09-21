import React from 'react';
import styled from 'styled-components';

const SubNavBar = props => {
  const Div = styled.div`
    display: flex;
    flex-direction: row;
    color: black;
    background-color: #f7f7f7;
    justify-content: space-around;
    height: 70px;
    align-items: center;
    padding: 0 250px;
  `;
  return (
    <Div>
      {props.details.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </Div>
  );
};

export default SubNavBar;
