# BerryBites

## Overview

BerryBites is a quick and easy tool designed to help you discover the top 10 restaurants within any given postcode area. Leveraging the Just Eat API, it fetches and displays key information about each restaurant, including name, cuisine types, ratings, and addresses. Perfect for food enthusiasts looking to explore new dining options.

Check it out [here](https://berrybites.syedjunaid.com)

## Features

- Fetches restaurant data based on postcode.
- Filters and displays the top 10 restaurants.
- Shows name, cuisines, rating, and address for each restaurant.

## How to Build and Run the Application

This guide assumes you have Node.js 20.x.x installed, along with a compatible npm version. Follow these steps to set up and run the React application.

### Prerequisites

- Node.js version 20.x.x, you can install it (here)[https://nodejs.org/en/download]
- npm (usually comes with Node.js)

##### (I have Node.js version 20.10.0 and NPM version 10.2.3 for reference)

### Setup and Installation

1. **Clone the Repository**

   First, clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/sjunaiduk/berrybites.git
   ```

2. **Navigate to the Project Directory**

   Change your current directory to the React application's directory:

   ```bash
   cd src/berrybites.ui
   ```

3. **Install Dependencies**

   Install the required Node.js packages specified in `package.json`:

   ```bash
   npm install
   ```

   This command fetches all the necessary dependencies required to run your application.

### Running the Application

1. **Start the Development Server**

   Launch the development server using the following command:

   ```bash
   npm run dev
   ```

   This command starts the React application in development mode.

2. **Accessing the Application**

   Once the server is running, you should see a URL in the terminal output, typically `http://localhost:3000` or similar. You can open this URL in your browser to view the application.

## Assumptions

### Restaurants Endpoint

#### CORS Configuration

Calling the JustEat Restaurants endpoint from an origin other than JustEat's fails due to a CORS Policy.
I just proxied the request instead since CORS doesn't apply in a non-browser environment.

### Ratings Object

```json
  "rating": {
        "count": 2461,
        "starRating": 4.3,
        "userRating": null
      },
```

- We will use the '**starRating**' instead of 'count'.

### Address Object

```json
     "address": {
            "city": "Luton",
            "firstLine": "76 Hart Lane",
            "postalCode": "LU2 0JG",
            "location": {
                "type": "Point",
                "coordinates": [
                -0.400878,
                51.885097
                ]
            }
      },
```

- For the restaurant address only the '**city**', '**firstLine**' and '**postalCode**' will be used to formulate the address.

## Improvements

### Proxy server

The proxy server could be hosted on a public endpoint, so that in production the react app can make calls to the JustEat Restaurant endpoint without facing the CORS issue.

I could also add caching on the proxy server side, so repeated requests for the same data can recieve a speedy response.

### End 2 End tests

Using End 2 end testing with tools like cypress can emulate user interactions in a real browser and I can add this to the CI / CD pipeline process.

### CI / CD

The CI process of the CI / CD pipeline could show the test coverage and testing results. Also it could provision the cloud resource automatically for deployment.

### Feature toggle for hardcoded data

I would like to add a feature toggle so retaurant data is always shown even if the web api is down.

### Tile Layout

Rather than having 1 column for my Restaurant Cards for larger screens I could switch that to 2 columns.

### Filtering options

The restaurant cards are currently just limited to 10 elements, there can be options added to filter by rating, locality, available cuisines etc.
