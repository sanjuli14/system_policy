const fs = require('fs');
const key = process.env.OPENROUTER_API_KEY || '';
const content = `export const environment = {
  production: true,
  openrouterApiKey: '${key}',
  defaultPlayerName: 'Streamer'
};
`;
fs.writeFileSync('src/environments/environment.ts', content);
console.log('environment.ts generated');