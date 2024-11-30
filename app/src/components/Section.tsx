import {FC} from 'react';
import {Title} from './Title';
import {styled} from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  margin-top: 10px;
`;

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Section: FC<Props> = ({title, children}): JSX.Element => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};

export default Section;
