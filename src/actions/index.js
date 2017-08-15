export function selectBook(book) {
    console.log ('book selected', book.title);

    // selectBook is action creator, it needs to return an action,
    // an object with type property

    return {
        type: 'BOOK_SELECTED',
        
    };
}