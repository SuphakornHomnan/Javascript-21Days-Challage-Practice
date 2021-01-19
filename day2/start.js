(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const setElementInnerText = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
  };
  const prepareSetElement = (day, hour, minute, second) => {
    setElementInnerText("days", day);
    setElementInnerText("hours", hour);
    setElementInnerText("minutes", minute);
    setElementInnerText("seconds", second);
  };
  const countDown = () => {
    const now = new Date().getTime();
    const nice_birth = new Date("May 12,2021 23:59:59").getTime();
    const until_time_left = nice_birth - now;
    const end_count = document.getElementById("end");
    const day_count = Math.floor(until_time_left / DAY);
    const hours_count = Math.floor((until_time_left % DAY) / HOUR);
    const minute_count = Math.floor((until_time_left % HOUR) / MINUTE);
    const second_count = Math.floor((until_time_left % MINUTE) / SECOND);
    if (until_time_left > 0) {
      if (
        second_count === 0 &&
        minute_count === 0 &&
        hours_count === 0 &&
        day_count === 0
      ) {
        end_count.innerText = "Happy BirthDay Nice! (22 years old)";
        setElementInnerText("seconds", second_count);
        stop_count();
      } else {
        prepareSetElement(day_count, hours_count, minute_count, second_count);
      }
    } else {
      prepareSetElement(0, 0, 0, 0);
      end_count.innerText = "ผ่านวันเกิดปีที่22ของไนซ์ไปแล้ว!";
    }
  };
  const count_real_time = setInterval(countDown, SECOND);
  const stop_count = () => {
    clearInterval(count_real_time);
  };
  const run = () => {
    countDown();
    count_real_time;
  };
  run();
})();
