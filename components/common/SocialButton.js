"use client";
import cn from "classnames";

export default function SocialButton({ provider, children, ...rest }) {
  const className = cn(
    "w-full rounded-full px-3 mt-3 py-3 font-medium border border-gray-300",
    {
      "bg-white-500 hover:border-gray-400": provider === "google",
      "bg-blue-500 hover:bg-blue-400 border-none": provider === "facebook",
    }
  );
  const spanClassName = cn(
    "flex w-full justify-center items-center gap-3 text-sm",
    {
      "text-gray-600": children[1] === "Sign in with Google",
      "text-white": children[1] === "Facebook",
    }
  );

  // console.log(children);
  return (
    <button className={className} {...rest}>
      <span className={spanClassName}>{children}</span>
    </button>
  );
}
