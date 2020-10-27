import React, { useState } from "react";
import "./Address.scss";
import {
  Button,
  InputGroup,
  OverlayTrigger,
  Popover,
  FormControl,
} from "react-bootstrap";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAipWncoxprrnq5-QLWblUT4EpDNcb8YZ8");
Geocode.setLanguage("en");
Geocode.setRegion("IN");
Geocode.enableDebug(true);

function Address(props) {
  const [address, setAddress] = useState("");

  const handleAddressComplete = () => {
    Geocode.fromAddress(address)
      .then((res) => {
        const { lat, lng } = res.results[0].geometry.location;
        let filteredAddress = {
          address: res.results[0].formatted_address,
          lat: lat,
          lng: lng,
        };
        let updatedLocations = props.allLocations.concat(filteredAddress);
        props.addLocations(updatedLocations);
      })
      .catch((err) => console.error("Error: ", err));
    setAddress("");
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Your location</Popover.Title>
      <Popover.Content>
        <InputGroup>
          <FormControl
            placeholder="Add Location"
            aria-label="address"
            aria-describedby="location-addon"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            variant="success"
            className="address-complete-button"
            type="submit"
            onClick={handleAddressComplete}
          >
            <i className="fas fa-plus"></i>
          </Button>
        </InputGroup>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="primary" className="location-button">
        <i className="far fa-compass" />
        Add
      </Button>
    </OverlayTrigger>
  );
}

export default Address;
