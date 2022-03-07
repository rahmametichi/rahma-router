import React,{useState} from 'react'
import AddMovie from './Component/AddMovie/AddMovie';
import MovieList from './Component/MovieList/MovieList';
import NavBar from './Component/NavBar/NavBar'
import { v4 as uuidv4} from'uuid';
import MovieDetails from './Component/MovieDetails/MovieDetails';
import { Route, Switch } from 'react-router-dom';



function App() {
  
  const [MovieData,SetMovieData] = useState(
    [
    { id:uuidv4(),
      title: "Babysitter Must Die",
      description:
        "A group of murderers break into a house while the babysitter is present, and the babysitter has to survive and confront them to save the family.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.22_23h01m02s_008_-238x318.png",
        rating : 3  ,
        trailer :"https://www.youtube.com/embed/Jf7I0v9D2kc ",
      },
    
    {id:uuidv4(),
      title:"White Demise",
      description:
        "A desperate woman embarks on a journey to find a life-saving bullet, seeking to reverse the tragic death of her daughter, but the only way to do so is through the man who resurrects her killer.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.22_21h12m22s_001_-238x307.png",
      rating : 3  ,
      trailer :" https://www.youtube.com/embed/G4_BLinkQ8w" ,
      },
    {id:uuidv4(),
      title :"Out of Death",
      description :"Synopsis: From Death Retired Officer Jack Harris returns to the field when he finds a witness to a murder in a remote wilderness, and must protect her from a group of corrupt cops.",
      posterUrl :"https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.27_12h30m41s_006_-238x325.png",
      rating  : 3  
      },
    {id:uuidv4(),
      title: "Bats",
      description:
        "An alien virus that wiped out civilizations in ancient times through time has returned overnight due to a mysterious thunderstorm that infected all the bats in the area causing them to grow into giant cannibal beast bats",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.26_21h33m13s_001_-238x325.png",
        rating : 4  ,
        trailer :"https://www.youtube.com/embed/oJUYwj3izT8" ,
      },
    {id:uuidv4(),
      title: "Nerve",
      description:
        " A high school official, Darede, is completely immersed in the online game Truth or Dare, until her every move is manipulated by an anonymous community calling itself the Watchers",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.27_18h18m02s_004_-238x321.png",
        rating : 1 ,
        trailer : "https://www.youtube.com/embed/2PR9MOPTI7g",
      },
     
    {id:uuidv4(),
      title: "Jungle Run",
      description:
        "A group of friends travel to the Amazon in an attempt to find an archaeologist who has lost his way in the Amazon rainforest.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.25_11h43m53s_005_-238x318.png",
        rating : 2  ,
        trailer : "https://www.youtube.com/embed/5HNLUGgHaLY", 
      },
    {id:uuidv4(),
      title: "My Heart Can’t Beat Unless You Tell It To",
      description:
        "A psychopath often quarrels with his siblings about his own care.",
      posterUrl: "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.25_11h34m34s_004_-238x310.png",
      rating : 5 ,
      trailer : "https://www.youtube.com/embed/mUIOv7ii_Wo",
    },
    
    {id:uuidv4(),
      title: "Ripper Untold",
      description:
        "A detective and a forensic doctor team up to solve a series of gruesome murders in London, but one of them holds a deadly secret.",
      posterUrl:
        "https://cimalina.com/wp-content/uploads/2021/06/Ashampoo_Snap_2021.06.28_12h19m29s_002_-266x316.png",
      rating : 5 ,
      trailer : "https://www.youtube.com/embed/7HRP_qWm4rI",
    },     ]);
  
const [titleSearch,SetTitleSearch]= useState('')
const handleTitle =(input)=>{
  SetTitleSearch(input)
}
const [ratingSearch,SetRatingSearch] = useState(1)
const handleStar =(input)=> {
  SetRatingSearch(input)
}
const [handleShow, setHandleShow] = useState(false)

const add=(newmovie)=>{ 
      SetMovieData([...MovieData,newmovie]);
      setHandleShow(false);
      }

  return (

    <div>
     
      <NavBar   handleTitle={handleTitle}
      handleStar={handleStar}
      setHandleShow={setHandleShow}
      />

      {
        handleShow ? <AddMovie setHandleShow={setHandleShow} add={add} /> : null 
      }
      <Switch>
        <Route exact path ='/'>
          <MovieList
            MovieData={MovieData}
            titleSearch={titleSearch}
             ratingSearch={ratingSearch}/>

      </Route>
          <Route  path="/details/:id">
            <div><MovieDetails MovieData={MovieData}/></div>
        </Route>
        </Switch>
        
        </div>
  )
}

export default App
