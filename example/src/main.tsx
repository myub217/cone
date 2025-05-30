import { Cone } from '../../dist/Cone';

const app = document.getElementById('app');
if (app) {
  const cone = new Cone(app, { color: 'blue' });
  cone.render();
}