import {Photo} from '../Photo';
import {Text} from '../Text';
import {Link} from '../Link';
import {Name, Container} from './styledComponents';

type Prop = {
  gitHub: string;
  email: string;
  address: string;
  mobile: string;
  name: string;
  photoSrc: string;
};

function Header({gitHub, email, address, mobile, name, photoSrc}: Prop): JSX.Element {
  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <Text>{address}</Text>
        <Text>{mobile}</Text>
        <Link href='#'>{email}</Link>
        <Link href='#'>{gitHub}</Link>
      </div>
      <Photo src={photoSrc} />
    </Container>
  );
}

export {Header};
