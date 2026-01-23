const { RealmsPlusAPI } = require("realmsplus-api");

const client = new RealmsPlusAPI("your-api-key");

reportHacker();
reportDiscord();

// Report a player to the hacker database
async function reportHacker() {
    try {
        const hackerReport = await client.reportUser("hackerDB", {
            username: "DarnedKitty801",
            xuid: "2535423289366135",
            reason: "Failed anti-cheat detection"
        });
        console.log("Hacker report submitted:", hackerReport);
    } catch (error) {
        console.error("Failed to submit hacker report:", error.message);
    };
};

// Report a user to the discord database
async function reportDiscord() {
    try {
        const discordReport = await client.reportUser("discordDB", {
            username: "Fredi 250510",
            discordId: "1147897242519343266",
            discordName: "fredi_250510",
            reason: "Violating community guidelines"
        });
        console.log("Discord report submitted:", discordReport);
    } catch (error) {
        console.error("Failed to submit discord report:", error.message);
    };
};