import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

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
    <div>
      <Head>
        <title>Arboria.AI</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.sidebar}>
  <a href="https://yukiolabs.com">Home</a>
  <a href="https://yukiolabs.com/research">Arborea.AI</a>
  <a href="https://beta.openai.com/docs/introduction" target='_blank'>Docs | API info ↗</a>
</div>
      <main className={styles.main}>
        <img src="/logo.png"  />
        <h3>Arboria v2.6</h3>
        <p className={styles.statement}>Arborea is a generative Artificial Intelligence model.</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="plant"
            placeholder="Enter a plant"
            value={plantInput}
            onChange={(e) => setPlantInput(e.target.value)}
          />
          <input type="submit" value="Generate botanical data" />
        </form>

        {loading && (
          <div>
            <img src="/loading.gif" />
          </div>
        )}
        <div className={styles.result}>{result}</div>

        <br />
        <br />
        <h6>Our v2.6 model is fine-tuned with more weights regarding botanical information and utilizes the OpenAI API with the Danvinci engine.<br/> Developed by <a href="https://chrisadams.io" target='_blank'>ChrisAdams.io</a> for Yukio Labs</h6>
      </main>
    </div>
  );
}
