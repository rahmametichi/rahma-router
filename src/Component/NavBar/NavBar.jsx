import React from 'react'
import {Navbar} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';
import './NavBar.css'

function NavBar({handleTitle,handleStar,setHandleShow}) {

    const ratingChanged = (newRating)=>{
    handleStar(newRating);
    }
  
    const handleChange = (e) =>{
      handleTitle(e.target.value)
    }
   
    return (
  
        <div >
         <Navbar  style={{background:'black',height:70,}} variant="dark">
           <div className='form'>
         
    <Navbar.Brand href="#home" style={{color:' rgb(34, 140, 240)'}}>Movies App</Navbar.Brand>
      
   
    <div  className="nav">
      <input type="text" 
    onChange ={handleChange}
      placeholder='type your search here' 
      className='input' />
      <div className="starplusinput"> 
                   <ReactStars count={5}
                   onChange={ratingChanged}
                  size={35}
                 activeColor="#ffd700" />
                    </div>
      <button className="Add_btn" onClick={(e)=>{setHandleShow(true)}} >Add Movie</button>
      </div>


       


    </div>
  </Navbar>

            
            </div>   
               
        
              
    )
}

export default NavBar
