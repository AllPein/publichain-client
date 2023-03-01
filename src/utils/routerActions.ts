import { history } from '@/utils/history';

export function goBack() {
  history.back();
}

export function goTo(link: string) {
  history.push(link);
}

export function replaceWith(link: string) {
  history.replace(link);
}
