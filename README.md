# Subgraph for AdContract


This repository contains the subgraph configuration and mapping code for the [AdContract](https://github.com/marcusats/kanan-contracts/blob/main/contracts/AdContract.sol) smart contract on the base-sepolia Ethereum network. The subgraph indexes events emitted by the [AdContract](https://github.com/marcusats/kanan-contracts/blob/main/contracts/AdContract.sol), allowing for efficient querying of blockchain data related to advertisements, proposals, and interactions between companies and creators.


## Key Components

### Schema (`schema.graphql`)

Defines the entities and their fields that are stored in the subgraph's database. Entities include [Company](https://github.com/marcusats/kanan-subgraph/blob/main/src/ad-contract.ts#L66), [Creator](https://github.com/marcusats/kanan-subgraph/blob/main/src/ad-contract.ts#L71), [Proposal](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L54), [AdContent](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L53), [Post](https://github.com/marcusats/kanan-subgraph/blob/main/schema.graphql#L17), [PostInteraction](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L22), and various statistics and analytics entities.

### Subgraph Manifest (`subgraph.yaml`)

Specifies the data sources (smart contracts) that the subgraph indexes, including the contract address, ABI, start block, and the events to handle. It also defines templates for dynamic data sources.


### Mapping Functions (`src/ad-contract.ts`)

- [handleCompanyRegistered](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L31): Processes [CompanyRegistered](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L19) events to create or update [Company](https://github.com/marcusats/kanan-subgraph/blob/main/src/ad-contract.ts#L66) entities.

- [handleCreatorRegistered](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L33): Processes [CreatorRegistered](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L20) events to create or update [Creator](https://github.com/marcusats/kanan-subgraph/blob/main/src/ad-contract.ts#L71) entities.

- [handleProposalSubmitted](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L43): Processes [ProposalSubmitted](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L25) events to create [Proposal](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L54) entities and initializes dynamic data sources for [AdContent](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L53).

- [handleAdContent](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L58): Processes IPFS content related to proposals.

- [handleProposalRejected](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L41) and [handleProposalApproved](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L39): Update the status of [Proposal](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L54) and related [AdContent](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L53) entities based on the outcome of proposals.

- [handlePaymentTransferred](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L35): Processes [PaymentTransferred](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L21) events to track payments transferred to creators.

- [handlePostInteraction](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L37): Processes interactions with posts, updating [Post](https://github.com/marcusats/kanan-subgraph/blob/main/schema.graphql#L17) entities and generating interaction statistics.


### Dynamic Data Sources
The subgraph leverages dynamic data sources for managing IPFS content associated with proposals. Upon the submission of a proposal, it instantiates a new [IpfsContent](https://github.com/marcusats/kanan-subgraph/blob/main/subgraph.yaml#L47) data source. This enables the subgraph to efficiently index IPFS-stored content and associate it with the relevant proposal.

