import Link from "next/link";
import cn from "classnames";

export default function NavLink({
  isSelected,
  isMobile,
  isBanner,
  href,
  children,
  ...rest
}) {
  const className = cn(
    rest.className,
    "text-white rounded-md px-3 py-2 font-medium",
    {
      "bg-green-600 rounded-lg": isSelected,
      "text-gray-300 hover:bg-gray-700 hover:text-white":
        !isSelected && !isBanner,
      "block text-base": isMobile,
      "text-sm": !isMobile,
      "text-green-600 text-lg": isBanner,
    }
  );

  if (!href) {
    return (
      <span className={className} role="button" onClick={rest.onClick}>
        {children}
      </span>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

// pasabot anang ...rest is if naay uban nga props then e apil like onCLick
