import styles from "./ButtonLink.module.css";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  inverse?: boolean;
};

export const ButtonLink = ({
  children,
  inverse,
  className,
  ...props
}: Props) => {
  const classNames = [
    "inline-flex",
    "min-h-12",
    "bg-white",
    "text-dark-green",
    "font-bold",
    "relative",
    "p-2",
    "px-8",
    "items-center",
    "justify-center",
    "overflow-hidden",
    "rounded-3xl",
    "border",
    "border-dark-green",
    "transition-all",
    "active:translate-y-[2px]",
    "shadow-dark-green",
    "[box-shadow:0px_2px_1px]",
    "active:shadow-none",
    "text-center",
    "lowercase",
    className,
  ]
    .concat(inverse ? styles.inverse : [])
    .join(" ");

  return (
    <a className={classNames} {...props}>
      {children}
    </a>
  );
};
