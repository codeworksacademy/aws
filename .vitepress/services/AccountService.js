import { AppState } from "../AppState.js";
import { AuthWrapper } from "./AuthService.js";

async function api(url, method = 'GET') {
  const authService = await AuthWrapper()

  const baseUrl = 'https://server.codeworksacademy.com'
  if (!url.startsWith('http')) {
    url = url.startsWith('/') ? baseUrl + url : baseUrl + '/' + url
  }

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      authorization: authService.bearer,
      contentType: 'application/json'
    }
  })
  const json = await res.json()
  return json
}

class AccountService {
  async getAccount() {
    if (AppState.account) { return }
    // try {
    //   const account = await api('/account')
    //   AppState.account = account
    // } catch (error) {
    //   AppState.error = error
    // }
  }
}

export const accountService = new AccountService()