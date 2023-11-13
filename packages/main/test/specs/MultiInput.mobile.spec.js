import { assert } from "chai";

const getTokenizerPopoverId = async (inputId) => {
	return await browser.executeAsync(async (inputId, done) => {
		const input = document.querySelector(`[id="${inputId}"]`);
		const staticAreaItem = await (input.shadowRoot.querySelector("kengine-tokenizer").getStaticAreaItemDomRef());

		done(staticAreaItem.host.classList[0]);
	}, inputId);
}

describe("MultiInput general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/MultiInput.html`);
		await browser.emulateDevice('iPhone X');
	});

	it ("n-more picker dialog is properly rendered", async () => {
		const tokenizer = await browser.$("#multiInput-warning").shadow$("kengine-tokenizer");
		const nMoreLabel = await tokenizer.shadow$(".kengine-tokenizer-more-text");

		await nMoreLabel.click();

		const rpoClassName = await getTokenizerPopoverId("multiInput-warning");
		const nMoreDialog = await browser.$(`.${rpoClassName}`).shadow$("kengine-responsive-popover");

		assert.ok(await nMoreDialog.getProperty("opened"), "More Popover should be open");
		assert.ok(await nMoreDialog.$(".kengine-valuestatemessage--warning").isDisplayed(), "More Popover value state is shown");
		assert.ok(await nMoreDialog.$(".kengine-responsive-popover-header .kengine-responsive-popover-close-btn").isDisplayed(), "More Popover close button is shown");
		assert.ok(await nMoreDialog.$(".kengine-responsive-popover-footer kengine-button").isDisplayed(), "More Popover OK button is shown");
	});
});

describe("Deleting tokens", () => {
	before(async () => {
		await browser.url(`test/pages/MultiInput.html`);
		await browser.emulateDevice('iPhone X');
	});

	it ("Should fire the kengine-token-delete event when the 'X' is pressed in the n-more picker", async () => {
		const tokenizer = await browser.$("#mi-event").shadow$("kengine-tokenizer");
		const nMoreLabel = await tokenizer.shadow$(".kengine-tokenizer-more-text");

		await nMoreLabel.click();

		const rpoClassName = await getTokenizerPopoverId("mi-event");
		const nMoreDialog =  await browser.$(`.${rpoClassName}`).shadow$("kengine-responsive-popover");
		const listItemDeleteButton = await nMoreDialog.$$("kengine-li")[0].shadow$('.kengine-li-deletebtn kengine-button');

		await listItemDeleteButton.click();
		await nMoreDialog.$(".kengine-responsive-popover-footer kengine-button").click();

		assert.strictEqual(await browser.$("#event-type").getValue(), "kengine-token-delete", "The event was fired");
		assert.strictEqual(await browser.$("#event-count").getValue(), "1", "The event was fired once");
		assert.strictEqual(await browser.$("#event-target-text").getValue(), "ea", "The event was fired once");
	});
});


