import { gql } from "@apollo/client";

const GET_ACTIVE_LISTINGS_ALL = gql`
    query GetActiveListings($buyer: String!) {
        activeListings(where: { buyer: $buyer }) {
            id
            buyer
            seller
            tokenAddress
            tokenId
            preferredPayment
            strictPayment
            price
        }
    }
`;

const queries = { GET_ACTIVE_LISTINGS_ALL };

export default queries;
