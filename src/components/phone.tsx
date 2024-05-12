import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...rest }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...rest}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        width={300}
        height={300}
        alt="Phone template"
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover min-w-screen min-h-screen"
          src={imgSrc}
          width={300}
          height={300}
          alt="Overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;
