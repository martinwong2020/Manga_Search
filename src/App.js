import Header from "./components/Header";
import {useState, useEffect} from 'react';
import Sidebar from"./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  //display of the manga on the home page
  const[mangalist,SetMangaList] = useState([])
  //display of the manga on the search result
  const[topManga, SetTopManga] = useState([])
  //grabs the user search
  const [search, SetSearch] = useState("");

  const GetTopManga = async()=>{
    const temp= await fetch("https://api.jikan.moe/v3/top/manga/1/bypopularity")
      .then(res=> res.json());
      //slices the json for the top 5 manga out of 50
      SetTopManga(temp.top.slice(0,5))
  }

  //e stands for event
  const HandleSearch= e =>{
    //grabs the form submission and prevent page refresh
    e.preventDefault();
    FetchManga(search);
  }

  const FetchManga = async(query) =>{
    const url=await fetch('https://api.jikan.moe/v3/search/manga?q='+query+'&order_by=title&sort=asc&limit=10')
      .then(res=>res.json());
    SetMangaList(url.results);
  }
  useEffect(()=>{
    GetTopManga();
 
  },[]);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar
          topManga={topManga}
        />

        <MainContent 
          HandleSearch={HandleSearch}
          search={search}
          mangalist={mangalist}
          SetSearch={SetSearch}
        />
      </div>
    </div>
  );
}

export default App;
