import React from 'react'

function MangaCard(props) {
  return (
    <article className="manga-card">
        <a href={props.manga.url}
            target="_blank"
            rel="noreferrer"
            key={props.manga.mal_id}>
            <figure>
                <img src={props.manga.image_url}
                alt="Manga Image"/>

            </figure>
            <h3>{props.manga.title}</h3>
        </a>
    </article>
  )
}

export default MangaCard