function openInvitation() {
	let btnOpen = document.querySelector(".opening");

	btnOpen.addEventListener("click", () => {
		btnOpen.style.opacity = 0;
		setTimeout(() => {
			btnOpen.classList.add("hidden");
		}, 610);
	});
}
