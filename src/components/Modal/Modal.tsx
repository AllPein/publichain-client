import React, { Fragment, useCallback } from 'react';

import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
  isOpen: boolean;
  title?: string;
  onClose?: (value: boolean) => void;
  footer?: React.ReactNode;
  closable?: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title = 'Modal title',
  onClose,
  footer,
  closable = false,
  children,
}) => {
  window.addEventListener('click', (e) => {
    if ((e.target as any).id === 'modal-overlay' && closable) {
      onClose?.(true);
    }
  });

  const handleClose = useCallback(() => {
    if (onClose && closable) {
      onClose(true);
    }
  }, [onClose, closable]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">{children}</div>

                <div className="mt-4 text-right">{footer}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
  // return isOpen ? (
  //   <>
  //     <div
  //       id="modal-overlay"
  //       className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  //     >
  //       <div className="relative w-auto my-6 mx-auto max-w-3xl">
  //         {/*content*/}
  //         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
  //           {/*header*/}
  //           <div className="flex items-start justify-between p-6 pl-10 border-b rounded-t dark:border-gray-600">
  //             <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
  //               {title}
  //             </h1>
  //             {closable && (
  //               <button
  //                 type="button"
  //                 onClick={onClose}
  //                 className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
  //                 data-modal-hide="defaultModal"
  //               >
  //                 <svg
  //                   aria-hidden="true"
  //                   className="w-5 h-5"
  //                   fill="currentColor"
  //                   viewBox="0 0 20 20"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     fillRule="evenodd"
  //                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //                     clipRule="evenodd"
  //                   ></path>
  //                 </svg>
  //                 <span className="sr-only">Close modal</span>
  //               </button>
  //             )}
  //           </div>
  //           {/*body*/}
  //           <div className="relative px-12 py-10">{children}</div>
  //           {/*footer*/}
  //           <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
  //             {footer}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
  //   </>
  // ) : null;
};

export { Modal };
