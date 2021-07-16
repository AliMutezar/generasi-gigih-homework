import dummyData from "../data/dummy-data";

function Track() {
    return (
        <div>
            <img src={dummyData.album.images[1].url} />
            <p>{dummyData.album.name}</p>
            <p>{dummyData.album.artists[0].name}</p>
            <p>{dummyData.album.album_type}</p>
        </div>
    );
}

export default Track;