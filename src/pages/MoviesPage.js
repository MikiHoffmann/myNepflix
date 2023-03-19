import NavBar from "../components/NavBar/NavBar"
import MainFooter from "../components/Footer/MainFooter"
import HomePageHero from "../components/Hero/MainHero"
import ImageLane from "../components/ImageLane/ImageLane"
import MoviesVideo from "../assets/videos/homehero.mp4"
import MoviesHeroTitle from "../assets/images/title-img/homeheroTitle.png"
const MoviesPage = () => {
  return (
    <>
      <NavBar />
      <HomePageHero Video={MoviesVideo} HeroTitle={MoviesHeroTitle}/>
      <ImageLane />
      <ImageLane />
      <ImageLane />
      <MainFooter />
    </>
  )
}

export default MoviesPage
