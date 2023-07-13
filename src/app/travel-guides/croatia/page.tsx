import Header from "../../components/header";

export default function Guide() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <Header title="Croatia" text="Travel guide on Croatia" />
      </header>
      <section className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-left">
          <p>Content</p>
        </div>
      </section>
    </main>
  );
}
