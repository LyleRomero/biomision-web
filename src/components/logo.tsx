import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/Logo/Logo.png"
      alt="AG Ingeniería"
      width={140}
      height={40}
      className={className}
      priority
    />
  );
}
