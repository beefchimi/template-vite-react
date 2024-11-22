import {useMediaQuery} from '@pkg/hooks';
import {BREAKPOINT_QUERY_X} from './constants.ts';

// TODO: Consider a hook for `useBetweenBreakpoints(min, max)`.

// It is recommended to use the individual `useMin*` hooks
// instead of this one. This hook is useful if we actually have
// a single <BreakpointProvider /> for the entire app.
export function useBreakpoint() {
  // const mobile = useMediaQuery(BREAKPOINT_QUERY_X.mobile, {defaultValue: true});

  const phablet = useMediaQuery(BREAKPOINT_QUERY_X.phablet);
  const tablet = useMediaQuery(BREAKPOINT_QUERY_X.tablet);
  const classic = useMediaQuery(BREAKPOINT_QUERY_X.classic);
  const hd = useMediaQuery(BREAKPOINT_QUERY_X.hd);
  const desktop = useMediaQuery(BREAKPOINT_QUERY_X.desktop);
  const widescreen = useMediaQuery(BREAKPOINT_QUERY_X.widescreen);
  const ultrawide = useMediaQuery(BREAKPOINT_QUERY_X.ultrawide);

  // TODO: Does this need to be memoized?
  return {
    phablet,
    tablet,
    classic,
    hd,
    desktop,
    widescreen,
    ultrawide,
  };
}
