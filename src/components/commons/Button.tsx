import clsx from "clsx";
import Link from "next/link";

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonBaseProps = 
  | ({ type: 'link' } & React.ComponentProps<typeof Link>)
  | ({ type?: HTMLButtonProps['type'] } & Partial<HTMLButtonProps>);

type Props = ButtonBaseProps & {
  color?: 'transparent' | 'primary' | 'secondary' | 'fucosan-pink' | 'fucosan-pink-dark';
  size?: 'default' | 'sm' | 'xs' | number;
  border?: boolean;
};

function Button(props: Props) {
  // Props
  const { color = 'transparent', size = 'default', border = false, ...rest } = props;

  // Vars
  const classNames = clsx([
    { 'rounded-full': !props.className?.includes('rounded') },
    color === 'primary' && 'bg-primary text-white hover:bg-primary/80',
    color === 'secondary' && 'bg-secondary text-white hover:bg-secondary/80',
    color === 'fucosan-pink' && 'bg-fucosan-pink text-white hover:bg-fucosan-pink/80',
    color === 'fucosan-pink-dark' && 'bg-fucosan-pink-dark text-white hover:fucosan-pink-dark/80',
    size === 'default' && 'py-3 px-6',
    size === 'sm' && 'py-2 px-4 text-sm',
    size === 'xs' && 'py-1 px-2 text-xs',
    'number' === typeof size && `flex items-center justify-center`,
    !!border && 'ring-2 ring-primary border-2 border-white',
  ]);

  return rest.type === 'link' ? (
    <Link
      {...rest}
      className={clsx([classNames, props.className])}
      {...('number' !== typeof size ? {} : {
        style: { width: size, height: size, ...rest.style },
      })}
    />
  ) : (
    <button
      {...rest}
      className={clsx([classNames, props.className])}
      {...('number' !== typeof size ? {} : {
        style: { width: size, height: size, ...rest.style },
      })}
    />
  );
};

export default Button;
