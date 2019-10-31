const contentful = require('contentful')
const config_var = require('../../../.contentful.json')
const config = {
  space: config_var['CTF_SPACE_ID'],
  accessToken: config_var['CTF_CDA_ACCESS_TOKEN']
}
export default contentful.createClient(config)
