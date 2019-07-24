export function createSong (playlist) {
  let temSongs = playlist.tracks
  var songs = []
  temSongs.map(item => {
    var name = ''
    if (item.alia.length > 0) {
      name = item.name + '(' + item.alia[0] + ')'
    } else {
      name = item.name
    }
    var authors = []
    var author = ''
    if (item.ar.length > 1) {
      item.ar.map(item => {
        authors.push(item.name)
        author = authors.join('/')
      })
    } else {
      author = item.ar[0].name
    }
    songs.push({
      id: item.id,
      title: name,
      author: author,
      mv: item.mv,
      imgUrl: item.al.picUrl
    })
  })
  return songs
}
