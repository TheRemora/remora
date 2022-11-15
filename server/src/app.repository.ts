import { UUID } from './app.types';
import { CNFTCollection, SNFTCollection } from './app.model';

const snftCollections: Record<UUID, SNFTCollection> = {};
const cnftCollections: Record<UUID, CNFTCollection> = {};

export function getSNFTCollection(uuid: UUID): SNFTCollection {
  return snftCollections[uuid];
}

export function getCNFTCollection(uuid: UUID): CNFTCollection {
  return cnftCollections[uuid];
}

export function storeSNFTCollection(collection: SNFTCollection) {
  const _uuid: string = collection.uuid;
  snftCollections[_uuid] = collection;
}

export function storeCNFTCollection(collection: CNFTCollection) {
  const _uuid: string = collection.uuid;
  cnftCollections[_uuid] = collection;
}
