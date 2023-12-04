const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-result",
    reportPath: "./",
    reportName: "Playwright Automation Report",
    pageTitle: "Automation Task",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Pankaj's MACBOOK",
        platform: {
            name: "MACOS",
            version: "Latest",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "sauce demo" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});