import {useMemo} from 'react';
import {getSiteCopy} from '@/content/siteCopy';
import {useI18n} from './context';

export function useSiteCopy() {
  const {locale} = useI18n();
  return useMemo(() => getSiteCopy(locale), [locale]);
}
