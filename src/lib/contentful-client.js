import { createClient } from 'contentful';

let client;

function getClient() {
  if (!client) {
    const config = {
      space: import.meta.env.VITE_CTF_SPACE_ID,
      accessToken: import.meta.env.VITE_CDA_ACCESS_TOKEN
    };
    client = createClient(config);
  }
  return client;
}

export default new Proxy({}, {
  get(target, prop) {
    return getClient()[prop];
  }
});
