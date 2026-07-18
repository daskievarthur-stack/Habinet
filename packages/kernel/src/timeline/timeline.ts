import type { Grain } from '../grain';
import type { IdentityId } from '../identity';

export interface Timeline {
  readonly grain: Grain;

  /**
   * Identity of the latest event in the history.
   *
   * Undefined means the timeline is empty.
   */
  readonly latestEventId?: IdentityId;
}
