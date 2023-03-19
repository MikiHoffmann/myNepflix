import NavBar from "../components/NavBar/NavBar"
import MainHero from "../components/Hero/MainHero"
import ImageLane from "../components/ImageLane/ImageLane"
import Mainfooter from "../components/Footer/MainFooter"
import MainVideo from "../assets/videos/homehero.mp4"
import MainHeroTitle from "../assets/images/title-img/homeheroTitle.png"
import img from "../assets/images/22.jpg"
const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainHero Video={MainVideo} HeroTitle={MainHeroTitle} img={img}/>
      <ImageLane />
      <ImageLane />
      <ImageLane />
      <Mainfooter />
    </>
  )
}

export default HomePage
