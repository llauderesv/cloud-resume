import {Title} from '../Title';
import {StyledSection} from './styledComponent';

type Prop = {
  title?: string;
  children: React.ReactNode;
};

function Section({title, children}: Prop): JSX.Element {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
}

export {Section};
