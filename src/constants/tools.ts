import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';

import { Nft } from '@/components/Editor/Tools/Nft/NftTool';

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    config: {
      placeholder: 'Type a paragraph here',
    },
  },
  list: List,
  warning: Warning,
  code: Code,
  nft: Nft,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
      },
    },
  },
  header: {
    class: Header,
    config: {
      placeholder: 'Heading',
    },
  },
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
};
