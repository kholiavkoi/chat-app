import moment from "moment-timezone";

export function convertToUserTime(serverTime) {
  // Get the user's time zone
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Convert server time to user's local time zone
  const userTime = moment.tz(serverTime, "UTC").tz(userTimeZone);

  // Format the time as desired (e.g., YYYY-MM-DD HH:mm:ss)
  return userTime.format("HH:mm");
}
