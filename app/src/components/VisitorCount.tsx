import {FC} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 150px;
  padding: 10px;
  background-color: #2789ae;
  text-align: center;
  z-index: 99999;

  h3 {
    font-weight: 500;
    color: #fff;
  }
`;

interface Props {
  count?: number;
}

const VisitorCount: FC<Props> = ({count = 0}): JSX.Element => {
  return (
    <Container>
      <h3>{count.toLocaleString()} views</h3>
    </Container>
  );
};

export default VisitorCount;
