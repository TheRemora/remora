export class NFTAsset {
  id: string;
  collectionUUID: string;
  collectionAddress: string;
  tokenID: string;
  imageURL: string;
  imageName: string;
  imageDescription: string;

  constructor(
    collectionUUID: string,
    collectionAddress: string,
    tokenID: string,
    imageURL: string,
    imageName: string,
    imageDesciption: string,
  ) {
    this.collectionUUID = collectionUUID;
    this.collectionAddress = collectionAddress;
    this.tokenID = tokenID;
    this.imageURL = imageURL;
    this.imageName = imageName;
    this.imageDescription = imageDesciption;
    this.id = collectionUUID + '_' + tokenID;
  }
}

export abstract class NFTCollection {
  uuid: string;
  collectionName: string;
  contractAddress: string;
  assets: Array<NFTAsset>;

  constructor(uuid: string, collectionName: string, contractAddress: string) {
    this.uuid = uuid;
    this.collectionName = collectionName;
    this.contractAddress = contractAddress;
    this.assets = new Array<NFTAsset>();
  }

  addAssets(asset: NFTAsset) {
    this.assets.push(asset);
  }

  getAssets(): Array<NFTAsset> {
    return this.assets;
  }
}

export class SNFTCollection extends NFTCollection {
  constructor(uuid: string, collectionName: string, contractAdress: string) {
    super(uuid, collectionName, contractAdress);
  }
}

export class CNFTCollection extends NFTCollection {
  constructor(uuid: string, collectionName: string, contractAdress: string) {
    super(uuid, collectionName, contractAdress);
  }
}
