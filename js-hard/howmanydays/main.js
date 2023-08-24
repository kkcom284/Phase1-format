//console.log(nowTime.format("YYYY年M月D日h時m分s秒"));
const doraemonBirthday = dayjs("2112-9-3 00:00:00");

const body = document.getElementsByTagName("body")[0];
// console.log(body);
const countDown = () => {
  const nowTime = dayjs();
  const diffSecond = doraemonBirthday.diff(nowTime, "s") % 60;
  const diffMinute = doraemonBirthday.diff(nowTime, "m") % 60;
  const diffHour = doraemonBirthday.diff(nowTime, "h") % 24;
  const diffDay = doraemonBirthday.diff(nowTime, "d");
  const diffYear = doraemonBirthday.diff(nowTime, "y");

  // const result = dayjs(diffs);
  // console.log(diffSecond);
  // console.log(diffs);
  body.innerHTML = `ドラえもんが生まれるまで後${diffDay}日${diffHour}時間${diffMinute}分${diffSecond}秒`;
  //2112年9月3日
};
//setInterval(countDown, 1000);
