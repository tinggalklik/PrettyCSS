"use strict";
var util = require('./util');

exports.batch = util.makeVows('text-indent', {
	'7px': {
		'tokens': ['UNIT'],
		'toString': '7px',
		'unparsed': [],
		'warnings': []
	},
	'-123%': {
		'tokens': ['UNIT'],
		'toString': '-123%',
		'unparsed': [],
		'warnings': []
	},
	'hanging each-line': {
		'tokens': ['IDENT', 'S', 'IDENT'],
		'toString': 'hanging',
		'unparsed': ['IDENT'],
		'warnings': ['minimum_css_version_3']
	},
	'inherit': {
		'tokens': ['IDENT'],
		'toString': 'inherit',
		'unparsed': [],
		'warnings': ['minimum_css_version_2']
	},
	'invalidValue': {
		'tokens': ['IDENT'],
		'toString': null,
		'unparsed': ['IDENT'],
		'warnings': null
	}
});
