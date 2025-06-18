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
