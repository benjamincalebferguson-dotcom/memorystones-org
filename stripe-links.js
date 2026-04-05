window.MemoryStonesStripeLinks = {
  petImpressionKit: "",
  petMemoryStone: "",
  humanMemoryStone: ""
};

function applyStripeLink(anchorId, paymentUrl, fallbackUrl) {
  var link = document.getElementById(anchorId);
  if (!link) return;

  if (paymentUrl) {
    link.href = paymentUrl;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.href = fallbackUrl;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var links = window.MemoryStonesStripeLinks || {};

  applyStripeLink("buy-pet-impression-kit", links.petImpressionKit, "contact.html");
  applyStripeLink("buy-pet-memory-stone", links.petMemoryStone, "contact.html");
  applyStripeLink("buy-human-memory-stone", links.humanMemoryStone, "contact.html");
  applyStripeLink("home-buy-pet-impression-kit", links.petImpressionKit, "pet-impression-kit.html");
  applyStripeLink("home-buy-pet-memory-stone", links.petMemoryStone, "pet-memory-stone.html");
  applyStripeLink("home-buy-human-memory-stone", links.humanMemoryStone, "human-memory-stone.html");
});
