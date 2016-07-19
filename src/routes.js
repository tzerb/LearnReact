import React from 'react';
import{Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import CoursesPage from './Components/courses/CoursesPage';
import TripsPage from './Components/trips/TripsPage';
import AboutPage from './Components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="trips" component={TripsPage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);
