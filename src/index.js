/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/style.css';
import './script/component/nav-bar.js';
import main from './script/view/main.js';
import 'regenerator-runtime';

window.$ = $;
document.addEventListener('DOMContentLoaded', main);
