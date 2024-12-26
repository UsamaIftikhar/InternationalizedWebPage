# Internationalized Web Page in Next.js 15

## Overview

This is a simple internationalized web page built using Next.js 15. It features:

- A **navbar** with language selection buttons (`English` and `Français`).
- A **banner** displaying localized content based on the selected language.
- Localized content dynamically fetched from a backend API.

## Requirements

To run this project, ensure the following tools are installed:

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)

## Setup

1. Clone the repository
2. `npm install`
3. `npm run dev`

## Usage

The app starts with the default locale (English).
Click on Français to switch the content to French.
The banner text updates dynamically without a page reload.
The locale persists via the query parameter (?locale=en or ?locale=fr).

## Key Features

**Frontend**

- Dynamic language switching using React hooks (useEffect, useState, useSearchParams).
- Clean and modular code structure with reusable components.

**Backend**

- Localized content served dynamically via a RESTful API endpoint (/api/content).
- Uses the `public/locales` directory for storing JSON files with translations.

**Tools**

- **ESLint:** Enforces coding standards.
- **Prettier:** Formats the code.
- **Husky:** Runs pre-commit hooks for linting and formatting.
- **GitHub Actions:** Automates linting checks during pull requests.
