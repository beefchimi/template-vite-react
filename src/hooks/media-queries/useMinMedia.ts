import {useMediaQuery} from '@pkg/hooks';
import {BREAKPOINT_QUERY_X} from './constants.ts';

// TODO: If we ever implement a `<MediaProvider />`, we can remove
// all of these in favour of `useMediaQuery()`.

export function useMinPhablet() {
  return useMediaQuery(BREAKPOINT_QUERY_X.phablet);
}

export function useMinTablet() {
  return useMediaQuery(BREAKPOINT_QUERY_X.tablet);
}

export function useMinClassic() {
  return useMediaQuery(BREAKPOINT_QUERY_X.classic);
}

export function useMinHd() {
  return useMediaQuery(BREAKPOINT_QUERY_X.hd);
}

export function useMinDesktop() {
  return useMediaQuery(BREAKPOINT_QUERY_X.desktop);
}

export function useMinWidescreen() {
  return useMediaQuery(BREAKPOINT_QUERY_X.widescreen);
}

export function useMinUltrawide() {
  return useMediaQuery(BREAKPOINT_QUERY_X.ultrawide);
}
