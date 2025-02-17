/// <reference types="mithril" />
/// <reference types="flarum/@types/translator-icu-rich" />
import SettingsModal from 'flarum/admin/components/SettingsModal';
export default class ModuleModal extends SettingsModal {
    static isDismissible: boolean;
    key: string;
    className(): string;
    title(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    helpText(): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
    dependencies(): string[];
    areRequiredServicesEnabled(): boolean;
    content(): JSX.Element;
    onsaved(): void;
}
