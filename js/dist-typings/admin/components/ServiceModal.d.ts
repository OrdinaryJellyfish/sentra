/// <reference types="mithril" />
/// <reference types="flarum/@types/translator-icu-rich" />
import SettingsModal from 'flarum/admin/components/SettingsModal';
export default class ServiceModal extends SettingsModal {
    static isDismissible: boolean;
    key: string;
    docUrl: string | null;
    className(): string;
    title(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    helpText(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    content(): JSX.Element;
    apiKeyField(): JSX.Element;
    endpointField(): JSX.Element;
    onsaved(): void;
}
