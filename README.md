# realmsplus-api

[![npm version](https://img.shields.io/npm/v/realmsplus-api.svg)](https://www.npmjs.com/package/realmsplus-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Official SDK for the Realms+ API's public endpoints. This service maintains a database of harmful users in the Minecraft Bedrock Community.

## Requirements

- Node.js 22.0.0 or higher
- A valid Realms+ API key

## Get Started

To use this package, you need an API key.

1. Join our [Discord server](https://discord.gg/KQtxZJVgnU)
2. Open a ticket to contact support
3. Request API access and provide your use case
4. Once approved, you will receive your API key

## Installation

```bash
npm install realmsplus-api
```

## Usage

```javascript
import { RealmsPlusAPI } from "realmsplus-api";

const client = new RealmsPlusAPI("your-api-key");

(async () => {
    // Check service health
    const health = await client.getHealth();
    console.log(health);

    // Query the hacker database
    const result = await client.getHackerDB("all");
    console.log(result);
})();
```

See more [examples](./examples)

## Documentation

- [API Reference](./docs/API.md)

## License

[MIT](./LICENSE)
