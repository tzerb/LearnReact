import React from 'react';
import{Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import CoursesPage from './Components/courses/CoursesPage';
import TripsPage from './Components/trips/TripsPage';
import AboutPage from './Components/about/AboutPage';

import ManageCoursePage from './Components/courses/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import ManageTripPage from './Components/trips/ManageTripPage'; //eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="trips" component={TripsPage}/>
        <Route path="trip/:id" component={ManageTripPage}/>
        <Route path="trip" component={ManageTripPage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);

