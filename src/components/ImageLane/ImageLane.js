import "./ImageLane.scss"
import ImageLaneItem from "./ImageLaneItem"

const ImageLane = () => {
  return (
    <>
      <div className="imageLaneContainer">
        <div className="imageLaneTitle">title</div>
        <div className="imageLaneItemContainer">
          <ImageLaneItem />
          <ImageLaneItem />
          <ImageLaneItem />
          <ImageLaneItem />
          <ImageLaneItem />
          <ImageLaneItem />
        </div>
      </div>
    </>
  )
}

export default ImageLane
