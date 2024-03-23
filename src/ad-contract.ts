import {
  CompanyRegistered as CompanyRegisteredEvent,
  CreatorRegistered as CreatorRegisteredEvent,
  PaymentTransferred as PaymentTransferredEvent,
  PostInteraction as PostInteractionEvent,
  ProposalApproved as ProposalApprovedEvent,
  ProposalRejected as ProposalRejectedEvent,
  ProposalSubmitted as ProposalSubmittedEvent
} from "../generated/AdContract/AdContract"
import {
  CompanyRegistered,
  CreatorRegistered,
  PaymentTransferred,
  PostInteraction,
  ProposalApproved,
  ProposalRejected,
  ProposalSubmitted
} from "../generated/schema"

export function handleCompanyRegistered(event: CompanyRegisteredEvent): void {
  let entity = new CompanyRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.company = event.params.company
  entity.reputation = event.params.reputation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreatorRegistered(event: CreatorRegisteredEvent): void {
  let entity = new CreatorRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.reputation = event.params.reputation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaymentTransferred(event: PaymentTransferredEvent): void {
  let entity = new PaymentTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostInteraction(event: PostInteractionEvent): void {
  let entity = new PostInteraction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.interactionType = event.params.interactionType
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalApproved(event: ProposalApprovedEvent): void {
  let entity = new ProposalApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.company = event.params.company
  entity.creator = event.params.creator
  entity.companyReputation = event.params.companyReputation
  entity.creatorReputation = event.params.creatorReputation
  entity.paymentAmount = event.params.paymentAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalRejected(event: ProposalRejectedEvent): void {
  let entity = new ProposalRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalSubmitted(event: ProposalSubmittedEvent): void {
  let entity = new ProposalSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.company = event.params.company
  entity.targetCreator = event.params.targetCreator
  entity.adHash = event.params.adHash
  entity.paymentOffer = event.params.paymentOffer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
