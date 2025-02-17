import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
import ServiceModal from './components/ServiceModal';
import ModuleModal from './components/ModuleModal';
export default class SettingsPage extends ExtensionPage {
    content(): JSX.Element;
    serviceItems(): ItemList<{
        label: Mithril.Children;
        modal: typeof ServiceModal;
    }>;
    moduleItems(): ItemList<{
        label: Mithril.Children;
        modal: typeof ModuleModal;
    }>;
}
