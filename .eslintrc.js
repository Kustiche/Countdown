module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'warn',
			'always'
		],
		"array-element-newline": ["error", {
			"ArrayExpression": { "minItems": 4 },
			"ArrayPattern": { "minItems": 4 }
		}],
		'arrow-spacing': [
			'warn', {
				'before': true,
				'after': true
			}
		],
		'brace-style': [
			'warn',
			'1tbs'
		],
		'comma-spacing': [
			'warn',
			{
				'before': false,
				'after': true
			}
		],
		'func-call-spacing': [
			'error',
			'never'
		]
	}
};
