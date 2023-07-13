"use client"

import { useState, useEffect } from "react";
import Header from "../../components/header";

export default function Guide() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);


    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return (
    <main className="flex flex-col justify-between">
      <header>
        <Header title="Australia" text="Travel guide on Australia" />
      </header>
      <section className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-left">
          {!isOnline && (
            <h2>You are offline and are viewing a saved version of this guide.</h2>
          )}
          <p>Content</p>
        </div>
      </section>
    </main>
  );
}
