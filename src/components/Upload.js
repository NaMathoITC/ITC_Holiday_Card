import React, {Fragment}from 'react'
import {storage} from '../firebase';
import './Components.css'


 
export default class Upload extends React.Component{
 
    constructor(){
        super()
        this.state = {
            image: null,
            url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
 
    handleChange = e => {
            if(e.target.files[0]) {
                    const image = (e.target.files[0]);
                this.setState(() => ({image}));
            }
    }

    handleUpload = (e) => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
            // progress function
        },
        (error) => {
             // error function
            console.log(error)
        },
     () => {
         // complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log(url);
                this.setState({url});   
            })
     });   
     e.preventDefault()
     const file = document.getElementById('inputFile').files
     const formData = new FormData()

     formData.append('img', file[0])

     fetch('http://localhost:5000/', {
       method: 'POST',
       body: formData,
     }).then(r => {
       console.log(r)
     })
     console.log(file[0])
    }
 
    render(){
        const style = {   
            
            display: 'flex',
            flexDirection : 'column',
            alignItems: 'center',
            justifyContent: 'center',   
            position: 'absolute',
            marginTop: '180px',
            
          
        
        };

        return(
        <Fragment>
              
        <div style ={style}>
            <br/><br/><br/><br/><br/>
            <h3 className="title">2. Upload your image</h3> <br/>
                <div className="uploadarea">
            <input type="file" onChange={this.handleChange} id="inputFile"/>
            <br/><br />
            <button class="ui color1 button" onClick={this.handleUpload}>Upload</button>
            <br/></div>
            <div className="upimg">
            <img src={this.state.url || './imgpre.png'} alt="Uploaded Image"/>
                </div>
        <br/>
        <br/>
        </div>   
   
        </Fragment>
        )
       
    }

    
 
}