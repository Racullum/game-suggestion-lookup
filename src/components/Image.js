import React from 'react'
import '../css/Image.css'


const Image = ({imgUrl}) => (
    <div>
        <img src={"https:" + imgUrl} style={{height: 35 +'vh' }}></img>
    </div>
)

export default Image