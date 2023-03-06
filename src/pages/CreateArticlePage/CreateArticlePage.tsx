import React, { useCallback, useMemo, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';

import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { EditorCore } from '@/types/EditorTypes';

import './CreateArticlePage.css';

const CreateArticlePage = () => {
  const editorCore = useRef<EditorCore>(null);
  const ReactEditorJS = createReactEditorJS();
  const headingRef = useRef(null);

  const handleInitialize = useCallback(
    (instance) => {
      // @ts-ignore
      editorCore.current = instance;
    },
    [editorCore],
  );

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current!.save();

    /* Don't ever do that!*/
    const headingValue = (headingRef as any)?.current.childNodes[0];
    console.log(headingValue);
  }, [headingRef, editorCore]);

  return (
    <div className="mt-10">
      <div className="flex mb-12 w-full justify-center">
        <span
          className="textarea"
          aria-label="heading"
          role="textbox"
          ref={headingRef}
          contentEditable
        />
      </div>
      <ReactEditorJS onInitialize={handleInitialize} tools={EDITOR_JS_TOOLS} />
      <div className="flex w-full justify-center">
        <button
          type="button"
          onClick={handleSave}
          className="text-white mt-12 bg-indigo-600 hover:bg-indigo-700 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create an article!
        </button>
      </div>
    </div>
  );
};

export { CreateArticlePage };
