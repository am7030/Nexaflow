"use client";

import Script from "next/script";

const ELEVENLABS_AGENT_ID = "agent_3601kvb8fmfhefyr8vtj4eh859mn";

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

function findWidgetTrigger() {
  const widget = document.querySelector("elevenlabs-convai");
  return widget?.shadowRoot?.querySelector<HTMLElement>("button") ?? null;
}

export function openAIDemoWidget() {
  const widget = document.querySelector("elevenlabs-convai");
  widget?.scrollIntoView({ behavior: "smooth", block: "end" });

  const trigger = findWidgetTrigger();
  if (trigger) {
    trigger.click();
    return;
  }

  // First click can race the widget's async embed script — poll briefly
  // until its shadow DOM is ready instead of silently doing nothing.
  let attempts = 0;
  const interval = setInterval(() => {
    attempts += 1;
    const retryTrigger = findWidgetTrigger();
    if (retryTrigger) {
      retryTrigger.click();
      clearInterval(interval);
    } else if (attempts >= 20) {
      clearInterval(interval);
    }
  }, 250);
}
