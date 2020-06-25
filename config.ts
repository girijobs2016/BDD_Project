import { Config } from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./features/*.feature'],
    cucumberOpts: {
        format: 'json:cucumberreport.json',
        require: ['./stepDefinition/*.js'],
        requireModule: ['@babel/register']
    },
    onComplete: () => {
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          output: './cucumberreportsss.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
        };
  
        reporter.generate(options);
    }
};