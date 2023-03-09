import React from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { useSelector } from 'react-redux';

import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { selectArticleInfo } from '@/store/article/ArticleSelectors';
import { trimAccountAddress } from '@/utils/stringHelper';

export const ArticleInfo = () => {
  const articleInfo = useSelector(selectArticleInfo);

  const ReactEditorJS = createReactEditorJS();

  if (!articleInfo) {
    return null;
  }

  return (
    <div className="max-w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <div className="max-w-8xl">
        <h1 className="text-center text-8xl my-12">{articleInfo.title}</h1>
        <ReactEditorJS
          holder="editor"
          readOnly
          defaultValue={articleInfo.data}
          tools={EDITOR_JS_TOOLS}
        />
        <div className="py-12">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-xl font-medium text-indigo-600 dark:text-neutral-50">
              Created and published by
            </p>
            <div className="mt-10 flex flex-row items-center rounded-lg bg-white outline outline-gray-200 dark:bg-neutral-700 max-w-lg cursor-pointer">
              <img
                src={articleInfo.author.imageUrl}
                className="rounded-full w-32 h-32 ml-4"
                alt=""
                loading="lazy"
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  {articleInfo.author.name}
                </h5>
                <p className="text-xs mb-4 text-neutral-500 dark:text-neutral-300">
                  {trimAccountAddress(articleInfo.author.address)}
                </p>
                <p className="mb-4 text-base break-all text-neutral-600 dark:text-neutral-200">
                  {articleInfo.author.bio}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <p className="mb-4 text-xl font-medium text-indigo-600 dark:text-neutral-50">
              Publication information
            </p>
            <dl className="max-w-lg text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3 hover:bg-gray-100 p-3 cursor-pointer">
                <a
                  target="_blank"
                  href={`https://testnet.xrpl.org/transactions/${articleInfo.transactionId}`}
                >
                  <div className="inline-flex">
                    <dt className="text-md font-semibold mb-1 ">
                      Transaction ID
                    </dt>
                    <svg
                      viewBox="0 0 20 20"
                      className="ml-3 mt-0.5 h-5 w-5 fill-slate-400"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path>
                    </svg>
                  </div>

                  <dd className="text-gray-500 md:text-md dark:text-gray-400">
                    {articleInfo.transactionId}
                  </dd>
                </a>
              </div>
              <div className="flex flex-col p-3 hover:bg-gray-100  cursor-pointer">
                <a
                  target="_blank"
                  href={`https://testnet.xrpl.org/accounts/${articleInfo.author.address}`}
                >
                  <div className="inline-flex">
                    <dt className="text-md font-semibold mb-1 ">
                      Author address
                    </dt>
                    <svg
                      viewBox="0 0 20 20"
                      className="ml-3 mt-0.5 h-5 w-5 fill-slate-400"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path>
                    </svg>
                  </div>

                  <dd className="  text-gray-500 md:text-md dark:text-gray-400">
                    {articleInfo.author.address}
                  </dd>
                </a>
              </div>

              <div className="flex flex-col p-3">
                <dt className="mb-1 text-md font-semibold">Content digest</dt>
                <dd className=" text-gray-500 md:text-md dark:text-gray-400">
                  3WQQzeEv_UYYJaa…N28pKintdpiH5EA
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-32 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-lg text-xl px-5 py-2.5 my-12 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Collect
      </button>
    </div>
  );
};
