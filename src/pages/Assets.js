import React, { useContext} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from 'semantic-ui-react';

import AssetCard from '../components/AssetCard';

import { AuthContext } from '../context/auth';
import { FETCH_ASSETS_QUERY} from '../utils/graphql'

function Assets() {

  const { user } = useContext(AuthContext)
  const { loading, data: { getAssets: assets } = {} } = useQuery(FETCH_ASSETS_QUERY)
      
      return (
        <Grid columns={1}>
            <Grid.Row className="page-title">
                <h1>Asset Search - Page Still Under Development</h1>
                <p> Information hererwith not accurate </p>
            </Grid.Row>
            <Grid.Row>
                {loading ? (
                <h1>Loading assets..</h1>
                ) : (
               
                    assets && assets.map((asset) => (
                      <Grid.Column key={asset.id} style={{ marginBottom: 20 }}>
                      <AssetCard asset={asset} />
                      </Grid.Column>
                  ))
                    


                
                )}
            </Grid.Row>
        </Grid>
      );
}



export default Assets;