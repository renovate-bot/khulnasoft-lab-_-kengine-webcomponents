import { assert } from "chai";

describe("Panel general interaction", () => {
	before(async () => {
		await browser.url(`test/pages/Panel.html`);
	});

	it("Changing the header text is reflected", async () => {
		const panel = await browser.$( "#panel-fixed");
		const title = await panel.shadow$(".kengine-panel-header-title");
		const sExpected = "Expanded, but not expandable";
		const sNew = "New text";

		assert.strictEqual(await title.getText(), sExpected, "Initially the text is the expected one");

		await browser.$("#panel-fixed").setAttribute("header-text", "New text");

		assert.strictEqual(await title.getText(), sNew, "New text");
	});

	it("Collapsing fixed panel is not possible", async () => {
		const panel = await browser.$( "#panel-fixed");
		const header = await panel.shadow$(".kengine-panel-header");
		const content = await panel.shadow$(".kengine-panel-content");

		assert.ok(await content.isDisplayedInViewport(), "The content is visible");

		await header.click();

		assert.ok(await content.isDisplayedInViewport(), "The content is still visible");

		await header.keys("Space");

		assert.ok(await content.isDisplayedInViewport(), "The content is still visible");

		await header.keys("Enter");

		assert.ok(await content.isDisplayedInViewport(), "The content is still visible");
	});

	it("Collapsing the panel is possible when not fixed", async () => {
		const panel = await browser.$( "#panel-expandable");
		const header = await panel.shadow$(".kengine-panel-header");
		const content = await panel.shadow$(".kengine-panel-content");

		assert.ok(await content.isDisplayedInViewport(), "The content is visible");

		await header.click();

		assert.notOk(await content.isDisplayedInViewport(), "The content is not visible");

		await header.keys("Space");

		assert.ok(await content.isDisplayedInViewport(), "The content is visible");

		await header.keys("Enter");

		assert.notOk(await content.isDisplayedInViewport(), "The content is not visible");
	});

	it("tests toggle event upon header click", async () => {
		const header = await browser.$("#panel1").shadow$(".kengine-panel-header");
		const field = await browser.$("#field1");

		await header.click();

		await browser.waitUntil(async () => await field.getProperty("value") === "1", {
			timeout: 2000, // GH Actions
			interval: 100,
			timeoutMsg: "Press called"
		});

		await header.keys("Space");

		await browser.waitUntil(async () => await field.getProperty("value") === "2", {
			timeout: 500,
			interval: 100,
			timeoutMsg: "Press called"
		});

		await header.keys("Enter");

		await browser.waitUntil(async () => await field.getProperty("value") === "3", {
			timeout: 500,
			interval: 100,
			timeoutMsg: "Press called"
		});
	});

	it("tests toggle event upon icon click with custom header", async () => {
		const icon = await browser.$("#panel2").shadow$(".kengine-panel-header-button");
		const field = await browser.$("#field2");

		await icon.click();

		await browser.waitUntil(async () => await field.getProperty("value") === "1", {
			timeout: 2000, // GH Actions
			interval: 100,
			timeoutMsg: "Press called"
		});

		await icon.keys("Space");

		await browser.waitUntil(async () => await field.getProperty("value") === "2", {
			timeout: 500,
			interval: 100,
			timeoutMsg: "Press called"
		});

		await icon.keys("Enter");

		await browser.waitUntil(async () => await field.getProperty("value") === "3", {
			timeout: 500,
			interval: 100,
			timeoutMsg: "Press called"
		});
	});

	it("tests toggle expand/collapse animation", async () => {
		const panelWithAnimationIcon = await browser.$("#panel-expandable").shadow$(".kengine-panel-header-button");
		const panelWithoutAnimationIcon = await browser.$("#p1").shadow$(".kengine-panel-header-button");

		assert.ok(await panelWithAnimationIcon.hasClass("kengine-panel-header-button-animated"), "Animation is presented");
		assert.notOk(await panelWithoutAnimationIcon.hasClass("kengine-panel-header-button-animated"), "Animation is turn off");
	});

	it("Test that the header is sticky when inner content scrollable", async () => {
		const panel = await browser.$("#panel-stickyHeader");
		const content = await panel.shadow$(".kengine-panel-content");
		const title = await panel.shadow$(".kengine-panel-header-title");
		const sExpected = "Panel with sticky header";
		const panelHeader = panel.shadow$(".kengine-panel-heading-wrapper");

		assert.strictEqual(await title.getText(), sExpected, "Initially the text is the expected one");
		assert.strictEqual((await content.getCSSProperty('overflow')).value, "auto", "Check if the overflow property is set to 'auto'");

		const initialScrollPosition = await browser.execute("return document.querySelector('#panel-stickyHeader').shadowRoot.querySelector('.kengine-panel-content').scrollTop");
		await browser.execute("document.querySelector('#panel-stickyHeader').shadowRoot.querySelector('.kengine-panel-content').scrollBy(0, 200)");
		const finalScrollPosition = await browser.execute("return document.querySelector('#panel-stickyHeader').shadowRoot.querySelector('.kengine-panel-content').scrollTop");
		assert.ok(initialScrollPosition < finalScrollPosition, "Initial scroll position of the inner div should be less than the final");
		assert.strictEqual(await panelHeader.isDisplayedInViewport(), true, "Assert that the header is still visible after scroll - it's sticky");
	});

	it("Test that the header is sticky", async () => {
		const panel = await browser.$("#panel-stickyHeader");
		const title = await panel.shadow$(".kengine-panel-header-title");
		const sExpected = "Panel with sticky header";

		const panelHeader = panel.shadow$(".kengine-panel-heading-wrapper");
		const isStickyCssPosition = await browser.execute("return window.getComputedStyle(document.querySelector('#panel-stickyHeader').shadowRoot.querySelector('.kengine-panel-heading-wrapper')).position");

		await browser.setWindowSize(1000, 1200);

		assert.strictEqual(await title.getText(), sExpected, "Initially the text is the expected one");
		assert.ok(await panelHeader.hasClass("kengine-panel-heading-wrapper-sticky"), "Assert that sticky css class is available");
		assert.strictEqual(isStickyCssPosition, "sticky", "Assert that the header has a sticky position");

        let isPanelHeaderDisplayed = await panelHeader.isDisplayedInViewport();
		assert.strictEqual(isPanelHeaderDisplayed, true, "Initially the panel header should be visible");
        await browser.execute("window.scrollBy(0, 500)");
        isPanelHeaderDisplayed = await panelHeader.isDisplayedInViewport();
		assert.strictEqual(isPanelHeaderDisplayed, true, "Assert that the header is still visible after scroll - it's sticky");
	});

	describe("Accessibility", async () => {

		it("tests whether aria attributes are set correctly with native header", async () => {
			const panelRoot = await browser.$("#panel1").shadow$(".kengine-panel-root");
			const header = await browser.$("#panel1").shadow$(".kengine-panel-header");
			const heading = await browser.$("#panel1").shadow$(".kengine-panel-heading-wrapper");
			const button = await browser.$("#panel1").shadow$(".kengine-panel-header-button");
			let resourceBundleText = null;

			resourceBundleText = await browser.executeAsync(done => {
				const panel = document.getElementById("panel1");
				done(panel.constructor.i18nBundle.getText(window["sap-ui-webcomponents-bundle"].defaultTexts.PANEL_ICON));
			});


			assert.strictEqual(await panelRoot.getAttribute("role"), "form", "The correct accessible role is applied");

			assert.strictEqual(await button.getTagName(), "kengine-icon", "kengine-icon should be rendered");

			assert.ok(await header.getAttribute("aria-expanded"), "aria-expanded should be set on the header");
			assert.ok(await header.getAttribute("aria-controls"), "aria-controls should be set on the header");
			assert.ok(await header.getAttribute("role"), "role should be set on the header");
			assert.ok(await button.getAttribute("accessible-name"), resourceBundleText, "icon has correct aria-label set");

			assert.strictEqual(await heading.getAttribute("aria-level"), "3", "title aria-level is set to 3 correctly");
			assert.strictEqual(await heading.getAttribute("role"), "heading", "heading role is set correctly");
		});

		it("tests aria label attributes", async () => {
			const panelWithNativeHeader = await browser.$("#panel-expandable");
			const nativeHeader = await panelWithNativeHeader.shadow$(".kengine-panel-header");
			const panelWithNativeHeaderId = await panelWithNativeHeader.getProperty("_id");
			const fixedPanel = await browser.$('#panel-fixed');
			const fixedPanelRoot = await fixedPanel.shadow$(".kengine-panel-root");
			const fixedPanelHeader = await fixedPanel.shadow$(".kengine-panel-header");
			const fixedPanelHeaderTitle = await fixedPanel.shadow$(".kengine-panel-header-title");
			const fixedPanelHeaderTitleId = await fixedPanelHeaderTitle.getProperty("id");
			

			assert.strictEqual(await nativeHeader.getAttribute("aria-labelledby"),
				`${panelWithNativeHeaderId}-header-title`, "aria-labelledby is correct");
			assert.notOk(await fixedPanelHeader.getAttribute("aria-labelledby"), "aria-labelledby is not added to the header");
			assert.strictEqual(await fixedPanelRoot.getAttribute("aria-labelledby"), fixedPanelHeaderTitleId, "aria-labelledby is set correctly");

			await browser.$("#panel-expandable").setAttribute("accessible-name", "New accessible name");
			fixedPanel.setAttribute("accessible-name", "Accessible name added");

			assert.strictEqual(await panelWithNativeHeader.shadow$(".kengine-panel-root").getAttribute("aria-label"), "New accessible name", "aria-label is set correctly");
			assert.strictEqual(await fixedPanelRoot.getAttribute("aria-label"), "Accessible name added", "aria-label is set correctly");
		});

		it("tests whether aria attributes are set correctly with fixed header", async () => {
			const header = await browser.$("#panel-fixed").shadow$(".kengine-panel-header");

			assert.notOk(await header.getAttribute("aria-expanded"), "aria-expanded shouldn't be set on the fixed header");
			assert.notOk(await header.getAttribute("aria-controls"), "aria-controls shouldn't be set on the fixed header");
			assert.notOk(await header.getAttribute("role"), "role shouldn't be set on the fixed header");
		});

		it("tests whether aria attributes are set correctly in case of custom header", async () => {
			const panelRoot = await browser.$("#panel2").shadow$(".kengine-panel-root");
			const button = await browser.$("#panel2").shadow$(".kengine-panel-header-button").shadow$(".kengine-button-root");
			const header = await browser.$("#panel2").shadow$(".kengine-panel-header");
			const heading = await browser.$("#panel2").shadow$(".kengine-panel-heading-wrapper");

			assert.notOk(await header.getAttribute("aria-expanded"), "aria-expanded shouldn't be set on the header");
			assert.notOk(await header.getAttribute("aria-controls"), "aria-controls shouldn't be set on the header");
			assert.notOk(await heading.getAttribute("aria-level"), "aria-level should not be set when a header slot is used");
			assert.notOk(await heading.getAttribute("role"), "heading role should not be set when a header slot is used");

			assert.ok(await button.getAttribute("aria-expanded"), "aria-expanded should be set on the button");
			assert.ok(await button.getAttribute("title"), "title should be set on the button");

			await browser.$("#panel2").setAttribute("accessible-name", "New accessible name");

			assert.strictEqual(await panelRoot.getAttribute("aria-label"), "New accessible name", "aria-label should be set on the panel");
			assert.notOk(await button.getAttribute("aria-label"), "aria-label should not be set on the button");

			await browser.$("#panel2").setAttribute("use-accessible-name-for-toggle-button", "");

			assert.strictEqual(await button.getAttribute("aria-label"), "New accessible name", "aria-label should be set on the button");
		});
	});
});
