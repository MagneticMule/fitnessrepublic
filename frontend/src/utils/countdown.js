
let countDownTimer = (td) => {

  //expects date in format of '2021-04-15'
  const targetDate = +new Date(td);
  const currentDate = +new Date();
  let difference = targetDate - currentDate;
  if (difference > 0) {
    console.log(difference);
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return (Object.keys(parts)
      .map((part) => {
        if (!parts[part]) return;
        return `${parts[part]} ${part}`;
      })
      .join(' - '));
  }
}

export default countDownTimer;