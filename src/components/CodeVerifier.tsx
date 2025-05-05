import { Dispatch, useEffect } from 'react';
import { CodeVerifierProps } from '../assets/types';

function CodeVerifier( { setIsSpotifyAuth }: CodeVerifierProps ) {
  useEffect(() => {
    const generateRandomString = (length: number) => {
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const values = crypto.getRandomValues(new Uint8Array(length));
      return values.reduce((acc, x) => acc + possible[x % possible.length], '');
    };

    const sha256 = async (plain: string) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(plain);
      return crypto.subtle.digest('SHA-256', data);
    };

    const base64encode = (buffer: ArrayBuffer) => {
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    };

    const runAuthFlow = async () => {
      const codeVerifier = generateRandomString(64);
      localStorage.setItem('code_verifier', codeVerifier);

      const hashed = await sha256(codeVerifier);
      const codeChallenge = base64encode(hashed);

      const clientId = import.meta.env.VITE_CLIENTID;
      const redirectUri = 'http://localhost:5173/frontend_listConductor/';
      const scope = 'playlist-modify-private playlist-modify-public user-read-private user-read-email';

      const authUrl = new URL("https://accounts.spotify.com/authorize");
      authUrl.search = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
      }).toString();

      window.location.href = authUrl.toString();
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (!code) {
      runAuthFlow();
    } else {
      localStorage.setItem("authCode", code)
      if(localStorage.getItem("authCode")) {
        setIsSpotifyAuth(true)
      }
    }
  }, []);

  return (
    <div>
      <h1>Spotify PKCE Flow</h1>
    </div>
  );
}

export default CodeVerifier;
