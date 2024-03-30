import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { v4 as uuidv4 } from "uuid";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title,
      author,
    };

    dispatch({ type: "ADD_BOOK", book: payload });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="book author"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default BookForm;
