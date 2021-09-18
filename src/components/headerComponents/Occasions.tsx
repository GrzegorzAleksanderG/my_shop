import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images from "../../images/images.js";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const Occasions = () => {
    return (
        <Carousel responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
            {
                images.map((el) => {
                    return (
                        <div key={el.id} className="img-card">
                            <img className="img" src={require("../../images/" + el.src).default} alt={el.title} width="100%" height="auto" />
                            <div className="card-body">
                                <div className="card-title">{el.title}</div>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}
export default Occasions;