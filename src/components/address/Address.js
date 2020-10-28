import React, { useState } from "react";
import "./Address.scss";
import {
  Button,
  InputGroup,
  OverlayTrigger,
  Popover,
  FormControl,
} from "react-bootstrap";
import geocoder from "../../geocode/init";
import { updateUserLocation } from "../../firebase/functions";

function Address(props) {
  const [address, setAddress] = useState("");

  const handleAddLocation = () => {
    geocoder
      .fromAddress(address)
      .then(async (res) => {
        const { lat, lng } = res.results[0].geometry.location;
        let newLocation = {
          writtenAddress: address,
          address: res.results[0].formatted_address,
          lat: lat,
          lng: lng,
          locationType: props.currentUser.userType,
        };
        await updateUserLocation(
          newLocation,
          props.currentUser.id
        ).catch((err) => console.error(err));
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
            onClick={handleAddLocation}
          >
            <i className="fas fa-plus"></i>
          </Button>
        </InputGroup>
      </Popover.Content>
    </Popover>
  );

  const overlay = (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="primary" className="location-button">
        <i className="far fa-compass" />
        Add
      </Button>
    </OverlayTrigger>
  );

  return (
    <div>
      {props.currentUser ? (props.currentUser.location ? null : overlay) : null}
    </div>
  );
}

export default Address;
