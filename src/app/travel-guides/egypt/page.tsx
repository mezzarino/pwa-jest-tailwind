import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Guide() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <Header title="Egypt" text="Travel guide on Egypt" />
      </header>
      <section className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-left">
          <p>Content</p>
          <p>
            <Link href="/">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 pr-1" /> Back to guides
              </button>
            </Link>     
          </p>
        </div>
      </section>
    </main>
  );
}
