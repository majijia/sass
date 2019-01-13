import axios from 'axios'
// 47.92.90.7   192.168.1.50  http://www.jllone.top/guessingapi  http://47.92.90.7:8085/
const server = axios.create({
  // timeout: 5000,
  // headers: {
  //   'Content-Type': 'application/json'
  // },
  // withCredentials: false // 允许携带cookie
})
export default server
