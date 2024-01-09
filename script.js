document.getElementById('ticketForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const issue = document.getElementById('issue').value;
  const description = document.getElementById('description').value;
  
  if (issue && description) {
    const ticketList = document.getElementById('tickets');
    const ticket = document.createElement('div');
    ticket.className = 'ticket';
    ticket.innerHTML = `<h3>${issue}</h3><p>${description}</p>`;
    
    // Allow selecting and editing tickets
    ticket.addEventListener('click', function() {
      const editForm = document.createElement('form');
      editForm.innerHTML = `
        <label for="editIssue">Issue:</label>
        <input type="text" id="editIssue" value="${issue}"><br>
        <label for="editDescription">Description:</label>
        <textarea id="editDescription" rows="4">${description}</textarea><br>
        <button type="button" id="saveEdit">Save</button>
      `;
      
      ticket.innerHTML = '';
      ticket.appendChild(editForm);
      
      // Save edited ticket
      document.getElementById('saveEdit').addEventListener('click', function() {
        const editedIssue = document.getElementById('editIssue').value;
        const editedDescription = document.getElementById('editDescription').value;
        
        if (editedIssue && editedDescription) {
          ticket.innerHTML = `<h3>${editedIssue}</h3><p>${editedDescription}</p>`;
        } else {
          alert('Please fill in all fields.');
        }
      });
    });

    ticketList.appendChild(ticket);
    
    // Clear form fields
    document.getElementById('issue').value = '';
    document.getElementById('description').value = '';
  } else {
    alert('Please fill in all fields.');
  }
});
