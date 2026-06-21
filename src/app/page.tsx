import { Navbar } from "@/components/site/navbar";
import { ScrollStory } from "@/components/site/scroll-story";
import { EverythingElse } from "@/components/site/everything-else";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ScrollStory />
        <EverythingElse />
      </main>
      <Footer />
    </>
  );
}
