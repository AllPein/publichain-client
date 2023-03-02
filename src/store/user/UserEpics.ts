import { handleInitGetAccountInfo } from '@/store/user/epics/handleInitGetAccountInfoEpic';
import { handleInitRetrieveUser } from '@/store/user/epics/handleInitRetrieveUserEpic';

export const UserEpics = [handleInitGetAccountInfo, handleInitRetrieveUser];
