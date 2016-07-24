import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextInputBig from '../common/TextInputBig';
import SelectInput from '../common/SelectInput';

const TripForm = ({trip, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Trip</h1>
      <TextInput
        name="title"
        label="Title"
        value={trip.title}
        onChange={onChange}
        error={errors.title}/>

      <TextInputBig
        name="description"
        label="Description"
        value={trip.description}
        onChange={onChange}
        error={errors.description}/>

      <TextInputBig
        name="dateTime"
        label="DateTime"
        value={trip.dateTime}
        onChange={onChange}
        error={errors.dateTime}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TripForm.propTypes = {
  trip: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default TripForm;