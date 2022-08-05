import React from 'react'

function MangaCard(props) {
  return (
    <article className="manga-card">
        <a href={props.manga.url}
            target="_blank"
            rel="noreferrer"
            key={props.manga.mal_id}>
            <figure>
                <img src={props.manga.images.jpg.image_url}
                alt="Manga Image"/>

            </figure>
            <h3 className="manga_search_text">{props.manga.title}</h3>
        </a>
    </article>
  )
}

export default MangaCard