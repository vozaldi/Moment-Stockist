'use client';

import { useFields } from "@/lib/hooks";
import clsx from "clsx";
import Link from "next/link";
import TextField from "../commons/TextField";
import Button from "../commons/Button";
import { useRouter } from "next/navigation";

type Props = React.HTMLAttributes<HTMLFormElement> & {
  onRegisterClick?: () => void;
};

function LoginForm({
  className,
  onRegisterClick,
  ...props
}: Props) {
  // Hooks
  const router = useRouter();

  const input = useFields({
    username: '',
    password: '',
  });

  // Vars
  const handleSubmit = () => {
    if (!input.fields.username) {
      return input.handleErrorShow('username', `Please enter your username`);
    } else if (!input.fields.password) {
      return input.handleErrorShow('password', `Please enter your password`);
    }

    console.log("Inputs", input.fields);

    router.push('/account');
  };

  return (
    <form
      className={clsx([className])}
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit();
      }}
      {...props}
    >
      <h3 className="text-lg font-bold uppercase text-center">
        {`Welcome back to Moment`}
      </h3>

      <p className="mt-1 text-center">
        {`Don't have an account?`}
        {' '}
        <Link
          href={'/auth/register'}
          className="text-fucosan-pink-dark"
          onClick={(e) => {
            console.log("NGENTOT BABI");

            if (onRegisterClick) {
              e.preventDefault();

              return onRegisterClick();
            }
          }}
        >{`Sign up`}</Link>
      </p>

      <div className="mt-4">
        {[{
          label: `Username`,
          field: 'username' as keyof typeof input.fields,
        }, {
          label: `Password`,
          field: 'password' as keyof typeof input.fields,
          type: 'password'
        }].map((item, index) => {
          return (
            <TextField
              key={item.field}
              className={!index ? '' : "mt-2"}
              label={item.label}
              placeholder={item.label}
              type={item.type}
              value={input.fields[item.field]}
              onChange={(e) => input.handleFieldChange(item.field, e.target.value)}
              error={input.isFieldError(item.field)}
              message={input.error.message}
            />
          );
        })}
      </div>

      <Button
        className="w-full mt-4 !rounded-lg"
        color="fucosan-pink"
      >
        {`Login`}
      </Button>
    </form>
  );
};

export default LoginForm;
