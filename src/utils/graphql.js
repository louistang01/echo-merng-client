import gql from 'graphql-tag'

export const FETCH_POSTS_QUERY = gql`
{
  getPosts {
    id
    body
    createdAt
    username
       
  }
}
`

export const FETCH_ASSETS_QUERY = gql`
{
  getAssets {
    id
    assetName
    assetType
    assetOwner
    assetContractor
    assetLocation
    createdAt
  }
}
`