import React from 'react'
import MangaCard from './MangaCard'

function MainContent(props) {
  return (
    <main>
        <div className="main-head">
            <form className="search-box" onSubmit={props.HandleSearch}>
                <input 
                    type="search"
                    placeholder="Search your manga"
                    required
                    value={props.search}
                    onChange={e=>props.SetSearch(e.target.value)}
                />
                
            </form>
        </div>
        <div className="manga-list">
            {props.mangalist.map(manga=>(
                <div className="manga-card">
                    <MangaCard
                        manga={manga}
                        key={manga.mal_id}
                    />
                </div>
            ))}
        </div>
    </main>
  )
}

export default MainContent