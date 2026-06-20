# NexaFlow

Marketing site for **NexaFlow** — the AI voice receptionist for auto repair
shops and home service businesses.

Single-page Next.js + Tailwind site: hero (with the brand transformation
video), the problem/solution story, how it works, target verticals,
features, pricing, FAQ, and a get-started form.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — assembles all sections
- `src/components/` — one component per section (`Hero`, `Story`,
  `HowItWorks`, `WhoItsFor`, `Features`, `Pricing`, `Faq`, `ContactForm`)
- `public/videos/hero-transform.mp4` — brand animation used in the hero

## Build

```bash
npm run build
```
