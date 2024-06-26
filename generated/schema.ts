// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Company extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Company entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Company must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Company", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Company | null {
    return changetype<Company | null>(store.get_in_block("Company", id));
  }

  static load(id: string): Company | null {
    return changetype<Company | null>(store.get("Company", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get wallet(): Bytes {
    let value = this.get("wallet");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set wallet(value: Bytes) {
    this.set("wallet", Value.fromBytes(value));
  }

  get reputation(): BigInt {
    let value = this.get("reputation");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set reputation(value: BigInt) {
    this.set("reputation", Value.fromBigInt(value));
  }

  get proposals(): ProposalLoader {
    return new ProposalLoader(
      "Company",
      this.get("id")!.toString(),
      "proposals",
    );
  }

  get posts(): PostLoader {
    return new PostLoader("Company", this.get("id")!.toString(), "posts");
  }

  get creators(): CreatorLoader {
    return new CreatorLoader("Company", this.get("id")!.toString(), "creators");
  }
}

export class Creator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Creator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Creator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Creator", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Creator | null {
    return changetype<Creator | null>(store.get_in_block("Creator", id));
  }

  static load(id: string): Creator | null {
    return changetype<Creator | null>(store.get("Creator", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get wallet(): Bytes {
    let value = this.get("wallet");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set wallet(value: Bytes) {
    this.set("wallet", Value.fromBytes(value));
  }

  get reputation(): BigInt {
    let value = this.get("reputation");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set reputation(value: BigInt) {
    this.set("reputation", Value.fromBigInt(value));
  }

  get proposals(): ProposalLoader {
    return new ProposalLoader(
      "Creator",
      this.get("id")!.toString(),
      "proposals",
    );
  }

  get companies(): Array<string> | null {
    let value = this.get("companies");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set companies(value: Array<string> | null) {
    if (!value) {
      this.unset("companies");
    } else {
      this.set("companies", Value.fromStringArray(<Array<string>>value));
    }
  }

  get posts(): PostLoader {
    return new PostLoader("Creator", this.get("id")!.toString(), "posts");
  }

  get gainedPayments(): PaymentTransferredLoader {
    return new PaymentTransferredLoader(
      "Creator",
      this.get("id")!.toString(),
      "gainedPayments",
    );
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Proposal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Proposal must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Proposal", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Proposal | null {
    return changetype<Proposal | null>(store.get_in_block("Proposal", id));
  }

  static load(id: string): Proposal | null {
    return changetype<Proposal | null>(store.get("Proposal", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get company(): string {
    let value = this.get("company");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set company(value: string) {
    this.set("company", Value.fromString(value));
  }

  get targetCreator(): string {
    let value = this.get("targetCreator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set targetCreator(value: string) {
    this.set("targetCreator", Value.fromString(value));
  }

  get adHash(): string {
    let value = this.get("adHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set adHash(value: string) {
    this.set("adHash", Value.fromString(value));
  }

  get paymentOffer(): BigInt {
    let value = this.get("paymentOffer");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set paymentOffer(value: BigInt) {
    this.set("paymentOffer", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }
}

export class AdContent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AdContent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AdContent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("AdContent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AdContent | null {
    return changetype<AdContent | null>(store.get_in_block("AdContent", id));
  }

  static load(id: string): AdContent | null {
    return changetype<AdContent | null>(store.get("AdContent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get adHash(): string {
    let value = this.get("adHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set adHash(value: string) {
    this.set("adHash", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get targetCreator(): string {
    let value = this.get("targetCreator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set targetCreator(value: string) {
    this.set("targetCreator", Value.fromString(value));
  }

  get company(): string {
    let value = this.get("company");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set company(value: string) {
    this.set("company", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Post must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Post", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Post | null {
    return changetype<Post | null>(store.get_in_block("Post", id));
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get thumbsUp(): BigInt {
    let value = this.get("thumbsUp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set thumbsUp(value: BigInt) {
    this.set("thumbsUp", Value.fromBigInt(value));
  }

  get thumbsDown(): BigInt {
    let value = this.get("thumbsDown");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set thumbsDown(value: BigInt) {
    this.set("thumbsDown", Value.fromBigInt(value));
  }

  get interactions(): PostInteractionLoader {
    return new PostInteractionLoader(
      "Post",
      this.get("id")!.toString(),
      "interactions",
    );
  }

  get targetCreator(): string {
    let value = this.get("targetCreator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set targetCreator(value: string) {
    this.set("targetCreator", Value.fromString(value));
  }

  get company(): string {
    let value = this.get("company");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set company(value: string) {
    this.set("company", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class PostInteraction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostInteraction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PostInteraction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PostInteraction", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PostInteraction | null {
    return changetype<PostInteraction | null>(
      store.get_in_block("PostInteraction", id),
    );
  }

  static load(id: string): PostInteraction | null {
    return changetype<PostInteraction | null>(store.get("PostInteraction", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get post(): string {
    let value = this.get("post");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }

  get interactionType(): string {
    let value = this.get("interactionType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set interactionType(value: string) {
    this.set("interactionType", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class InteractionThumbsUp extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InteractionThumbsUp entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type InteractionThumbsUp must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("InteractionThumbsUp", id.toString(), this);
    }
  }

  static loadInBlock(id: string): InteractionThumbsUp | null {
    return changetype<InteractionThumbsUp | null>(
      store.get_in_block("InteractionThumbsUp", id),
    );
  }

  static load(id: string): InteractionThumbsUp | null {
    return changetype<InteractionThumbsUp | null>(
      store.get("InteractionThumbsUp", id),
    );
  }

  get id(): i64 {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set id(value: i64) {
    this.set("id", Value.fromI64(value));
  }

  get timestamp(): i64 {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set timestamp(value: i64) {
    this.set("timestamp", Value.fromI64(value));
  }

  get post(): string {
    let value = this.get("post");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }
}

export class InteractionThumbsDown extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save InteractionThumbsDown entity without an ID",
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type InteractionThumbsDown must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("InteractionThumbsDown", id.toString(), this);
    }
  }

  static loadInBlock(id: string): InteractionThumbsDown | null {
    return changetype<InteractionThumbsDown | null>(
      store.get_in_block("InteractionThumbsDown", id),
    );
  }

  static load(id: string): InteractionThumbsDown | null {
    return changetype<InteractionThumbsDown | null>(
      store.get("InteractionThumbsDown", id),
    );
  }

  get id(): i64 {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set id(value: i64) {
    this.set("id", Value.fromI64(value));
  }

  get timestamp(): i64 {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set timestamp(value: i64) {
    this.set("timestamp", Value.fromI64(value));
  }

  get post(): string {
    let value = this.get("post");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }
}

export class PostTime extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostTime entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PostTime must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PostTime", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PostTime | null {
    return changetype<PostTime | null>(store.get_in_block("PostTime", id));
  }

  static load(id: string): PostTime | null {
    return changetype<PostTime | null>(store.get("PostTime", id));
  }

  get id(): i64 {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set id(value: i64) {
    this.set("id", Value.fromI64(value));
  }

  get timestamp(): i64 {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI64();
    }
  }

  set timestamp(value: i64) {
    this.set("timestamp", Value.fromI64(value));
  }

  get post(): string {
    let value = this.get("post");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("User", id.toString(), this);
    }
  }

  static loadInBlock(id: string): User | null {
    return changetype<User | null>(store.get_in_block("User", id));
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get interactions(): PostInteractionLoader {
    return new PostInteractionLoader(
      "User",
      this.get("id")!.toString(),
      "interactions",
    );
  }
}

export class PostAnalytic extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostAnalytic entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PostAnalytic must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PostAnalytic", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PostAnalytic | null {
    return changetype<PostAnalytic | null>(
      store.get_in_block("PostAnalytic", id),
    );
  }

  static load(id: string): PostAnalytic | null {
    return changetype<PostAnalytic | null>(store.get("PostAnalytic", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get post(): string {
    let value = this.get("post");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }

  get totalInteractions(): BigInt {
    let value = this.get("totalInteractions");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalInteractions(value: BigInt) {
    this.set("totalInteractions", Value.fromBigInt(value));
  }

  get engagementRate(): BigDecimal {
    let value = this.get("engagementRate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigDecimal();
    }
  }

  set engagementRate(value: BigDecimal) {
    this.set("engagementRate", Value.fromBigDecimal(value));
  }
}

export class PaymentTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PaymentTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PaymentTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PaymentTransferred", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PaymentTransferred | null {
    return changetype<PaymentTransferred | null>(
      store.get_in_block("PaymentTransferred", id),
    );
  }

  static load(id: string): PaymentTransferred | null {
    return changetype<PaymentTransferred | null>(
      store.get("PaymentTransferred", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class ProposalLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Proposal[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Proposal[]>(value);
  }
}

export class PostLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Post[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Post[]>(value);
  }
}

export class CreatorLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Creator[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Creator[]>(value);
  }
}

export class PaymentTransferredLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): PaymentTransferred[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<PaymentTransferred[]>(value);
  }
}

export class PostInteractionLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): PostInteraction[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<PostInteraction[]>(value);
  }
}
