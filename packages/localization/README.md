![KENGINE icon](https://raw.githubusercontent.com/KHULNASOFT/kengine-webcomponents/main/docs/images/KENGINE_logo_wide.png)


# KENGINE Web Components - Localization

[![npm Package Version](https://badge.fury.io/js/%40ui5%2Fwebcomponents.svg)](https://www.npmjs.com/package/@kengine/webcomponents)

Provides date/time and CLDR functionality for the purposes of building KENGINE Web Components.

## Provided assets

The assets, provided by this package, are CLDR data:

`import "@kengine/webcomponents-localization/dist/Assets.js";`

*Note:* These assets are already imported by the KENGINE Web Components packages that need them.

## Provided features

| Feature Import                                                       | Description               |
|----------------------------------------------------------------------|---------------------------|
| `@kengine/webcomponents-localization/dist/features/calendar/Buddhist.js` | Buddhist calendar support |
| `@kengine/webcomponents-localization/dist/features/calendar/Islamic.js`  | Islamic calendar support  |
| `@kengine/webcomponents-localization/dist/features/calendar/Japanese.js` | Japanese calendar support |
| `@kengine/webcomponents-localization/dist/features/calendar/Persian.js`  | Persian calendar support  |

### Advanced Calendar Types Feature

```js
import "@kengine/webcomponents-localization/dist/features/calendar/Buddhist.js";
import "@kengine/webcomponents-localization/dist/features/calendar/Islamic.js";
import "@kengine/webcomponents-localization/dist/features/calendar/Japanese.js";
import "@kengine/webcomponents-localization/dist/features/calendar/Persian.js";
```

The `ui5-date-picker` and `ui5-datetime-picker` components supports Gregorian Calendar by default.

In order to be able to use Buddhist, Islamic, Japanese, or Persian calendar with these components
(by setting its `primaryCalendarType` property), you must import one or more of the modules above.

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
