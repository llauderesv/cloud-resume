import {Text} from '../Text';
import {Information} from './styledComponents';

type Prop = {
  title: string;
  text: string;
  date: string;
};

function InfoHeader({title, text, date}: Prop): JSX.Element {
  return (
    <Information>
      <Text fontSize='1.5rem' margin='15px 0' color='#2b6cc2'>
        {title}
      </Text>
      <Text fontSize='15px'>{text}</Text>
      <Text fontSize='15px'>
        <time>{date}</time>
      </Text>
    </Information>
  );
}

export {InfoHeader};
