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
  Company,
  Creator,
  Proposal,
  PaymentTransferred,
  Post,
  PostInteraction,
  PostAnalytic,
  AdContent,
  PostTime,
  InteractionThumbsUp,
  InteractionThumbsDown
} from "../generated/schema"
import { BigInt, BigDecimal, dataSource, DataSourceContext, DataSourceTemplate, Bytes } from "@graphprotocol/graph-ts"


const PROPOSAL_ID_KEY = "proposalId";
const TARGET_CREATOR_KEY = "targetCreator";
const COMPANY_KEY = "company";
const STATUS_KEY = "status";

export function handleCompanyRegistered(event: CompanyRegisteredEvent): void {
  let companyId = event.params.company.toHexString();
  let company = Company.load(companyId);
  

  if (!company) {
    company = new Company(companyId);
    company.wallet = event.params.company;
    company.reputation = event.params.reputation; 
    company.save();
  }
}


export function handleCreatorRegistered(event: CreatorRegisteredEvent): void {
  let creatorId = event.params.creator.toHexString();
  let creator = Creator.load(creatorId);
  
 
  if (!creator) {
    creator = new Creator(creatorId);
    creator.wallet = event.params.creator;
    creator.reputation = event.params.reputation; 
    
    
    creator.save();
  }
}

export function handleProposalSubmitted(event: ProposalSubmittedEvent): void {
  let proposalId = event.params.proposalId.toString();
  let companyAddress = event.params.company.toHexString();
  let creatorAddress = event.params.targetCreator.toHexString();


  let company = Company.load(companyAddress);
  if (!company) {
    throw new Error(`Company not found for address: ${companyAddress}`);
  }

  let creator = Creator.load(creatorAddress);
  if (!creator) {
    throw new Error(`Creator not found for address: ${companyAddress}`);

  }

  let proposal = new Proposal(proposalId);
  proposal.company = company.id;
  proposal.targetCreator = creator.id;
  proposal.adHash = event.params.adHash;
  proposal.paymentOffer = event.params.paymentOffer;
  proposal.status = "Pending"; 
  proposal.createdAt = event.block.timestamp;
  proposal.updatedAt = event.block.timestamp;
  proposal.save();

  let context = new DataSourceContext();
  context.setString(PROPOSAL_ID_KEY, proposalId);
  context.setString(TARGET_CREATOR_KEY, creatorAddress);
  context.setString(COMPANY_KEY, companyAddress);
  context.setString(STATUS_KEY, "Pending");

  let hash = event.params.adHash;
  DataSourceTemplate.createWithContext("IpfsContent", [hash], context);

}

export function handleAdContent(content: Bytes): void {
  let hash = dataSource.stringParam()
  let id = dataSource.context().getString(PROPOSAL_ID_KEY);
  let targetCreator = dataSource.context().getString(TARGET_CREATOR_KEY);
  let company = dataSource.context().getString(COMPANY_KEY);
  let status = dataSource.context().getString(STATUS_KEY);

  let adContent = new AdContent(id);
  adContent.content = content.toString();
  adContent.adHash = hash;
  adContent.proposal = id;
  
  
  adContent.targetCreator = targetCreator;
  adContent.company = company;
  adContent.status = status;

  adContent.save();

}

export function handleProposalRejected(event: ProposalRejectedEvent): void {
  let proposalId = event.params.proposalId.toString();
  let proposal = Proposal.load(proposalId);
  

  if (proposal) {
    proposal.status = "Rejected"; 
    proposal.updatedAt = event.block.timestamp; 
    
    proposal.save(); 
  }
  let adContent = AdContent.load(proposalId);
  if (adContent) {
    adContent.status = "Rejected";
    adContent.save();
  }
}

export function handlePaymentTransferred(event: PaymentTransferredEvent): void {

  let id = event.transaction.hash.concatI32(event.logIndex.toI32()).toString();
  let payment = new PaymentTransferred(id);
  
  payment.creator = event.params.creator.toHexString();
  payment.amount = event.params.amount;
  payment.save();

}
export function handleProposalApproved(event: ProposalApprovedEvent): void {

  let postId = event.params.proposalId.toString() + "-post";
  let post = new Post(postId);
  post.proposal = event.params.proposalId.toString();
  post.thumbsUp = BigInt.fromI32(0);
  post.thumbsDown = BigInt.fromI32(0);
  post.status = "Active";
  post.createdAt = event.block.timestamp;
  post.targetCreator = event.params.creator.toHexString();
  post.company = event.params.company.toHexString();
  post.save();


  let companyId = event.params.company.toHexString();
  let company = Company.load(companyId);
  if (company) {
    company.reputation = company.reputation.plus(event.params.companyReputation);
    company.save();
  }


  let creatorId = event.params.creator.toHexString();
  let creator = Creator.load(creatorId);
  if (creator) {
    creator.reputation = creator.reputation.plus(event.params.creatorReputation);
    creator.save();
  }


  let proposalId = event.params.proposalId.toString();
  let proposal = Proposal.load(proposalId);
  if (proposal) {
    proposal.status = "Approved";
    proposal.updatedAt = event.block.timestamp;
    proposal.save();
  }

  let postTimes = new PostTime(event.params.proposalId.toString());
  postTimes.post = postId;
  postTimes.save();
  let adContent = AdContent.load(proposalId);
  if (adContent) {
    adContent.status = "Approved";
    adContent.save();
  }
}





export function handlePostInteraction(event: PostInteractionEvent): void {
  
  let interactionId = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let interaction = new PostInteraction(interactionId);
  interaction.post = event.params.postId.toString();
  

  interaction.interactionType = event.params.interactionType == 0 ? "ThumbsUp" : "ThumbsDown";
  interaction.user = event.params.user.toHexString();
  interaction.createdAt = event.block.timestamp;
  interaction.save();
  let post = Post.load(event.params.postId.toString());
  if (!post) {
    throw new Error(`Post not found for ID: ${event.params.postId.toString()}`);
  }
  

  if (event.params.interactionType === 0) { 
    let interaction = new InteractionThumbsUp(interactionId);
    interaction.post = post.id;
    post.thumbsUp = post.thumbsUp.plus(BigInt.fromI32(1));
    interaction.save();
  } else { 
    let interaction = new InteractionThumbsDown(interactionId);
    interaction.post = post.id;
    post.thumbsDown = post.thumbsDown.plus(BigInt.fromI32(1));
    interaction.save();
  }
  
  post.save();
  updatePostAnalytics(post.id);
}


function updatePostAnalytics(postId: string): void {
  let postAnalytics = PostAnalytic.load(postId);
  if (!postAnalytics) {
    postAnalytics = new PostAnalytic(postId);
    postAnalytics.post = postId;
    postAnalytics.totalInteractions = BigInt.fromI32(0);
    postAnalytics.engagementRate = BigDecimal.fromString("0");
  }

  let post = Post.load(postId);
  if (post) {
    postAnalytics.totalInteractions = post.thumbsUp.plus(post.thumbsDown);
    postAnalytics.engagementRate = postAnalytics.totalInteractions.toBigDecimal().div(BigDecimal.fromString("100"));
  }

  postAnalytics.save();
}
