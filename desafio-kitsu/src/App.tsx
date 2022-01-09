import React, { useEffect, useState } from "react";
import AnimeRow from "./components/AnimeRow";
import Footer from "./components/Footer";
import "./App.css";
import { getAnimes } from "./services/api";

import Header from "./components/Header";

function App() {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    getAnimeList();
  }, []);

  async function getAnimeList() {
    await getAnimes()
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(data);
      });
  }

  return (
    <>
      <div className="page">
        <Header />
        <section className="lists">
          {data.map(() => (
            <AnimeRow />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
