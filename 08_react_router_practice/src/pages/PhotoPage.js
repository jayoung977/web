const PhotoPage = ({ photos }) => {
  //   console.log(props);

  return (
    <main className="PhotoPage">
      <h1>PhotoPage!</h1>
      <div>
        {photos.map((photo) => {
          return (
            <>
              <div>id : {photo.id}</div>
              <div>title : {photo.title}</div>
              <img src={photo.url} alt={photo.title} />
            </>
          );
        })}
      </div>
    </main>
  );
};

export default PhotoPage;
