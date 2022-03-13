const path = require('path')

const buildPrettierCommand = (filenames) =>
	`prettier --write ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')}`

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`

const buidlStylelintCommand = (filenames) =>
	`stylelint ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' ')} --fix`

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildPrettierCommand, buildEslintCommand],
	'*.{css,scss,sass}': [buidlStylelintCommand],
	'*.{html,json,md}': [buildPrettierCommand],
}
