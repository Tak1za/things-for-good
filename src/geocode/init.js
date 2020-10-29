import Geocode from "react-geocode";

const geocoder = Geocode

geocoder.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
geocoder.setLanguage("en");
geocoder.setRegion("IN");
geocoder.enableDebug(true);

export default geocoder;