'use client';

import { useFields } from "@/lib/hooks";
import clsx from "clsx";
import Link from "next/link";
import TextField from "../commons/TextField";
import Button from "../commons/Button";

type Props = React.HTMLAttributes<HTMLFormElement> & {
  onLoginClick?: () => void;
};

function RegisterForm({
  className,
  onLoginClick,
  ...props
}: Props) {
  // Hooks
  const input = useFields({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    password_confirm: '',
  });

  // Vars
  const handleSubmit = () => {
    if (!input.fields.username) {
      return input.handleErrorShow('name', `Please enter your name`);
    } else if (!input.fields.username) {
      return input.handleErrorShow('password', `Please enter a username`);
    } else if (!input.fields.password) {
      return input.handleErrorShow('password', `Please enter your password`);
    }

    console.log("Inputs", input.fields);
  };

  return (
    <form
      className={clsx([className])}
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit();
      }}
      autoComplete="off"
      {...props}
    >
      <h3 className="text-lg font-bold uppercase text-center">
        {`Welcome back to Moment`}
      </h3>

      <p className="mt-1 text-center">
        {`Already have an account?`}
        {' '}
        <Link
          href={'/auth/login'}
          className="text-fucosan-pink-dark"
          onClick={(e) => {
            if (onLoginClick) {
              e.preventDefault();

              return onLoginClick();
            }
          }}
        >{`Login`}</Link>
      </p>

      <div className="mt-4">
        {[{
          label: `Name`,
          field: 'name' as keyof typeof input.fields,
        }, {
          label: `Username`,
          field: 'username' as keyof typeof input.fields,
        }].map((item, index) => {
          return (
            <TextField
              key={item.field}
              className={!index ? '' : "mt-2"}
              label={item.label}
              placeholder={item.label}
              value={input.fields[item.field]}
              onChange={(e) => input.handleFieldChange(item.field, e.target.value)}
              error={input.isFieldError(item.field)}
              message={input.error.message}
            />
          );
        })}
      </div>

      <div className="pt-2 flex flex-wrap -mx-2 -my-1">
        {[{
          label: `Email`,
          field: 'email' as keyof typeof input.fields,
        }, {
          label: `Phone`,
          field: 'phone' as keyof typeof input.fields,
        }, {
          label: `Password`,
          field: 'password' as keyof typeof input.fields,
          type: 'password',
        }, {
          label: `Password Confirmation`,
          field: 'password_confirm' as keyof typeof input.fields,
          type: 'password',
        }].map((item, index) => {
          return (
            <div key={item.field} className="basis-1/2 px-2 py-1">
              <TextField
                className="w-full"
                label={item.label}
                placeholder={item.label}
                type={item.type}
                value={input.fields[item.field]}
                onChange={(e) => input.handleFieldChange(item.field, e.target.value)}
                error={input.isFieldError(item.field)}
                message={input.error.message}
              />
            </div>
          );
        })}
      </div>

      <Button
        className="w-full mt-4 !rounded-lg"
        color="fucosan-pink"
      >
        {`Register`}
      </Button>
    </form>
  );
};

export default RegisterForm;
