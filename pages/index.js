import { useState } from "react";
import Head from "next/head";
import { CubeTransparentIcon, CpuChipIcon, PencilIcon } from "@heroicons/react/24/solid";



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
        <title>Yukio Labs - Models</title>
        <link className="" rel="icon" href="/logo.png" />
        <meta
      name="description"
      content="Beta Release - Explore Advanced AI Models in the Yukio Playground"
    />
      </Head>
      <main className="text-center content-center">
      <h1 className="text-center content-center text-4xl text-gray-100" >Models</h1>
      <div class="container mx-auto px-5 ">
<div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pt-20 lg:pb-20">
            
  <div class="p-6 bg-[#202123] rounded-lg">
              
    <div class="mb-5">
                
      <svg class="hi-outline hi-template inline-block w-12 h-12 text-gray-200" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
      </svg>
              
    </div>
              
    <a class="text-lg font-bold text-green-300 mb-2" href="/arboria">
                Arboria v2.6
              </a>
              
    <p class="text-sm leading-6 text-gray-400">
Botanical data and plant care generator. <br/> Examples: "apple tree, aloe plant, sunflower, etc."
              </p>
            
  </div>
            
  <div class="p-6 bg-[#202123] rounded-lg">
              
    <div class="mb-5">
                
      <svg class="hi-outline hi-cog inline-block w-12 h-12 text-gray-200" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>

    </div>
              
    <a class="text-lg font-bold text-blue-300 mb-2" href="/proteus">
                Proteus (Beta)
              </a>
              
    <p class="text-sm leading-6 text-gray-400">
Powerful model trained on large, broad data sets. Responds to most queries. <br/> Examples: "What is the fastest land animal?"
              </p>
            
  </div>
            
  <div class="p-6 bg-[#202123] rounded-lg">
              
    <div class="mb-5">
                
    <svg class="hi-outline hi-cube inline-block w-12 h-12 text-gray-200" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>           
    </div>
              
    <a class="text-lg font-bold text-red-300 mb-2" href="/loresmith">
                LoreSmith (Beta)
              </a>
              
    <p class="text-sm leading-6 text-gray-400">
Lore/origin generator for fictional characters. Select the options that best match your character.
              </p>
            
  </div>
            
  <div class="p-6 bg-[#202123] rounded-lg">
              
    <div class="mb-5">
                
      <svg class="hi-outline hi-sparkles inline-block w-12 h-12 text-gray-200" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
      </svg>
              
    </div>
              
    <h3 class="text-lg font-bold text-yellow-200 mb-2">
               Notitia (Alpha)
              </h3>
              
    <p class="text-sm leading-6 text-gray-400">
Fine-tuned art generation. <br/> Coming Soon.
              </p>
            
  </div>
          
</div>
</div>
</div>
      </main>
    </div>
  );
}
