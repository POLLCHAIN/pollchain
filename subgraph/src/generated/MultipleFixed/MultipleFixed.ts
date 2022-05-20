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

export class MultiCollectionCreated extends ethereum.Event {
  get params(): MultiCollectionCreated__Params {
    return new MultiCollectionCreated__Params(this);
  }
}

export class MultiCollectionCreated__Params {
  _event: MultiCollectionCreated;

  constructor(event: MultiCollectionCreated) {
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

export class MultiItemDelisted extends ethereum.Event {
  get params(): MultiItemDelisted__Params {
    return new MultiItemDelisted__Params(this);
  }
}

export class MultiItemDelisted__Params {
  _event: MultiItemDelisted;

  constructor(event: MultiItemDelisted) {
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

export class MultiItemListed extends ethereum.Event {
  get params(): MultiItemListed__Params {
    return new MultiItemListed__Params(this);
  }
}

export class MultiItemListed__Params {
  _event: MultiItemListed;

  constructor(event: MultiItemListed) {
    this._event = event;
  }

  get item(): MultiItemListedItemStruct {
    return this._event.parameters[0].value.toTuple() as MultiItemListedItemStruct;
  }
}

export class MultiItemListedItemStruct extends ethereum.Tuple {
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

  get balance(): BigInt {
    return this[6].toBigInt();
  }

  get price(): BigInt {
    return this[7].toBigInt();
  }

  get creatorFee(): BigInt {
    return this[8].toBigInt();
  }

  get bValid(): boolean {
    return this[9].toBoolean();
  }
}

export class MultiItemSwapped extends ethereum.Event {
  get params(): MultiItemSwapped__Params {
    return new MultiItemSwapped__Params(this);
  }
}

export class MultiItemSwapped__Params {
  _event: MultiItemSwapped;

  constructor(event: MultiItemSwapped) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get item(): MultiItemSwappedItemStruct {
    return this._event.parameters[3].value.toTuple() as MultiItemSwappedItemStruct;
  }
}

export class MultiItemSwappedItemStruct extends ethereum.Tuple {
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

  get balance(): BigInt {
    return this[6].toBigInt();
  }

  get price(): BigInt {
    return this[7].toBigInt();
  }

  get creatorFee(): BigInt {
    return this[8].toBigInt();
  }

  get bValid(): boolean {
    return this[9].toBoolean();
  }
}

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

export class MultipleFixed__pairsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: Address;
  value5: Address;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: Address,
    value5: Address,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: boolean
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
    this.value9 = value9;
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
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromBoolean(this.value9));
    return map;
  }
}

export class MultipleFixed extends ethereum.SmartContract {
  static bind(address: Address): MultipleFixed {
    return new MultipleFixed("MultipleFixed", address);
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

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
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

  pairs(param0: BigInt): MultipleFixed__pairsResult {
    let result = super.call(
      "pairs",
      "pairs(uint256):(uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new MultipleFixed__pairsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBoolean()
    );
  }

  try_pairs(param0: BigInt): ethereum.CallResult<MultipleFixed__pairsResult> {
    let result = super.tryCall(
      "pairs",
      "pairs(uint256):(uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MultipleFixed__pairsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBoolean()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

export class MultipleBuyCall extends ethereum.Call {
  get inputs(): MultipleBuyCall__Inputs {
    return new MultipleBuyCall__Inputs(this);
  }

  get outputs(): MultipleBuyCall__Outputs {
    return new MultipleBuyCall__Outputs(this);
  }
}

export class MultipleBuyCall__Inputs {
  _call: MultipleBuyCall;

  constructor(call: MultipleBuyCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MultipleBuyCall__Outputs {
  _call: MultipleBuyCall;

  constructor(call: MultipleBuyCall) {
    this._call = call;
  }
}

export class MultipleDelistCall extends ethereum.Call {
  get inputs(): MultipleDelistCall__Inputs {
    return new MultipleDelistCall__Inputs(this);
  }

  get outputs(): MultipleDelistCall__Outputs {
    return new MultipleDelistCall__Outputs(this);
  }
}

export class MultipleDelistCall__Inputs {
  _call: MultipleDelistCall;

  constructor(call: MultipleDelistCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MultipleDelistCall__Outputs {
  _call: MultipleDelistCall;

  constructor(call: MultipleDelistCall) {
    this._call = call;
  }
}

export class MultipleListCall extends ethereum.Call {
  get inputs(): MultipleListCall__Inputs {
    return new MultipleListCall__Inputs(this);
  }

  get outputs(): MultipleListCall__Outputs {
    return new MultipleListCall__Outputs(this);
  }
}

export class MultipleListCall__Inputs {
  _call: MultipleListCall;

  constructor(call: MultipleListCall) {
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

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class MultipleListCall__Outputs {
  _call: MultipleListCall;

  constructor(call: MultipleListCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
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

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
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

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeAddressCall__Outputs {
  _call: SetFeeAddressCall;

  constructor(call: SetFeeAddressCall) {
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