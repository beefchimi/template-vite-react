type BreakpointKey =
  | 'mobile'
  | 'phablet'
  | 'tablet'
  | 'classic'
  | 'hd'
  | 'desktop'
  | 'widescreen'
  | 'ultrawide';

type BreakpointEntry = [BreakpointKey, number];
type BreakpointValueRecord = Record<BreakpointKey, number>;
type BreakpointQueryRecord = Record<BreakpointKey, string>;

// TODO: These hooks need to be manually syncronized with the
// breakpoint values in `media-queries.css / global.css`.
const BREAKPOINT_X: BreakpointValueRecord = {
  mobile: 320,
  phablet: 540,
  tablet: 768,
  classic: 960,
  hd: 1080,
  desktop: 1280,
  widescreen: 1440,
  ultrawide: 1920,
};

const entries = Object.entries(BREAKPOINT_X) as BreakpointEntry[];

export const BREAKPOINT_QUERY_X = entries.reduce((collection, [key, value]) => {
  return {
    ...collection,
    [key]: `(min-width: ${value}px)`,
  };
}, {} as BreakpointQueryRecord);
