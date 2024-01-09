import {OAuthClient} from 'intuit-oauth'


export default async function qbConnect() {
    const oauthClient = new OAuthClient({
        clientId: '',
        clientSecret: '',
        environment: '',
        redirectUri: ''
    })

    const authUri = oauthClient.authorizeUri({
        scope: ['com.intuit.quickbooks.accounting'],
        state: 'intuit-oauth-sample'
    })

    const token = await oauthClient.createToken(authUri)

    return token
}