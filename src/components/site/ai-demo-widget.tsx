"use client";

import Script from "next/script";

const ELEVENLABS_AGENT_ID = "3601kvb8fmfhefyr8vtj4eh859mn";

export function AIDemoWidget() {
  return (
    <>
      <elevenlabs-convai agent-id={ELEVENLABS_AGENT_ID} />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        async
        type="text/javascript"
      />
    </>
  );
}

export function openAIDemoWidget() {
  const widget = document.querySelector("elevenlabs-convai");
  if (!widget) return;
  widget.scrollIntoView({ behavior: "smooth", block: "end" });
  const trigger = widget.shadowRoot?.querySelector<HTMLElement>("button");
  trigger?.click();
}
