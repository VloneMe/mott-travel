import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
    btnName: string;
    variant?: string;
    size?: string;
    className?: string
}


export const ButtonA = (
    {
        btnName, variant, size, className
    }: Props
) => {
  return (
    <Button asChild
            // variant={variant}
            //  size={size}
             className={` ${className}`}
    >
        <Link href="/login">{btnName}</Link>
    </Button>
  )
}
