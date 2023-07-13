import Header from "./app/components/header";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <Header title="Offline" text="It looks like you're offline." />
      </header>
    </main>
  )
}
