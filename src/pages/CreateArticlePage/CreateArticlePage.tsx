import React, { useCallback, useRef } from 'react';
import { createReactEditorJS } from 'react-editor-js';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/Button/Button';
import { EDITOR_JS_TOOLS } from '@/constants/tools';
import { ModalActions } from '@/store/Modal/ModalActions';
import { LoaderAction } from '@/store/loader/LoaderActions';
import { selectPublishLoading } from '@/store/loader/LoaderSelectors';
import { NftAction } from '@/store/nft/NftActions';
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

  const defaultData = {
    version: '2',
    time: 1241234,
    blocks: [
      {
        type: 'nft',
        data: {
          name: 'Mirascapes',
          imageUrl:
            'https://storage.googleapis.com/sentinel-nft/raw-assets/36eede28cfb9142efe02d86a0f1c9215c3d77cdf2b08c4cdfe7b9345a9e061db.jpeg',
          tokenAddress: '0xd66a159c593f775081847c1fb0f958734e1db9c0',
          tokenId: '444',
          network: 'ethereum',
        },
      },
    ],
  };

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
        },
      }),
    );
  }, [headingRef, editorCore, accountInfo]);

  const handleMint = () => {
    dispatch(
      NftAction.getNftInformation({
        tokenAddress: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        tokenId: '567',
        network: 'ethereum',
      }),
    );
  };

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
        defaultValue={defaultData}
        holder="editor"
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
      />
      <div className="flex w-full justify-center">
        <Button onClick={handleMint} loading={loading} className="mt-12">
          Publish
        </Button>
      </div>
    </div>
  );
};

export { CreateArticlePage };
