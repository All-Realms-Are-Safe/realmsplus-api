/**
 * Represents the public routes of the Realms+ API
 */
export class RealmsPlusAPI {
    /**
     * 
     * @param {string} apiKey - your private api key
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.realmsplus.com/v1";
        this.headers = {
            "api-key": this.apiKey,
            "Content-Type": "application/json"
        };
    };

    async #request(method, url, body) {
        try {
            const data = {
                method: method,
                headers: this.headers
            };

            if (
                method !== "GET" && 
                method !== "DELETE" && 
                body
            ) {
                data.body = JSON.stringify(body);
            };

            const res = await fetch(`${this.baseUrl}${url}`, data);
            console.log(res.status);
            const parsed = await res.json();
            return parsed;
        } catch (error) {
            throw new Error(error);
        };
    };

    /**
     * Gets the service health
     */
    async getHealth() {
        return await this.#request("GET", "/health");
    };

    /**
     * Searches the discord database
     * @param {string} id - the unique id to search for. Allowed types: `all`, `<discord-id>`, `<fingerprint-id>`
     */
    async getDiscordDB(id) {
        return await this.#request("GET", `/database/discordDB/${id}`);
    };

    /**
     * Searches the hacker database
     * @param {string} id - the unique id to search for. Allowed types: `all`, `<xuid-id>`, `<discord-id>`, `<fingerprint-id>`
     */
    async getHackerDB(id) {
        return await this.#request("GET", `/database/hackerDB/${id}`);
    };

    /**
     * 
     * @param {string} category - the category of the report. Allowed types: `discordDB`, `hackerDB`
     * @param {{
     *     username: string,
     *     xuid: string | null,
     *     discordName: string | null,
     *     discordId: string | null,
     *     reason: string
     * }} data - the data for the report. discordDB must have the `discordId` field, hackerDB must have the `xuid` field
     */
    async reportUser(category, data) {
        return await this.#request("POST", `/database/report/${category}`, data);
    };
};