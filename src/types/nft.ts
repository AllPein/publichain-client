export type GetNftInfoPayload = {
  name: string;
  tokenAddress: string;
  tokenId: string;
  network: string;
};

export type NftState = GetNftInfoPayload & {
  imageUrl: string;
};

export enum NetworkType {
  ETHEREUM = 'ethereum',
  POLYGON = 'polygon',
  GOERLI = 'goerli',
}

export const NetworkTypeToName = {
  [NetworkType.ETHEREUM]: 'Ethereum',
  [NetworkType.POLYGON]: 'Polygon',
  [NetworkType.GOERLI]: 'Goerli',
};
