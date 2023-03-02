import { handleInitGetAccountInfo } from '@/store/user/epics/handleInitGetAccountInfoEpic';
import { handleInitRetrieveUser } from '@/store/user/epics/handleInitRetrieveUserEpic';
import { handleMint } from '@/store/user/epics/handleMint';

export const UserEpics = [
  handleInitGetAccountInfo,
  handleInitRetrieveUser,
  handleMint,
];
