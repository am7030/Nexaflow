import type { ReactNode } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Button, type ButtonProps } from "@/components/ui/button";
import { buildWhatsAppUrl, DEFAULT_BOOKING_MESSAGE } from "@/lib/contact";

type BookDemoButtonProps = {
  message?: string;
  children?: ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

export function BookDemoButton({
  message = DEFAULT_BOOKING_MESSAGE,
  children,
  className,
  variant,
  size,
}: BookDemoButtonProps) {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
        <WhatsappLogo className="size-4" weight="bold" />
        {children ?? "Book a Demo"}
      </a>
    </Button>
  );
}
