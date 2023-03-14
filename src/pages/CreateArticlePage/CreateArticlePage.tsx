import React, { useCallback, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/Button/Button';
import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { ModalActions } from '@/store/Modal/ModalActions';
import { LoaderAction } from '@/store/loader/LoaderActions';
import { selectPublishLoading } from '@/store/loader/LoaderSelectors';
import { selectUserInfo } from '@/store/user/UserSelectors';
import { WebsocketAction } from '@/store/websocket/websocketActions';
import { EditorCore } from '@/types/EditorTypes';

import './CreateArticlePage.css';

const CreateArticlePage = () => {
  const editorCore = useRef<EditorCore>(null);
  const ReactEditorJS = createReactEditorJS();
  const headingRef = useRef(null);
  const dispatch = useDispatch();
  const accountInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectPublishLoading);

  const handleInitialize = useCallback(
    (instance) => {
      // @ts-ignore
      editorCore.current = instance;
    },
    [editorCore],
  );

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current!.save();

    console.log(savedData);

    /* Don't ever do that!*/
    const headingValue = (headingRef as any)?.current.childNodes[0].data;
    dispatch(LoaderAction.setLoading('publish'));
    dispatch(
      ModalActions.openModal({
        key: 'signature',
      }),
    );
    dispatch(
      WebsocketAction.sendMessage({
        event: 'PUBLISH',
        data: {
          address: accountInfo!.address,
          title: headingValue,
          body: savedData,
          supply: 200,
        },
      }),
    );
  }, [headingRef, editorCore, accountInfo]);

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
      <ReactEditorJS
        holder="editor"
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
      />
      <div className="flex w-full justify-center">
        <Button onClick={handleSave} loading={loading} className="mt-12">
          Publish
        </Button>
      </div>
    </div>
  );
};

export { CreateArticlePage };
