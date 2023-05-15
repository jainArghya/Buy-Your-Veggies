import axios from "axios";

const BASE_URL = "http://localhost:3000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTU2MGRhNmM0MDk1MWU2MzNhMzZkOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Mzc4ODUzMywiZXhwIjoxNjg0MDQ3NzMzfQ.4xke2yyfilxoQ1K7e4eEM6GOo1kqiZjfpNcLk8Hguy0";
const TOKEN_2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWZkYzA3Y2ZlNmM5OGYwMmZhZTE4ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODQxMDA1MTEsImV4cCI6MTY4NDM1OTcxMX0.oHbpgHeCTpslGFWBh2fzOLfNQkYv56GyN6d42pEt120"

export const publicReq = axios.create({
    baseURL: BASE_URL
})

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN_2}`}
})
