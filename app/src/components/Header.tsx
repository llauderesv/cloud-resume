import {FC, useState} from 'react';
import styled from 'styled-components';
import {Photo} from './Photo';
import {Text} from './Text';
import Link from './Link';
import Img from './Img';

const HorizontalCenter = styled.span`
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;

  span:not(:last-child) {
    margin-bottom: 3px;
  }

  div:first-child {
    flex: 5;
  }
`;

interface Props {
  gitHub: string;
  email: string;
  address: string;
  mobile: string;
  name: string;
  photoSrc: string;
}

const Header: FC<Props> = ({
  gitHub,
  email,
  address,
  mobile,
  name,
  photoSrc,
}): JSX.Element => {
  const [onShowClipboard, setShowClipboard] = useState(false);
  const [text, setText] = useState(mobile);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text.replace(/\s/gi, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset after 2 seconds
    });
  };

  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <HorizontalCenter>
          <Img
            src={require('../assets/github.svg').default}
            width={18}
            height={18}
            style={{marginRight: '5px'}}
          />
          <Link href={`https://${gitHub}`} target='_blank'>
            {gitHub}
          </Link>
        </HorizontalCenter>
        <HorizontalCenter>
          <Img
            src={require('../assets/email.svg').default}
            width={18}
            height={18}
            style={{marginRight: '5px'}}
          />
          <Link href='#'>{email}</Link>
        </HorizontalCenter>

        <HorizontalCenter
          onMouseEnter={() => setShowClipboard(b => !b)}
          onMouseLeave={() => setShowClipboard(false)}>
          <Img
            src={require('../assets/telephone.svg').default}
            width={18}
            height={18}
            style={{marginRight: '5px'}}
          />
          <Text>{mobile}</Text>
          {onShowClipboard && (
            <>
              <Img
                src={require('../assets/copy.svg').default}
                width={18}
                height={18}
                style={{marginLeft: '5px', cursor: 'pointer'}}
                onClick={handleCopy}
              />
              {copied && (
                <span style={{marginLeft: '10px', color: 'green'}}>Copied!</span>
              )}
            </>
          )}
        </HorizontalCenter>

        <HorizontalCenter>
          <Img
            src={require('../assets/map.svg').default}
            width={18}
            height={18}
            style={{marginRight: '5px'}}
          />
          <Text>{address}</Text>
        </HorizontalCenter>
      </div>
      <Photo src={photoSrc} />
    </Container>
  );
};

export {Header};
