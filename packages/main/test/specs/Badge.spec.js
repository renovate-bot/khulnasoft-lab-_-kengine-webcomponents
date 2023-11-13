import { assert } from "chai";

describe("Badge rendering", async () => {
	before(async () => {
		await browser.url(`test/pages/Badge.html`);
	});

	it("tests that label is rendered if there is text content", async () => {
		const badgeLabel = await browser.$("#badgeWithTextAndIcon").shadow$(".kengine-badge-text");

		assert.ok(await badgeLabel.isExisting(), "badge label tag should be rendered.");
	});

	it("tests that label is NOT rendered if there is only icon", async () => {
		const badgeLabel = await browser.$("#badgeIconOnly").shadow$(".kengine-badge-text");

		assert.notOk(await badgeLabel.isExisting(), "badge label tag shouldn't be rendered.");
	});
});
