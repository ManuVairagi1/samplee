import React, { Component } from 'react';
import '../styles/section.css';
import imgs from '../images/Launching-rafiki.svg';

export default class Section extends Component{
  
   
    render=()=>{
        return(
    <div className="section2" >
    <div className="row justify-content-center">
    <div className="col-6">
    <a href="https://www.qries.com/">
     <img src={imgs} height={550} width={550} style={{ top: 0}}/> 
   </a>
    </div>
    <div class="col-5" style={{paddingBottom:'10%'}}>
      <h5 style={{paddingBottom:"3%"}}> DESIGN & DEVELOPMENT </h5>
      <h4 style={{paddingBottom:"3%"}}>Solving Problems, building <br/>brands</h4>
       <p style={{fontFamily: "Georgia, 'Times New Roman', Times, serif"}}> We believe brand interaction is the key to communication. Real innovations 
       and positive customer experience are the heart of successful 
       communication.</p>
     <div class="row justify-content-start">
    
    <div class="col-6">
       <sect/>
    <div class="form-check" style={{padding:"3%"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked" style={{backgroundColor:"rgb(232, 246, 246)", padding:"3%"}}>
    Recommendation systems
  </label>
</div>
<div class="form-check" style={{padding:"3%"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked" style={{backgroundColor:"rgb(232, 246, 246)", padding:"3%"}}>
    Omnichannel analytics
  </label>
</div>
<div class="form-check" style={{padding:"3%"}} >
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked" style={{backgroundColor:"rgb(232, 246, 246)", padding:"3%"}}  >
    Dedicated Developers
  </label>
</div>
    </div>
    <div class="col-6">
    <div class="form-check" style={{padding:"3%"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked" style={{backgroundColor:"rgb(232, 246, 246)", padding:"3%" 
}}>
    Demand Prediction 
  </label>
</div>
<div class="form-check" style={{padding:"3%"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked" style={{backgroundColor:"rgb(232, 246, 246)", padding:"3%"}}>
    Lead generation
  </label>
</div>
<div class="form-check" style={{padding:"3%"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked" style={{backgroundColor:"rgb(232, 246, 246)", padding:"3%"}}>
    24/7 Support
  </label>
</div>

    </div>
  
  </div>

    </div>
  </div>
</div>
        )
    }
  }
