import Header from "../components/header";

export default function Offline() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <Header title="Offline" text="It looks like you are offline." />
      </header>
    </main>
  )
}
