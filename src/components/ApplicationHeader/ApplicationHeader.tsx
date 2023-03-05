import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@/assets/icons/logo-writty.svg';
import { AccountMenu } from '@/components/AccountMenu/AccountMenu';
import { ConnectWalletButton } from '@/components/ConnectWalletButton/ConnectWalletButton';
import { useMount } from '@/hooks/useMount';
import { ModalActions } from '@/store/Modal/ModalActions';
import { selectAuthLoading } from '@/store/loader/LoaderSelectors';
import { selectIsLoggedIn, selectUserInfo } from '@/store/user/UserSelectors';
import { createWebsocket } from '@/utils/WebsocketHelper';
import { goTo } from '@/utils/routerActions';

import * as UI from './ApplicationHeader.styles';

const ApplicationHeader = () => {
  const dispatch = useDispatch();
  const accountInfo = useSelector(selectUserInfo);
  const isLoading = useSelector(selectAuthLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useMount(() => {
    const init = async () => {
      await createWebsocket({ dispatch });
    };

    init();
  });

  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-white py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <a
            className="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
            href="#"
          >
            <img src={Logo} style={{ height: '50px' }} alt="" loading="lazy" />
          </a>
        </div>

        {isLoggedIn ? (
          <AccountMenu accountInfo={accountInfo} />
        ) : (
          <ConnectWalletButton loading={isLoading} />
        )}
      </div>
    </nav>
  );
};

{
  /* <UI.Header>
      <UI.StyledLogoSearch>
        <UI.Logo src={Logo} />
      </UI.StyledLogoSearch>
      <UI.StyledProfileUpload>
        <button onClick={() => goTo('/create-article')}>Create article</button>
        {isLoggedIn ? (
          <>
            <AccountMenu accountInfo={accountInfo} />
          </>
        ) : (
          <ConnectWalletButton loading={isLoading} />
        )}
      </UI.StyledProfileUpload>
    </UI.Header> */
}

export { ApplicationHeader };
