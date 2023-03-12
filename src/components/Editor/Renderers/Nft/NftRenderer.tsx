import React from 'react';

import DefaultNftCard from '@/assets/icons/diamond.png';

export const Nft = ({ data }) => {
  return (
    <div className="w-full flex justify-center my-12">
      <div className="text-center cursor-pointer max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
        {data?.imageUrl ? (
          <img
            className="rounded-t-xl"
            style={{ width: 382, height: 382 }}
            src={data?.imageUrl}
          />
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
            {data.name}
          </h5>
          <a
            target="_blank"
            href={`https://etherscan.io/address/${data.tokenAddress}`}
          >
            <span className="inline-block bg-gray-200 hover:bg-gray-100 rounded-full px-3 py-1 text-xs font-light text-gray-700 mr-2 mb-2">
              {data.tokenAddress.slice(0, 10)}...
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
