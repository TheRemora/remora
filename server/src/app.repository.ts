import { UUID } from './app.types';
import { CNFTCollection, NFTAsset, SNFTCollection } from './app.model';

/*
Mock-only
*/
const snftCollections: Record<UUID, SNFTCollection> = {};
const cnftCollections: Record<UUID, CNFTCollection> = {};

/**
 * should load from Blockchain
 */
function init() {
  const snft1: SNFTCollection = new SNFTCollection(
    'snft1',
    'FirstCollection',
    '0x284575Ee6DbBB1EaC0aEC3154fe85b456b692D80',
  );
  snft1.addAssets(
    new NFTAsset(
      snft1.uuid,
      snft1.contractAddress,
      '1',
      'https://gateway.pinata.cloud/ipfs/QmXxbmW6tHxJDqV9DCeJN4XHqCjh8HPobhWmFoLXoMD3Sv',
      'Frankfurt am Main (FFM) Galeria Kaufhof',
      'Yet another usual day in Frankfurt am Main',
    ),
  );

  const snft2: SNFTCollection = new SNFTCollection(
    'snft2',
    'SecondCollection',
    '0xc45A0b88C26209b23762AF7387e3D5729615ef1E',
  );
  snft2.addAssets(
    new NFTAsset(
      snft2.uuid,
      snft2.contractAddress,
      '1',
      'https://gateway.pinata.cloud/ipfs/QmbMPGhr8SsDvctBwjCr9YRkxa5hsg2Zwd36y8rmR6Rof1',
      'Brick wall windows are looking to the same direction',
      'Bricks window looking to the same direction',
    ),
  );

  snftCollections[snft1.uuid] = snft1;
  snftCollections[snft2.uuid] = snft2;
}

/* Call mock */
init();

function getSNFTCollection(uuid: UUID): SNFTCollection {
  return snftCollections[uuid];
}

function getCNFTCollection(uuid: UUID): CNFTCollection {
  return cnftCollections[uuid];
}

function storeSNFTCollection(collection: SNFTCollection) {
  const _uuid: string = collection.uuid;
  snftCollections[_uuid] = collection;
}

function storeCNFTCollection(collection: CNFTCollection) {
  const _uuid: string = collection.uuid;
  cnftCollections[_uuid] = collection;
}

function getAllSNFTCollections(): Array<SNFTCollection> {
  const _snftCollections: Array<CNFTCollection> = Object.values<SNFTCollection>(snftCollections);
  return _snftCollections;
}

function getAllCNFTCollections(): Array<CNFTCollection> {
  const _cnftCollections: Array<CNFTCollection> = Object.values<CNFTCollection>(cnftCollections);
  return _cnftCollections;
}

export const Repository = {
  getSNFTCollection,
  getCNFTCollection,
  storeSNFTCollection,
  storeCNFTCollection,
  getAllSNFTCollections,
  getAllCNFTCollections,
};
