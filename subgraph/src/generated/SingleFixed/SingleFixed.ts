// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SingleCollectionCreated extends ethereum.Event {
  get params(): SingleCollectionCreated__Params {
    return new SingleCollectionCreated__Params(this);
  }
}

export class SingleCollectionCreated__Params {
  _event: SingleCollectionCreated;

  constructor(event: SingleCollectionCreated) {
    this._event = event;
  }

  get collection_address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[2].value.toString();
  }

  get uri(): string {
    return this._event.parameters[3].value.toString();
  }

  get isPublic(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class SingleItemDelisted extends ethereum.Event {
  get params(): SingleItemDelisted__Params {
    return new SingleItemDelisted__Params(this);
  }
}

export class SingleItemDelisted__Params {
  _event: SingleItemDelisted;

  constructor(event: SingleItemDelisted) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get pairId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SingleItemListed extends ethereum.Event {
  get params(): SingleItemListed__Params {
    return new SingleItemListed__Params(this);
  }
}

export class SingleItemListed__Params {
  _event: SingleItemListed;

  constructor(event: SingleItemListed) {
    this._event = event;
  }

  get pair(): SingleItemListedPairStruct {
    return this._event.parameters[0].value.toTuple() as SingleItemListedPairStruct;
  }
}

export class SingleItemListedPairStruct extends ethereum.Tuple {
  get pairId(): BigInt {
    return this[0].toBigInt();
  }

  get collection(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get creator(): Address {
    return this[3].toAddress();
  }

  get owner(): Address {
    return this[4].toAddress();
  }

  get tokenAdr(): Address {
    return this[5].toAddress();
  }

  get price(): BigInt {
    return this[6].toBigInt();
  }

  get creatorFee(): BigInt {
    return this[7].toBigInt();
  }

  get bValid(): boolean {
    return this[8].toBoolean();
  }
}

export class SingleSwapped extends ethereum.Event {
  get params(): SingleSwapped__Params {
    return new SingleSwapped__Params(this);
  }
}

export class SingleSwapped__Params {
  _event: SingleSwapped;

  constructor(event: SingleSwapped) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pair(): SingleSwappedPairStruct {
    return this._event.parameters[1].value.toTuple() as SingleSwappedPairStruct;
  }
}

export class SingleSwappedPairStruct extends ethereum.Tuple {
  get pairId(): BigInt {
    return this[0].toBigInt();
  }

  get collection(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get creator(): Address {
    return this[3].toAddress();
  }

  get owner(): Address {
    return this[4].toAddress();
  }

  get tokenAdr(): Address {
    return this[5].toAddress();
  }

  get price(): BigInt {
    return this[6].toBigInt();
  }

  get creatorFee(): BigInt {
    return this[7].toBigInt();
  }

  get bValid(): boolean {
    return this[8].toBoolean();
  }
}

export class SingleFixed__pairsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: Address;
  value5: Address;
  value6: BigInt;
  value7: BigInt;
  value8: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: Address,
    value5: Address,
    value6: BigInt,
    value7: BigInt,
    value8: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    return map;
  }
}

export class SingleFixed extends ethereum.SmartContract {
  static bind(address: Address): SingleFixed {
    return new SingleFixed("SingleFixed", address);
  }

  PERCENTS_DIVIDER(): BigInt {
    let result = super.call(
      "PERCENTS_DIVIDER",
      "PERCENTS_DIVIDER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PERCENTS_DIVIDER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PERCENTS_DIVIDER",
      "PERCENTS_DIVIDER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collections(param0: BigInt): Address {
    let result = super.call("collections", "collections(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_collections(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "collections",
      "collections(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createCollection(_name: string, _uri: string, bPublic: boolean): Address {
    let result = super.call(
      "createCollection",
      "createCollection(string,string,bool):(address)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromBoolean(bPublic)
      ]
    );

    return result[0].toAddress();
  }

  try_createCollection(
    _name: string,
    _uri: string,
    bPublic: boolean
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createCollection",
      "createCollection(string,string,bool):(address)",
      [
        ethereum.Value.fromString(_name),
        ethereum.Value.fromString(_uri),
        ethereum.Value.fromBoolean(bPublic)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  currentPairId(): BigInt {
    let result = super.call("currentPairId", "currentPairId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentPairId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentPairId",
      "currentPairId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeAddress(): Address {
    let result = super.call("feeAddress", "feeAddress():(address)", []);

    return result[0].toAddress();
  }

  try_feeAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeAddress", "feeAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pairs(param0: BigInt): SingleFixed__pairsResult {
    let result = super.call(
      "pairs",
      "pairs(uint256):(uint256,address,uint256,address,address,address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new SingleFixed__pairsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBoolean()
    );
  }

  try_pairs(param0: BigInt): ethereum.CallResult<SingleFixed__pairsResult> {
    let result = super.tryCall(
      "pairs",
      "pairs(uint256):(uint256,address,uint256,address,address,address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SingleFixed__pairsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBoolean()
      )
    );
  }

  swapFee(): BigInt {
    let result = super.call("swapFee", "swapFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_swapFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("swapFee", "swapFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalEarnedCoin(): BigInt {
    let result = super.call(
      "totalEarnedCoin",
      "totalEarnedCoin():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalEarnedCoin(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalEarnedCoin",
      "totalEarnedCoin():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalEarnedToken(): BigInt {
    let result = super.call(
      "totalEarnedToken",
      "totalEarnedToken():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalEarnedToken(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalEarnedToken",
      "totalEarnedToken():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _feeAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCollectionCall extends ethereum.Call {
  get inputs(): CreateCollectionCall__Inputs {
    return new CreateCollectionCall__Inputs(this);
  }

  get outputs(): CreateCollectionCall__Outputs {
    return new CreateCollectionCall__Outputs(this);
  }
}

export class CreateCollectionCall__Inputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }

  get bPublic(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class CreateCollectionCall__Outputs {
  _call: CreateCollectionCall;

  constructor(call: CreateCollectionCall) {
    this._call = call;
  }

  get collection(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetFeeAddressCall extends ethereum.Call {
  get inputs(): SetFeeAddressCall__Inputs {
    return new SetFeeAddressCall__Inputs(this);
  }

  get outputs(): SetFeeAddressCall__Outputs {
    return new SetFeeAddressCall__Outputs(this);
  }
}

export class SetFeeAddressCall__Inputs {
  _call: SetFeeAddressCall;

  constructor(call: SetFeeAddressCall) {
    this._call = call;
  }

  get _feeAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeAddressCall__Outputs {
  _call: SetFeeAddressCall;

  constructor(call: SetFeeAddressCall) {
    this._call = call;
  }
}

export class SingleBuyCall extends ethereum.Call {
  get inputs(): SingleBuyCall__Inputs {
    return new SingleBuyCall__Inputs(this);
  }

  get outputs(): SingleBuyCall__Outputs {
    return new SingleBuyCall__Outputs(this);
  }
}

export class SingleBuyCall__Inputs {
  _call: SingleBuyCall;

  constructor(call: SingleBuyCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SingleBuyCall__Outputs {
  _call: SingleBuyCall;

  constructor(call: SingleBuyCall) {
    this._call = call;
  }
}

export class SingleDelistCall extends ethereum.Call {
  get inputs(): SingleDelistCall__Inputs {
    return new SingleDelistCall__Inputs(this);
  }

  get outputs(): SingleDelistCall__Outputs {
    return new SingleDelistCall__Outputs(this);
  }
}

export class SingleDelistCall__Inputs {
  _call: SingleDelistCall;

  constructor(call: SingleDelistCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SingleDelistCall__Outputs {
  _call: SingleDelistCall;

  constructor(call: SingleDelistCall) {
    this._call = call;
  }
}

export class SingleListCall extends ethereum.Call {
  get inputs(): SingleListCall__Inputs {
    return new SingleListCall__Inputs(this);
  }

  get outputs(): SingleListCall__Outputs {
    return new SingleListCall__Outputs(this);
  }
}

export class SingleListCall__Inputs {
  _call: SingleListCall;

  constructor(call: SingleListCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _tokenAdr(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SingleListCall__Outputs {
  _call: SingleListCall;

  constructor(call: SingleListCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
