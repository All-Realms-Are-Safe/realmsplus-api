const { RealmsPlusAPI } = require("realmsplus-api");

const client = new RealmsPlusAPI("your-api-key");

// Check service health
const health = await client.getHealth();
console.log("Service health:", health);

// Query the hacker database
const hackers = await client.getHackerDB("all");
console.log("Hacker database entries:", hackers);

// Query the discord database
const discord = await client.getDiscordDB("all");
console.log("Discord database entries:", discord);

// Search for a specific player by XUID
const player = await client.getHackerDB("2535423289366135");
console.log("Player lookup:", player);