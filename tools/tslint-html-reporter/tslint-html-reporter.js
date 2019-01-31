const tslintHtmlReport = require('tslint-html-report');

tslintHtmlReport({
  tslint: 'tslint.json', // node_modules/tslint-html-report/tslint.json // path to tslint.json
  srcFiles: 'src/**/*.ts', // files to lint
  outDir: 'test-summary/tslint-html-report', // output folder to write the report to
  html: 'tslint-report.html', // name of the html report generated
  exclude: ['src/**/*.ts'], // Files/patterns to exclude
  breakOnError: false, // Should it throw an error in tslint errors are found
  typeCheck: true, // enable type checking. requires tsconfig.json
  tsconfig: 'tsconfig.json' // path to tsconfig.json
});
