'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'Fractal Demo');

fractal.components.set('path', path.join(__dirname, 'components'));

fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('ext', '.html');

fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

// Theme configuration
const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
	skin: 'white',
	styles: [
		'default',
		'/css/theme.css'
	]
});

fractal.web.theme(myCustomisedTheme);
