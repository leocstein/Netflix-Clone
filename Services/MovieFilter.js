import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    const onReceiveLocation = (geolocation) => {
      resolve(geolocation);
    };
    Geolocation.getCurrentPosition(onReceiveLocation, (error) => {
      console.log(error);
      reject();
    });
  });
};

export const filterByCountry = async (movies, geolocation) => {
  const location = await Geocoder.geocodePosition({
    lat: geolocation.coords.latitude,
    lng: geolocation.coords.longitude,
  });

  const national = movies.filter((item) => {
    return (
      item.Country === location[0].country ||
      item.Country === location[0].countryCode
    );
  });

  return national;
};
