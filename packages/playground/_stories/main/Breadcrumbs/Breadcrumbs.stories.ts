import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { Meta, StoryFn } from "@storybook/web-components";

import argTypes, { componentInfo } from "./argTypes.js";
import type { StoryArgsSlots } from "./argTypes.js";
import type { KENGINEStoryArgs } from "../../../types.js";

import { DocsPage } from "../../../.storybook/docs";

import type Breadcrumbs from "@kengine/webcomponents/dist/Breadcrumbs.js";
import BreadcrumbsDesign from "@kengine/webcomponents/dist/types/BreadcrumbsDesign.js";

const component = "ui5-breadcrumbs";

export default {
    title: "Main/Breadcrumbs",
    component: "Breadcrumbs",
    subcomponents: { BreadcrumbsItem: "BreadcrumbItem" },
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component }),
        },
    },
    argTypes,
} as Meta<Breadcrumbs>;

const Template: KENGINEStoryArgs<Breadcrumbs, StoryArgsSlots> = (args) =>
    html`<ui5-breadcrumbs
        design="${ifDefined(args.design)}"
        separator-style="${ifDefined(args.separatorStyle)}"
    >
	${unsafeHTML(args.default)}
</ui5-breadcrumbs>`;

export const Basic = Template.bind({});
Basic.args = {
    default: `<ui5-breadcrumbs-item href="https://www.khulnasoft.com" target="_blank">Root Page </ui5-breadcrumbs-item>
	<ui5-breadcrumbs-item href="https://www.khulnasoft.com">Parent Page</ui5-breadcrumbs-item>
	<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
	`,
};

export const SeparatorStyle: StoryFn = () => html`
    <div>
        <ui5-breadcrumbs design ="NoCurrentPage" separator-style="Slash">
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page   (ui5-breadcrumbs desing="NoCurrentPage")</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="BackSlash">
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleBackSlash">
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleGreaterThan">
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="DoubleSlash">
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
    <div>
        <ui5-breadcrumbs separator-style="GreaterThan">
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Root Page
            </ui5-breadcrumbs-item>
            <ui5-breadcrumbs-item href="https://www.khulnasoft.com"
                >Parent Page</ui5-breadcrumbs-item
            >
            <ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
        </ui5-breadcrumbs>
    </div>
`;
