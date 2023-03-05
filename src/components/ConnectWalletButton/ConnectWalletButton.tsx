import React from 'react';
import { useDispatch } from 'react-redux';

import { LoaderAction } from '@/store/loader/LoaderActions';
import { WebsocketAction } from '@/store/websocket/websocketActions';

const ConnectWalletButton = ({ loading }) => {
  const dispatch = useDispatch();

  const handleConnectWalletClick = () => {
    dispatch(LoaderAction.setLoading('auth')),
      dispatch(
        WebsocketAction.sendMessage({
          event: 'LOGIN',
        }),
      );
  };

  return (
    <button
      disabled={loading}
      type="submit"
      onClick={handleConnectWalletClick}
      className={`group relative flex justify-center rounded-md ${
        !loading ? 'bg-indigo-600' : 'bg-gray-300'
      } py-4 px-6 text-base font-semibold text-white ${
        !loading && 'hover:bg-indigo-500'
      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {loading && (
        <svg
          className="motion-reduce:hidden animate-spin -ml-1 mr-3  mt-1 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      Connect Wallet
    </button>

    // <UI.StyledButton
    //   loading={loading}
    //   type="primary"
    //   size="large"
    //   onClick={handleConnectWalletClick}
    // >

    // </UI.StyledButton>
  );
};

export { ConnectWalletButton };
