import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "rel" | "target"> & {
  children: ReactNode;
  href: string;
};

export function ExternalLink({ children, href, ...anchorProps }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" data-external-link="true" {...anchorProps}>
      {children}
    </a>
  );
}
