import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CompanyRegistered,
  CreatorRegistered,
  PaymentTransferred,
  PostInteraction,
  ProposalApproved,
  ProposalRejected,
  ProposalSubmitted
} from "../generated/AdContract/AdContract"

export function createCompanyRegisteredEvent(
  company: Address,
  reputation: BigInt
): CompanyRegistered {
  let companyRegisteredEvent = changetype<CompanyRegistered>(newMockEvent())

  companyRegisteredEvent.parameters = new Array()

  companyRegisteredEvent.parameters.push(
    new ethereum.EventParam("company", ethereum.Value.fromAddress(company))
  )
  companyRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "reputation",
      ethereum.Value.fromUnsignedBigInt(reputation)
    )
  )

  return companyRegisteredEvent
}

export function createCreatorRegisteredEvent(
  creator: Address,
  reputation: BigInt
): CreatorRegistered {
  let creatorRegisteredEvent = changetype<CreatorRegistered>(newMockEvent())

  creatorRegisteredEvent.parameters = new Array()

  creatorRegisteredEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  creatorRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "reputation",
      ethereum.Value.fromUnsignedBigInt(reputation)
    )
  )

  return creatorRegisteredEvent
}

export function createPaymentTransferredEvent(
  creator: Address,
  amount: BigInt
): PaymentTransferred {
  let paymentTransferredEvent = changetype<PaymentTransferred>(newMockEvent())

  paymentTransferredEvent.parameters = new Array()

  paymentTransferredEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  paymentTransferredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return paymentTransferredEvent
}

export function createPostInteractionEvent(
  postId: BigInt,
  interactionType: i32,
  user: Address
): PostInteraction {
  let postInteractionEvent = changetype<PostInteraction>(newMockEvent())

  postInteractionEvent.parameters = new Array()

  postInteractionEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  postInteractionEvent.parameters.push(
    new ethereum.EventParam(
      "interactionType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(interactionType))
    )
  )
  postInteractionEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return postInteractionEvent
}

export function createProposalApprovedEvent(
  proposalId: BigInt,
  company: Address,
  creator: Address,
  companyReputation: BigInt,
  creatorReputation: BigInt,
  paymentAmount: BigInt
): ProposalApproved {
  let proposalApprovedEvent = changetype<ProposalApproved>(newMockEvent())

  proposalApprovedEvent.parameters = new Array()

  proposalApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalApprovedEvent.parameters.push(
    new ethereum.EventParam("company", ethereum.Value.fromAddress(company))
  )
  proposalApprovedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  proposalApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "companyReputation",
      ethereum.Value.fromUnsignedBigInt(companyReputation)
    )
  )
  proposalApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "creatorReputation",
      ethereum.Value.fromUnsignedBigInt(creatorReputation)
    )
  )
  proposalApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentAmount",
      ethereum.Value.fromUnsignedBigInt(paymentAmount)
    )
  )

  return proposalApprovedEvent
}

export function createProposalRejectedEvent(
  proposalId: BigInt,
  creator: Address
): ProposalRejected {
  let proposalRejectedEvent = changetype<ProposalRejected>(newMockEvent())

  proposalRejectedEvent.parameters = new Array()

  proposalRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalRejectedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return proposalRejectedEvent
}

export function createProposalSubmittedEvent(
  proposalId: BigInt,
  company: Address,
  targetCreator: Address,
  adHash: string,
  paymentOffer: BigInt
): ProposalSubmitted {
  let proposalSubmittedEvent = changetype<ProposalSubmitted>(newMockEvent())

  proposalSubmittedEvent.parameters = new Array()

  proposalSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalSubmittedEvent.parameters.push(
    new ethereum.EventParam("company", ethereum.Value.fromAddress(company))
  )
  proposalSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "targetCreator",
      ethereum.Value.fromAddress(targetCreator)
    )
  )
  proposalSubmittedEvent.parameters.push(
    new ethereum.EventParam("adHash", ethereum.Value.fromString(adHash))
  )
  proposalSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentOffer",
      ethereum.Value.fromUnsignedBigInt(paymentOffer)
    )
  )

  return proposalSubmittedEvent
}
