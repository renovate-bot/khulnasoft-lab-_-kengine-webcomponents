import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import type { Meta } from "@storybook/web-components";

import argTypes, { componentInfo } from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { KENGINEStoryArgs } from "../../../types.js";

import { DocsPage } from "../../../.storybook/docs";

import type Icon from "@kengine/webcomponents/dist/Icon.js";
import IconDesign from "@kengine/webcomponents/dist/types/IconDesign.js";

const component = "ui5-icon";

export default {
	title: "Main/Icon",
	component: "Icon",
	parameters: {
		docs: {
			page: DocsPage({ ...componentInfo, component }),
		},
	},
	argTypes,
} as Meta<Icon>;

const Template: KENGINEStoryArgs<Icon, StoryArgsSlots> = (args) =>
	html`<ui5-icon
	design="${ifDefined(args.design)}"
	?interactive="${ifDefined(args.interactive)}"
	name="${ifDefined(args.name)}"
	accessible-name="${ifDefined(args.accessibleName)}"
	accessible-role="${ifDefined(args.accessibleRole)}"
	?show-tooltip="${ifDefined(args.showTooltip)}"
	style="${ifDefined(args.style)}"
></ui5-icon>`;

export const Basic = Template.bind({});
Basic.args = {
	name: "activities",
};

export const Customized = Template.bind({});
Customized.args = {
	name: "tnt/antenna",
	style: "width: 3rem; height: 3rem; font-size: 1.5rem; color: crimson; background-color: #fafafa",
};
