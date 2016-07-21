import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const trips = [
  {
    id: "trip1",
    title: "Trip1",
    locationId: "location1"
  },
  {
    id: "trip2",
    title: "Trip2",
    locationId: "location2"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (trip) => {
  return replaceAll(trip.title, ' ', '-');
};

class TripApi {
  static getAllTrips() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], trips));
      }, delay);
    });
  }

  static saveTrip(trip) {
    trip = Object.assign({}, trip); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTripTitleLength = 1;
        if (trip.title.length < minTripTitleLength) {
          reject(`Title must be at least ${minTripTitleLength} characters.`);
        }

        if (trip.id) {
          const existingTripIndex = trips.findIndex(a => a.id == trip.id);
          trips.splice(existingTripIndex, 1, trip);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new trips in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          trip.id = generateId(trip);
          trips.push(trip);
        }

        resolve(trip);
      }, delay);
    });
  }

  static deleteTrip(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTripToDelete = trips.findIndex(trip => {
          trip.tripId == tripId;
        });
        trips.splice(indexOfTripToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TripApi;