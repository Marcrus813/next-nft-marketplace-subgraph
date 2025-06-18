import React from "react";

import { useQuery, gql } from "@apollo/client";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const DEAD_ADDRESS = "0x000000000000000000000000000000000000dEaD";

/*
 * Gql syntax: const GET_ACTIVE_ITEMS = gql`{
 *     activeItems(where: {buyer: ZERO_ADDRESS}) {
 *         id
 *         buyer
 *         seller
 *         tokenAddress
 *         tokenId
 *         preferredPayment
 *         strictPayment
 *         price
 *     }
 * }`;
 * */

const GraphExample = () => {
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

    const { loading, error, data } = useQuery(GET_ACTIVE_LISTINGS_ALL, {
        variables: { buyer: ZERO_ADDRESS },
    });
    console.log(data);
    return (
        <>
            <div>Hello</div>
        </>
    );
};
export default GraphExample;
