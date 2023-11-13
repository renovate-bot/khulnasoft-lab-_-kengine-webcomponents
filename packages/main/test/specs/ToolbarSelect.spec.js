import { assert } from "chai";

describe("Toolbar general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/ToolbarSelect.html`);
	});

	it("Should render the select with the correct attributes", async () => {
		const toolbar = await browser.$("kengine-toolbar");
		const select = await toolbar.shadow$("kengine-select");
		const valueState = await select.getAttribute("value-state");

		assert.strictEqual(valueState, "Warning", "Select value state is correct");
	});

	it("Should render the select with disabled property correctly", async () => {
		const toolbar = await browser.$("kengine-toolbar");
		const select = await toolbar.shadow$("kengine-select[disabled]");
		const disabled = await select.getAttribute("disabled");

		assert.strictEqual(disabled, "true", "Disabled select is rendered correctly");
	});

	it("Should render accessible name correctly", async () => {
		const toolbar = await browser.$("kengine-toolbar");
		const select = await toolbar.shadow$("kengine-select");

		const accessibleName = await select.getAttribute("accessible-name");
		const accessibleNameRef = await select.getAttribute("accessible-name-ref");

		assert.strictEqual(accessibleName, "Add", "Select accessible name is correct");
		assert.strictEqual(accessibleNameRef, "title", "Select accessible name ref is correct");
	});

	// // Events

	// it.only("Should fire change event on selection change", async () => {
	// 	const toolbar = await browser.$("kengine-toolbar");
	// 	const select = await toolbar.shadow$("kengine-select");
	// 	const selectResult = await browser.$("input[placeholder='Changed']");

	// 	await select.click();
	// 	await select.keys("ArrowDown");
	// 	await select.keys("Enter");

	// 	const selectResultText = await selectResult.getValue();

	// 	assert.strictEqual(selectResultText, "1", "Select change event is fired correctly");
	// });

	// Popover

	it("Should render the select with the correct attributes inside the popover", async () => {
		await browser.setWindowSize(100, 1080);

		const toolbar = await browser.$("kengine-toolbar");
		const overflowButton = await toolbar.shadow$(".kengine-tb-overflow-btn");
		await overflowButton.click();

		const staticAreaItemClassName = await browser.getStaticAreaItemClassName("kengine-toolbar");
		const popover = await browser.$(`.${staticAreaItemClassName}`).shadow$("kengine-popover");
		const valueState = await popover.$("kengine-select").getAttribute("value-state");
		const disabled = await popover.$("kengine-select[disabled]").getAttribute("disabled");

		assert.strictEqual(valueState, "Warning", "Select value state is correct");
		assert.strictEqual(disabled, "true", "Disabled select is rendered correctly");

		// Accessibility

		const accessibleNameSelect = await popover.$("kengine-select");
		const accessibleName = await accessibleNameSelect.getAttribute("accessible-name");
		const accessibleNameRef = await accessibleNameSelect.getAttribute("accessible-name-ref");

		assert.strictEqual(accessibleName, "Add", "Select accessible name is correct");
		assert.strictEqual(accessibleNameRef, "title", "Select accessible name ref is correct");
	});
});
