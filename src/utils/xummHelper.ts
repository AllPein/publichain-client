import { LoaderAction } from '@/store/loader/LoaderActions';
import { UserAction } from '@/store/user/UserAction';
import { XummPkce } from '@/utils/window';

export function listenXummAuth(xummClient: typeof XummPkce, dispatch) {
  xummClient.on('retrieved', async () => {
    dispatch(LoaderAction.setLoading('auth'));
    const { me } = await xummClient.state();
    dispatch(UserAction.initRetrieveUser(me));
  });
}
