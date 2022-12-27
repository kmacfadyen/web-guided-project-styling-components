import React from 'react'
import styled, { keyframes } from 'styled-components';

/* 
.friend {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
ease-in-out will change the speed at which an effect takes place, ex hover color change
key frames allow you to said styling end points
*/

const kf = keyframes`
50% {
  transform: scale(0.8);
  }
100% {
  transform: scale(1);
  opacity: 1;
  }
`

const StyledFriend = styled.div `
width: 60%;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid white;

background-color: ${pr => pr.theme.primaryColor};
color: ${pr => pr.theme.white};

transition: all 0.2s ease-in-out;         
&:hover {                                   
  transition: all 0.2 ease-in-out;
  background-color: ${pr => pr.theme.secondaryColor};
}

&::before {
  content: "${pr => pr.besty ? "Y" : "N" }";
}

button {
  background-color: ${pr => pr.theme.tertiaryColor};
  &:hover {
    transform: scale(1.2);
  }
}

transform: scale(2);                            // start of the animation!
opacity: 0;                                     // start of animation! will be fully opaque
animation: ${kf} 0.3s ease-in-out forwards;     // 
`

export default function Friend({ info, action, besty }) {
  return (
    <StyledFriend besty={besty}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledFriend>
  )
}
