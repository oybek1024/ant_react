import analysis from './ru-RU/analysis';
import exception from './ru-RU/exception';
import form from './ru-RU/form';
import globalHeader from './ru-RU/globalHeader';
import login from './ru-RU/login';
import menu from './ru-RU/menu';
import monitor from './ru-RU/monitor';
import result from './ru-RU/result';
import settingDrawer from './ru-RU/settingDrawer';
import settings from './ru-RU/settings';
import pwa from './ru-RU/pwa';
import component from './ru-RU/component';
import editor from './ru-RU/editor';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.home.introduce': 'introduce',
  'app.forms.basic.title': 'Basic form',
  'app.forms.basic.description':
    'Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.',
  ...analysis,
  ...exception,
  ...form,
  ...globalHeader,
  ...login,
  ...menu,
  ...monitor,
  ...result,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...editor,
};
