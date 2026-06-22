import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type ExternalLinkProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  children: ReactNode;
  href: string;
};

export function ExternalLink({ children, href, onClick, ...buttonProps }: ExternalLinkProps) {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <button type="button" onClick={handleClick} data-external-link="true" {...buttonProps}>
      {children}
    </button>
  );
}
