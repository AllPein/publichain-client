import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultNftCard from '@/assets/icons/diamond.png';
import { ModalActions } from '@/store/Modal/ModalActions';
import { RootState } from '@/store/StoreTypes';
import { selectNftInformation } from '@/store/nft/NftSelectors';

export const NftToolComponent = ({ nft, id, setData }) => {
  const dispatch = useDispatch();
  const nftInformation = useSelector((state: RootState) =>
    selectNftInformation(state, id),
  );

  const nftInfo = useMemo(() => {
    if (nft && Object.keys(nft).length) {
      return nft;
    }
    return nftInformation;
  }, [nftInformation, nft]);

  useEffect(() => {
    if (!nftInfo) {
      dispatch(
        ModalActions.openModal({
          key: 'nft',
          payload: id,
        }),
      );
    } else {
      setData(nftInfo);
    }
  }, [nftInfo]);

  if (!nftInfo) {
    return null;
  }

  return (
    <div className="text-center cursor-pointer max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      {nftInfo?.imageUrl ? (
        <img className="rounded-t-xl" src={nftInfo?.imageUrl} />
      ) : (
        <div
          className="bg-gray-100 rounded-t-xl flex items-center justify-center"
          style={{ width: 382, height: 382 }}
        >
          <img src={DefaultNftCard} className="w-32 h-32 " />
        </div>
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {nftInfo.name}
        </h5>
        <a
          target="_blank"
          href={`https://etherscan.io/address/${nftInfo.tokenAddress}`}
        >
          <span className="inline-block bg-gray-200 hover:bg-gray-100 rounded-full px-3 py-1 text-xs font-light text-gray-700 mr-2 mb-2">
            {nftInfo.tokenAddress.slice(0, 10)}...
          </span>
        </a>
      </div>
    </div>
  );
};
