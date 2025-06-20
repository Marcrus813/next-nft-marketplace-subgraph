export const svgNftArtifact = {
    _format: "hh-sol-artifact-1",
    contractName: "SvgNft",
    sourceName: "contracts/SvgNft.sol",
    abi: [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "priceFeedAddress",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "tokenName",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "tokenSymbol",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "sakaSvg",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "mltSvg",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "mintFee",
                    type: "uint256",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "sender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "ERC721IncorrectOwner",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "ERC721InsufficientApproval",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "approver",
                    type: "address",
                },
            ],
            name: "ERC721InvalidApprover",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                },
            ],
            name: "ERC721InvalidOperator",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "ERC721InvalidOwner",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "receiver",
                    type: "address",
                },
            ],
            name: "ERC721InvalidReceiver",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "sender",
                    type: "address",
                },
            ],
            name: "ERC721InvalidSender",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "ERC721NonexistentToken",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "OwnableInvalidOwner",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "OwnableUnauthorizedAccount",
            type: "error",
        },
        {
            inputs: [],
            name: "SvgNft__NotEnoughFee",
            type: "error",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "approved",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "operator",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "approved",
                    type: "bool",
                },
            ],
            name: "ApprovalForAll",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "int256",
                    name: "threshold",
                    type: "int256",
                },
            ],
            name: "NftMinted",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "getApproved",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getMintFee",
            outputs: [
                {
                    internalType: "uint256",
                    name: "result",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getPriceFeedAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "result",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getTokenCounter",
            outputs: [
                {
                    internalType: "uint256",
                    name: "result",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getTokenStockPrice",
            outputs: [
                {
                    internalType: "int256",
                    name: "result",
                    type: "int256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "getTokenThreshold",
            outputs: [
                {
                    internalType: "int256",
                    name: "result",
                    type: "int256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                },
            ],
            name: "isApprovedForAll",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "int256",
                    name: "threshold",
                    type: "int256",
                },
            ],
            name: "mintNft",
            outputs: [],
            stateMutability: "payable",
            type: "function",
        },
        {
            inputs: [],
            name: "name",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "ownerOf",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
                {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                },
                {
                    internalType: "bool",
                    name: "approved",
                    type: "bool",
                },
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4",
                },
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "svgXml",
                    type: "string",
                },
            ],
            name: "svgToImgURI",
            outputs: [
                {
                    internalType: "string",
                    name: "result",
                    type: "string",
                },
            ],
            stateMutability: "pure",
            type: "function",
        },
        {
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "tokenURI",
            outputs: [
                {
                    internalType: "string",
                    name: "result",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "withdraw",
            outputs: [
                {
                    internalType: "bool",
                    name: "_success",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    bytecode:
        "0x60c060405234801561001057600080fd5b50604051613d86380380613d868339818101604052810190610032919061063e565b33858581600090816100449190610952565b5080600190816100549190610952565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100c95760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100c09190610a33565b60405180910390fd5b6100d88161016460201b60201c565b508573ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250506000600b819055508060a0818152505061012c8361022a60201b60201c565b6007908161013a9190610952565b5061014a8261022a60201b60201c565b600990816101589190610952565b50505050505050610bca565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6060600061025c836040516020016102429190610a8a565b6040516020818303038152906040526102bd60201b60201c565b90506040518060400160405280601a81526020017f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000815250816040516020016102a6929190610aa1565b604051602081830303815290604052915050919050565b606060008251036102df57604051806020016040528060008152509050610430565b6000604051806060016040528060408152602001613d46604091399050600060036002855161030e9190610af4565b6103189190610b57565b60046103249190610b88565b905060006020826103359190610af4565b67ffffffffffffffff81111561034e5761034d6104c2565b5b6040519080825280601f01601f1916602001820160405280156103805781602001600182028036833780820191505090505b509050818152600183018586518101602084015b818310156103ef576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f8116850151825360018201915050610394565b600389510660018114610409576002811461041957610424565b613d3d60f01b6002830352610424565b603d60f81b60018303525b50505050508093505050505b919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061047482610449565b9050919050565b61048481610469565b811461048f57600080fd5b50565b6000815190506104a18161047b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104fa826104b1565b810181811067ffffffffffffffff82111715610519576105186104c2565b5b80604052505050565b600061052c610435565b905061053882826104f1565b919050565b600067ffffffffffffffff821115610558576105576104c2565b5b610561826104b1565b9050602081019050919050565b60005b8381101561058c578082015181840152602081019050610571565b60008484015250505050565b60006105ab6105a68461053d565b610522565b9050828152602081018484840111156105c7576105c66104ac565b5b6105d284828561056e565b509392505050565b600082601f8301126105ef576105ee6104a7565b5b81516105ff848260208601610598565b91505092915050565b6000819050919050565b61061b81610608565b811461062657600080fd5b50565b60008151905061063881610612565b92915050565b60008060008060008060c0878903121561065b5761065a61043f565b5b600061066989828a01610492565b965050602087015167ffffffffffffffff81111561068a57610689610444565b5b61069689828a016105da565b955050604087015167ffffffffffffffff8111156106b7576106b6610444565b5b6106c389828a016105da565b945050606087015167ffffffffffffffff8111156106e4576106e3610444565b5b6106f089828a016105da565b935050608087015167ffffffffffffffff81111561071157610710610444565b5b61071d89828a016105da565b92505060a061072e89828a01610629565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061078d57607f821691505b6020821081036107a05761079f610746565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026108087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826107cb565b61081286836107cb565b95508019841693508086168417925050509392505050565b6000819050919050565b600061084f61084a61084584610608565b61082a565b610608565b9050919050565b6000819050919050565b61086983610834565b61087d61087582610856565b8484546107d8565b825550505050565b600090565b610892610885565b61089d818484610860565b505050565b5b818110156108c1576108b660008261088a565b6001810190506108a3565b5050565b601f821115610906576108d7816107a6565b6108e0846107bb565b810160208510156108ef578190505b6109036108fb856107bb565b8301826108a2565b50505b505050565b600082821c905092915050565b60006109296000198460080261090b565b1980831691505092915050565b60006109428383610918565b9150826002028217905092915050565b61095b8261073b565b67ffffffffffffffff811115610974576109736104c2565b5b61097e8254610775565b6109898282856108c5565b600060209050601f8311600181146109bc57600084156109aa578287015190505b6109b48582610936565b865550610a1c565b601f1984166109ca866107a6565b60005b828110156109f2578489015182556001820191506020850194506020810190506109cd565b86831015610a0f5784890151610a0b601f891682610918565b8355505b6001600288020188555050505b505050505050565b610a2d81610469565b82525050565b6000602082019050610a486000830184610a24565b92915050565b600081905092915050565b6000610a648261073b565b610a6e8185610a4e565b9350610a7e81856020860161056e565b80840191505092915050565b6000610a968284610a59565b915081905092915050565b6000610aad8285610a59565b9150610ab98284610a59565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610aff82610608565b9150610b0a83610608565b9250828201905080821115610b2257610b21610ac5565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610b6282610608565b9150610b6d83610608565b925082610b7d57610b7c610b28565b5b828204905092915050565b6000610b9382610608565b9150610b9e83610608565b9250828202610bac81610608565b91508282048414831517610bc357610bc2610ac5565b5b5092915050565b60805160a051613149610bfd600039600081816107890152610bb60152600081816107630152610e9c01526131496000f3fe60806040526004361061014b5760003560e01c80636e02007d116100b6578063a22cb4651161006f578063a22cb46514610499578063b88d4fde146104c2578063c87b56dd146104eb578063e148855d14610528578063e985e9c514610553578063f2fde38b146105905761014b565b80636e02007d1461039957806370a08231146103c4578063715018a6146104015780637a5caab3146104185780638da5cb5b1461044357806395d89b411461046e5761014b565b806323b872dd1161010857806323b872dd1461026557806324427b1b1461028e5780633ccfd60b146102cb57806341123c14146102f657806342842e0e146103335780636352211e1461035c5761014b565b806301ffc9a71461015057806306fdde031461018d578063081812fc146101b8578063095ea7b3146101f55780630f0f30b21461021e5780631e93081214610249575b600080fd5b34801561015c57600080fd5b50610177600480360381019061017291906121c9565b6105b9565b6040516101849190612211565b60405180910390f35b34801561019957600080fd5b506101a261069b565b6040516101af91906122bc565b60405180910390f35b3480156101c457600080fd5b506101df60048036038101906101da9190612314565b61072d565b6040516101ec9190612382565b60405180910390f35b34801561020157600080fd5b5061021c600480360381019061021791906123c9565b610749565b005b34801561022a57600080fd5b5061023361075f565b6040516102409190612382565b60405180910390f35b610263600480360381019061025e919061243f565b610787565b005b34801561027157600080fd5b5061028c6004803603810190610287919061246c565b610873565b005b34801561029a57600080fd5b506102b560048036038101906102b091906125f4565b610975565b6040516102c291906122bc565b60405180910390f35b3480156102d757600080fd5b506102e0610a02565b6040516102ed9190612211565b60405180910390f35b34801561030257600080fd5b5061031d60048036038101906103189190612314565b610a8b565b60405161032a919061264c565b60405180910390f35b34801561033f57600080fd5b5061035a6004803603810190610355919061246c565b610aa8565b005b34801561036857600080fd5b50610383600480360381019061037e9190612314565b610ac8565b6040516103909190612382565b60405180910390f35b3480156103a557600080fd5b506103ae610ada565b6040516103bb9190612676565b60405180910390f35b3480156103d057600080fd5b506103eb60048036038101906103e69190612691565b610ae4565b6040516103f89190612676565b60405180910390f35b34801561040d57600080fd5b50610416610b9e565b005b34801561042457600080fd5b5061042d610bb2565b60405161043a9190612676565b60405180910390f35b34801561044f57600080fd5b50610458610bda565b6040516104659190612382565b60405180910390f35b34801561047a57600080fd5b50610483610c04565b60405161049091906122bc565b60405180910390f35b3480156104a557600080fd5b506104c060048036038101906104bb91906126ea565b610c96565b005b3480156104ce57600080fd5b506104e960048036038101906104e491906127cb565b610cac565b005b3480156104f757600080fd5b50610512600480360381019061050d9190612314565b610cd1565b60405161051f91906122bc565b60405180910390f35b34801561053457600080fd5b5061053d610e97565b60405161054a919061264c565b60405180910390f35b34801561055f57600080fd5b5061057a6004803603810190610575919061284e565b610f36565b6040516105879190612211565b60405180910390f35b34801561059c57600080fd5b506105b760048036038101906105b29190612691565b610fca565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061068457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610694575061069382611050565b5b9050919050565b6060600080546106aa906128bd565b80601f01602080910402602001604051908101604052809291908181526020018280546106d6906128bd565b80156107235780601f106106f857610100808354040283529160200191610723565b820191906000526020600020905b81548152906001019060200180831161070657829003601f168201915b5050505050905090565b6000610738826110ba565b5061074282611142565b9050919050565b61075b828261075661117f565b611187565b5050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b7f00000000000000000000000000000000000000000000000000000000000000003410156107e1576040517f841078d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600b60008282546107f4919061291d565b9250508190555060003390506000600b54905082600c6000838152602001908152602001600020819055506108298282611199565b828273ffffffffffffffffffffffffffffffffffffffff16827fb788dd1e8993bc02aae9594e9b500796272132a4c8817f69b499b0262daa150260405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108e55760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016108dc9190612382565b60405180910390fd5b60006108f983836108f461117f565b6111b7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461096f578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161096693929190612951565b60405180910390fd5b50505050565b606060006109a18360405160200161098d91906129c4565b6040516020818303038152906040526113d1565b90506040518060400160405280601a81526020017f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000815250816040516020016109eb9291906129db565b604051602081830303815290604052915050919050565b6000610a0c611549565b6000339050600047905060008273ffffffffffffffffffffffffffffffffffffffff1682604051610a3c90612a30565b60006040518083038185875af1925050503d8060008114610a79576040519150601f19603f3d011682016040523d82523d6000602084013e610a7e565b606091505b5050905080935050505090565b6000600c6000838152602001908152602001600020549050919050565b610ac383838360405180602001604052806000815250610cac565b505050565b6000610ad3826110ba565b9050919050565b6000600b54905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b575760006040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610b4e9190612382565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ba6611549565b610bb060006115d0565b565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610c13906128bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3f906128bd565b8015610c8c5780601f10610c6157610100808354040283529160200191610c8c565b820191906000526020600020905b815481529060010190602001808311610c6f57829003601f168201915b5050505050905090565b610ca8610ca161117f565b8383611696565b5050565b610cb7848484610873565b610ccb610cc261117f565b85858585611805565b50505050565b6060610cdc826110ba565b506000610ce7610e97565b90506060600c6000858152602001908152602001600020548212610d975760098054610d12906128bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3e906128bd565b8015610d8b5780601f10610d6057610100808354040283529160200191610d8b565b820191906000526020600020905b815481529060010190602001808311610d6e57829003601f168201915b50505050509050610e25565b60078054610da4906128bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd0906128bd565b8015610e1d5780601f10610df257610100808354040283529160200191610e1d565b820191906000526020600020905b815481529060010190602001808311610e0057829003601f168201915b505050505090505b6000610e2f61069b565b82610e39856119b6565b604051602001610e4b93929190612d89565b6040516020818303038152906040529050610e64611a44565b610e6d826113d1565b604051602001610e7e9291906129db565b6040516020818303038152906040529350505050919050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f299190612eaa565b5050509150508091505090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610fd2611549565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110445760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161103b9190612382565b60405180910390fd5b61104d816115d0565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000806110c683611a81565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361113957826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016111309190612676565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6111948383836001611abe565b505050565b6111b3828260405180602001604052806000815250611c83565b5050565b6000806111c384611a81565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461120557611204818486611ca7565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461129657611247600085600080611abe565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611319576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b606060008251036113f357604051806020016040528060008152509050611544565b60006040518060600160405280604081526020016130d46040913990506000600360028551611422919061291d565b61142c9190612f54565b60046114389190612f85565b90506000602082611449919061291d565b67ffffffffffffffff811115611462576114616124c9565b5b6040519080825280601f01601f1916602001820160405280156114945781602001600182028036833780820191505090505b509050818152600183018586518101602084015b81831015611503576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f81168501518253600182019150506114a8565b60038951066001811461151d576002811461152d57611538565b613d3d60f01b6002830352611538565b603d60f81b60018303525b50505050508093505050505b919050565b61155161117f565b73ffffffffffffffffffffffffffffffffffffffff1661156f610bda565b73ffffffffffffffffffffffffffffffffffffffff16146115ce5761159261117f565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016115c59190612382565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361170757816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016116fe9190612382565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516117f89190612211565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156119af578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611864949392919061301c565b6020604051808303816000875af19250505080156118a057506040513d601f19601f8201168201806040525081019061189d919061307d565b60015b611924573d80600081146118d0576040519150601f19603f3d011682016040523d82523d6000602084013e6118d5565b606091505b50600081510361191c57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016119139190612382565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146119ad57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016119a49190612382565b60405180910390fd5b505b5050505050565b6060600082126119d55760405180602001604052806000815250611a0c565b6040518060400160405280600181526020017f2d000000000000000000000000000000000000000000000000000000000000008152505b611a1d611a1884611d6b565b611d82565b604051602001611a2e9291906129db565b6040516020818303038152906040529050919050565b60606040518060400160405280601d81526020017f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815250905090565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611af75750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611c2b576000611b07846110ba565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611b7257508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611b855750611b838184610f36565b155b15611bc757826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611bbe9190612382565b60405180910390fd5b8115611c2957838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611c8d8383611e50565b611ca2611c9861117f565b6000858585611805565b505050565b611cb2838383611f49565b611d6657600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611d2757806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611d1e9190612676565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611d5d9291906130aa565b60405180910390fd5b505050565b60008060ff83901d90508081840118915050919050565b606060006001611d918461200a565b01905060008167ffffffffffffffff811115611db057611daf6124c9565b5b6040519080825280601f01601f191660200182016040528015611de25781602001600182028036833780820191505090505b509050600082602001820190505b600115611e45578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611e3957611e38612f25565b5b04945060008503611df0575b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611ec25760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611eb99190612382565b60405180910390fd5b6000611ed0838360006111b7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611f445760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611f3b9190612382565b60405180910390fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561200157508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611fc25750611fc18484610f36565b5b8061200057508273ffffffffffffffffffffffffffffffffffffffff16611fe883611142565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612068577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161205e5761205d612f25565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106120a5576d04ee2d6d415b85acef8100000000838161209b5761209a612f25565b5b0492506020810190505b662386f26fc1000083106120d457662386f26fc1000083816120ca576120c9612f25565b5b0492506010810190505b6305f5e10083106120fd576305f5e10083816120f3576120f2612f25565b5b0492506008810190505b612710831061212257612710838161211857612117612f25565b5b0492506004810190505b60648310612145576064838161213b5761213a612f25565b5b0492506002810190505b600a8310612154576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6121a681612171565b81146121b157600080fd5b50565b6000813590506121c38161219d565b92915050565b6000602082840312156121df576121de612167565b5b60006121ed848285016121b4565b91505092915050565b60008115159050919050565b61220b816121f6565b82525050565b60006020820190506122266000830184612202565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561226657808201518184015260208101905061224b565b60008484015250505050565b6000601f19601f8301169050919050565b600061228e8261222c565b6122988185612237565b93506122a8818560208601612248565b6122b181612272565b840191505092915050565b600060208201905081810360008301526122d68184612283565b905092915050565b6000819050919050565b6122f1816122de565b81146122fc57600080fd5b50565b60008135905061230e816122e8565b92915050565b60006020828403121561232a57612329612167565b5b6000612338848285016122ff565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061236c82612341565b9050919050565b61237c81612361565b82525050565b60006020820190506123976000830184612373565b92915050565b6123a681612361565b81146123b157600080fd5b50565b6000813590506123c38161239d565b92915050565b600080604083850312156123e0576123df612167565b5b60006123ee858286016123b4565b92505060206123ff858286016122ff565b9150509250929050565b6000819050919050565b61241c81612409565b811461242757600080fd5b50565b60008135905061243981612413565b92915050565b60006020828403121561245557612454612167565b5b60006124638482850161242a565b91505092915050565b60008060006060848603121561248557612484612167565b5b6000612493868287016123b4565b93505060206124a4868287016123b4565b92505060406124b5868287016122ff565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61250182612272565b810181811067ffffffffffffffff821117156125205761251f6124c9565b5b80604052505050565b600061253361215d565b905061253f82826124f8565b919050565b600067ffffffffffffffff82111561255f5761255e6124c9565b5b61256882612272565b9050602081019050919050565b82818337600083830152505050565b600061259761259284612544565b612529565b9050828152602081018484840111156125b3576125b26124c4565b5b6125be848285612575565b509392505050565b600082601f8301126125db576125da6124bf565b5b81356125eb848260208601612584565b91505092915050565b60006020828403121561260a57612609612167565b5b600082013567ffffffffffffffff8111156126285761262761216c565b5b612634848285016125c6565b91505092915050565b61264681612409565b82525050565b6000602082019050612661600083018461263d565b92915050565b612670816122de565b82525050565b600060208201905061268b6000830184612667565b92915050565b6000602082840312156126a7576126a6612167565b5b60006126b5848285016123b4565b91505092915050565b6126c7816121f6565b81146126d257600080fd5b50565b6000813590506126e4816126be565b92915050565b6000806040838503121561270157612700612167565b5b600061270f858286016123b4565b9250506020612720858286016126d5565b9150509250929050565b600067ffffffffffffffff821115612745576127446124c9565b5b61274e82612272565b9050602081019050919050565b600061276e6127698461272a565b612529565b90508281526020810184848401111561278a576127896124c4565b5b612795848285612575565b509392505050565b600082601f8301126127b2576127b16124bf565b5b81356127c284826020860161275b565b91505092915050565b600080600080608085870312156127e5576127e4612167565b5b60006127f3878288016123b4565b9450506020612804878288016123b4565b9350506040612815878288016122ff565b925050606085013567ffffffffffffffff8111156128365761283561216c565b5b6128428782880161279d565b91505092959194509250565b6000806040838503121561286557612864612167565b5b6000612873858286016123b4565b9250506020612884858286016123b4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806128d557607f821691505b6020821081036128e8576128e761288e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612928826122de565b9150612933836122de565b925082820190508082111561294b5761294a6128ee565b5b92915050565b60006060820190506129666000830186612373565b6129736020830185612667565b6129806040830184612373565b949350505050565b600081905092915050565b600061299e8261222c565b6129a88185612988565b93506129b8818560208601612248565b80840191505092915050565b60006129d08284612993565b915081905092915050565b60006129e78285612993565b91506129f38284612993565b91508190509392505050565b600081905092915050565b50565b6000612a1a6000836129ff565b9150612a2582612a0a565b600082019050919050565b6000612a3b82612a0d565b9150819050919050565b7f7b00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612a7b600183612988565b9150612a8682612a45565b600182019050919050565b7f226e616d65223a22000000000000000000000000000000000000000000000000600082015250565b6000612ac7600883612988565b9150612ad282612a91565b600882019050919050565b7f222c000000000000000000000000000000000000000000000000000000000000600082015250565b6000612b13600283612988565b9150612b1e82612add565b600282019050919050565b7f226465736372697074696f6e223a22416e20535647204e46542062617365642060008201527f6f6e20636861696e6c696e6b207072696365206665656473222c000000000000602082015250565b6000612b85603a83612988565b9150612b9082612b29565b603a82019050919050565b7f22696d616765223a220000000000000000000000000000000000000000000000600082015250565b6000612bd1600983612988565b9150612bdc82612b9b565b600982019050919050565b7f2261747472696275746573223a00000000000000000000000000000000000000600082015250565b6000612c1d600d83612988565b9150612c2882612be7565b600d82019050919050565b7f5b00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612c69600183612988565b9150612c7482612c33565b600182019050919050565b7f7b2274726169745f74797065223a2273746f636b5072696365222c2276616c7560008201527f65223a0000000000000000000000000000000000000000000000000000000000602082015250565b6000612cdb602383612988565b9150612ce682612c7f565b602382019050919050565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612d27600183612988565b9150612d3282612cf1565b600182019050919050565b7f5d00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612d73600183612988565b9150612d7e82612d3d565b600182019050919050565b6000612d9482612a6e565b9150612d9f82612aba565b9150612dab8286612993565b9150612db682612b06565b9150612dc182612b78565b9150612dcc82612bc4565b9150612dd88285612993565b9150612de382612b06565b9150612dee82612c10565b9150612df982612c5c565b9150612e0482612cce565b9150612e108284612993565b9150612e1b82612d1a565b9150612e2682612d66565b9150612e3182612d1a565b9150819050949350505050565b600069ffffffffffffffffffff82169050919050565b612e5d81612e3e565b8114612e6857600080fd5b50565b600081519050612e7a81612e54565b92915050565b600081519050612e8f81612413565b92915050565b600081519050612ea4816122e8565b92915050565b600080600080600060a08688031215612ec657612ec5612167565b5b6000612ed488828901612e6b565b9550506020612ee588828901612e80565b9450506040612ef688828901612e95565b9350506060612f0788828901612e95565b9250506080612f1888828901612e6b565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612f5f826122de565b9150612f6a836122de565b925082612f7a57612f79612f25565b5b828204905092915050565b6000612f90826122de565b9150612f9b836122de565b9250828202612fa9816122de565b91508282048414831517612fc057612fbf6128ee565b5b5092915050565b600081519050919050565b600082825260208201905092915050565b6000612fee82612fc7565b612ff88185612fd2565b9350613008818560208601612248565b61301181612272565b840191505092915050565b60006080820190506130316000830187612373565b61303e6020830186612373565b61304b6040830185612667565b818103606083015261305d8184612fe3565b905095945050505050565b6000815190506130778161219d565b92915050565b60006020828403121561309357613092612167565b5b60006130a184828501613068565b91505092915050565b60006040820190506130bf6000830185612373565b6130cc6020830184612667565b939250505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d427d0ce06377597746b4be8dfc2ff53e74443dbe7dc441a2192a3b35ae7cd8b64736f6c634300081b00334142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f",
    deployedBytecode:
        "0x60806040526004361061014b5760003560e01c80636e02007d116100b6578063a22cb4651161006f578063a22cb46514610499578063b88d4fde146104c2578063c87b56dd146104eb578063e148855d14610528578063e985e9c514610553578063f2fde38b146105905761014b565b80636e02007d1461039957806370a08231146103c4578063715018a6146104015780637a5caab3146104185780638da5cb5b1461044357806395d89b411461046e5761014b565b806323b872dd1161010857806323b872dd1461026557806324427b1b1461028e5780633ccfd60b146102cb57806341123c14146102f657806342842e0e146103335780636352211e1461035c5761014b565b806301ffc9a71461015057806306fdde031461018d578063081812fc146101b8578063095ea7b3146101f55780630f0f30b21461021e5780631e93081214610249575b600080fd5b34801561015c57600080fd5b50610177600480360381019061017291906121c9565b6105b9565b6040516101849190612211565b60405180910390f35b34801561019957600080fd5b506101a261069b565b6040516101af91906122bc565b60405180910390f35b3480156101c457600080fd5b506101df60048036038101906101da9190612314565b61072d565b6040516101ec9190612382565b60405180910390f35b34801561020157600080fd5b5061021c600480360381019061021791906123c9565b610749565b005b34801561022a57600080fd5b5061023361075f565b6040516102409190612382565b60405180910390f35b610263600480360381019061025e919061243f565b610787565b005b34801561027157600080fd5b5061028c6004803603810190610287919061246c565b610873565b005b34801561029a57600080fd5b506102b560048036038101906102b091906125f4565b610975565b6040516102c291906122bc565b60405180910390f35b3480156102d757600080fd5b506102e0610a02565b6040516102ed9190612211565b60405180910390f35b34801561030257600080fd5b5061031d60048036038101906103189190612314565b610a8b565b60405161032a919061264c565b60405180910390f35b34801561033f57600080fd5b5061035a6004803603810190610355919061246c565b610aa8565b005b34801561036857600080fd5b50610383600480360381019061037e9190612314565b610ac8565b6040516103909190612382565b60405180910390f35b3480156103a557600080fd5b506103ae610ada565b6040516103bb9190612676565b60405180910390f35b3480156103d057600080fd5b506103eb60048036038101906103e69190612691565b610ae4565b6040516103f89190612676565b60405180910390f35b34801561040d57600080fd5b50610416610b9e565b005b34801561042457600080fd5b5061042d610bb2565b60405161043a9190612676565b60405180910390f35b34801561044f57600080fd5b50610458610bda565b6040516104659190612382565b60405180910390f35b34801561047a57600080fd5b50610483610c04565b60405161049091906122bc565b60405180910390f35b3480156104a557600080fd5b506104c060048036038101906104bb91906126ea565b610c96565b005b3480156104ce57600080fd5b506104e960048036038101906104e491906127cb565b610cac565b005b3480156104f757600080fd5b50610512600480360381019061050d9190612314565b610cd1565b60405161051f91906122bc565b60405180910390f35b34801561053457600080fd5b5061053d610e97565b60405161054a919061264c565b60405180910390f35b34801561055f57600080fd5b5061057a6004803603810190610575919061284e565b610f36565b6040516105879190612211565b60405180910390f35b34801561059c57600080fd5b506105b760048036038101906105b29190612691565b610fca565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061068457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610694575061069382611050565b5b9050919050565b6060600080546106aa906128bd565b80601f01602080910402602001604051908101604052809291908181526020018280546106d6906128bd565b80156107235780601f106106f857610100808354040283529160200191610723565b820191906000526020600020905b81548152906001019060200180831161070657829003601f168201915b5050505050905090565b6000610738826110ba565b5061074282611142565b9050919050565b61075b828261075661117f565b611187565b5050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b7f00000000000000000000000000000000000000000000000000000000000000003410156107e1576040517f841078d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600b60008282546107f4919061291d565b9250508190555060003390506000600b54905082600c6000838152602001908152602001600020819055506108298282611199565b828273ffffffffffffffffffffffffffffffffffffffff16827fb788dd1e8993bc02aae9594e9b500796272132a4c8817f69b499b0262daa150260405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108e55760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016108dc9190612382565b60405180910390fd5b60006108f983836108f461117f565b6111b7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461096f578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161096693929190612951565b60405180910390fd5b50505050565b606060006109a18360405160200161098d91906129c4565b6040516020818303038152906040526113d1565b90506040518060400160405280601a81526020017f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000815250816040516020016109eb9291906129db565b604051602081830303815290604052915050919050565b6000610a0c611549565b6000339050600047905060008273ffffffffffffffffffffffffffffffffffffffff1682604051610a3c90612a30565b60006040518083038185875af1925050503d8060008114610a79576040519150601f19603f3d011682016040523d82523d6000602084013e610a7e565b606091505b5050905080935050505090565b6000600c6000838152602001908152602001600020549050919050565b610ac383838360405180602001604052806000815250610cac565b505050565b6000610ad3826110ba565b9050919050565b6000600b54905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b575760006040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610b4e9190612382565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ba6611549565b610bb060006115d0565b565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610c13906128bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3f906128bd565b8015610c8c5780601f10610c6157610100808354040283529160200191610c8c565b820191906000526020600020905b815481529060010190602001808311610c6f57829003601f168201915b5050505050905090565b610ca8610ca161117f565b8383611696565b5050565b610cb7848484610873565b610ccb610cc261117f565b85858585611805565b50505050565b6060610cdc826110ba565b506000610ce7610e97565b90506060600c6000858152602001908152602001600020548212610d975760098054610d12906128bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3e906128bd565b8015610d8b5780601f10610d6057610100808354040283529160200191610d8b565b820191906000526020600020905b815481529060010190602001808311610d6e57829003601f168201915b50505050509050610e25565b60078054610da4906128bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd0906128bd565b8015610e1d5780601f10610df257610100808354040283529160200191610e1d565b820191906000526020600020905b815481529060010190602001808311610e0057829003601f168201915b505050505090505b6000610e2f61069b565b82610e39856119b6565b604051602001610e4b93929190612d89565b6040516020818303038152906040529050610e64611a44565b610e6d826113d1565b604051602001610e7e9291906129db565b6040516020818303038152906040529350505050919050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f299190612eaa565b5050509150508091505090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610fd2611549565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110445760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161103b9190612382565b60405180910390fd5b61104d816115d0565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000806110c683611a81565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361113957826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016111309190612676565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6111948383836001611abe565b505050565b6111b3828260405180602001604052806000815250611c83565b5050565b6000806111c384611a81565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461120557611204818486611ca7565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461129657611247600085600080611abe565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611319576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b606060008251036113f357604051806020016040528060008152509050611544565b60006040518060600160405280604081526020016130d46040913990506000600360028551611422919061291d565b61142c9190612f54565b60046114389190612f85565b90506000602082611449919061291d565b67ffffffffffffffff811115611462576114616124c9565b5b6040519080825280601f01601f1916602001820160405280156114945781602001600182028036833780820191505090505b509050818152600183018586518101602084015b81831015611503576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f81168501518253600182019150506114a8565b60038951066001811461151d576002811461152d57611538565b613d3d60f01b6002830352611538565b603d60f81b60018303525b50505050508093505050505b919050565b61155161117f565b73ffffffffffffffffffffffffffffffffffffffff1661156f610bda565b73ffffffffffffffffffffffffffffffffffffffff16146115ce5761159261117f565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016115c59190612382565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361170757816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016116fe9190612382565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516117f89190612211565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156119af578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401611864949392919061301c565b6020604051808303816000875af19250505080156118a057506040513d601f19601f8201168201806040525081019061189d919061307d565b60015b611924573d80600081146118d0576040519150601f19603f3d011682016040523d82523d6000602084013e6118d5565b606091505b50600081510361191c57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016119139190612382565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146119ad57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016119a49190612382565b60405180910390fd5b505b5050505050565b6060600082126119d55760405180602001604052806000815250611a0c565b6040518060400160405280600181526020017f2d000000000000000000000000000000000000000000000000000000000000008152505b611a1d611a1884611d6b565b611d82565b604051602001611a2e9291906129db565b6040516020818303038152906040529050919050565b60606040518060400160405280601d81526020017f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815250905090565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611af75750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611c2b576000611b07846110ba565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611b7257508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611b855750611b838184610f36565b155b15611bc757826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611bbe9190612382565b60405180910390fd5b8115611c2957838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611c8d8383611e50565b611ca2611c9861117f565b6000858585611805565b505050565b611cb2838383611f49565b611d6657600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611d2757806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611d1e9190612676565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611d5d9291906130aa565b60405180910390fd5b505050565b60008060ff83901d90508081840118915050919050565b606060006001611d918461200a565b01905060008167ffffffffffffffff811115611db057611daf6124c9565b5b6040519080825280601f01601f191660200182016040528015611de25781602001600182028036833780820191505090505b509050600082602001820190505b600115611e45578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611e3957611e38612f25565b5b04945060008503611df0575b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611ec25760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611eb99190612382565b60405180910390fd5b6000611ed0838360006111b7565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611f445760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401611f3b9190612382565b60405180910390fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561200157508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611fc25750611fc18484610f36565b5b8061200057508273ffffffffffffffffffffffffffffffffffffffff16611fe883611142565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612068577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161205e5761205d612f25565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106120a5576d04ee2d6d415b85acef8100000000838161209b5761209a612f25565b5b0492506020810190505b662386f26fc1000083106120d457662386f26fc1000083816120ca576120c9612f25565b5b0492506010810190505b6305f5e10083106120fd576305f5e10083816120f3576120f2612f25565b5b0492506008810190505b612710831061212257612710838161211857612117612f25565b5b0492506004810190505b60648310612145576064838161213b5761213a612f25565b5b0492506002810190505b600a8310612154576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6121a681612171565b81146121b157600080fd5b50565b6000813590506121c38161219d565b92915050565b6000602082840312156121df576121de612167565b5b60006121ed848285016121b4565b91505092915050565b60008115159050919050565b61220b816121f6565b82525050565b60006020820190506122266000830184612202565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561226657808201518184015260208101905061224b565b60008484015250505050565b6000601f19601f8301169050919050565b600061228e8261222c565b6122988185612237565b93506122a8818560208601612248565b6122b181612272565b840191505092915050565b600060208201905081810360008301526122d68184612283565b905092915050565b6000819050919050565b6122f1816122de565b81146122fc57600080fd5b50565b60008135905061230e816122e8565b92915050565b60006020828403121561232a57612329612167565b5b6000612338848285016122ff565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061236c82612341565b9050919050565b61237c81612361565b82525050565b60006020820190506123976000830184612373565b92915050565b6123a681612361565b81146123b157600080fd5b50565b6000813590506123c38161239d565b92915050565b600080604083850312156123e0576123df612167565b5b60006123ee858286016123b4565b92505060206123ff858286016122ff565b9150509250929050565b6000819050919050565b61241c81612409565b811461242757600080fd5b50565b60008135905061243981612413565b92915050565b60006020828403121561245557612454612167565b5b60006124638482850161242a565b91505092915050565b60008060006060848603121561248557612484612167565b5b6000612493868287016123b4565b93505060206124a4868287016123b4565b92505060406124b5868287016122ff565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61250182612272565b810181811067ffffffffffffffff821117156125205761251f6124c9565b5b80604052505050565b600061253361215d565b905061253f82826124f8565b919050565b600067ffffffffffffffff82111561255f5761255e6124c9565b5b61256882612272565b9050602081019050919050565b82818337600083830152505050565b600061259761259284612544565b612529565b9050828152602081018484840111156125b3576125b26124c4565b5b6125be848285612575565b509392505050565b600082601f8301126125db576125da6124bf565b5b81356125eb848260208601612584565b91505092915050565b60006020828403121561260a57612609612167565b5b600082013567ffffffffffffffff8111156126285761262761216c565b5b612634848285016125c6565b91505092915050565b61264681612409565b82525050565b6000602082019050612661600083018461263d565b92915050565b612670816122de565b82525050565b600060208201905061268b6000830184612667565b92915050565b6000602082840312156126a7576126a6612167565b5b60006126b5848285016123b4565b91505092915050565b6126c7816121f6565b81146126d257600080fd5b50565b6000813590506126e4816126be565b92915050565b6000806040838503121561270157612700612167565b5b600061270f858286016123b4565b9250506020612720858286016126d5565b9150509250929050565b600067ffffffffffffffff821115612745576127446124c9565b5b61274e82612272565b9050602081019050919050565b600061276e6127698461272a565b612529565b90508281526020810184848401111561278a576127896124c4565b5b612795848285612575565b509392505050565b600082601f8301126127b2576127b16124bf565b5b81356127c284826020860161275b565b91505092915050565b600080600080608085870312156127e5576127e4612167565b5b60006127f3878288016123b4565b9450506020612804878288016123b4565b9350506040612815878288016122ff565b925050606085013567ffffffffffffffff8111156128365761283561216c565b5b6128428782880161279d565b91505092959194509250565b6000806040838503121561286557612864612167565b5b6000612873858286016123b4565b9250506020612884858286016123b4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806128d557607f821691505b6020821081036128e8576128e761288e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612928826122de565b9150612933836122de565b925082820190508082111561294b5761294a6128ee565b5b92915050565b60006060820190506129666000830186612373565b6129736020830185612667565b6129806040830184612373565b949350505050565b600081905092915050565b600061299e8261222c565b6129a88185612988565b93506129b8818560208601612248565b80840191505092915050565b60006129d08284612993565b915081905092915050565b60006129e78285612993565b91506129f38284612993565b91508190509392505050565b600081905092915050565b50565b6000612a1a6000836129ff565b9150612a2582612a0a565b600082019050919050565b6000612a3b82612a0d565b9150819050919050565b7f7b00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612a7b600183612988565b9150612a8682612a45565b600182019050919050565b7f226e616d65223a22000000000000000000000000000000000000000000000000600082015250565b6000612ac7600883612988565b9150612ad282612a91565b600882019050919050565b7f222c000000000000000000000000000000000000000000000000000000000000600082015250565b6000612b13600283612988565b9150612b1e82612add565b600282019050919050565b7f226465736372697074696f6e223a22416e20535647204e46542062617365642060008201527f6f6e20636861696e6c696e6b207072696365206665656473222c000000000000602082015250565b6000612b85603a83612988565b9150612b9082612b29565b603a82019050919050565b7f22696d616765223a220000000000000000000000000000000000000000000000600082015250565b6000612bd1600983612988565b9150612bdc82612b9b565b600982019050919050565b7f2261747472696275746573223a00000000000000000000000000000000000000600082015250565b6000612c1d600d83612988565b9150612c2882612be7565b600d82019050919050565b7f5b00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612c69600183612988565b9150612c7482612c33565b600182019050919050565b7f7b2274726169745f74797065223a2273746f636b5072696365222c2276616c7560008201527f65223a0000000000000000000000000000000000000000000000000000000000602082015250565b6000612cdb602383612988565b9150612ce682612c7f565b602382019050919050565b7f7d00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612d27600183612988565b9150612d3282612cf1565b600182019050919050565b7f5d00000000000000000000000000000000000000000000000000000000000000600082015250565b6000612d73600183612988565b9150612d7e82612d3d565b600182019050919050565b6000612d9482612a6e565b9150612d9f82612aba565b9150612dab8286612993565b9150612db682612b06565b9150612dc182612b78565b9150612dcc82612bc4565b9150612dd88285612993565b9150612de382612b06565b9150612dee82612c10565b9150612df982612c5c565b9150612e0482612cce565b9150612e108284612993565b9150612e1b82612d1a565b9150612e2682612d66565b9150612e3182612d1a565b9150819050949350505050565b600069ffffffffffffffffffff82169050919050565b612e5d81612e3e565b8114612e6857600080fd5b50565b600081519050612e7a81612e54565b92915050565b600081519050612e8f81612413565b92915050565b600081519050612ea4816122e8565b92915050565b600080600080600060a08688031215612ec657612ec5612167565b5b6000612ed488828901612e6b565b9550506020612ee588828901612e80565b9450506040612ef688828901612e95565b9350506060612f0788828901612e95565b9250506080612f1888828901612e6b565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612f5f826122de565b9150612f6a836122de565b925082612f7a57612f79612f25565b5b828204905092915050565b6000612f90826122de565b9150612f9b836122de565b9250828202612fa9816122de565b91508282048414831517612fc057612fbf6128ee565b5b5092915050565b600081519050919050565b600082825260208201905092915050565b6000612fee82612fc7565b612ff88185612fd2565b9350613008818560208601612248565b61301181612272565b840191505092915050565b60006080820190506130316000830187612373565b61303e6020830186612373565b61304b6040830185612667565b818103606083015261305d8184612fe3565b905095945050505050565b6000815190506130778161219d565b92915050565b60006020828403121561309357613092612167565b5b60006130a184828501613068565b91505092915050565b60006040820190506130bf6000830185612373565b6130cc6020830184612667565b939250505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d427d0ce06377597746b4be8dfc2ff53e74443dbe7dc441a2192a3b35ae7cd8b64736f6c634300081b0033",
    linkReferences: {},
    deployedLinkReferences: {},
};
