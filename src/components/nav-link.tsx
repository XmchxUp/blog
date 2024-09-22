import Link, { LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavLink = ({
  children,
  onClick,
  href,
  className,
  ...props
}: NavLinkProps) => {
  return (
    <Link href={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
};
