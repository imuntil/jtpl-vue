import request from '../utils/request'

const dev = false
const devURL = 'devxxx'
const proURL = 'proxxx'

export const URL = dev ? devURL : proURL
export async function fetchDemo () {
  return request(URL)
}
