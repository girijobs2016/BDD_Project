"use strict";
exports.__esModule = true;
exports.config = void 0;
var reporter = require('cucumber-html-reporter');
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./features/*.feature'],
    cucumberOpts: {
        format: 'json:./cucumberReport.json',
        onComplete: function () {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberReport.json',
                output: './cucumberReport.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: ['./stepDefinition/*.js'],
        requireModule: ['@babel/register']
    }
};
