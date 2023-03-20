import NavBar from "../components/NavBar/NavBar"
import MainFooter from "../components/Footer/MainFooter"
import MainHero from "../components/Hero/MainHero"
import ImageLane from "../components/ImageLane/ImageLane"
import MoviesVideo from "../assets/videos/risenTrailer.mov"
import MoviesHeroTitle from "../assets/images/title-img/risenTitle.png"
import img from "../assets/images/25.jpg"
const MoviesPage = () => {
  return (
    <>
      <NavBar />
      <MainHero Video={MoviesVideo} HeroTitle={MoviesHeroTitle} img={img} />
      <ImageLane />
      <ImageLane />
      <ImageLane />
      <MainFooter />
    </>
  )
}

export default MoviesPage
