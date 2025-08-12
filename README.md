# Playwright BDD Test Automation Framework

A comprehensive Behavior Driven Development (BDD) test automation framework built with Playwright and Cucumber for both UI and API testing.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Test Scenarios](#test-scenarios)
- [Environment Management](#environment-management)
- [Contributing](#contributing)

## 🔍 Overview

This project implements a modern test automation framework using Playwright with BDD approach (Gherkin syntax). It supports both UI and API testing with comprehensive reporting capabilities using Allure and built-in Playwright reports.

## ✨ Features

- **BDD Framework**: Uses Gherkin syntax for readable test scenarios
- **Multi-browser Support**: Cross-browser testing with Chromium, Firefox, and Safari
- **Environment Management**: Support for multiple environments (dev, qa, uat)
- **Comprehensive Reporting**: 
  - Allure reports with rich visualizations
  - Playwright HTML reports
  - Cucumber reports
- **Visual Testing**: Screenshot comparison and chart analysis
- **API Testing**: API mocking and validation capabilities
- **OCR Integration**: Text extraction using Tesseract.js
- **Video Recording**: Test execution recordings for debugging
- **Parallel Execution**: Faster test execution with parallel runs

## 🛠 Tech Stack

- **Playwright**: Modern web automation framework
- **TypeScript**: Type-safe JavaScript
- **Cucumber/Gherkin**: BDD test scenarios
- **playwright-bdd**: Integration between Playwright and Cucumber
- **Allure**: Advanced test reporting
- **Tesseract.js**: OCR for text extraction
- **Node.js**: Runtime environment

## 📁 Project Structure

```
playwright-bdd/
├── src/
│   ├── api/
│   │   ├── feature/           # API test scenarios (.feature files)
│   │   └── step/             # API step definitions
│   ├── ui/
│   │   ├── feature/          # UI test scenarios (.feature files)
│   │   │   ├── login/
│   │   │   ├── etrain/
│   │   │   ├── ecommerce/
│   │   │   ├── blazeDemo/
│   │   │   └── visualTests/
│   │   └── step/             # UI step definitions
│   └── resources/            # Test data and utilities
├── allure-results/           # Allure test results
├── allure-report/           # Generated Allure reports
├── cucumber-report/         # Cucumber HTML reports
├── playwright-report/       # Playwright HTML reports
├── screenshots/             # Test screenshots
├── test-results/           # Playwright test artifacts
├── config.json             # Environment configurations
├── playwright.config.ts    # Playwright configuration
└── package.json           # Project dependencies
```

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/Shukla0312/playwright-bdd.git
cd playwright-bdd
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## ⚙️ Configuration

The framework uses environment-specific configurations stored in `config.json`:

```json
{
  "dev": {
    "ECOMMERCE_URL": "https://rahulshettyacademy.com/client/#/auth/login",
    "ECOMMERCE_USERNAME": "your-username",
    "ECOMMERCE_PASSWORD": "your-password"
  }
}
```

Update the configuration file with your environment-specific values.

## 🏃‍♂️ Running Tests

### Basic Test Execution

```bash
# Run all tests
npm test

# Run tests for specific environment
npm run test:dev
npm run test:qa
npm run test:uat
```

### Tests with Allure Reporting

```bash
# Run tests and generate Allure results
npm run test:allure

# Run tests for specific environment with Allure
npm run test:allure:dev
npm run test:allure:qa
npm run test:allure:uat
```

### Generate and Open Allure Report

```bash
npm run allure:report
```

## 📊 Test Reports

The framework generates multiple types of reports:

1. **Allure Reports**: Rich, interactive reports with test history, trends, and detailed execution logs
2. **Playwright Reports**: Built-in HTML reports with traces, screenshots, and videos
3. **Cucumber Reports**: Traditional BDD-style reports

Reports are automatically generated in their respective directories after test execution.

## 🧪 Test Scenarios

### UI Test Scenarios

- **Login Functionality**: Valid/invalid login scenarios
- **E-commerce Operations**: Product ordering and management
- **Visual Testing**: Screenshot comparison and chart analysis
- **Navigation Tests**: Cross-application navigation flows

### API Test Scenarios

- **API Mocking**: Response mocking and validation
- **Data Validation**: API response structure and data integrity
- **Integration Testing**: End-to-end API workflows

## 🌍 Environment Management

The framework supports multiple environments:

- **dev**: Development environment
- **qa**: Quality Assurance environment  
- **uat**: User Acceptance Testing environment

Switch between environments using the respective npm scripts or by setting the `ENV` environment variable.

## 🔧 Key Features

### BDD Integration
- Gherkin syntax for readable test scenarios
- Automatic step definition generation
- Support for tags and scenario filtering

### Visual Testing
- Screenshot comparison capabilities
- Chart and canvas element testing
- OCR text extraction and validation

### Reporting & Debugging
- Video recording of test execution
- Screenshot capture on failure
- Detailed trace information
- Comprehensive error reporting

### Performance
- Parallel test execution
- Configurable timeouts
- Efficient resource management

## 📝 Writing New Tests

1. Create feature files in the appropriate directory (`src/ui/feature/` or `src/api/feature/`)
2. Write scenarios using Gherkin syntax
3. Implement step definitions in the corresponding step directories
4. Run `npx bddgen` to generate test files
5. Execute tests using the provided npm scripts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For questions or issues, please open an issue in the GitHub repository or contact the development team.

---

**Happy Testing! 🚀**
