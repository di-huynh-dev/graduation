simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 12, // required
  day: 19, // required
  hours: 10, // Default is 0 [0-23] integer, set to 0 for UTC+7 adjustment
  words: {
    //words displayed into the countdown
    days: { singular: "ngày", plural: "ngày" },
    hours: { singular: "giờ", plural: "giờ" },
    minutes: { singular: "phút", plural: "phút" },
    seconds: { singular: "giây", plural: "giây" },
  },
  timezone: 7, // Add this line to set the timezone to UTC+7
});
