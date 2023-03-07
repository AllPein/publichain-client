import { handleInitLogin } from '@/store/user/epics/handleInitLoginEpic';
import { handleInitRegister } from '@/store/user/epics/handleInitRegisterEpic';
import { handleInitRetrieveUser } from '@/store/user/epics/handleInitRetrieveUserEpic';
import { handleMint } from '@/store/user/epics/handleMint';
import { handleReceivePublishResult } from '@/store/user/epics/handleReceivePublishResultEpic';

export const UserEpics = [
  handleInitLogin,
  handleInitRetrieveUser,
  handleMint,
  handleInitRegister,
  handleReceivePublishResult,
];
