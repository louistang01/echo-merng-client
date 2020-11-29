import React, {useContext} from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth'


function AssetCard({
  asset: {id,
    assetName,
    assetType,
    assetOwner,
    assetContractor,
    assetLocation,
    createdAt, }
}){

  const { user } = useContext(AuthContext);
    return (
    <Card fluid>
      <Card.Content as={Link} to={`/assets/${id}`}>
        <Image
          floated='right'
          size='mini'
          src='https://nutritionandfitness.net/wp-content/uploads/2018/05/no-image.jpg'
        />
        <Card.Header >{assetName}</Card.Header>
        <Card.Meta >{createdAt}</Card.Meta>
        <Card.Description>Type: {assetType}</Card.Description>
        <Card.Description>Owner: {assetOwner}</Card.Description>
        <Card.Description>Contractor: {assetContractor}</Card.Description>
        <Card.Description>Location: {assetLocation}</Card.Description>
      </Card.Content>
      {/* {user && user.username === username && (

        <DeleteButton postId = {id}/>
        
      )
      
      //<DeleteButton postId = {id}/>
      > */}
    </Card>
    
    )
}

export default AssetCard;