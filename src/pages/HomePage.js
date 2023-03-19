import NavBar from "../components/NavBar/NavBar"
import HomePageHero from "../components/Hero/MainHero"
import ImageLane from "../components/ImageLane/ImageLane"
import Mainfooter from "../components/Footer/MainFooter"
import MainVideo from "../assets/videos/homehero.mp4"
import MainHeroTitle from "../assets/images/title-img/homeheroTitle.png"
const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomePageHero Video={MainVideo} HeroTitle={MainHeroTitle} />
      <ImageLane />
      <ImageLane />
      <ImageLane />
      <Mainfooter />
    </>
  )
}

export default HomePage
