import React from 'react';

const center = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

const style = {
    width:"100%",
    aspectRatio:"21/9"
}

function Banner(){
    return(
        <div className='banner'>
            <div style ={center}>
                <img style={style} src="https://images.pexels.com/photos/11134135/pexels-photo-11134135.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="library"></img>
            </div>
        </div>
    )
}

export default Banner;