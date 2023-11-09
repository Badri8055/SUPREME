function calculateTotal() {
  var totalAmount = 0;

  // Get all selected checkboxes
  var checkboxes = document.querySelectorAll('.product-checkbox:checked');

  // Calculate the total amount based on selected products
  checkboxes.forEach(function (checkbox) {
      totalAmount += parseFloat(checkbox.value);
  });

  // Update the total box content
  document.getElementById("totalBox").innerHTML = "<h5>Total Amount</h5><p>$" + totalAmount.toFixed(2) + "</p>";
}