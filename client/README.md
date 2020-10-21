This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## file structures

### api(backend) folder:

This section shows file structures used in backend:

**config**: It takes all the configuration files. environamental variables. PORT number, secrets, keys etc. **Do not commit this file to Git**.

**controllers**: It takes user request (HTTp request) and tells.

**models**: All the database models should go here. you should write each model into its own file.

**public**: All the public files such as: images, javascript files, css files should go into this folder having seperate folder for each.

**routes**: All your routing-realted logic should go into this folder. Again divide this logic into multiple files based on functionality. for examble: User routing functionaloty should go into UserRouter.js.

**views**: This folder contains all your views ie. HTML tampletes(ejs/jeda files)

### client folder

This section shows file structures used in this app:

**tests** : Any tests for the components are stored here.

**assets**: The project's assests are stored here.

- resources: Contains all graphics in a graphic format(ex: jpg, png, svg, mp4). for eg: logo.srv, main-banner.png, langingPage-video.mp4 and so on.

**components**: All components that are either presentational or containers are stored here.

**pages**: All components that represent a react Route are stored here.

- for eg: HomePage.js, Contactpage.js and so on.

**styles**: All styling for the components are stored here (css, scss, styled components)
