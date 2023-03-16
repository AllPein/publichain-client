import React, { useCallback, useEffect, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/Button/Button';
import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { ModalActions } from '@/store/Modal/ModalActions';
import { selectArticleInfo } from '@/store/article/ArticleSelectors';
import { LoaderAction } from '@/store/loader/LoaderActions';
import { selectPublishLoading } from '@/store/loader/LoaderSelectors';
import { selectUserInfo } from '@/store/user/UserSelectors';
import { WebsocketAction } from '@/store/websocket/websocketActions';
import { EditorCore } from '@/types/EditorTypes';
import { goTo } from '@/utils/routerActions';

import './CreateArticlePage.css';

const CreateArticlePage = () => {
  const dispatch = useDispatch();

  const headingRef = useRef(null);
  const editorCore = useRef<EditorCore>(null);

  const currentArticleInfo = useSelector(selectArticleInfo);
  const accountInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectPublishLoading);

  const ReactEditorJS = createReactEditorJS();

  const handleInitialize = useCallback(
    (instance) => {
      // @ts-ignore
      editorCore.current = instance;
    },
    [editorCore],
  );

  useEffect(() => {
    if (currentArticleInfo) {
      if (currentArticleInfo.author.address !== accountInfo?.address) {
        goTo('/explore');
      } else {
        (headingRef.current as any)!.childNodes[0].data =
          currentArticleInfo.title;
      }
    }
  }, [currentArticleInfo]);

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current!.save();

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
        defaultValue={currentArticleInfo?.data || []}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
      />
      <div className="flex w-full justify-center">
        <Button onClick={handleSave} loading={loading} className="mt-12">
          {!currentArticleInfo ? 'Publish' : 'Save'}
        </Button>
      </div>
    </div>
  );
};

export { CreateArticlePage };
