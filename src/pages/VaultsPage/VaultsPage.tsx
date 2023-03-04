import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'antd';
import Blocks from 'editorjs-blocks-react-renderer';

import { UserAction } from '@/store/user/UserAction';

const VaultsPage: React.FC = () => {
  const dispatch = useDispatch();
  const mintNft = () => {
    dispatch(UserAction.initMint());
  };
  const data = {
    time: 1677953659491,
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
          text: "Classic WYSIWYG editors produce raw HTML-markup with both content data and content appearance. On the contrary, <mark class='cdx-marker'>Editor.js outputs JSON object</mark> with data of each Block.",
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

  return (
    <Blocks
      data={data}
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
          className: 'font-bold text-8xl',
        },
        image: {
          className: 'w-full max-w-screen-md',
          actionsClassNames: {
            stretched: 'w-full h-80 object-cover',
            withBorder: 'border border-2',
            withBackground: 'p-2',
          },
        },
        list: {
          className: 'list-inside',
        },
        paragraph: {
          className: 'text-base text-opacity-75',
          actionsClassNames: {
            alignment: 'text-{alignment}', // This is a substitution placeholder: left or center.
          },
        },
        quote: {
          className: 'py-3 px-5 italic font-serif',
        },
        table: {
          className: 'table-auto',
        },
      }}
    />
  );
};

export { VaultsPage };
