import Link, { LinkProps } from "next/link";
import React, { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children?: React.ReactNode;

  href?: LinkProps["href"];
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  href,
}) => {
  return (
    <>
      {href ? (
        <Link href={href} className="grid">
          <button
            className={twMerge(
              "rounded-xl bg-zinc-500 px-4 py-2 font-bold text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-800",
              className,
            )}
            onClick={onClick}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={twMerge(
            "rounded-xl bg-zinc-500 px-4 py-2 font-bold text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-800",
            className,
          )}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
