import { Config } from 'protractor';
var reporter = require('cucumber-html-reporter');

export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./features/*.feature'],
    cucumberOpts: {
        format: 'json:./cucumberReport.json',
        onComplete: () => {
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
    },
};