import './index.scss';
import PropTypes from "prop-types";
import { Card, Button, Badge, Avatar, Image } from 'react-bootstrap';
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

const PartyHostList = ({ hosts }) => {
  return (
    <div className="party-host-list">
      {hosts.map((host) => (
        <Card key={host.id} className="party-host-card">
          <Card.Header className="party-host-header">
            <Avatar src={host.avatar} alt={host.name} />
            <div className="party-host-info">
              <h5>{host.name}</h5>
              <p>
                <FaStar className="party-host-rating" />
                {host.rating} ({host.reviews} reviews)
              </p>
            </div>
          </Card.Header>
          <Card.Body className="party-host-body">
            <Image src={host.image} alt={host.title} fluid />
            <div className="party-host-details">
              <h6>{host.title}</h6>
              <p>
                <FaCalendarAlt className="party-host-icon" />
                {host.dates}
              </p>
              <p>
                <FaMapMarkerAlt className="party-host-icon" />
                {host.location}
              </p>
              <p>
                <FaBirthdayCake className="party-host-icon" />
                {host.themes.map((theme) => (
                  <Badge key={theme} variant="primary" className="party-host-theme">
                    {theme}
                  </Badge>
                ))}
              </p>
            </div>
          </Card.Body>
          <Card.Footer className="party-host-footer">
            <div className="party-host-price">
              <span>From</span>
              <h4>{host.price}</h4>
              <span>per child</span>
            </div>
            <Button variant="success" className="party-host-button">
              Book Now
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

PartyHostList.propTypes.hosts = PropTypes.arrayOf(PropTypes.object);

export default PartyHostList;