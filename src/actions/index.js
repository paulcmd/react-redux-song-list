//Action Creator
export const selectSong = (song) => {
    //Returns the action below
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
