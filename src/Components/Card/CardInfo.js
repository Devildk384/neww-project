import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import "./CardInfo.css"


function CardInfo({image}) {
    return (
        <Card style={{border: "1px solid purple", borderRadius:"25px" , marginRight:"20px"}}>
         <CardContent >
         <div className="content">
         <Avatar alt="thomas" src={image} style={{height:"100px" , width:"100px"}}/>
         <h1>Allen Jones</h1>
         </div>
         <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.
         </p>

         </CardContent>
            
        </Card>
    )
}

export default CardInfo
