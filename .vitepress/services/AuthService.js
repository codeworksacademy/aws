import { AUTH_EVENTS, initialize } from "@bcwdev/auth0provider-client"
import { AuthPlugin } from "@bcwdev/auth0provider-client/lib/Auth0Provider.js"
import { AppState } from "../AppState.js"

/**
 * @type {AuthPlugin}
 */
let AuthService = null

export async function AuthWrapper() {
  if (AuthService) { return AuthService }
  const domain = 'codeworksacademy.auth0.com'
  const clientId = 'Pr738Hn5ZZhYYahOhTukx3phzlIPGCfl'
  const audience = 'https://codeworksacademy.com'
  let redirect_uri = window.location.origin

  AuthService = initialize({
    clientId,
    domain,
    authorizationParams: {
      audience,
      redirect_uri
    }
  })

  AuthService.on(AUTH_EVENTS.AUTHENTICATED, () => {
    AppState.user = AuthService.identity
    // accountService.getAccount()
  })
  return AuthService
}



