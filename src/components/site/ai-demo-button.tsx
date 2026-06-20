"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { Phone } from "@phosphor-icons/react";
import { openAIDemoWidget } from "@/components/site/ai-demo-widget";

export function AIDemoButton({ className, variant, size, ...props }: ButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={openAIDemoWidget}
      {...props}
    >
      <Phone className="size-4" weight="bold" />
      Talk to our AI
    </Button>
  );
}
