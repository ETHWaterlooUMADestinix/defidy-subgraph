import {
  GetBorrowers as GetBorrowersEvent,
  GetSuppliers as GetSuppliersEvent,
  Contract
} from "../generated/Contract/Contract"
import {
  Borrower,
  Supplier
} from "../generated/schema"

export function handleGetBorrowers(event: GetBorrowersEvent): void {
  let entity = new Borrower(
    event.transaction.hash.toHex()
  )
  entity.requestId = event.params.requestId
  entity.price = event.params.price
  let contract = Contract.bind(event.address)
  entity.exchangeVal =  contract.exchangeVal()
  entity.tokenRatio = contract.tokenRatio()
  entity.save()
}

export function handleGetSuppliers(event: GetSuppliersEvent): void {
  let entity = new Supplier(
    event.transaction.hash.toHex()
  )
  entity.requestId = event.params.requestId
  entity.price = event.params.price
  let contract = Contract.bind(event.address)
  entity.exchangeVal =  contract.exchangeVal()
  entity.tokenRatio = contract.tokenRatio()
  entity.save()
}