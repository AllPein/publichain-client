import React, { useCallback, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';

import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { EditorCore } from '@/types/EditorTypes';

import './CreateArticlePage.css';

const CreateArticlePage = () => {
  const editorCore = useRef<EditorCore>(null);
  const ReactEditorJS = createReactEditorJS();
  const headingRef = useRef(null);
  const handleInitialize = useCallback((instance) => {
    // @ts-ignore
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current!.save();
    console.log(savedData);
  }, []);

  const headingValue = () => {
    // Don't ever do that!
    return (headingRef as any)!.current.childNodes[0].data;
  };

  return (
    <div className="mt-10">
      <div className="flex mb-12 w-full justify-center">
        <span
          className="textarea"
          role="textbox"
          ref={headingRef}
          contentEditable
        ></span>
      </div>
      <ReactEditorJS onInitialize={handleInitialize} tools={EDITOR_JS_TOOLS} />
      <div className="flex w-full justify-center">
        <button
          type="button"
          onClick={handleSave}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create an article!
        </button>
      </div>
    </div>
  );
};

export { CreateArticlePage };
