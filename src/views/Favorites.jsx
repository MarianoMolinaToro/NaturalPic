import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import Badge from "react-bootstrap/Badge";
import IconHeart from "../components/IconHeart";


const Favorites = () => {
  const { photos } = useContext(PhotosContext);

  // Filtrar las fotos que son favoritas
  const favoritePhotos = photos.filter((photo) => photo.isFavorite);

  return (
    <div className="gallery grid-columns-5 p-3">
      {favoritePhotos.map((photo) => (
        <div
          onClick={() => removeFavorite(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.large})` }}
          key={photo.id}
        >
          <IconHeart filled={photo.isFavorite} /> {' '}
          <section>
            <p> {photo.alt} </p>
            <h6>
              <Badge bg="dark"> {photo.photographer}</Badge>
            </h6>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
