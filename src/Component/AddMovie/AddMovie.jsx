import React from 'react'
import  {useState} from 'react'
import {Button,Modal, ModalDialog} from 'react-bootstrap'
import './AddMovie.css'
function AddMmovie({setHandleShow,add}) {


    const handleshow = () => {
        setHandleShow(false);
      };

      const [newmovie , setNewMovie] = useState({
        title:"",
        description:"",
        posteUrl:"",
        rating:0
    })
   
    let onChangehand=(e)=>
    {
        setNewMovie({...newmovie,[e.target.name]:e.target.value})
    }
    return ( 

  
     <div className="form-popup"  > 
            <div   className="form-container">
            <div className="tagclose">
            <h1 style={{color:'rgb(34, 140, 240)'}}>Add Movie</h1>
            <br/>
            <h5>Please Verify all the contents before adding otherwise nothing will be added</h5> 
            <button type="button" class="cancel" style={{color  :'rgb(34, 140, 240)'}} onClick={handleshow} >X</button>
            </div>
            <label  ><b>Movie Title</b></label>
            <input onChange={onChangehand} type="text" placeholder="Enter Movie Title" name="title" required/>
        
            <label  ><b>Movie Description</b></label>
            <input onChange={onChangehand}  type="text" placeholder="Enter Movie Description" name="description" required/>
            
            <label  ><b>Movie Poster URL</b></label>
            <input onChange={onChangehand} type="text" placeholder="Enter Movie Poster URL" name="posterUrl" required/>
            
            <label  ><b>Movie Rate(Number)</b></label>
            <input onChange={onChangehand} type="text" placeholder="Enter Movie rate" name="rating" required/>
            
            <button type="submit" class="btn" onClick={()=>add(newmovie)}>Add</button>
   </div>
   { /*     <ModalDialog>
         <Modal.Header closeButton>
         <Modal.Title><h1>Add Movie</h1></Modal.Title>
</Modal.Header>
<Modal.Body>
<label ><b>Movie Title</b></label>
            <input onChange={onChangehand} type="text" placeholder="Enter Movie Title" name="title" required/>
        
            <label  ><b>Movie Description</b></label>
            <input  onChange={onChangehand} type="text" placeholder="Enter Movie Description" name="description" required/>
            
            <label  ><b>Movie Poster</b></label>
            <input onChange={onChangehand} type="text" placeholder="Enter Movie Poster" name="posterUrl" required/>
            
            <label  ><b>Movie Rate</b></label>
            <input  onChange={onChangehand} type="text" placeholder="Enter Movie rate" name="rating" required/>
            <Button variant="secondary">Close</Button>
    <Button variant="primary" onClick={()=> {add(newmovie)}} type="submit">Add changes</Button>

  </Modal.Body>
        
   </ModalDialog> */}
  </div> 
    );
  }

export default AddMmovie