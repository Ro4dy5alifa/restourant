function addReviewForm() {
    document.getElementById("review-form").style.display = "block";
}

function submitReview() {
    var gmailError = document.getElementById("gmailError");
    var nameError = document.getElementById("nameError");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var review = document.getElementById("review").value;
    var namepat = /^[a-zA-Z\s]{3,20}$/;
    var re = /\S+@\S+\.\S+/;
    var newReview = `
    <div class="test-box">
    <div class="box-top">
    <div class="profile">
    <div class="profile-img">
    <img src="new_add.jpg" alt="Profile Image">
    </div>
    <div class="name-user">
    <strong>${name}</strong>
    <span>${email}</span>
    </div>

    </div>
    </div>
    <div class="client-comment">
    <p>"${review}"</p>
    </div>
    </div>
    `;
   
    if (!namepat.test(name)) {
        nameError.textContent = "invalid name.";
        return;
      } else {
        nameError.textContent = "";
      }
    if (!re.test(email)) {
        gmailError.textContent = "invalid email.";
        return;
      } else {
        gmailError.textContent = "";
      }
    // Append the new review to the existing reviews container
    var reviewContainer = document.querySelector(".test-box-container");
    reviewContainer.innerHTML += newReview;

    // Hide the review form after submission
    document.getElementById("review-form").style.display = "none";

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("review").value = "";
}