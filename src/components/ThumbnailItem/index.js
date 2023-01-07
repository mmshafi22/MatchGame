import './index.css'

const ThumbnailItem = props => {
  const {details, onMatchImage} = props
  const {id, thumbnailUrl} = details

  const onClickThumbnail = () => {
    onMatchImage(id)
  }

  return (
    <li className="thumb-item">
      <button className="btn-thumb" type="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
