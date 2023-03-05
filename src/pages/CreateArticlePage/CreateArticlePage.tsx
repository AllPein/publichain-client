import React, { useCallback, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';

import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { EditorCore } from '@/types/EditorTypes';

const CreateArticlePage = () => {
  const editorCore = useRef<EditorCore>(null);
  const ReactEditorJS = createReactEditorJS();

  const handleInitialize = useCallback((instance) => {
    // @ts-ignore
    editorCore.current = instance;
  }, []);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current!.save();
    console.log(savedData);
  }, []);

  return (
    <>
      <ReactEditorJS
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        defaultValue={{ blocks: [] }}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export { CreateArticlePage };
