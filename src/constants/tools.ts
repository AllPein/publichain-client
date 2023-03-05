import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';

export const EDITOR_JS_TOOLS = {
  list: List,
  warning: Warning,
  code: Code,
  header: {
    class: Header,
    config: {
      placeholder: 'Header..',
    },
  },
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
};
