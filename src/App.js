import Header from "./components/Header";
import {useState, useEffect} from 'react';
import Sidebar from"./components/Sidebar";
import MainContent from "./components/MainContent";
import ManhuaBar from "./components/ManhuaBar";

function App() {
  //display of the manga on the home page
  const[mangalist,SetMangaList] = useState([])
  //display of the manga on the search result
  const[topManga, SetTopManga] = useState([])
  //grabs the user search
  const[topManhua,SetTopManhua]=useState([]);
  const [search, SetSearch] = useState("");

  const GetTopManga = async()=>{
    
    const temp= await fetch("https://api.jikan.moe/v4/top/manga?filter=bypopularity")
      // .then(res=> res.json());
      // .then(function(result){
      //   result1= await result.json();
      //   console.log(result1);
      // })
      let result= await temp.json()
      
      //slices the json for the top 10 manga out of 50
      console.log(result);
      SetTopManga(result.data.slice(0,10));
  }
  const GetTopManhua= async()=>{
    const url = await fetch("https://api.jikan.moe/v4/top/manga?type=manhua")
    let result=await url.json();
    SetTopManhua(result.data.slice(0,10));
    console.log("mh",result);
  }
  console.log(topManga);
  //e stands for event
  const HandleSearch= e =>{
    //grabs the form submission and prevent page refresh
    e.preventDefault();
    FetchManga(search);
  }

  const FetchManga = async(query) =>{
    const url=await fetch('https://api.jikan.moe/v4/manga?q='+query);
    let url_result = await url.json()

    //   .then(res=>res.json());
    // SetMangaList(url_result);
    url_result=url_result.data.slice(0,5);
    SetMangaList(url_result);
    console.log("S",url_result);
  }
  useEffect(()=>{
    GetTopManga()
    .then(()=>
    {
      setTimeout(GetTopManhua,1000);
    })
  },[]);
  
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <MainContent 
          HandleSearch={HandleSearch}
          search={search}
          mangalist={mangalist}
          SetSearch={SetSearch}
        />
        <div className="margin"></div>
        <Sidebar
          topManga={topManga}
        />
        <div className="margin"></div>
        <ManhuaBar
          topManhua={topManhua}
        />
        <div className="margin"></div>
      </div>
    </div>
  );
}

export default App;
