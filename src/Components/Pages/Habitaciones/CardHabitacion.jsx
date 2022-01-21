import {Card, Button} from 'react-bootstrap';

const CardHabitacion = () => {

  const cardInfo = [

    {id:"25253", image: "", title: "Habitacion Matrimonial Classic", text: "lorem"},
    {id:"28795", image: "", title: "3", text: "lorem"},
    {id:"45755", image: "", title: "2", text: "lorem"},
    {id:"43872", image: "", title: "4", text: "lorem"},
    {id:"13456", image: "", title: "5", text: "lorem"},
    {id:"65946", image: "", title: "6", text: "lorem"},
    {id:"47319", image: "", title: "7", text: "lorem"},
    {id:"93854", image: "", title: "8", text: "lorem"},
    {id:"10279", image: "", title: "9", text: "lorem"},
    {id:"63987", image: "", title: "10", text: "lorem"},
    {id:"68742", image: "", title: "11", text: "lorem"},
    {id:"59874", image: "", title: "12", text: "lorem"}
  ]

  const renderCard = (card, index) =>{
    return(
    <Card style={{ width: '18rem' }} key={index}>
  <Card.Img variant="top" src={card.image} />
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
      {card.id}
     {card.text}
    </Card.Text>
    <Button variant="btn">Ver Más</Button>
  </Card.Body>
</Card>
    )
  }

  return <div>

{cardInfo.map(renderCard)}

  </div>;
};

export default CardHabitacion;
