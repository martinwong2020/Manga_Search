import React from 'react'

function Sidebar(props) {
  return (
    <aside>
        <nav>
            <h3>Top Manga</h3>
            {props.topManga.map(manga =>(
                <a 
                    href={manga.url} 
                    target="_blank"
                    rel="noreffer"
                    key={manga.mal_id}
                    >
                    {manga.title}
                </a>
            ))}
            
        </nav>
    </aside>
  )
}

export default Sidebar