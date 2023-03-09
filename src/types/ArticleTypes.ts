import { AccountInfo } from '@/store/StoreTypes';

export type ShortArticle = {
  title: string;
  author: Omit<AccountInfo, 'token'>;
  internalUrl: string;
  url: string;
  transactionId: string;
};

export type ArticleInfo = {
  title: string;
  data: any;
  author: Omit<AccountInfo, 'token'>;
  transactionId: string;
};
