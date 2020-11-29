import React, { useContext, useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import {
  Card,
  Grid,
  Image,
  Search
} from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
//import MyPopup from '../utils/MyPopup';

function SinglePostAsset(props) {
  const assetId = props.match.params.postId;
  const { user } = useContext(AuthContext);
//  const commentInputRef = useRef(null);

//  const [comment, setComment] = useState('');

  const {
    data: { getAsset} = {} 
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      assetId
    }
  });

//   const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
//     update() {
//       setComment('');
//       commentInputRef.current.blur();
//     },
//     variables: {
//       postId,
//       body: comment
//     }
//   });

//  function deletePostCallback() {
//    props.history.push('/');
//  }

  let assetMarkup;
  if (!getAsset) {
    assetMarkup = <p>Loading asset..</p>;
  } else {
    const {
        id,
        assetName,
        assetType,
        assetOwner,
        assetContractor,
        assetLocation,
        createdAt,
    } = getAsset;

    postMarkup = (
      <Grid>
        <Grid.row>
            <Search />
        </Grid.row>
        <Grid.Row>
          <Grid.Column width={1}>
            <Image
              src="https://nutritionandfitness.net/wp-content/uploads/2018/05/no-image.jpg"
              size="small"
              float="right"
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card fluid>
              <Card.Content>
                <Card.Header>{assetName}</Card.Header>
                <Card.Meta>{createdAt}</Card.Meta>
                <Card.Description>{assetType}</Card.Description>
                <Card.Description>{assetOwner}</Card.Description>
                <Card.Description>{assetContractor}</Card.Description>
                <Card.Description>{assetLocation}</Card.Description>
              </Card.Content>
              <hr />

            </Card>
            {/* {user && (
              <Card fluid>
                <Card.Content>
                  <p>Post a comment</p>
                  <Form>
                    <div className="ui action input fluid">
                      <input
                        type="text"
                        placeholder="Comment.."
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        ref={commentInputRef}
                      />
                      <button
                        type="submit"
                        className="ui button teal"
                        disabled={comment.trim() === ''}
                        onClick={submitComment}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </Card.Content>
              </Card>
            )} */}
            {/* {comments.map((comment) => (
              <Card fluid key={comment.id}>
                <Card.Content>
                  {user && user.username === comment.username && (
                    <DeleteButton postId={id} commentId={comment.id} />
                  )}
                  <Card.Header>{comment.username}</Card.Header>
                  <Card.Meta>{moment(comment.createdAt).fromNow()}</Card.Meta>
                  <Card.Description>{comment.body}</Card.Description>
                </Card.Content>
              </Card>
            ))} */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return assetMarkup;
}

//const SUBMIT_COMMENT_MUTATION = gql`
//  mutation($postId: String!, $body: String!) {
//  createComment(postId: $postId, body: $body) {
//      id
//      comments {
//        id
//        body
//        createdAt
//        username
//      }
//      commentCount
//    }
//  }
//`;


const FETCH_POST_QUERY = gql`
  query($assetId: ID!) {
    getAsset(assetId: $assetId) {
        id
        assetName
        assetType
        assetOwner
        assetContractor
        assetLocation
        createdAt
    }
  }
`;

export default SinglePostAsset;
