import React from 'react'
import '../css/Image.css'


const Image = ({imgUrl}) => (
    <div>
        <img src={imgUrl} style={{height: 65 +'vh' }}></img>
    </div>
)

export default Image