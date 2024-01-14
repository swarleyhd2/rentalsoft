import {OAuthClient} from 'intuit-oauth'


export default async function qbConnect() {
    const oauthClient = new OAuthClient({
        clientId: NEXT_INTUIT_CLIENT_ID,
        clientSecret: NEXT_INTUIT_CLIENT_SECRET,
        environment: 'sandbox',
        redirectUri: 'https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl'
    })

    const authUri = oauthClient.authorizeUri({
        scope: ['com.intuit.quickbooks.accounting'],
        state: 'intuit-oauth-sample'
    })

    const token = await oauthClient.createToken(authUri)

    return token
}