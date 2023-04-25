import "./ContactCard.css";

function ContactCard({ name, phoneNumber }) {
  return (
    <div className="contact flex">
      <div className="fake-img">m</div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="number">{phoneNumber}</p>
      </div>
    </div>
  );
}

export default ContactCard;
