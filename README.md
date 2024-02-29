# BerryBite

## Overview

BerryBiteBrowser is a quick and easy tool designed to help you discover the top 10 restaurants within any given postcode area. Leveraging the Just Eat API, it fetches and displays key information about each restaurant, including name, cuisine types, ratings, and addresses. Perfect for food enthusiasts looking to explore new dining options.

## Features

- Fetches restaurant data based on postcode.
- Filters and displays the top 10 restaurants.
- Shows name, cuisines, rating, and address for each restaurant.

## Assumptions

### Restaurants Endpoint

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
