
let test = {
	init() {
		setTimeout(() => this.list(), 200);
		// setTimeout(() => this.sidebar(), 200);
		setTimeout(() => this.content(), 200);
	},
	sidebar() {
		mail.sidebar.els.el.find(".list-wrapper:nth(1) .entry:nth(0)").trigger("click");
	},
	list() {
		mail.list.dispatch({ type: "init-render" });
		
		// mail.list.els.el.find(".entry:nth(0)").trigger("click");

		// setTimeout(() => mail.list.dispatch({ type: "prepend-mail" }), 500);
	},
	content() {
		// mail.content.dispatch({ type: "load-mail", eml: "~/sample/hotmail-1.eml" });
		// mail.content.els.el.find(".entry").get(0).trigger("click");
		// this.els.el.find(".wrapper .icon-thick-messages").trigger("click");
	}
};
// auto init
test.init();
