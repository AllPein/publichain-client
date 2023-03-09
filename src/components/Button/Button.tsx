import React, { FC, useMemo } from 'react';

type ButtonProps = {
  className?: string;
  loading?: boolean;
  round?: boolean;
  size?: 's' | 'm' | 'l';
  onClick: () => any;
  children: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
  className,
  size = 'm',
  round = false,
  loading,
  onClick,
  children,
}) => {
  const btnSizeClass = useMemo(() => {
    switch (size) {
      case 's':
        return 'rounded-md p-2 text-xs';
      case 'l':
        return 'rounded-xl py-4 px-6 text-lg';
      default:
        return 'rounded-lg p-3 text-base';
    }
  }, [size]);

  return (
    <button
      disabled={loading}
      type="submit"
      onClick={onClick}
      className={`${className} ${btnSizeClass} ${
        round ? 'rounded-full' : ''
      }  ${!loading ? 'bg-indigo-600' : 'bg-gray-300'} font-medium text-white ${
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
      {children}
    </button>
  );
};
