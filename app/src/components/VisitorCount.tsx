import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 150px;
  padding: 10px;
  background-color: #2b6cc2;
  text-align: center;

  h3 {
    color: #fff;
  }
`;

type Props = {
  count?: number;
};

function VisitorCount({count = 0}: Props): JSX.Element {
  return (
    <Container>
      <h3>{count.toLocaleString()} views</h3>
    </Container>
  );
}

export {VisitorCount};
