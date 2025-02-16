import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('ordinaryjellyfish-sentra', () => {
  console.log('[ordinaryjellyfish/sentra] Hello, forum!');
});
