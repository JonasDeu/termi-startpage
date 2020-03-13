function freshDates() {
	const searchForm = document.getElementById("searchForm");
	const searchField = document.getElementById("searchField");
	const time = document.getElementById("time");
	const timeline = document.getElementById("timeline");

	const date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	timeline.innerHTML =
		"> |" +
		"-".repeat(hour * 2) +
		(min < 30 ? "" : "-") +
		"&nbsp".repeat((24 - hour) * 2) +
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

	searchField.addEventListener("keydown", event => {
		if (event.key === "Enter") {
			searchForm.submit();
		}
	});

	setTimeout(freshDates, 1000);
}

freshDates();
