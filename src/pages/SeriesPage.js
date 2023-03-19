import NavBar from "../components/NavBar/NavBar"
import MainHero from "../components/Hero/MainHero"
import ImageLane from "../components/ImageLane/ImageLane"
import MainFooter from "../components/Footer/MainFooter"
import SeriesVideo from "../assets/videos/seriously-red.mov"
const SeriesPage = () => {
  return (
    <>
      <NavBar />
      <MainHero Video={SeriesVideo} />
      <ImageLane />
      <ImageLane />
      <ImageLane />
      <MainFooter />
    </>
  )
}

export default SeriesPage
