const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'output/report/json',
	reportPath: 'output/report/html',
    }
)