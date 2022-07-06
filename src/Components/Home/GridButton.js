import styled from "styled-components";

export default function GridButton( { isPlayed = false, soundPlay }) {
  return (
    <Wrapper isPlayed={isPlayed} onClick={soundPlay}></Wrapper>
  )
}; 

const Wrapper = styled.div`
  border-radius: 30px; 
  background: linear-gradient( 45deg, #377D71 0%, #8879B0 100% ); 
  position: relative;
  overflow: hidden; 

&::before {
  border-radius: 30px; 
  position: absolute; 
  content: ""; 
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0; 
  z-index: 0; 
  background: radial-gradient(#377D71 0%, #8879B0 100% ); 
  opacity: 0;
  transition: 0.25s; 
}

&:hover::before {
  opacity: 1; 
}

&:active::before {
  opacity: 1; 
  background: radial-gradient(#FAD4D4 0%, #8879B0 100% ); 
}
`;
