import React, { Component } from 'react'
import ImagePicker from 'react-image-picker'
import '../Components.css'
import Upload from '../Upload'

 
//import images from local
import img1 from './images/Diwali/diw1.png'
import img2 from './images/Diwali/diw2.png'
import img3 from './images/Diwali/diw3.png'
import img4 from './images/Diwali/diw4.png'
import img5 from './images/Diwali/diw5.png'

 
const imageList = [img1, img2, img3, img4, img5]
 
class Template extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
    this.onPick = this.onPick.bind(this)
  }
 
  onPick(image) {
    this.setState({
        image})
  }
 
  render() {
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      vertical: 'true'
      
      
  };
    return (
      <div>
        <h3 className="title">1. Choose your template</h3> <br/>

 

        <div className="temp">
        <ImagePicker 
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPick}
        /></div>

        <div style ={style} >
        
        <img src={this.state.url || 'https://via.placeholder.com/300x100'} alt="Uploaded Image"/>
            
        <Upload /> 
        </div>
        <br/>
        <div className="template">
         
          {this.state.image && (
          <img
            src={this.state.image.src || "https://via.placeholder.com/800x400"}
            alt="Uploaded Image"
            />
          )}
      </div>
      </div>
   
  
    )
  }
}
 
export default Template