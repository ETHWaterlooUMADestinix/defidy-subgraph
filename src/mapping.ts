import {
  GetBorrowers as GetBorrowersEvent,
  GetSuppliers as GetSuppliersEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ChainlinkRequested as ChainlinkRequestedEvent,
  ChainlinkFulfilled as ChainlinkFulfilledEvent,
  ChainlinkCancelled as ChainlinkCancelledEvent
} from "../generated/Contract/Contract"
import {
  GetBorrowers,
  GetSuppliers,
  OwnershipRenounced,
  OwnershipTransferred,
  ChainlinkRequested,
  ChainlinkFulfilled,
  ChainlinkCancelled
} from "../generated/schema"

export function handleGetBorrowers(event: GetBorrowersEvent): void {
  let entity = new GetBorrowers(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.price = event.params.price
  entity.save()
}

export function handleGetSuppliers(event: GetSuppliersEvent): void {
  let entity = new GetSuppliers(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.requestId = event.params.requestId
  entity.price = event.params.price
  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let entity = new OwnershipRenounced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleChainlinkRequested(event: ChainlinkRequestedEvent): void {
  let entity = new ChainlinkRequested(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.save()
}

export function handleChainlinkFulfilled(event: ChainlinkFulfilledEvent): void {
  let entity = new ChainlinkFulfilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.save()
}

export function handleChainlinkCancelled(event: ChainlinkCancelledEvent): void {
  let entity = new ChainlinkCancelled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.id = event.params.id
  entity.save()
}
