import {genresFormattedForDropdown} from './selectors';


describe('Genres Selectors', () => {
  describe('genresFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const genres = [
        {
          id: 2,
          name: 'Satire',
          description: '5 The rate'
        },
        {
          id: 3,
          name: 'Chain Taste',
          description: 'This is new'
        }
      ];

      const expected = [
        {value: 2, text: 'Satire'},
        {value: 3, text: 'Chain Taste'}
      ];

      expect(genresFormattedForDropdown(genres)).toEqual(expected);
    });
  });
});
