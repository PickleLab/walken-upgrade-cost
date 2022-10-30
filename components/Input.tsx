import { FC } from "react";

import classNames from "classnames";

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div
      className={classNames("py-4 relative flex-1 text-default", {
        "!text-gray": props.disabled,
      })}
    >
      <label className="absolute bg-white text-xs left-3 top-2 px-2 font-semibold uppercase leading-2">
        {label}
      </label>
      <input
        className="input border-whitesmoke focus:outline-none focus:border-primary w-full bg-transparent"
        {...props}
      />
    </div>
  );
};
