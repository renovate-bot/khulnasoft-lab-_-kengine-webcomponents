// eslint-disable-next-line
import "@kengine/webcomponents-base/global";

export {};
declare global {
    interface Window {
        "sap-ui-webcomponents-bundle": {
            configuration: {
                setTheme: (theme: string) => void;
                getTheme: () => string;
                getRTL: () => string
            };
        }
    }
}