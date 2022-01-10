import React, { useEffect, useState } from "react";
import AnimeRow from "./components/AnimeRow";
import Footer from "./components/Footer";
import "./App.css";
import { getAnimes } from "./services/api";

import Header from "./components/Header";

function App() {
  const [data, setData] = useState([] as any);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAnimeList();
  }, []);

  async function getAnimeList() {
    await getAnimes()
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const setLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <div className="page">
      <Header />
      <AnimeRow animes={data} />
      <Footer />
    </div>
  );
}

export default App;
