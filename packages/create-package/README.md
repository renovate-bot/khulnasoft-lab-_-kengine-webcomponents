![KENGINE icon](https://raw.githubusercontent.com/KHULNASOFT/kengine-webcomponents/main/docs/images/KENGINE_logo_wide.png)


# KENGINE Web Components - Create Package

[![npm Package Version](https://badge.fury.io/js/%40ui5%2Fwebcomponents.svg)](https://www.npmjs.com/package/@kengine/webcomponents)

Provides an `npm init` script for creating new "KENGINE Web Components" packages.

## Usage with npm

```
Usage:

# npm 6.x
    npm init @kengine/webcomponents-package [OPTIONS]
# npm 7+, an extra double-dash is needed:
    npm init @kengine/webcomponents-package -- [OPTIONS]

Options:
    --name <string>     - defines the package name
    --component-name <string>      - defines the component class name that will be created in your new package
    --tag <string>      - defines the tag name of the sample web component that will be created in your new package. The tag will be derived from the component name if not provided.
    --enable-typescript - enables TypeScript support for the package
    --skip              - skips configuration and generates package with a default value for each parameter that wasn't passed
```

The script creates a new directory, and fills it with a `package.json` file and all necessary source files, and resources for a new
components package.

## Usage with yarn

```
Usage:
    yarn create @kengine/webcomponents-package [OPTIONS]
Options:
    --name <string>     - defines the package name
    --component-name <string>      - defines the component class name that will be created in your new package
    --tag <string>      - defines the tag name of the sample web component that will be created in your new package
    --enable-typescript - enables TypeScript support for the package
    --skip              - skips configuration and generates package with a default value for each parameter that wasn't passed
```

The script creates a new directory, and fills it with a `package.json` file and all necessary source files, and resources for a new
components package.

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
