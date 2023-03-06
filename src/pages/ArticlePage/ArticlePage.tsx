import React, { useCallback, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';

import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { EditorCore } from '@/types/EditorTypes';

const ArticlePage: React.FC = () => {
  const data = {
    time: 1677953659491,
    version: '1',
    blocks: [
      {
        id: 'l98dyx3yjb',
        type: 'header',
        data: {
          text: 'Key features',
          level: 1,
        },
      },
      {
        id: 'os_YI4eub4',
        type: 'list',
        data: {
          type: 'unordered',
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
        id: 'ksCokKAhQw',
        type: 'paragraph',
        data: {
          text: "Classic WYSIWYG editors produce raw HTML-markup with both content data and content appearance. On the contrary, <mark className='cdx-marker'>Editor.js outputs JSON object</mark> with data of each Block.",
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
        id: 'eq06PsNsab',
        type: 'paragraph',
        data: {
          text: 'Clean data is useful to sanitize, validate and process on the backend.',
        },
      },
      {
        id: 'hZAjSnqYMX',
        type: 'image',
        data: {
          file: {
            url: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg',
          },
          withBorder: false,
          withBackground: false,
          stretched: true,
          caption: 'CodeX Code Camp 2019',
        },
      },
    ],
  };

  const editorCore = useRef<EditorCore>(null);
  const ReactEditorJS = createReactEditorJS();

  const handleInitialize = useCallback(
    (instance) => {
      // @ts-ignore
      editorCore.current = instance;
    },
    [editorCore],
  );

  return (
    <div className="max-w-full flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto">
      <div className="max-w-6xl">
        <h1 className="text-center text-8xl my-12">Title of the article</h1>
        <ReactEditorJS
          onInitialize={handleInitialize}
          readOnly
          defaultValue={data}
          tools={EDITOR_JS_TOOLS}
        />
        <div className="py-12 flex justify-between">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-xl font-medium text-indigo-600 dark:text-neutral-50">
              Created and published by
            </p>
            <div className="flex flex-row items-center rounded-lg bg-white shadow-lg dark:bg-neutral-700 max-w-lg cursor-pointer hover:bg-gray-100">
              <img
                src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg"
                className="rounded-full w-32 h-32 ml-4"
                alt=""
                loading="lazy"
              />
              <div className="flex flex-col justify-start p-6">
                <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Aleksandr Panin
                </h5>
                <p className="text-xs mb-4 text-neutral-500 dark:text-neutral-300">
                  rx34sdaf...sa3xac3
                </p>
                <p className="mb-4 text-base break-all text-neutral-600 dark:text-neutral-200">
                  Web
                  Developerajdnsjkasfjbasbfasbasbffbjaksbjkfkfas,jsfjnsanmsandnlasljhjlfashasfhasljfhlaslhfsahkafshlashllhashjashljs
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-4 text-xl font-medium text-indigo-600 dark:text-neutral-50">
              Publication information
            </p>
            <dl className="max-w-lg text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
              <div className="flex flex-col pb-3 hover:bg-gray-100 p-3 cursor-pointer">
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
                  NTB7G7JTDcZ2H2s6M6soSe4lhCPT3ioHK0jRdNKYv4k
                </dd>
              </div>
              <div className="flex flex-col p-3 hover:bg-gray-100  cursor-pointer">
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
                  0x6aabec15b754eBb3A320717333615EF01d1bf17f
                </dd>
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

export { ArticlePage };
