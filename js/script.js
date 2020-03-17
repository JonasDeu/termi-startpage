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
		"> h&nbsp|" +
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
		"> m&nbsp|" +
		"-".repeat(minLength) +
		"&nbsp".repeat(timelineLength - minLength) +
		"|";

	const secLength = Math.ceil((timelineLength / 60) * sec);
	timelineSec.innerHTML =
		"> s&nbsp|" +
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

function links() {
	const linksContainer = document.getElementById("linksContainer");
	const links = {
		Reddit: {
			"r/webdev": "https://www.reddit.com/r/webdev/",
			"r/climbing": "https://www.reddit.com/r/climbing/",
			"r/de": "https://www.reddit.com/r/de/"
		},
		Misc: {
			Youtube: "https://www.youtube.com/",
			GMail: "https://mail.google.com/",
			GDrive: "https://drive.google.com/drive/my-drive",
			GCalendar: "https://calendar.google.com/calendar"
		}
	};

	let outputString = "<ul>";
	Object.entries(links).forEach(cat => {
		outputString = outputString + "<li>> " + cat[0] + "</li><ul>";
		Object.entries(cat[1]).forEach(ele => {
			outputString =
				outputString + '<li><a href="' + ele[1] + '">' + ele[0] + "</a></li>";
		});
		outputString = outputString + "</ul>";
	});

	outputString = outputString + "</ul>";
	linksContainer.innerHTML = outputString;
}

init();
freshDates();
links();
