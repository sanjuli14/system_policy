export const environment = {
  production: true,
  openrouterApiKey: (typeof process !== 'undefined' && process.env && process.env.OPENROUTER_API_KEY) || '',
  defaultPlayerName: 'Streamer'
};