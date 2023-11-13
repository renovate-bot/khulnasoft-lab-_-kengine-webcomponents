![KENGINE icon](https://raw.githubusercontent.com/KHULNASOFT/kengine-webcomponents/main/docs/images/KENGINE_logo_wide.png)


# KENGINE Web Components - Base

[![npm Package Version](https://badge.fury.io/js/%40ui5%2Fwebcomponents.svg)](https://www.npmjs.com/package/@kengine/webcomponents)

Contains the base files for all Web Components, most notably `@kengine/webcomponents-base/dist/KENGINEElement.js`.

## Provided APIs for applications

| Affects      | Import                                                    | Description                                                                                         |
|--------------|---------------------------------------------------------- |-----------------------------------------------------------------------------------------------------|
 Configuration | `@kengine/webcomponents-base/dist/config/Theme.js`            | Sets Theme Configuration                                                                            |
 Configuration | `@kengine/webcomponents-base/dist/config/Language.js`         | Sets Language Configuration                                                                         |
 Configuration | `@kengine/webcomponents-base/dist/config/AnimationMode.js`    | Sets Animation Mode Configuration                                                                   |
 Configuration | `@kengine/webcomponents-base/dist/config/NoConflict.js`       | Sets "NoConflict" Mode Configuration - if enabled all custom events are fired with the `ui5-` prefix|
 Framework     | `@kengine/webcomponents-base/dist/features/OpenKENGINESupport.js` | Adds integration with the OpenKENGINE framework for resources re-use                                    |
 Components    | `@kengine/webcomponents-base/dist/features/F6Navigation.js`   | Adds support for F6 fast group navigation                                                           |
 Components    | `import applyDirection from "@kengine/webcomponents-base/dist/locale/applyDirection.js"`| Applies direction ("ltr"/"rtl") - re-renders all RTL-aware components     |
 Components    | `import { setCustomElementsScopingSuffix } from "@kengine/webcomponents-base/dist/CustomElementsScope.js"`| Adds suffix to the tag names of all components          |
 Components    | `@kengine/webcomponents-base/dist/util/InvisibleMessage.js`   | Provides a way to expose dynamic content changes that can be announced by screen readers   |
 CSP compliance| `import { setPackageCSSRoot } from "@kengine/webcomponents-base/dist/CSP.js"`| Sets directory path where the CSS resources for given package will be served from    |
 CSP compliance| `import { setUseLinks } from "@kengine/webcomponents-base/dist/CSP.js"`      | Enables or disables the usage of `<link>` tags instead of `<style>` tags             |
 CSP compliance| `import { setPreloadLinks } from "@kengine/webcomponents-base/dist/CSP.js"`  | Enables or disables the preloading of `<link>` tags                                  |

### `applyDirection.js`
- `applyDirection`

### `Boot.js`

 - `attachBoot`

### `CustomElementsScope.js`

 - `setCustomElementsScopingSuffix`
 - `getCustomElementsScopingSuffix`
 - `setCustomElementsScopingRules`
 - `getCustomElementsScopingRules`

### `IgnoreCustomElements.js`

 - `ignoreCustomElements`

###  `CSP.js`
 - `setPackageCSSRoot` 
 - `setUseLinks`
 - `setPreloadLinks`

### `i18nBundle.js`

 - `registerI18nLoader`
 - `getI18nBundle`

### `PropertiesFileFormat.js`

 - `parseProperties`

### `Render.js`

 - `renderFinished`

## Resources
- [KENGINE Web Components - README.md](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/README.md)
- [KENGINE Web Components - Home Page](https://sap.github.io/kengine-webcomponents)
- [KENGINE Web Components - Playground and API Reference](https://sap.github.io/kengine-webcomponents/playground/)

## Support
We welcome all comments, suggestions, questions, and bug reports. Please follow our [Support Guidelines](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/SUPPORT.md#-content) on how to report an issue, or chat with us in the `#webcomponents` channel of the [OpenKENGINE Community Slack](https://join-ui5-slack.herokuapp.com/).

## Contribute
Please check our [Contribution Guidelines](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/docs/6-contributing/02-conventions-and-guidelines.md).

## License
Copyright (c) 2019 KHULNASOFT SE or an KHULNASOFT affiliate company. All rights reserved.
This file is licensed under the Apache Software License, Version 2.0 except as noted otherwise in the [LICENSE](https://github.com/khulnasoft-lab/kengine-webcomponents/blob/main/LICENSE.txt) file.
