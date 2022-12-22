import { useState } from "react";
import Head from "next/head";


export default function Home() {
  const [deepDataInput, setDeepDataInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();

    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/proteus_engine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deepData: deepDataInput }),
      });
      const data = await response.json();
      setResult(data.result);
      setDeepDataInput("");
    } catch (e) {
      alert('Failed to generate data.')
    } finally {
      setLoading(false);
    }
  }

  return (
    <div >
      <Head>
        <title>Proteus AI</title>
        <link className="" rel="icon" href="/logo.png" />
      </Head>
      <main className="text-center content-center p-5 md:m-20 md:p-20">
        <h3 className="text-6xl mb-3 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">Project Proteus</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="deepData"
            placeholder="How did the universe begin?"
            value={deepDataInput}
            onChange={(e) => setDeepDataInput(e.target.value)}
          />
          <input className="mt-5" type="submit" value=">" />
        </form>

        {loading && (
          <div>
            <img className="object-center mx-auto" src="/cattyping.gif" />
          </div>
        )}
        <div className="mt-5 text-white">{result}</div>

        <br />
        <h6 className="text-sm mt-20 text-[#d9d9e3]">Powerful model trained on broad sets of data.<br/> Developed by <a href="https://chrisadams.io" target='_blank'>ChrisAdams.io</a> for Yukio Labs</h6>
      </main>
    </div>
  );
}
