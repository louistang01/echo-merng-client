import React, { useContext} from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';

import PostCard from '../components/PostCard';
//below
import { AuthContext } from '../context/auth';
import PostForm from '../components/PostForm';



function LodgeComplaint() {
    const { user } = useContext(AuthContext)
//    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY)
    return (
        <Grid columns={1}>
            <Grid.Row className="page-title">
                <h1>New Complaint - Page Still Under Development</h1>
            </Grid.Row>
            <Grid.Row>
                {user && (
                  <Grid.Column>
                    <PostForm/>
                  </Grid.Column>
                )}
                
            </Grid.Row>
        </Grid>
    )  
}


export default LodgeComplaint;