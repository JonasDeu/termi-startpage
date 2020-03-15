function init() {
	const searchForm = document.getElementById("searchForm");
	const searchField = document.getElementById("searchField");
	searchField.addEventListener("keydown", event => {
		if (event.key === "Enter") {
			event.preventDefault();
			searchForm.submit();
		}
	});
	document.addEventListener("keydown", () => searchField.focus());
}

function freshDates() {
	const time = document.getElementById("time");
	const timelineHour = document.getElementById("timelineHour");
	const timelineMin = document.getElementById("timelineMin");
	const timelineSec = document.getElementById("timelineSec");

	const timelineLength = 30;
	const date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	const hourLength = Math.floor((timelineLength / 24) * hour);
	timelineHour.innerHTML =
		"> hour&nbsp|" +
		"-".repeat(hourLength) +
		"&nbsp".repeat(timelineLength - hourLength) +
		"|";
	/*
	"> |" +
	"-".repeat(hour * 2) +
	(min < 30 ? "" : "-") +
	"&nbsp".repeat((24 - hour) * 2 - 1) +
	"|";
	*/

	const minLength = Math.floor((timelineLength / 60) * min);
	timelineMin.innerHTML =
		"> min&nbsp&nbsp|" +
		"-".repeat(minLength) +
		"&nbsp".repeat(timelineLength - minLength) +
		"|";

	const secLength = Math.ceil((timelineLength / 60) * sec);
	timelineSec.innerHTML =
		"> sec&nbsp&nbsp|" +
		"-".repeat(secLength) +
		"&nbsp".repeat(timelineLength - secLength) +
		"|";

	if (hour < 10) {
		hour = "0" + hour;
	}
	if (min < 10) {
		min = "0" + min;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}

	time.innerHTML =
		"> " + hour.toString() + ":" + min.toString() + ":" + sec.toString();

	setTimeout(freshDates, 1000);
}

init();
freshDates();
