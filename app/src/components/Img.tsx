import {FC} from 'react';

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
}

const Img: FC<Props> = ({width, src, height, ...restProps}) => {
  return <img src={src} width={width} height={height} {...restProps} />;
};

export default Img;
