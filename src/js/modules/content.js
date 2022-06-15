
// mail.content

{
	init() {
		this.els = {
			el: window.find("content"),
		};
		// temp
		this.dispatch({ type: "init-render" });
	},
	dispatch(event) {
		let APP = mail,
			Self = APP.content,
			value,
			el;
		switch (event.type) {
			case "init-render":
				// render tree view
				window.render({
					template: "content-entries",
					match: `//Data/Maillist/thread[@id="123"]`,
					target: Self.els.el
				});
				break;
			case "toggle-message-view":
				value = event.el.hasClass("icon-slim-messages")
						? "icon-thick-messages"
						: "icon-slim-messages";
				event.el.prop({ className: value });
				break;
		}
	}
}
