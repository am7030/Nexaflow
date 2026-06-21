export const AI_DEMO_PHONE_E164 = "+15405592171";
export const AI_DEMO_PHONE_DISPLAY = "(540) 559-2171";

export const DEFAULT_BOOKING_MESSAGE = "Hi, I'd like to book a demo of NexaFlow.";

const WHATSAPP_DIGITS = AI_DEMO_PHONE_E164.replace("+", "");

export function buildWhatsAppUrl(message: string = DEFAULT_BOOKING_MESSAGE) {
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
}
