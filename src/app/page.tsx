import { Suspense } from "react";
import { Metadata } from "next";

import Header from "./components/header";
import TravelCards from "./components/travel-cards";

export const metadata: Metadata = {
  title: "Travel Guides",
  description: "Our travel guides are jam packed with top tips and insider inspiration.",
};

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <Header title="Travel guides" text="Our travel guides are jam packed with top tips and insider inspiration." />
      </header>
      <section className="py-4 md:py-6 lg:py-8 px-4 lg:px-0 max-w-5xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">

        <Suspense fallback={<p>Loading travel cards...</p>}>
          <TravelCards />
        </Suspense>

      </section>
    </main>
  )
}
