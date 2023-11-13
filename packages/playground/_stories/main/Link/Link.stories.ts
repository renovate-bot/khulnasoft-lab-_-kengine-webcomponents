import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { Meta, StoryFn } from "@storybook/web-components";

import argTypes, { componentInfo } from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { KENGINEStoryArgs } from "../../../types.js";

import { DocsPage } from "../../../.storybook/docs";

import type Link from "@kengine/webcomponents/dist/Link.js";
import WrappingType from "@kengine/webcomponents/dist/types/WrappingType.js";
import LinkDesign from "@kengine/webcomponents/dist/types/LinkDesign.js";

const component = "ui5-link";

export default {
	title: "Main/Link",
	component: "Link",
	parameters: {
		docs: {
			page: DocsPage({ ...componentInfo, component })
		},
	},
	argTypes,
} as Meta<Link>;

const Template: KENGINEStoryArgs<Link, StoryArgsSlots> = (args) => html`<ui5-link
	design="${ifDefined(args.design)}"
	?disabled="${ifDefined(args.disabled)}"
	href="${ifDefined(args.href)}"
	target="${ifDefined(args.target)}"
	wrappingType="${ifDefined(args.wrappingType)}"
	accessible-name="${ifDefined(args.accessibleName)}"
	accessible-name-ref="${ifDefined(args.accessibleNameRef)}"
	accessible-role="${ifDefined(args.accessibleRole)}"
	accessibility-attributes="${ifDefined(args.accessibilityAttributes)}"
	style="${ifDefined(args.style)}"
>
	${unsafeHTML(args.default)}
</ui5-link>`;

export const Basic = Template.bind({});
Basic.args = {
	default: "Standard Link",
	href: "https://www.khulnasoft.com",
	target: "_blank",
};

export const Design = Template.bind({});
Design.args = {
	default: "Link with Design",
	href: "https://www.khulnasoft.com",
	target: "_blank",
	design: LinkDesign.Subtle,
};

export const TextWrapping = Template.bind({});
TextWrapping.args = {
	default: "This is a really long link. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	href: "https://www.khulnasoft.com",
	target: "_blank",
	wrappingType: WrappingType.Normal,
	style: "width: 8rem",
};