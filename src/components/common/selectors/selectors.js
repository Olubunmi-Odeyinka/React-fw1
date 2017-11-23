export function genresFormattedForDropdown(genres){
  return genres && genres.map(genre => {
    return {
      value: genre.id,
      text: genre.name
    };
  });
}


