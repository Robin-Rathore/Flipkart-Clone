import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <>
    <div className='search' style={{width:"100%", display:"flex",alignItems:"center",justifyContent:"center"}}>
        <input style={{width:"100%", height:"40px",marginTop:"20px", borderRadius:"3px",outline:"none",border:"none"}} type='text' placeholder='Search fot products, brands and more' 
        title='Search fot products, brands and more' 
        />
        <img style={{position:"relative",top:"12px",right:"30px"}} src="./img/icon-search.svg" height={25}
        width={25}
        alt="Search icon"
        className='mt-1 mr-2'/>
        
    </div>
    <hr style={{width:"100%",height:".1px",color:"white", borderColor:"white"}} />
    </>
  )
}

export default Search
