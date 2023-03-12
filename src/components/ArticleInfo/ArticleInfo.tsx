import React from 'react';

// import { useSelector } from 'react-redux';
import Blocks from 'editorjs-blocks-react-renderer';
import { CodeBoxOutput } from 'editorjs-react-renderer';

import { Checkbox } from '@/components/Editor/Renderers/Checkbox/CheckboxRenderer';
import { Image } from '@/components/Editor/Renderers/Image/ImageRenderer';
import { List } from '@/components/Editor/Renderers/List/ListRenderer';
import { Nft } from '@/components/Editor/Renderers/Nft/NftRenderer';
import { Quote } from '@/components/Editor/Renderers/Quote/QuoteRenderer';
import { Warning } from '@/components/Editor/Renderers/Warning/WarningRenderer';
// import { selectArticleInfo } from '@/store/article/ArticleSelectors';
import { trimAccountAddress } from '@/utils/stringHelper';

export const ArticleInfo = () => {
  // const articleInfo = useSelector(selectArticleInfo);
  const articleInfo = {
    title: 'Title of the article',
    transactionId: 'jefhakhfhkjasfhajskfhjasljhalhjasfhashlf',
    author: {
      name: 'Aleksandr Panin',
      bio: 'Web dev',
      address: 'dfljsiqgeyfgq1g231241hbhcabkhb1b2',
      imageUrl:
        'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    },
  };

  if (!articleInfo) {
    return null;
  }

  const data = {
    time: 1678523296185,
    version: '1',
    blocks: [
      {
        id: 'mhTl6ghSkV',
        type: 'paragraph',
        data: {
          text: 'Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓',
        },
      },
      {
        id: 'l98dyx3yjb',
        type: 'header',
        data: {
          text: 'Key features',
          level: 3,
        },
      },
      {
        id: 'os_YI4eub4',
        type: 'list',
        data: {
          type: 'ordered',
          items: [
            'It is a block-style editor',
            'It returns clean data output in JSON',
            "Designed to be extendable and pluggable with a <a href='https://editorjs.io/creating-a-block-tool'>simple API</a>",
          ],
        },
      },
      {
        id: '1yKeXKxN7-',
        type: 'header',
        data: {
          text: 'What does it mean «block-styled editor»',
          level: 3,
        },
      },
      {
        id: 'TcUNySG15P',
        type: 'paragraph',
        data: {
          text: "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc. Each of them is an independent <sup data-tune='footnotes'>1</sup> contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.",
        },
        tunes: {
          footnotes: [
            'It works more stable then in other WYSIWYG editors. Same time it has smooth and well-known arrow navigation behavior like classic editors.',
          ],
        },
      },
      {
        id: 'M3UXyblhAo',
        type: 'header',
        data: {
          text: 'What does it mean clean data output?',
          level: 3,
        },
      },
      {
        id: 'KOcIofZ3Z1',
        type: 'paragraph',
        data: {
          text: "There are dozens of ready-to-use Blocks and a simple API <sup data-tune='footnotes'>2</sup> for creating any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA buttons, and even games.",
        },
        tunes: {
          footnotes: [
            "Just take a look at our Creating Block Tool guide. You'll be surprised.",
          ],
        },
      },
      {
        id: 'asfaafa',
        type: 'nft',
        data: {
          imageUrl: undefined,
          name: 'Mirascapes',
          tokenAddress: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
          tokenId: '1',
          network: 'ethereum',
        },
      },
      {
        id: 'asfaaf1124a',
        type: 'nft',
        data: {
          imageUrl:
            'https://storage.googleapis.com/sentinel-nft/raw-assets/4483d594c929e1e5bf33a7aa56f2f5436115c192192bcd6e443d738e4ec63abb.png',
          name: 'Moonbirds',
          tokenAddress: '0x23581767a106ae21c074b2276d25e5c3e136a68b',
          tokenId: '1',
          network: 'ethereum',
        },
      },
      {
        id: 'ksCokKAhQw',
        type: 'paragraph',
        data: {
          text: 'Classic WYSIWYG editors produce raw HTML-markup with both content data and content appearance. On the contrary, <mark>Editor.js outputs JSON object</mark> with data of each Block.',
        },
      },
      {
        id: 'XKNT99-qqS',
        type: 'attaches',
        data: {
          file: {
            url: 'https://drive.google.com/user/catalog/my-file.pdf',
            size: 12902,
            name: 'file.pdf',
            extension: 'pdf',
          },
          title: 'My file',
        },
      },
      {
        id: '7RosVX2kcH',
        type: 'paragraph',
        data: {
          text: 'Given data can be used as you want: render with HTML for Web clients, render natively for mobile apps, create the markup for Facebook Instant Articles or Google AMP, generate an audio version, and so on.',
        },
      },
      {
        id: '7RosVX2asfH',
        type: 'quote',
        data: {
          caption: 'Socrates',
          text: 'The unexamined life is not worth living',
        },
      },
      {
        id: 'eq06PsNsab',
        type: 'paragraph',
        data: {
          text: 'Clean data is useful to sanitize, validate and process on the backend.',
        },
      },
      {
        id: 'eq06PsNffsab',
        type: 'warning',
        data: {
          text: 'Simple warning',
        },
      },
      {
        id: 'eq06PsNffsa122412b',
        type: 'checkbox',
        data: {
          items: [
            {
              text: 'Сходить в туалет',
              checked: true,
            },
            {
              text: 'Проснуться',
              checked: false,
            },
            {
              text: 'Встать с кровати',
              checked: false,
            },
          ],
        },
      },
      {
        id: 'hZAjSnqYMX',
        type: 'image',
        data: {
          file: {
            url: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
          },
          withBorder: false,
          withBackground: false,
          stretched: true,
          caption: 'CodeX Code Camp 2019',
        },
      },
    ],
  };

  return (
    <div className="max-w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <div className="max-w-6xl">
        <h1 className="text-center text-8xl my-12 font-poppins">
          {articleInfo.title}
        </h1>
        <Blocks
          data={data}
          renderers={{
            list: List,
            quote: Quote as any,
            image: Image as any,
            nft: Nft,
            warning: Warning,
            checkbox: Checkbox,
            code: CodeBoxOutput,
          }}
          config={{
            code: {
              className: 'language-js',
            },
            delimiter: {
              className: 'border border-2 w-16 mx-auto',
            },
            embed: {
              className: 'border-0',
            },
            header: {
              className: 'text-2xl font-bold font-poppins mt-12',
            },
            image: {
              className: 'w-full max-w-screen-md mt-8',
              captionClassName: 'text-center mt-4 text-gray-500',
            },
            list: {
              className: 'list-inside mt-6 font-poppins font-thin',
            },
            paragraph: {
              className:
                'text-xl text-opacity-75 font-poppins font-thin leading-10 mt-4',
              actionsClassNames: {
                alignment: 'text-{alignment}', // This is a substitution placeholder: left or center.
              },
            },
            quote: {
              className:
                'p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800',
            },
            table: {
              className: 'table-auto',
            },
          }}
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
