const { google } = require('googleapis');

// Put the following at the top of the file
// right below the'googleapis' import
const util = require('util');
const fs = require('fs');

const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

const save = async (path, str) => {
  await writeFilePromise(path, str);
};

const read = async path => {
  const fileContents = await readFilePromise(path);
  return JSON.parse(fileContents);
};

const youtube = google.youtube('v3');
const { OAuth2 } = google.auth;

const redirectURI = 'http://localhost:3333/auth/callback';
const scope = [
  'https://www.googleapis.com/auth/youtube.readonly',
  'https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/youtube.force-ssl',
];

const auth = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  redirectURI
);

const youtubeService = {};

youtubeService.getCode = () => {
  const authUrl = auth.generateAuthUrl({
    access_type: 'offline',
    scope,
  });

  return authUrl;
};

// Request access from tokens using code from login
youtubeService.getTokensWithCode = async code => {
  const credentials = await auth.getToken(code);
  youtubeService.authorize(credentials);
};

// Storing access tokens received from google in auth object
youtubeService.authorize = ({ tokens }) => {
  auth.setCredentials(tokens);
  save(`${process.env.TOKEN_DIR}./tokens.json`, JSON.stringify(tokens));
};

// Update the tokens automatically when they expire
auth.on('tokens', tokens => {
  if (tokens.refresh_token) {
    // store the refresh_token in my database!
    save(`${process.env.TOKEN_DIR}./tokens.json`, JSON.stringify(auth.tokens));
  }
});

// Read tokens from stored file
const checkTokens = async () => {
  const tokens = await read(`${process.env.TOKEN_DIR}./tokens.json`);
  auth.setCredentials(tokens);
};

checkTokens();

youtubeService.findLive = async () => {
  try {
    const response = await youtube.liveBroadcasts.list({
      auth,
      part: 'snippet',
      mine: true,
    });

    return response.data.items[0];
  } catch (error) {
    return { error: 'Live ainda não disponível', status: 400 };
  }
};

module.exports = youtubeService;
