import OAuthClient from 'intuit-oauth'
import { SecretManagerServiceClient } from '@google-cloud/secret-manager'

export default async function qbConnect() {
    const secretClient = new SecretManagerServiceClient();
    const [accessResponse] = await secretClient.accessSecretVersion({
        name: ''
    })
    var oauthClient = new OAuthClient({
        clientId: '',
        clientSecret: '',
        environment: '',
        redirectUri: ''
    })
}