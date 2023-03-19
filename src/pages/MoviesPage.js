import NavBar from "../components/NavBar/NavBar"
import MainFooter from "../components/Footer/MainFooter"
import HomePageHero from "../components/Hero/MainHero"
import ImageLane from "../components/ImageLane/ImageLane"
import HomeVideo from "../assets/videos/vikingdom.mp4"
const MoviesPage = () => {
  return (
    <>
      <NavBar />
      <HomePageHero Video={HomeVideo} />
      <ImageLane />
      <ImageLane />
      <ImageLane />
      <MainFooter />
    </>
  )
}

export default MoviesPage
