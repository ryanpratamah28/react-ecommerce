import './CardSlider.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Card from 'react-bootstrap/Card'
import Buttons from '../Buttons/Buttons'

function CardSlider(props) {
    return (
        <Card.Body className='p-4'>
            <div className='card-content'>
                <Card.Img
                    variant='top'
                    src={props.badge}
                    className={props.id}
                />

                <Card.Title className='mb-3'>{props.title}</Card.Title>

                <Card.Text className='mb-3'>{props.description}</Card.Text>

                <Buttons
                    button={{
                        title: 'Play Now',
                    }}
                />
            </div>
            <div className='card-img'>
                <img src={props.image} />
            </div>
        </Card.Body>
    )
}

function CardSliderList(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <section id='card-slider' className='mb-5'>
            <Card>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    arrows={false}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={7000}
                    className='owl-carousel owl-theme card-slider'
                >
                    {props.cardSlider.map((cardslider) => (
                        <CardSlider
                            key={cardslider.id}
                            id={cardslider.id}
                            badge={cardslider.badge}
                            title={cardslider.title}
                            description={cardslider.description}
                            image={cardslider.image}
                        />
                    ))}
                </Carousel>
            </Card>
        </section>
    )
}

export default CardSliderList
