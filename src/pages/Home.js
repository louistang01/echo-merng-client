import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag';

function Home() {

    return (
        
        
        <div style={{display: 'flex', flexDirection: 'column',  flexWrap: "wrap"}}>
            <img src="https://i.ibb.co/Sc0hmmm/ECHO-Image.png" alt="Echo Image" width="413" height="396"/>
            <h1>ECHO App</h1>
            <p>Electronic Complaint Handling Operator</p>
            <p>Still under production. </p>
            <p>Part of the submission for the MyHackathon Kuching 2020 competition</p>
        </div>
    )
}


export default Home;