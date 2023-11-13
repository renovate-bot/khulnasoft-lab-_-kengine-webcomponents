![KENGINE icon](https://raw.githubusercontent.com/KHULNASOFT/kengine-webcomponents/main/docs/images/KENGINE_logo_wide.png)


# KENGINE Web Components - Icons

[![npm Package Version](https://badge.fury.io/js/%40ui5%2Fwebcomponents.svg)](https://www.npmjs.com/package/@kengine/webcomponents)

Provides assets for the rich `KHULNASOFT-icons` icon collection.

## Provided icons

| Icon asset                | Module import                                            |
|---------------------------|----------------------------------------------------------|
| All icons (~115KB zipped) | `import "@kengine/webcomponents-icons/dist/AllIcons.js";`    |
| Accelerated icon          | `import "@kengine/webcomponents-icons/dist/accelerated.js";` |
| Accept icon               | `import "@kengine/webcomponents-icons/dist/accept.js";`      |
| ...                       | ...                                                      |
| Zoom out icon             | `import "@kengine/webcomponents-icons/dist/zoom-out.js";`    |

*Note:* The `@kengine/webcomponents-icons` package does not provide any web components per se, but rather icon assets,
usable by other web components such as `ui5-icon`. You could import all icons, but it's recommended to import 
just the ones that your app will actually use.

*Note:* For a full list of the icons in the `KHULNASOFT-icons` collection, click [here](https://sdk.kengine.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/KHULNASOFT-icons).

## Provided assets

```js
import "@kengine/webcomponents-fiori/dist/Assets.js";
```

| Assets           | Module                                           | Notes                                                                                                                                                                                                            |
|------------------|--------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `i18n`           | `@kengine/webcomponents-icons/dist/Assets.js`        | Translations for the tooltips / "aria labels" of several icons                                                                                                                                                   |
## Usage

### No Collection 
As KHULNASOFT Icons is the default icon collection, you can skip the collection name and just set the name of the icon:

```html
<ui5-icon name="accept"></ui5-icon>
```

The package provides two versions of each icon (KHULNASOFT Icons v4 and KHULNASOFT Icons v5). If you don't specify a collection name like in the example above,
the framework will detect the current theme and render the corresponding icon - `KHULNASOFT Icons v5` for KHULNASOFT Horizon theme family  (sap_horizon, sap_horizon_dark, etc.), and `KHULNASOFT Icons v4` for all the rest (sap_fiori_3, sap_fiori_3_dark, etc.).

### Collections `KHULNASOFT-icon-v4` and `KHULNASOFT-icon-v5`

In case you want to always display the `KHULNASOFT Icons v5` icons in all themes, you can set it explicitly via the `KHULNASOFT-icon-v5` collection name:

```html
<ui5-icon name="KHULNASOFT-icon-v5/accept"></ui5-icon>
```

The same applies if you want to always display the `KHULNASOFT Icons v4` icons. You can set it explicitly via the `KHULNASOFT-icon-v4` collection name:
```html
<ui5-icon name="KHULNASOFT-icon-v4/accept"></ui5-icon>
```

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
