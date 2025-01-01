# Business Card

A command-line business card that displays my contact information and social links.

![Mitul Patel's Business Card](https://github.com/bittricky/business-card/blob/main/docs/mitul_patel_business_card.png)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) version 14.16 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) package manager

Note: This package is built with TypeScript and uses modern JavaScript features, so make sure you have a compatible Node.js version installed.

## Installation

You can run this package using npx:

```bash
npx bittricky
```

Or install it globally:

```bash
yarn global add bittricky
```

## Usage

After installing globally, you can use the following commands:

```bash
# Display the business card
bittricky

# Open resume in default browser
bittricky resume
```

### Options

- `--help`: Show help information
- `--version`: Show version information

## Development

1. Clone the repository:

```bash
git clone https://github.com/bittricky/business-card.git
cd business-card
```

2. Install dependencies:

```bash
yarn install
```

3. Start development mode:

```bash
yarn dev
```

4. Build the package:

```bash
yarn build
```

### Testing

- Run tests: `yarn test`
- Run tests with coverage: `yarn test:coverage`
- Run tests with specific path: `yarn test:path <path-to-test-file>`

## Publishing

1. Update the version in `package.json`
2. Run `yarn publish`

## License

MIT
