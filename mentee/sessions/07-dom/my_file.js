const songs = [
    {title:"blue", plays:12, isFavorite: true},
    {title:"red", plays:42, isFavorite: false},
    {title:"black", plays:102, isFavorite: true},
]





// const summary = document.getElementById("summary");
// const songContainer = document.getElementById("song-list");

function getSummary(songs) {
  totalSongs = songs.length; // gives you the length of the array
  totalFavorites = songs.filter((song) => song.isFavourite).length; // this will return the lengh array of songs array 
  return `${totalFavorites} favourites of ${totalSongs}`;
}

// function createSongElement(song) {
//     const songElement = document.createElement("li");
//     songElement.innerText = `${song.title} - ${song.plays} plays`;
//     if(song.isFavourite) {
//         songElement.classList.add("favourite");
//     }

//     return songElement;
// }

// function appendSongElement(song, container) {
//   container.append(song, container);
// }

// function renderSongs(songs, summary, container) {
//     summary.innerText = getSummary(songs);
//     songs.forEach((song) => appendSongElement(song, container));
// }

// renderSongs(songs, summary, songContainer);

const summary = document.getElementById("summary");
const songContainer = document.getElementById("song-list");

function createSongElement({ title, plays, isFavourite }) {
  const songElement = document.createElement("li");
  songElement.textContent = `${title} - ${plays} plays`;

  if (isFavourite) {
    songElement.classList.add("favourite");
  }

  return songElement;
}

function renderSongs() {
  songContainer.textContent = "";

  if (songs.length === 0) {
    summary.textContent = "Nothing here yet";
    return;
  }

  songs.forEach((song) => {
    songContainer.append(createSongElement(song));
  });

  const favourites = songs.filter((song) => song.isFavourite).length;

  summary.textContent = `${favourites} favourites of  ${songs.length}`;
}

renderSongs();

