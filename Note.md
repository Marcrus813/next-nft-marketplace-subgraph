# Subgraph - NFT Marketplace

## Preparation

- I cannot directly migrate the Moralis version to Subgraph version cuz some dependencies are deprecated, so I am
  referencing to my own `nextjs-raffle` to start from scratch
- According to Wagmi, need to register project
  at [Reown](https://cloud.reown.com/app/33eeeaf6-68d0-484a-acd7-9481bbbac365/project/c7f3cab6-f7bd-4cfa-8d42-444abaa9b90b),
  and update `config/web3KitConfig` with newly registered project name and ID
    - Then run:
    ```shell
        yarn add @reown/appkit @reown/appkit-adapter-wagmi wagmi viem @tanstack/react-query
    ```
- To use env in Next, need to add `NEXT_PUBLIC` prefix
- Constructing NFT display
    - Referencing Moralis code, the basic design and logic should be the same, just migrate Moralis related to Wagmi

## Roadmap

- [ ] Construct components
    - [ ] Listing container
        - [ ] Listing item
            - [ ] Listing NFT
                - [ ] Approve marketplace for NFT
                - [ ] Modal to specify params: `tokenAddress`, `tokenId`, `preferredPayment`, `strictPayment`, `price`
            - [ ] NFT Card [WIP]
                - [x] Display info
                    - [x] Name, symbol, owner
                    - [x] Image
                    - [x] Price
                        - [x] Display by preferred payment
                    - [x] Onclick: Buy modal(if owner then show update btn)
                - [ ] Updating NFT
                    - [ ] Modal to update info
                - [ ] Buying
                    - [ ] Modal to specify payment method
                        - [ ] Lock to preferred if `strictPayment` is `true`
                    - [ ] Allow marketplace to transfer ERC20
                    - [ ] Utility support for price conversion from preferred payment to selected payment
                    - [ ] Combo box component
                        - [ ] Type search feature
                        - [ ] Gray-out non-preferred if strict payment
            - [ ] Notification
    - [ ] Listing Page
    - [ ] Withdraw page

## Problems

- [x] Front-end exporting
    - In Node, I can use `module.exports = {obj1, obj2}` then `const {obj1} require`, but in Next context,
      `export default` is named export, so exports like
        ```js
        export default { obj };
        ```
        will not work with `import {obj}`, instead, if I want to use `import {obj}`, I should use:
        ```js
        export const obj1
        export const obj2
        ```
- [ ] Styling
    - Tailwind is a bit overwhelming, right now I am using AI to give me a version and tweak around it, during the
      process should try to get familiar with the classes
- [ ] Using async

    - Within `useEffect`:

        ```js
        useEffect(() => {
            setTokenDecimal(getTokenDecimals(preferredPayment).decimals);
            setPaymentChanged(!compareAddressIgnoreCase(preferredPayment, updatedPayment));
            let isMounted = true;

            const fetchConvertedPrice = async () => {
                try {
                    const convertedPrice = await getConvertedPrice(
                        preferredPayment,
                        price,
                        updatedPayment,
                    );
                    if (isMounted) {
                        setConvertedPrice(convertedPrice);
                    }
                } catch (error) {
                    console.error("Failed to get converted price:", error);
                }
            };

            fetchConvertedPrice();

            return () => {
                isMounted = false;
            };
        }, [updatedPayment]);
        ```

- [ ] Different action in same form

    - ~~Use `action` + `value` in handler:~~ (This is for native `button`)

        ```js
        e.preventDefault();

        const formData = new FormData(e.target);
        const action = formData.get("action");

        if (action === "update") {
        } else if (action === "remove") {
        }
        ```

    - Use a new use state to change on click

## Progress log

- First finish update logic code, so I can update and test other functions
- Use Ethers in api to convert price, so won't have to redeploy the contract
- Not going to complete all token conversion, cuz I will have to have ERC20 tokens to test, which is impossible, hence
  price convert functions will also be left undone
- Putting listing and withdrawing on same page
