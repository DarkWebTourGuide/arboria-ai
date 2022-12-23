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
      const response = await fetch("/api/arboria_engine", {
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
        <title>Yukio Labs - Arboria</title>
        <link className="" rel="icon" href="/logo.png" />
      </Head>
      <main className="text-center content-center p-5 md:m-20 md:p-20">
        <h3 className="text-6xl mb-3 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-green-200 to-green-600">Arboria v2</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="plant"
            placeholder="Ex: Aloe, Avocado tree, Orchid"
            value={plantInput}
            onChange={(e) => setPlantInput(e.target.value)}
          />
          <br />
          <input className="mt-5" type="submit" value="🔍" />
        </form>

        {loading && (
          <div>
            <img className="object-center mx-auto" src="/loading.gif" />
          </div>
        )}
        <div className="mt-5 text-white">{result}</div>

        <br />
        <h6 className="text-sm mt-20 text-[#d9d9e3]">This model is fine-tuned with botanical care information.<br/> Developed by <a href="https://chrisadams.io" target='_blank'>ChrisAdams.io</a> for Yukio Labs</h6>
      </main>
    </div>
  );
}
