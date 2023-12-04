# Playwright Project

This project uses Playwright to automate browser testing. The feature files and step definitions are organized in the `src` folder.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js: [Download](https://nodejs.org/)
- Playwright: `npm install -g playwright`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PankajShinde92/Test-Playwright.git

All scripts for running test are available use following from Package.json:

    "test": "cross-env ENV=prod cucumber-js test",  --> To Run Tests
    "test:failed": "cucumber-js -p failedScenario @failedScenario.txt", --> To run failed Tests
    "report": "npx ts-node src/helper/report/report.ts" ---> To run the cucumber report

To locate Feature files go to --> src/test/feature
To locate Step defination go to --> src/test/steps
