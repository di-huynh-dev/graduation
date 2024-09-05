function openInvitation() {
	let btnOpen = document.querySelector(".opening");

	btnOpen.addEventListener("click", () => {
		btnOpen.style.opacity = 0;
		document.body.style.overflow = "visible";
		setTimeout(() => {
			btnOpen.classList.add("hidden");
		}, 610);
	});
}
