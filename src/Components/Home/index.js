import styled from "styled-components";
import GridButton from "./GridButton";
import useSounds from "../../Hooks/useSounds";

export default function Home() {
  const {buttonsList} = useSounds();
  return (
    <Wrapper>
      <Grid>
        {buttonsList.map(({ soundPlay }, index)=> {
          return <GridButton key={index} soundPlay={soundPlay}/>;
        })}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid; 
  width: 400px; 
  height: 400px; 
  border: solid 1px; 
  grid-template-columns: 1fr 1fr;
  padding: 30px; 
  row-gap: 10px; 
  column-gap: 10px; 
  margin: auto;  

  @media (max-width: 640px) {
    width: 350px; 
    height: 350px;
    row-gap: 15px; 
    column-gap: 15px; 
  }
`;