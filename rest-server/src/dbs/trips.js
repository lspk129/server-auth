import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define our model
const tripSchema = new Schema({
  destination: String,
  startDate: String,
  endDate: String,
  comment: String,
});

tripSchema.pre('save', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Trip created succesfully');
  }
});

const TripsClass = mongoose.model('trips', tripSchema);

export default TripsClass;
