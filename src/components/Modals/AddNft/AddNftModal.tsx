import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import debounce from 'lodash.debounce';

import DefaultNftCard from '@/assets/icons/diamond.png';
import { Button } from '@/components/Button/Button';
import { Modal } from '@/components/Modal/Modal';
import { Select } from '@/components/Select/Select';
import { ModalActions, ModalData } from '@/store/Modal/ModalActions';
import { selectNftModal } from '@/store/Modal/ModalSelectors';
import { RootState } from '@/store/StoreTypes';
import { NftAction } from '@/store/nft/NftActions';
import { selectNftInformation } from '@/store/nft/NftSelectors';
import { NetworkType, NetworkTypeToName } from '@/types/nft';

const networkOptions = [
  {
    name: NetworkTypeToName[NetworkType.ETHEREUM],
    value: NetworkType.ETHEREUM,
  },
  {
    name: NetworkTypeToName[NetworkType.POLYGON],
    value: NetworkType.POLYGON,
  },
  {
    name: NetworkTypeToName[NetworkType.GOERLI],
    value: NetworkType.GOERLI,
  },
];

const CHANGE_DEBOUNCE_TIME = 300;

export const AddNftModal: FC = () => {
  /** Store */
  const dispatch = useDispatch();
  const modalData: ModalData<string> = useSelector(selectNftModal);
  const nftInformation = useSelector((state: RootState) =>
    selectNftInformation(state, modalData.payload || ''),
  );

  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [network, setNetwork] = useState(networkOptions[0]);

  /** Methods */
  const onClose = () => {
    dispatch(ModalActions.closeModal('nft'));
  };

  const handleCreateBlock = useCallback(() => {
    // dispatch(
    //   NftAction.setNftInformation({
    //     tokenAddress,
    //     tokenId,
    //     network: network.value,
    //     imageUrl: nftInformation?.imageUrl!,
    //   }),
    // );
    onClose();
  }, [nftInformation, tokenAddress, tokenId, network]);

  const handleChangeTokenAddress = (e) => {
    setTokenAddress(e.target.value);
  };

  const findNftInfo = useMemo(
    () =>
      debounce((value) => {
        dispatch(
          NftAction.getNftInformation({
            id: modalData.payload as string,
            tokenAddress,
            tokenId: value,
            network: network.value,
          }),
        );
      }, CHANGE_DEBOUNCE_TIME),
    [dispatch, tokenAddress, network],
  );

  const handleChangeTokenId = (e) => {
    const value = e.target.value;
    setTokenId(value);
    if (value.length) {
      findNftInfo(value);
    }
  };

  const handleChangeNetwork = (value) => {
    setNetwork(value);
  };

  if (!modalData || !modalData.payload) {
    return null;
  }

  const body = (
    <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl w-full mx-2 mt-12">
      <div className="text-center cursor-pointer w-full bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
        {nftInformation?.imageUrl ? (
          <img className="rounded-t-xl" src={nftInformation?.imageUrl} />
        ) : (
          <div
            className="bg-gray-100 rounded-t-xl flex items-center justify-center"
            style={{ width: 350, height: 382 }}
          >
            <img src={DefaultNftCard} className="w-32 h-32 " />
          </div>
        )}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {nftInformation?.name || (
              <div role="status" className="w-full animate-pulse">
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
              </div>
            )}
          </h5>
          {!nftInformation?.tokenAddress ? (
            <div
              role="status"
              className="w-full flex justify-center animate-pulse"
            >
              <div className="h-3 w-48 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
            </div>
          ) : (
            <a
              target="_blank"
              href={`https://etherscan.io/address/${nftInformation?.tokenAddress}`}
            >
              <span className="inline-block bg-gray-200 hover:bg-gray-100 rounded-full px-3 py-1 text-xs font-light text-gray-700 mr-2 mb-2">
                {nftInformation.tokenAddress.slice(0, 10)}...
              </span>
            </a>
          )}
        </div>
      </div>
      <div className="w-full py-12 px-6 text-gray-800 flex flex-col justify-between">
        <form className="space-y-8" action="#">
          <div>
            <label className="block my-2 text-base font-medium text-gray-900 dark:text-white">
              Network
            </label>
            <Select
              value={network}
              options={networkOptions}
              onChange={handleChangeNetwork}
            />
          </div>
          <div>
            <label className="block my-2 text-base font-medium text-gray-900 dark:text-white">
              Contract Address
            </label>
            <input
              type="tokenAddress"
              name="tokenAddress"
              id="tokenAddress"
              onChange={handleChangeTokenAddress}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="e.g. 0xff9c…13d7"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
              Token ID
            </label>
            <input
              name="tokenId"
              onChange={handleChangeTokenId}
              id="tokenId"
              placeholder="e.g. 420"
              className="bg-gray-50 border max-h-64 border-gray-300 text-gray-900 text-basae rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );

  const footer = (
    <Button className="mt-6 text-center" onClick={handleCreateBlock}>
      Create block
    </Button>
  );

  return (
    <Modal
      onClose={onClose}
      closable
      title="Embed NFT"
      isOpen={modalData.isOpen}
      footer={footer}
    >
      {body}
    </Modal>
  );
};
