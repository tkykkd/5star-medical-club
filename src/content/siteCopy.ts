import type {Locale} from '@/i18n/context';
import {siteCopyJa} from './copy.ja';
import {siteCopyTh} from './copy.th';

export type SiteCopy = typeof siteCopyTh;

export function getSiteCopy(locale: Locale): SiteCopy {
  return (locale === 'ja' ? siteCopyJa : siteCopyTh) as SiteCopy;
}
