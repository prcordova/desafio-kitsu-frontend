import React, { useEffect, useState } from "react";
import { getAnimes } from "../services/api";

import "./AnimeRow.css";
import "../App.css";

const AnimeList = () => {
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
      <section className="lists">
        <div className="animeRow">
          <h2>Titulo teste</h2>
          <div className="animeRow--left">
            <h1>Left</h1>
          </div>
          <div className="animeRow--right">
            <h1>Right</h1>
          </div>
          <div className="animeRow--listarea">
            <div className="animeRow--list">
              {data.map((anime: any) => (
                <div key={anime.id}>
                  <div className="animeRow--listarea">
                    <div>
                      <div className="animeRow--item">
                        <img src={anime.attributes.coverImage?.original} />
                      </div>

                      <p>{anime?.results?.slug}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AnimeList;
