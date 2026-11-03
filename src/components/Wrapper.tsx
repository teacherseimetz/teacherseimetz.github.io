type Props = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "small";
};

export function Wrapper({ children, className, variant, ...props }: Props) {
  const classNames = [
    variant === "small" ? "max-w-4xl" : "max-w-5xl",
    "px-6 sm:px-10",
    "mx-auto",
    "z-1",
  ]
    .concat(className ?? [])
    .join(" ");

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  );
}
