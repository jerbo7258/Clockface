import { activeMinutes }  from './activities/activeMinutes';
import { batteryLevel }   from './activities/batteryLevel';
import { clock }          from './activities/clock';
import { date }           from './activities/date';
import { hr }             from './activities/hr';
import { steps }          from './activities/steps';
import { weather }        from './activities/weather';

/** All activities displayable on screen. */
export const activities = [
  activeMinutes,
  clock,
  date,
  hr,
  steps,
  weather,
  batteryLevel,
]
