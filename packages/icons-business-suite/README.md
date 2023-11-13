![KENGINE icon](https://raw.githubusercontent.com/KHULNASOFT/kengine-webcomponents/main/docs/images/KENGINE_logo_wide.png)


# KENGINE Web Components - KHULNASOFT Business Suite Icons

[![npm Package Version](https://badge.fury.io/js/%40ui5%2Fwebcomponents.svg)](https://www.npmjs.com/package/@kengine/webcomponents)

Provides assets for the rich `business-suite` icon collection.

| Icon asset               | Module import                                                               |
|--------------------------|-----------------------------------------------------------------------------|
| All icons (~73KB zipped) | `import "@kengine/webcomponents-icons-business-suite/dist/AllIcons.js";`        |
| 1x2 grid layout icon     | `import "@kengine/webcomponents-icons-business-suite/dist/1x2-grid-layout.js";` |
| 2x1 grid layout icon     | `import "@kengine/webcomponents-icons-business-suite/dist/2x1-grid-layout.js";` |
| ...                      | ...                                                                         |
| Year icon                | `import "@kengine/webcomponents-icons-business-suite/dist/year.js";`            |

*Note:* The `@kengine/webcomponents-icons-business-suite` package does not provide any web components per se, but rather icon assets,
usable by other web components such as `ui5-icon`. You could import all icons, but it's recommended to import
just the ones that your app will actually use.

## Usage

Since this is a non-default icon collection, all names have to be prefixed with the collection name and a `/` separator when used by web components.

Example usage with `<ui5-icon>` web component:

```html
<ui5-icon name="business-suite/1x2-grid-layout"></ui5-icon>
```

The package provides two versions of each icon (KHULNASOFT Business Suite Icons v1 and KHULNASOFT Business Suite Icons v2).
If you don't specify the versioned collection name, like in the example above:

```html
<ui5-icon name="business-suite/1x2-grid-layout"></ui5-icon>
```

the framework will detect the current theme and render the corresponding icon - from `KHULNASOFT Icons Business suite V2` (collection name `business-suite-v2`) for KHULNASOFT Horizon theme family  (sap_horizon, sap_horizon_dark, etc.), and from `KHULNASOFT Icons Business suite V1` (collection name `business-suite-v1`) for all the rest (sap_fiori_3, sap_fiori_3_dark, etc.).

### Collections `business-suite-v1` and `business-suite-v2 `

In case you want to always display the `KHULNASOFT Icons Business suite V1` icons in all themes, you can set it explicitly via the `business-suite-v1` collection name:

```html
<ui5-icon name="business-suite-v1/answered"></ui5-icon>
```

The same applies if you want to always display the `KHULNASOFT Icons Business suite V2` icons. You can set it explicitly via the `business-suite-v2` collection name:
```html
<ui5-icon name="business-suite-v2/answered"></ui5-icon>
```

For a full list of the icons in the `business-suite` collection, click [here](https://ui5.khulnasoft.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols).

## Resources
- [KENGINE Web Components - README.md](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/README.md)
- [KENGINE Web Components - Home Page](https://sap.github.io/kengine-webcomponents)
- [KENGINE Web Components - Using Icons](https://sap.github.io/kengine-webcomponents/playground/getting-started/using-icons/)

## Support
We welcome all comments, suggestions, questions, and bug reports. Please follow our [Support Guidelines](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/SUPPORT.md#-content) on how to report an issue, or chat with us in the `#webcomponents` channel of the [OpenKENGINE Community Slack](https://join-ui5-slack.herokuapp.com/).

## Contribute
Please check our [Contribution Guidelines](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/docs/6-contributing/02-conventions-and-guidelines.md).

## License
Copyright (c) 2019 KHULNASOFT SE or an KHULNASOFT affiliate company. All rights reserved.
This file is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/LICENSE.txt) file.
