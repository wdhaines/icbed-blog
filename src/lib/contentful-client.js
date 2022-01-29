import contentful from 'contentful'
const config = {
  space: import.meta.env.VITE_CTF_SPACE_ID,
  accessToken: import.meta.env.VITE_CDA_ACCESS_TOKEN
}
export default contentful.createClient(config)
