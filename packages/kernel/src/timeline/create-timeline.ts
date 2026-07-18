import type { Grain } from '../grain';

import type { Timeline } from './timeline';

export function createTimeline(grain: Grain): Timeline {
  return {
    grain,
  };
}
