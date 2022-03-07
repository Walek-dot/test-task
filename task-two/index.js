
function getDayInfo(date) {
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  const realDate = new Date(date.replace(pattern,'$3-$2-$1'));
  const currentWeekNumber = Math.floor(realDate.getDate() / 7) + 1;
  const resultDate = new Intl.DateTimeFormat("ru", {dateStyle: "full"}).format(realDate);
  const dateArr = resultDate.split(" ");  
  dateArr[1] = `${currentWeekNumber} неделя`;
  const result = dateArr.join(" ").slice(0, -2).concat('года');

  return result;
}

console.log(getDayInfo('01.01.2022'));