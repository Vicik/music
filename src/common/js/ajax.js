import {HOST} from './config.js'
import axios from 'axios'

export function getData (detail) {
  const url = HOST + detail
  return axios({url: url, withCredentials: true})
}
