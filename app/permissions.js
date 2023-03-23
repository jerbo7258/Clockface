import { me } from "appbit";

export function getNextAllowedActivity(activityNumber) {
  const { granted } = me.permissions;

  const grantedActivity = granted('access_activity');
  const grantedWeather = granted('access_location') &&
        granted('access_internet');

  const grantedPermissions = {
    0: grantedActivity,               // activeMinutes
    1: true,                          // clock
    2: true,                          // date
    3: granted('access_heart_rate'),  // hr
    4: grantedActivity,               // steps
    5: grantedWeather,                // weatther
    6: true,                          // batteryLevel
  };

  const lengthPerm = Object.keys(grantedPermissions).length;

  if (grantedPermissions[activityNumber]) {
    return activityNumber;
  }

  let i = activityNumber;

  while (!grantedPermissions[i]) {
    i = (i + 1) % lengthPerm;
  }

  return i;
}
