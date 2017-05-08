

export function selectBook(book) {
  //selectBook is an action creator
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
