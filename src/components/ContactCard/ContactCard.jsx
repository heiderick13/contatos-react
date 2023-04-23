import "./ContactCard.css";

function ContactCard() {
  return (
    <div className="contact flex">
      <div className="fake-img">m</div>
      <div className="info">
        <p className="name">Marcelo Oliveira</p>
        <p className="number">(21) 98080-1555</p>
      </div>
    </div>
  );
}

export default ContactCard;
