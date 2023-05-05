/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
import './styles/pages/Accueil.scss';
import './styles/pages/Films.scss';
import './styles/components/NavBar.scss';
import './styles/components/Footer.scss';
import './styles/pages/Detail.scss';

// start the Stimulus application
import './bootstrap';

import 'tw-elements';


import { registerReactControllerComponents } from '@symfony/ux-react';
registerReactControllerComponents(require.context('./react/controllers', true, /.(j|t)sx?$/));
