function orderProduct(productId) {
  alert('Product ' + productId + ' ordered!');
}

document.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.getElementById('user-info');
  // Fetch user info from the server (mocked here)
  userInfo.textContent = 'Logged in as: John Doe'; // Replace with actual user data
});
