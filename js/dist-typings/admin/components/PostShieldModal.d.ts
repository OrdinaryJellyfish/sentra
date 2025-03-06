/// <reference types="mithril" />
import ModuleModal from './ModuleModal';
export default class PostShieldModal extends ModuleModal {
    key: string;
    docUrl: string;
    dependencies(): string[];
    form(): (JSX.Element | JSX.Element[])[];
    harmCategories(): JSX.Element[];
}
