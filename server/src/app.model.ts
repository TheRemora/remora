export class NFTAsset {
  url: string;
  name: string;
  description: string;
  collectionUUID: string;
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

export class SNFTViewModel {
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
  }
}
