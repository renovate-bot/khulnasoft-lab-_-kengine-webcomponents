![KENGINE icon](https://raw.githubusercontent.com/KHULNASOFT/kengine-webcomponents/main/docs/images/KENGINE_logo_wide.png)


# KENGINE Web Components - Fiori

[![npm Package Version](https://badge.fury.io/js/%40ui5%2Fwebcomponents.svg)](https://www.npmjs.com/package/@kengine/webcomponents)

Provides essential building blocks, necessary to implement the Fiori UX concept, 
such as a common header (ShellBar).

## Provided components 

| Web Component                             | Tag name                       | Module import                                                         |
|-------------------------------------------|--------------------------------|-----------------------------------------------------------------------|
| Bar                                       | `ui5-bar`                      | `import "@kengine/webcomponents-fiori/dist/Bar.js";`                      |
| Barcode Scanner Dialog                    | `ui5-barcode-scanner-dialog`   | `import "@kengine/webcomponents-fiori/dist/BarcodeScannerDialog.js";`     |
| Dynamic Side Content                      | `ui5-dynamic-side-content`     | `import "@kengine/webcomponents-fiori/dist/DynamicSideContent.js";`       |
| Flexible Column Layout                    | `ui5-flexible-column-layout`   | `import "@kengine/webcomponents-fiori/dist/FlexibleColumnLayout.js";`     |
| Illustrated Message                       | `ui5-illustrated-message`      | `import "@kengine/webcomponents-fiori/dist/IllustratedMessage.js";`       |
| Media Gallery                             | `ui5-media-gallery`            | `import "@kengine/webcomponents-fiori/dist/MediaGallery.js";`             |
| Media Gallery Item                        | `ui5-media-gallery-item`       | comes with  `ui5-media-gallery`                                       |
| Notification List Item                    | `ui5-li-notifcation`           | `import "@kengine/webcomponents-fiori/dist/NotifcationListItem.js";`      |
| Notification Group List Item              | `ui5-li-notification-group`    | `import "@kengine/webcomponents-fiori/dist/NotifcationListGroupItem.js";` |
| Notification Action                       | `ui5-notification-action`      | `import "@kengine/webcomponents-fiori/dist/NotificationAction.js";`       |
| Page                                      | `ui5-page`                     | `import "@kengine/webcomponents-fiori/dist/Page.js";`                     |
| Product Switch                            | `ui5-product-switch`           | `import "@kengine/webcomponents-fiori/dist/ProductSwitch.js";`            |
| Product Switch Item                       | `ui5-product-switch-item`      | `import "@kengine/webcomponents-fiori/dist/ProductSwitchItem.js";`        |
| Shell Bar                                 | `ui5-shellbar`                 | `import "@kengine/webcomponents-fiori/dist/ShellBar.js";`                 |
| Shell Bar Item                            | `ui5-shellbar-item`            | `import "@kengine/webcomponents-fiori/dist/ShellBarItem.js";`             |
| Side Navigation                           | `ui5-side-navigation`          | `import "@kengine/webcomponents-fiori/dist/SideNavigation.js";`           |
| Side Navigation Item                      | `ui5-side-navigation-item`     | `import "@kengine/webcomponents-fiori/dist/SideNavigationItem.js";`       |
| Side Navigation Sub Item                  | `ui5-side-navigation-sub-item` | `import "@kengine/webcomponents-fiori/dist/SideNavigationSubItem.js";`    |
| Timeline                                  | `ui5-timeline`                 | `import "@kengine/webcomponents-fiori/dist/Timeline.js";`                 |
| Timeline Item                             | `ui5-timeline-item`            | comes with `ui5-timeline`                                             |
| Upload Collection                         | `ui5-upload-collection`        | `import "@kengine/webcomponents-fiori/dist/UploadCollection.js";`         |
| Upload Collection Item                    | `ui5-upload-collection-item`   | `import "@kengine/webcomponents-fiori/dist/UploadCollectionItem.js";`     |
| View Settings Dialog                      | `ui5-view-settings-dialog`     | `import "@kengine/webcomponents-fiori/dist/ViewSettingsDialog.js";`       |
| View Settings Dialog - Sort Item          | `ui5-sort-item`                | `import "@kengine/webcomponents-fiori/dist/SortItem.js";`                 |
| View Settings Dialog - Filter Item        | `ui5-filter-item`              | `import "@kengine/webcomponents-fiori/dist/FilterItem.js";`               |
| View Settings Dialog - Filter Item Option | `ui5-filter-item-option`       | `import "@kengine/webcomponents-fiori/dist/FilterItemOption.js";`         |
| Wizard                                    | `ui5-wizard`                   | `import "@kengine/webcomponents-fiori/dist/Wizard.js";`                   |
| Wizard Step                               | `ui5-wizard-step`              | comes with `ui5-wizard`                                               |

## Provided assets

```js
import "@kengine/webcomponents-fiori/dist/Assets.js";
```

| Assets           | Module                                    | Notes                                                                                                                                  |
|------------------|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `i18n`, `themes` | `@kengine/webcomponents-fiori/dist/Assets.js` | Theming parameters and translations for the components  <br/><br/> *Automatically imports also:<br/> `@kengine/webcomponents/dist/Assets.js`* |

## Provided features


| Affects        | Feature Import                                               | Description                                                                                             |
|----------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `ui5-shellbar` | `@kengine/webcomponents-fiori/dist/features/CoPilotAnimation.js` | Support for a better (but bigger in size) animation for the "co-pilot" button in the shellbar component |

### Shellbar CoPilot animation

```js
import "@kengine/webcomponents-fiori/dist/features/CoPilotAnimation.js";
```

By default, the `ui5-shellbar` CoPilot button ships with a simple animation for better performance.
Importing the module above enables the detailed but more resource-intensive animation instead.


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
