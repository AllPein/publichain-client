import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMount } from '@/hooks/useMount';
import { ModalActions } from '@/store/Modal/ModalActions';
import { selectNftInformation } from '@/store/nft/NftSelectors';

export const NftToolComponent = ({ nft }) => {
  const dispatch = useDispatch();
  const nftInformation = useSelector(selectNftInformation);

  const nftInfo = useMemo(() => {
    if (nft && Object.keys(nft).length) {
      return nft;
    }
    return nftInformation;
  }, [nftInformation, nft]);

  useMount(() => {
    if (!nftInfo) {
      dispatch(
        ModalActions.openModal({
          key: 'nft',
          payload: nft,
        }),
      );
    }
  });

  if (!nftInfo) {
    return null;
  }

  return (
    <div className="text-center cursor-pointer max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-xl" src={nftInfo?.imageUrl} />
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
