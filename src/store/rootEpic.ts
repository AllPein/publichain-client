/* eslint-disable import/no-cycle */
import { combineEpics } from 'redux-observable';

import { UserEpics } from '@/store/user/UserEpics';

export default combineEpics(...UserEpics);
