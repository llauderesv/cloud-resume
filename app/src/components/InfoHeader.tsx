import {FC} from 'react';
import {Text} from './Text';
import styled from 'styled-components';

const Active = styled.span`
  margin-left: 5px;
  width: 10px;
  height: 10px;
  background-color: #31b373;
  border-radius: 100%;
`;

export const Information = styled.div`
  font-family: 'Roboto-Regular';
  font-weight: 100;
  font-size: 18px;
  color: #303030;
`;

interface Props {
  title: string;
  text: string;
  date: string;
  active?: boolean;
}

const InfoHeader: FC<Props> = ({title, text, date, active}): JSX.Element => {
  return (
    <Information>
      <span style={{display: 'flex', alignItems: 'center'}}>
        <Text fontSize='1rem' color='#2789ae'>
          {title}
        </Text>
        <span style={{margin: '0 5px', fontWeight: '500'}} color='#888888'>
          |
        </span>
        <Text fontSize='1rem'>{text}</Text>
        {active && <Active />}
      </span>
      <Text fontSize='14px'>
        <time>{date}</time>
      </Text>
    </Information>
  );
};

export default InfoHeader;
