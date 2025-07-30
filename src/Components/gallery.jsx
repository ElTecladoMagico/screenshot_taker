const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Previous Screenshots</h2>
      {images.length > 0 ? (
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span className="gallery-number">#{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="gallery-empty">No previous screenshots yet!</p>
      )}
    </div>
  );
};

export default Gallery;