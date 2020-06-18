[![Maintainability](https://api.codeclimate.com/v1/badges/58cb7c5c5dd3712d697e/maintainability)](https://codeclimate.com/github/evoingram/Front-End/maintainability)

# Prisoner Skills App Product Overview

[Deployed Project](https://prisonerskillsapp.herokuapp.com/) 

## Project Description

This app allows prison management to broadcast the skill of inmates to make better use of their time using their skills to make a wage and becoming more employable after prison.

## Key Features

- Live team project
- This app contains two user types: A prison admin (with the ability to log in) and a single user (no need to log in so no need for user data to be persisted on this user type) who can view posted profiles by prison.
- Employer Home Page:  No need to log in. Contains a list of prisons who have posted prisoner profiles. Each prison is laid out in a grid format, with the name of the prison, number of people available to work (total number of entries a given prison admin has submitted), and the physical address/location of the prison. Clicking on a prison takes you to the prisoner profile page.
- Prisoner Profile Page:  Accessed from the home page, non-logged in users can view the list of profiles created by the prison they clicked on.
- Single Profile Page:  Users can click on a single post to read more of the description.
- Prison's Home Page:  If no profile is created, be sure to allow a prison to create a profile and add it to the list of prisons on the general home page. After an admin logs in, they are directed to a page where they can see the people’s profiles they’ve created in a list view, and have options to create new one.
- An admin can create a prisoner’s profile that includes name, availability (permissions to work in prison only or able to have work leave), and list of skills, and/or previous work experience.
- The profile can be edited and deleted after creation.
- Navigation present on all pages
- search filter to search prisons by prison name, zip code, address, and prisoner skill.

## Tech Stack

Front end deployed to `Heroku` and built using:

- [React](https://reactjs.org/): ReactJS is an open-source JavaScript library which is used for building user interfaces specifically. for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.
- [Redux](https://redux.js.org/):  predictable state container for JavaScript apps.
- [Styled Components](https://styled-components.com/):  visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [Axios](https://github.com/axios/axios):  promise-based HTTP client for both browser and node.js.

## Available Scripts 

In the project directory, you can run: 

### `npm start`

## APIs

[BACK END](https://github.com/BW-Prisoner-Skills-2/Backend)
   
## Testing

- Cypress testing will be completed in a future release.

## Documentation

[Trello Board](https://trello.com/b/zWQ5kX9p/prisoner-skills-2-bw)

I completed all React components except for log-in and sign-up in this project, and assisted in planning and deployment.  
