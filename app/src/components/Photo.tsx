import {styled} from 'styled-components';

const Container = styled.div`
  flex: 1;

  img {
    border-radius: 100px;
    width: 180px;
    height: 180px;
    border: 1px solid #ddd;
    overflow: hidden;
  }
`;

type Prop = {
  src: string;
};

function Photo({src}: Prop): JSX.Element {
  return (
    <Container>
      <img src={src} />
    </Container>
  );
}

export {Photo};
