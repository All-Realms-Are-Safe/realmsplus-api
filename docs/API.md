# API Reference

## Constructor

```javascript
import { RealmsPlusAPI } from "realmsplus-api";

const client = new RealmsPlusAPI(apiKey);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `apiKey` | `string` | Your Realms+ API key |

---

## Methods

### getHealth()

Returns the current health status of the API service.

```javascript
const health = await client.getHealth();
```

**Response:**

```json
{
  "ok": true,
  "data": {
    "status": "operational",
    "services": {
      "database": "connected"
    }
  }
}
```

---

### getDiscordDB(id)

Queries the Discord database.

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string` | Search identifier: `all`, a Discord ID, or a fingerprint ID |

```javascript
// Get all entries
const all = await client.getDiscordDB("all");

// Search by Discord ID
const user = await client.getDiscordDB("123456789012345678");
```

---

### getHackerDB(id)

Queries the hacker database.

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string` | Search identifier: `all`, an XUID, a Discord ID, or a fingerprint ID |

```javascript
// Get all entries
const all = await client.getHackerDB("all");

// Search by XUID
const player = await client.getHackerDB("2535412345678901");
```

---

### reportUser(category, data)

Submits a user report to the specified database.

| Parameter | Type | Description |
|-----------|------|-------------|
| `category` | `string` | Target database: `discordDB` or `hackerDB` |
| `data` | `object` | Report data (see below) |

**Report Data Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | `string` | Yes | The player's username |
| `xuid` | `string` | For `hackerDB` | Xbox User ID |
| `discordName` | `string` | No | Discord username |
| `discordId` | `string` | For `discordDB` | Discord user ID |
| `reason` | `string` | Yes | Reason for the report |

```javascript
// Report to hackerDB
await client.reportUser("hackerDB", {
  username: "PlayerName",
  xuid: "2535412345678901",
  reason: "Using prohibited modifications"
});

// Report to discordDB
await client.reportUser("discordDB", {
  username: "PlayerName",
  discordId: "123456789012345678",
  discordName: "player#1234",
  reason: "Violating community guidelines"
});
```

---

## Error Handling

All methods return promises and throw errors on failure. Wrap calls in try/catch blocks:

```javascript
try {
  const result = await client.getHackerDB("2535412345678901");
  console.log(result);
} catch (error) {
  console.error("API request failed:", error.message);
}
```

## TypeScript

This package includes TypeScript definitions. Available types:

```typescript
import {
  RealmsPlusAPI,
  ReportData,
  ReportCategory,
  APIResponse,
  HealthResponse
} from "realmsplus-api";
```
