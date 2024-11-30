import {FC} from 'react';
import styled from 'styled-components';
import Img from './Img';

const StyledToggleTheme = styled.span`
  position: fixed;
  top: 20px;
  right: 0;
  min-width: 150px;
  padding: 10px;
  text-align: center;
  z-index: 99999;
`;

interface ToggleThemeProps {
  onClick: () => void;
  theme: string;
}
const ToggleTheme: FC<ToggleThemeProps> = ({onClick}): JSX.Element => {
  return (
    <StyledToggleTheme onClick={onClick} style={{cursor: 'pointer'}}>
      <Img src={require('../assets/dark-theme.svg').default} width={40} height={40} />
    </StyledToggleTheme>
  );
};

export default ToggleTheme;
