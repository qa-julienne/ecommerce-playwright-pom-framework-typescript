# Ecommerce Playwright POM Framework — TypeScript

Automated end-to-end testing framework for e-commerce flows using **Playwright** and **TypeScript**, structured with the **Page Object Model (POM)** design pattern for scalability and maintainability.

---

## 🧪 Overview

This repository contains a Playwright automation framework that:

* Uses **Playwright** for end-to-end browser tests
* Organizes code using the **Page Object Model (POM)** pattern
* Is written in **TypeScript**
* Can be extended for additional test scenarios

It’s designed to help QA engineers and developers write robust UI tests that are easy to read and maintain.

---

## 🚀 Key Features

* 📌 **Page Object Model** architecture for clear separation of page logic
* 🔁 Reusable test logic across scenarios
* ⚡ Fast, reliable browser automation with Playwright
* 🧠 Written in strongly typed **TypeScript**
* 📂 Easy to extend with new pages and test suites

---

## 🛠️ Technologies

* 🧪 **[Playwright](https://playwright.dev/)** — E2E testing library
* 💻 **TypeScript** — Strongly typed JavaScript
* 🧱 **Page Object Model (POM)** — Design pattern for maintainable tests
* 📁 Standard folder structure (`pages/`, `tests/`, `utils/`, etc.) ([GitHub][1])

---

## 📦 Prerequisites

Before getting started, make sure you have the following installed:

* **Node.js** (v18+ recommended)
* **npm** or **yarn**
* Supported Playwright browsers

---

## 🧩 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/qa-julienne/ecommerce-playwright-pom-framework-typescript.git
   cd ecommerce-playwright-pom-framework-typescript
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run in headed mode (visible browser)

```bash
npx playwright test --headed
```

### Run tests for a specific file

```bash
npx playwright test tests/<your-test-file>.ts
```

---

## 🧱 Project Structure

```
.
├── pages/                # Page Object Model classes
├── tests/                # Test suites
├── utils/                # Helpers and utilities
├── playwright.config.ts  # Playwright config
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📊 Test Reporting

Playwright can generate rich reports including:

* HTML reports
* Screenshots on failure
* Trace files on retries

Run to open report:

```bash
npx playwright show-report
```

---

## 🧠 How POM Works Here

Each page in the application is represented by a class in `pages/` that encapsulates:

* Element locators
* Page actions (methods)
* Assertions

Tests then interact with these page objects, making the test code shorter and easier to maintain. ([GitHub][2])

---

## 🤝 Contributing

Contributions are welcome! Here’s how to help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes
4. Push to your branch
5. Open a Pull Request

---

## ❓ Support

If you run into issues or have questions, open an issue in this repo.

---

## 📄 License

This project is open source — specify your chosen license here (e.g., MIT, Apache 2.0, etc.) if one is intended.

---

## 👤 Author

Written and maintained by **qa-julienne**.
Contributions, forks, and stars are welcome!


