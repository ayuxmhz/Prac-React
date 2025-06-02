import yoyo from './../assets/yrh.png'
import porsche from './../assets/uuuo.jpg'
export default function Card(){
    return(
   
      <div className="info" style={{color:'red'}} > 
        <img src="" alt="" />
        <h2>Do anything </h2>
        <p>Make it</p>
        <img src={yoyo}alt="" height={500} width={400} />
        <img src={porsche} alt="" height={500} width={900}  style={{marginLeft:'20px'}}/>
      </div>
    )
  }