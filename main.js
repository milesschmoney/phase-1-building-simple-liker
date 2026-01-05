document.addEventListener("DOMContentLoaded", () => {
  // grab elements
  const likeGlyph = document.getElementById("like-glyph");
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");

  // REQUIRED: hide error modal on load
  errorModal.classList.add("hidden");

  likeGlyph.addEventListener("click", () => {
    // if heart is already activated, toggle off immediately
    if (likeGlyph.classList.contains("activated-heart")) {
      likeGlyph.classList.remove("activated-heart");
      likeGlyph.textContent = "♡";
      return;
    }

    // simulate server call
    mimicServerCall()
      .then(() => {
        // SUCCESS
        likeGlyph.classList.add("activated-heart");
        likeGlyph.textContent = "♥";
      })
      .catch((error) => {
        // FAILURE
        errorMessage.textContent = error;
        errorModal.classList.remove("hidden");

        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});
