import { useContext, useEffect, useState } from "react";
import { ModalStyled } from "../../styles/ModalStyled";
import { getAnime } from "../../services/api";
import "./Modal.css";

export const Modal = (props: any) => {
  const [selectedAnime, setSelectedAnime] = useState({} as any);

  useEffect(() => {
    getSelectedAnime(props.id);
  }, []);

  const getSelectedAnime = (id: number) => {
    getAnime(id).then((response: any) => {
      setSelectedAnime(response.data.data);
      console.log(response.data.data);
    });
  };

  return (
    <ModalStyled>
      <div className="body">
        <div className="container-modal">
          <div className="modal-img">
            <img src={selectedAnime.attributes?.coverImage?.original} />
          </div>

          <div className="animes-infos">
            <h1>{selectedAnime?.attributes?.abbreviatedTitles}</h1>
            <p>Posição : {selectedAnime.attributes?.popularityRank}</p>
            <span>Avaliação: {selectedAnime.attributes?.averageRating}</span>
            <p>Capítulos/Episódios:{selectedAnime.attributes?.episodeCount}</p>
            <div className="anime-sinopse">
              <p>Sinopse : {selectedAnime.attributes?.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </ModalStyled>
  );
};
