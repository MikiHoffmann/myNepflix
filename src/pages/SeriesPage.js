import NavBar from "../components/NavBar/NavBar"
import MainHero from "../components/Hero/MainHero"
import ImageLane from "../components/ImageLane/ImageLane"
import MainFooter from "../components/Footer/MainFooter"
import SeriesVideo from "../assets/videos/homehero.mp4"
import SeriesHeroTitle from "../assets/images/title-img/homeheroTitle.png"
const SeriesPage = () => {
  return (
    <>
      <NavBar />
      <MainHero Video={SeriesVideo} HeroTitle={SeriesHeroTitle}/>
      <ImageLane />
      <ImageLane />
      <ImageLane />
      <MainFooter />
    </>
  )
}

export default SeriesPage
