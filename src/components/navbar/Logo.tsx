import Image from 'next/image';
import logo from '/public/images/mott-logo.png';

interface Props {
    width?: string;
    height?: string
}

export const Logo = (
    { width, height }: Props
) => {
  return (
    <Image  src={logo}
            alt='Mott Logo'
            height={75}
            width={75}
    />
  )
}
