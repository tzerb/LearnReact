import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TripListRow = ({trip}) => {
  return (
    <tr>
      <td><Link to={'/trip/' + trip.id}>{trip.title}</Link></td>
      <td>{trip.locationId}</td>
    </tr>
  );
};

TripListRow.propTypes = {
  trip: PropTypes.object.isRequired
};

export default TripListRow;