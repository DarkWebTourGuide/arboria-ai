import { useState } from "react";
import Head from "next/head";


export default function Home() {
  const [plantInput, setPlantInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plant: plantInput }),
      });
      const data = await response.json();
      setResult(data.result);
      setPlantInput("");
    } catch (e) {
      alert('Failed to generate plant data.')
    } finally {
      setLoading(false);
    }
  }

  return (
    <div >
      <Head>
        <title>LoreSmith AI</title>
        <link className="" rel="icon" href="/logo.png" />
      </Head>
      <main className="text-center content-center p-5 md:m-20 md:p-20">
        <h3 className="text-6xl mb-3 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-yellow-200 to-red-600">LoreSmith</h3>

        <h6 className="text-sm mt-20 text-[#d9d9e3]">Undergoing maintenaince. Check back later.</h6>
      </main>
    </div>
  );
}
