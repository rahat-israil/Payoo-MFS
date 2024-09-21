

function showSectionById(id) {
  //Hide all the Section
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-section').classList.add('hidden');

  // Show the section by provide the parameter
  document.getElementById(id).classList.remove('hidden');
}