import MacrosCard from "./components/macros-card/macros-card.component";

export default function Home() {
  return (
    <main className="h-screen font-mono">
      <section className="pt-10 flex flex-col h-full items-center">
        <h1 className="text-3xl mb-10">Today</h1>
        <MacrosCard />
      </section>
    </main>
  );
}
