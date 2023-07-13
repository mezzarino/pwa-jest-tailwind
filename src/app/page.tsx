import Header from "./components/header";
import Card from "./components/card"
import { cardData } from "./constants/card-data";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <Header title="Travel guides" text="Our travel guides are jam packed with top tips and insider inspiration." />
      </header>
      <section className="py-4 md:py-6 lg:py-8 px-4 lg:px-0 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6">

      {cardData.map((card) => (
        <Card key={card.id} imageSrc={card.imageSrc} imageAlt={card.imageAlt} title={card.title} link={card.link} />
      ))}

      </section>
    </main>
  )
}
