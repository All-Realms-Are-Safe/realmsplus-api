export interface ReportData {
  username: string;
  xuid?: string | null;
  discordName?: string | null;
  discordId?: string | null;
  reason: string;
}

export interface APIResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
}

export interface HealthResponse {
  status: string;
  services: {
    database: string;
  }
}

export type ReportCategory = 'discordDB' | 'hackerDB';

export class RealmsPlusAPI {
  constructor(apiKey: string);

  /**
   * Gets the service health status
   */
  getHealth(): Promise<APIResponse<HealthResponse>>;

  /**
   * Searches the Discord database
   * @param id - The unique ID to search for. Allowed types: `all`, `<discord-id>`, `<fingerprint-id>`
   */
  getDiscordDB(id: string): Promise<APIResponse>;

  /**
   * Searches the hacker database
   * @param id - The unique ID to search for. Allowed types: `all`, `<xuid-id>`, `<discord-id>`, `<fingerprint-id>`
   */
  getHackerDB(id: string): Promise<APIResponse>;

  /**
   * Reports a user to the specified database
   * @param category - The category of the report (`discordDB` or `hackerDB`)
   * @param data - The report data. discordDB requires `discordId`, hackerDB requires `xuid`
   */
  reportUser(category: ReportCategory, data: ReportData): Promise<APIResponse>;
}
