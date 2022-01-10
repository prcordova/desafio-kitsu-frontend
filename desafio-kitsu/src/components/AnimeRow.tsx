import React, { useEffect, useState } from "react";
import { getAnimes } from "../services/api";
import { Modal } from "../components/Modal/Modal";
import { Anime } from "./models/Anime";

import "./AnimeRow.css";
import "../App.css";

const AnimeList = (data: Anime) => {
  const [animes, setAnimes] = useState([] as any);
  const [selectedId, setSelectedId] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setAnimes(data.animes);
    console.log(data);
  }, [data.animes]);

  const handleModal = (isVisible: boolean, id: number = 0) => {
    setSelectedId(id);
    setIsModalVisible(isVisible);
  };

  return (
    <>
      <div className="container ">
        {isModalVisible && (
          <div
            className={isModalVisible ? "out-modal" : "invisible"}
            onClick={() => {
              handleModal(false);
            }}
          >
            <Modal id={selectedId} />
          </div>
        )}
        <h1>Animes mais populares</h1>
        <div className="container-animes">
          {animes?.map((anime: any) => (
            <div
              className="anime-row__item"
              key={anime.id}
              onClick={() => {
                handleModal(true, anime.id);
              }}
            >
              <img src={anime.attributes.coverImage?.original} />

              {/* <p>{anime?.attributes?.slug}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AnimeList;
