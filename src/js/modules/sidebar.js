
// mail.sidebar

{
	init() {
		this.els = {
			layout: window.find("layout"),
			el: window.find("sidebar"),
		};
	},
	async dispatch(event) {
		let APP = mail,
			Self = APP.sidebar,
			el,
			pEl,
			isOn;
		switch (event.type) {
			case "toggle-sidebar":
				isOn = Self.els.layout.hasClass("show-sidebar");
				Self.els.layout.toggleClass("show-sidebar", isOn);
				return !isOn;
			case "select-folder":
				event.el.find(".active").removeClass("active");
				el = $(event.target).addClass("active");
				break;
		}
	}
}
