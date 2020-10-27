import Geocode from "react-geocode";

const geocoder = Geocode

geocoder.setApiKey("AIzaSyAipWncoxprrnq5-QLWblUT4EpDNcb8YZ8");
geocoder.setLanguage("en");
geocoder.setRegion("IN");
geocoder.enableDebug(true);

export default geocoder;