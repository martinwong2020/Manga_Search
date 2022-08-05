import React from 'react'
function autoslide(){
    setTimeout(autoslide,5000);
    addSlide(1);
    
  }
let slideIndex=1;
function addSlide(n){
    console.log("click");
    showSlide(slideIndex+=n);
}
function showSlide(n){
    let slide=document.getElementsByClassName("manhua_container");
    if(n>slide.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slide.length;
    }
    for(let i=0;i<slide.length;i++){
        if(i+1==slideIndex){
            slide[i].classList.remove("manhua_none");
            slide[i].classList.add("manhua_block");
        }
        else{
            if(slide[i].classList.contains("manhua_block")){
                slide[i].classList.remove("manhua_block");
                slide[i].classList.add("manhua_none");
            }
        }
    }
}
setTimeout(autoslide,5000);
function ManhuaBar(props) {
  return (
    <aside>
        <h3 className="top_manhua">Top Manhua</h3>
        <br></br>
        {props.topManhua.map((manhua,index)=>{
            if(index==0){
                return(
                    <div className="manhua_container manhua_block">
                        <div className="manhua_slide">
                            <a 
                            href={manhua.url} 
                            target="_blank"
                            rel="noreffer"
                            key={manhua.mal_id}
                            >
                            <img src={manhua.images.jpg.image_url} className="top_manga_img"/>
                            </a>
                        </div>
                        <div className="caption">
                          <h1 className="caption_title">{manhua.title} ({manhua.title_english})</h1>
                          <hr></hr>
                          <br></br>
                          <p className="manga_info">{manhua.synopsis}</p>
                          <br></br>
                          <p className="manga_info">User Ratings: {manhua.score}</p>
                          <br></br>
                          <p className="manga_info">Volumes Out/Chapters: {manhua.volumes}/{manhua.chapters}</p>
                          <br></br>
                          <p className="manga_info">Manga Status: {manhua.status}</p>
                      </div>
                      <a className="prev_manhua" onClick={()=>{
                           addSlide(-1);
                       }}>&#10094;</a>
                      <a className="next_manhua" onClick={()=>{
                           addSlide(1);
                      }} >&#10095;</a>
                    </div>
                )
            }
            else{
                return(
                    <div className="manhua_container manhua_none">
                        <div className="manhua_slide">
                            <a 
                            href={manhua.url} 
                            target="_blank"
                            rel="noreffer"
                            key={manhua.mal_id}
                            >
                            <img src={manhua.images.jpg.image_url} className="top_manga_img"/>
                            </a>
                        </div>
                        <div className="caption">
                          <h1 className="caption_title">{manhua.title} ({manhua.title_english})</h1>
                          <hr></hr>
                          <br></br>
                          <p className="manga_info">{manhua.synopsis}</p>
                          <br></br>
                          <p className="manga_info">User Ratings: {manhua.score}</p>
                          <br></br>
                          <p className="manga_info">Volumes Out/Chapters: {manhua.volumes}/{manhua.chapters}</p>
                          <br></br>
                          <p className="manga_info">Manga Status: {manhua.status}</p>
                      </div>
                      <a className="prev_manhua" onClick={()=>{
                           addSlide(-1);
                       }}>&#10094;</a>
                      <a className="next_manhua" onClick={()=>{
                           addSlide(1);
                      }} >&#10095;</a>
                    </div>
                )
            }
        })}
    </aside>
  )
}

export default ManhuaBar