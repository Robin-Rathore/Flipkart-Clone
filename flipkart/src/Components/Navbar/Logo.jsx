import React from 'react'
import "./Logo.css"
const Logo = () => {
  return (
    <div className='logo' style={{position:"relative"}}>
                <img src="./img/logo.png" alt="Flipkart logo" height={18} width={72} style={{marginTop:"10px"}}/>
                <div style={{position:"absolute",display:"flex", gap:"25px",right:"0",top:"15px",opacity:"70%"}}>
                    <img style={{width:"30px"}} src="/img/add.png" alt="" />
                    <img style={{width:"30px"}} src="/img/shoppings.png" alt="" />
                    <span style={{width:"18px",height:"18px",borderRadius:"50%",backgroundColor:"red",display:"flex",alignItems:'center',justifyContent:"center",color:"white",opacity:"200%",position:"absolute",right:"-10px",top:"-6px"}}>2</span>
                </div>
                <p style={{marginTop:"-30px",marginLeft:"75px",marginBottom:"20px",fontFamily:"'Nunito', sans-serif", fontSize:"10px",color:"white"}}>Lite</p>
                <p  className='hover:underline'>
                    <div className='star'>
                        <div >
                            Explore
                        </div>
                        <div style={{color:'yellow', marginLeft:"5px", fontWeight:"bolder"}}>Plus</div>
                        <img src="./img/star.png" height={10} width={10} className='mb-1' alt='plus member logo'/>
                    </div>                   
                </p>
            </div>
  )
}

export default Logo
