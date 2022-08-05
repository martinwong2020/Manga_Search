import React from 'react'
import MangaCard from './MangaCard'
import {useState, useEffect,useRef} from 'react';
function autoslide(){
  setTimeout(autoslide,5000);
  addSlide(1);
  
}
let slideIndex=1;
function addSlide(n){
  console.log(slideIndex);
  showSlide(slideIndex+=n);
}
function showSlide(n){
  let slide=document.getElementsByClassName("slide_container");
  if(n>slide.length){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=slide.length;
  }
  // slide[0].classList.add("displaynone");
  // if(slide[0].classList.contains(""))
  for(let i=0;i<slide.length;i++){
    if(i+1==slideIndex){
      slide[i].classList.remove("displaynone");
      slide[i].classList.add("displayblock");
    }
    else{
      if(slide[i].classList.contains("displayblock")){
        slide[i].classList.remove("displayblock");
        slide[i].classList.add("displaynone");
      }
    }
  }
  
}
setTimeout(autoslide,5000);
function Sidebar(props) {
  
  return (
    <aside>
        <nav>
            <h3 className="top_manga">Top Manga</h3>
            <br></br>
              {props.topManga.map((manga,index) =>{
                if(index==0){
                  return(
                    <div className="slide_container displayblock">
                      <div className="slides">
                        <a 
                          href={manga.url} 
                          target="_blank"
                          rel="noreffer"
                          key={manga.mal_id}
                          >
                          <img src={manga.images.jpg.image_url} className="top_manga_img"/>
                        </a>
                      </div>
                      <div className="caption">
                          <h1 className="caption_title">{manga.title_japanese} ({manga.title_english})</h1>
                          <hr></hr>
                          <br></br>
                          <p className="manga_info">{manga.synopsis}</p>
                          <br></br>
                          <p className="manga_info">User Ratings: {manga.score}</p>
                          <br></br>3
                          <p className="manga_info">Volumes Out/Chapters: {manga.volumes}/{manga.chapters}</p>
                          <br></br>
                          <p className="manga_info">Manga Status: {manga.status}</p>
                      </div>
                      <a className="prev" onClick={()=>{
                        addSlide(-1);
                      }}>&#10094;</a>
                      <a className="next" onClick={()=>{
                        addSlide(1);
                      }} >&#10095;</a>
                    </div>            
                  )
                }
                else{
                  return(
                    <div className="slide_container displaynone">
                      <div className="slides">
                        <a 
                          href={manga.url} 
                          target="_blank"
                          rel="noreffer"
                          key={manga.mal_id}
                          >
                          <img src={manga.images.jpg.image_url} className="top_manga_img"/>
                        </a>
                      </div>
                      <div className="caption">
                          <h1 className="caption_title">{manga.title_japanese} ({manga.title_english})</h1>
                          <hr></hr>
                          <br></br>
                          <p className="manga_info">{manga.synopsis}</p>
                          <br></br>
                          <p className="manga_info">User Ratings: {manga.score}</p>
                          <br></br>
                          <p className="manga_info">Volumes Out/Chapters: {manga.volumes}/{manga.chapters}</p>
                          <br></br>
                          <p className="manga_info">Manga Status: {manga.status}</p>
                      </div>
                      <a className="prev" onClick={()=>{
                        addSlide(-1);
                      }}>&#10094;</a>
                      <a className="next" onClick={()=>{
                        addSlide(1);
                      }} >&#10095;</a>
                    </div>  
                  )
                }
              })}      
        </nav>
    </aside>
    
  )
}

export default Sidebar