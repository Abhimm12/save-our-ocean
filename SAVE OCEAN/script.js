document.addEventListener("DOMContentLoaded", () => {
  const donateBtn = document.getElementById("donateBtn");

  if (donateBtn) {
    donateBtn.addEventListener("click", () => {
      alert("Terima kasih atas dukungan Anda untuk menyelamatkan hewan laut!");
    });
  }
});