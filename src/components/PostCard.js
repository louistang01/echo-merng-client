import React, {useContext} from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth'


function PostCard({
  post: {body, createdAt, id, username }
}){

  const { user } = useContext(AuthContext);
    return (
    <Card fluid>
      <Card.Content as={Link} to={`/posts/${id}`}>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header >{username}</Card.Header>
        <Card.Meta >{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>ID: {id}</Card.Description>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      {/* {user && user.username === username && (

        <DeleteButton postId = {id}/>
        
      )
      
      //<DeleteButton postId = {id}/>
      > */}
    </Card>
    
    )
}

export default PostCard;