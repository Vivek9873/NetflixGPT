# NETFLIX GPT

- Create react app
- configure tailwind css
- Header
- Routing of App
- Login Form
- Sign up form
- Form Validation
- UseRef
- Firebaes Setup
- Deploying our app to production
- Create signup user account
- Implement sign in user api
- Create redux store with userSlice
- Implemented sign out
- update profile
- Fix the bugs
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constant file
- Register TMDB app and generate api and access token
- Fetch the nowPlaying movie list with the help of fetch function
- Custom Hook for now playing movies
- Create movieSlice
- Update store with movies Data
- Planning for maincontainer & secondary container
- Fetch data for trailer video
- Update stroe with trailer video data
- Embedded the youtube video and make it autoplay and mute and loop
- Tailwind classes to make it look awesome
- Build Secondary container
- Build Movie List
- Build Movie Card
- TMDB Image CDN url
- Mode the Browsre page amazing with tailwind css
- usePopular hook
- GPT search Page
- GPT Search Bar
- Multi language feature in our app
- Reused movieList component to make movie suggestion container
- Memoization
- Added .env file
- Made Responsive website

# Features

- Login/Sign up
  - Sign In/ Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & description
    - Movie Suggestions
      - MoviewLists \* N
- Netflix GPT

  - Search bar
  - Movie Suggestions

  - For very big form use libary like formik in react

  # GPT Feature

  - For using this feature provide firstly provide your openAi api key from openai platform
    and then add commands in the search bar like

  # funny indain retro movies

  and hit search

  - If you don't provide either the command or api key then the default movies will appear after clicking the search button

  # Bug that are solved

  - First is after creating the profile of a user we tried to update it with display name and photurl
    but they are not still visible in the redux dev tool which means they are not updating
    Therefore we call the dispatch function in the update profile also

  - Second bug is when we are at login page and try to change the url by accessing the browse we can move to browse which should not happen like there is not any use of sign in page

  - Third bug is the signed in user can go to login page by changing the url of the page
    but he/she should not go their until they are signing out

# Browse Page Planning

- Main Container
  - VideoBackground
  - Video Title
- Secondary Container
  - MovieList \* n
  - Cards \* n

# Secondary Container Planning

- MovieList - Popular
- MovieList - Now Playing
- MovieList - Trending
- MovieList - Horror
