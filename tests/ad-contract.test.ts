import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CompanyRegistered } from "../generated/schema"
import { CompanyRegistered as CompanyRegisteredEvent } from "../generated/AdContract/AdContract"
import { handleCompanyRegistered } from "../src/ad-contract"
import { createCompanyRegisteredEvent } from "./ad-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let company = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let reputation = BigInt.fromI32(234)
    let newCompanyRegisteredEvent = createCompanyRegisteredEvent(
      company,
      reputation
    )
    handleCompanyRegistered(newCompanyRegisteredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CompanyRegistered created and stored", () => {
    assert.entityCount("CompanyRegistered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CompanyRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "company",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CompanyRegistered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reputation",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
