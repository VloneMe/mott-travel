import Image from 'next/image';
import logo from '/public/images/mott-logo.png';

interface Props {
    width?: string;
    height?: string;
    className?: string;
}

export const Logo = (
    { width, height, className }: Props
) => {
  return (
    <Image  src={logo}
            alt='Mott Logo'
            height={75}
            width={75}
            className={` ${className}`}
    />
  )
}
