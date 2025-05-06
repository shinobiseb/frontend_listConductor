import { Dispatch, useEffect } from 'react';
import { accessTokenObject, CodeVerifierProps } from '../assets/types';

function CodeVerifier( { setIsSpotifyAuth, setToken , setUserId }: CodeVerifierProps ) {

  const redirectURIEnv = import.meta.env.MODE === "dev" ? 'http://localhost:5173/frontend_listConductor/' : "https://shinobiseb.github.io/frontend_listConductor/"

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
      const redirectUri = redirectURIEnv;
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
      setIsSpotifyAuth(true)
    }
  }, []);

  useEffect(()=> {
    const getToken = async (code: string) => {
      // stored in the previous step
      const codeVerifier = localStorage.getItem('code_verifier');
      const clientId = import.meta.env.VITE_CLIENTID;

      const url = "https://accounts.spotify.com/api/token";
      const redirectUri = redirectURIEnv;  // Make sure this is defined

      const params = new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      });
    
      if (codeVerifier) {
        params.append('code_verifier', codeVerifier);
      }
    
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      };
    
      // Fetch the token with the request
      try {
        const response = await fetch(url, payload);
        const data : accessTokenObject = await response.json();
        if (response.ok) {
          console.log('Token data:', data);
          localStorage.setItem("access_token", data.access_token)
          let accessToken = localStorage.getItem("access_token")
          if(!accessToken) return
          setToken(accessToken)
        } else {
          console.error('Error fetching token:', data);
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    };    

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if(code) getToken(code)
  }, [])

  return (
    <div>
      <h1>Spotify PKCE Flow</h1>
    </div>
  );
}

export default CodeVerifier;
