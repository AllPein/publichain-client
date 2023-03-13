import React, { useMemo } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

import {
  ArrowTopRightOnSquareIcon,
  PlayCircleIcon,
  StopCircleIcon,
} from '@heroicons/react/20/solid';
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
  const { speak, speaking, cancel } = useSpeechSynthesis();

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
          network: 'polygon',
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
              text: 'Shit the bed',
              checked: true,
            },
            {
              text: 'Wake up',
              checked: false,
            },
            {
              text: 'Get up',
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

  const textToSpeak = useMemo(() => {
    const regex = /<.*?>/g;
    const text =
      `Article written and published by ${articleInfo.author.name}. ` +
      articleInfo.title +
      '. ' +
      data.blocks
        .filter(
          (block) =>
            block.data.text ||
            block.data.caption ||
            block.type === 'checkbox' ||
            block.type === 'list',
        )
        .map((block) => {
          if (block.type === 'checkbox') {
            return block.data.items!.map((item) => {
              const mappedItem = item.text.replace(regex, '');
              if (item.checked) {
                return `${mappedItem}. check. `;
              }

              return mappedItem + '. ';
            });
          }

          if (block.type === 'quote') {
            return `${block.data.text?.replace(
              regex,
              '',
            )}, said ${block.data.caption?.replace(regex, '')}`;
          }

          if (block.data.text) {
            return block.data.text?.replace(regex, '');
          }

          if (block.data.caption) {
            return block.data.caption?.replace(regex, '');
          }

          if (block.type === 'list') {
            return block.data.items!.map((item, index) => {
              const mappedItem = item.replace(regex, '');
              if (block.data.type === 'ordered') {
                return `${index + 1}. ${mappedItem}. `;
              }

              return mappedItem;
            });
          }

          return '';
        })
        .join('. ');

    return text;
  }, [articleInfo, data]);

  if (!articleInfo) {
    return null;
  }

  return (
    <div className="max-w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <div className="max-w-4xl">
        <div className="inline-flex items-end w-full justify-start rounded-mdpx-4 pb-12 pt-6 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <a
            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
            id="dropdownMenuButton2"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
          >
            <img
              src={articleInfo.author.imageUrl}
              className="rounded-full w-10 h-10"
              alt=""
              loading="lazy"
            />
            <div className="text-left ml-3">
              <p className="text-base text-black">{articleInfo.author.name}</p>
              <p className="text-xs text-gray-400">
                {trimAccountAddress(articleInfo.author.address)}
              </p>
            </div>
          </a>
          <p className="text-gray-400 ml-6 font-light">30.09.2018</p>
          {speaking ? (
            <a className="flex ml-10 cursor-pointer" onClick={() => cancel()}>
              <p className="text-indigo-600 font-light">Stop</p>
              <StopCircleIcon className="ml-1 h-5 w-5 text-indigo-600" />
            </a>
          ) : (
            <a
              className="flex ml-10 cursor-pointer"
              onClick={() =>
                speak({
                  text: textToSpeak,
                  rate: 0.8,
                })
              }
            >
              <p className="text-indigo-600 font-light">Listen</p>
              <PlayCircleIcon className="ml-1 h-5 w-5 text-indigo-600" />
            </a>
          )}
        </div>
        <div className="mb-32 mt-16 flex flex-col justify-between">
          <h1 className="text-center  text-8xl font-poppins break-word">
            {articleInfo.title}
          </h1>
          <div className="mt-32 flex justify-end mr-4">
            <span className="transition duration-300 ease-in-out bg-gray-100 rounded-full px-3 py-1 text-xs font-normal text-gray-600">
              500 collected
            </span>
          </div>
        </div>

        <Blocks
          data={data}
          renderers={{
            list: List,
            quote: Quote as any,
            image: Image as any,
            nft: Nft as any,
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
              className: 'list-inside mt-6 font-poppins font-light',
            },
            paragraph: {
              className:
                'text-xl text-opacity-75 font-poppins font-light leading-10 mt-4',
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
        <div className="pt-32 pb-20">
          <div className="flex justify-between mt-12">
            <dl className="max-w-lg bg-gray-100 rounded-xl p-4 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className=" transition ease-in-out duration-150 rounded-md hover:bg-gray-200 flex flex-col pb-3 p-3 cursor-pointer">
                <a
                  target="_blank"
                  href={`https://testnet.xrpl.org/transactions/${articleInfo.transactionId}`}
                >
                  <div className="inline-flex w-full">
                    <dt className="text-md font-semibold mb-1 ">
                      Transaction ID
                    </dt>
                    <ArrowTopRightOnSquareIcon className="ml-3 mt-1 w-4 h-4 text-gray-500" />
                  </div>

                  <dd className="text-gray-500 md:text-md dark:text-gray-400">
                    {articleInfo.transactionId}
                  </dd>
                </a>
              </div>
              <div className="transition ease-in-out duration-150 rounded-md flex flex-col p-3 hover:bg-gray-200  cursor-pointer">
                <a
                  target="_blank"
                  href={`https://testnet.xrpl.org/accounts/${articleInfo.author.address}`}
                >
                  <div className="inline-flex">
                    <dt className="text-md font-semibold mb-1 ">
                      Author address
                    </dt>
                    <ArrowTopRightOnSquareIcon className="ml-3 mt-1 w-4 h-4 text-gray-500" />
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
            <dl className="max-w-lg bg-gray-100 rounded-xl p-4 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className=" transition ease-in-out duration-150 rounded-md hover:bg-gray-200 flex flex-col pb-3 p-3 cursor-pointer">
                <a
                  target="_blank"
                  href={`https://testnet.xrpl.org/transactions/${articleInfo.transactionId}`}
                >
                  <div className="inline-flex w-full">
                    <dt className="text-md font-semibold mb-1 ">
                      Transaction ID
                    </dt>
                    <ArrowTopRightOnSquareIcon className="ml-3 mt-1 w-4 h-4 text-gray-500" />
                  </div>

                  <dd className="text-gray-500 md:text-md dark:text-gray-400">
                    {articleInfo.transactionId}
                  </dd>
                </a>
              </div>
              <div className="transition ease-in-out duration-150 rounded-md flex flex-col p-3 hover:bg-gray-200  cursor-pointer">
                <a
                  target="_blank"
                  href={`https://testnet.xrpl.org/accounts/${articleInfo.author.address}`}
                >
                  <div className="inline-flex">
                    <dt className="text-md font-semibold mb-1 ">
                      Author address
                    </dt>
                    <ArrowTopRightOnSquareIcon className="ml-3 mt-1 w-4 h-4 text-gray-500" />
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
