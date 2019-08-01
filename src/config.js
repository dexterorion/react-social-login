const providers = ['twitter', 'google', 'facebook', 'github']


export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://react-auth-twitter.herokuapp.com'
  : 'https://localhost:8080'

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === 'production'
    ? `https://react-auth-twitter.herokuapp.com/${provider}/callback`
    : `https://localhost:8080/${provider}/callback`
})

const [twitterURL, googleURL, facebookURL, githubURL] = callbacks

export const CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://react-auth-twitter.netlify.com'
  : ['https://127.0.0.1:3000', 'https://localhost:3000']

export const TWITTER_CONFIG = {
  consumerKey: process.env.TWITTER_KEY,
  consumerSecret: process.env.TWITTER_SECRET,
  callbackURL: twitterURL,
}

export const GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_KEY,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: googleURL
}

export const FACEBOOK_CONFIG = {
  clientID: process.env.FACEBOOK_KEY,
  clientSecret: process.env.FACEBOOK_SECRET,
  profileFields: ['id', 'emails', 'name', 'picture.width(250)'],
  callbackURL: facebookURL
}

export const GITHUB_CONFIG = {
  clientID: process.env.GITHUB_KEY,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: githubURL
}