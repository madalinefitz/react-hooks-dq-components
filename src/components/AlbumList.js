import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
    const albumComponents = albums.map(album => {
      return <AlbumCard name={album.name} image={album.image} genre={album.genre} />
    })
  return (
    <section className="albums">
      
      {albumComponents}
      
    </section>
  );
}

export default AlbumList;
