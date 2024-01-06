import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);

  function hideModalHandler() {
    setModalIsVisable(false);
  }

  function showModalHandler() {
    setModalIsVisable(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisable}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
