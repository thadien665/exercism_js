// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const temporary_set = new Set(playlist);
  let final_playlist = Array.from(temporary_set);
  return final_playlist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return playlist.includes(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let temporary_set = new Set(playlist);
  temporary_set.add(track);
  let updated_playlist = Array.from(temporary_set);
  return updated_playlist;  
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let temporary_set = new Set(playlist);
  temporary_set.delete(track);
  let updated_playlist = Array.from(temporary_set);
  return updated_playlist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {

  let shortened_array = new Array;
  playlist.forEach(element => {
    element = element.slice(element.indexOf('-') + 2);
    shortened_array.push(element);
  });
  let temporary_set = new Set(shortened_array);
  let updated_playlist = Array.from(temporary_set);
  return updated_playlist;
  
}
