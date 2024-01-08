document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const issue = document.getElementById('issue').value;
    const description = document.getElementById('description').value;
    
    if (issue && description) {
      const ticketList = document.getElementById('tickets');
      const ticket = document.createElement('div');
      ticket.className = 'ticket';
      ticket.innerHTML = `<h3>${issue}</h3><p>${description}</p>`;
      ticketList.appendChild(ticket);
      
      // Clear form fields
      document.getElementById('issue').value = '';
      document.getElementById('description').value = '';
    } else {
      alert('Please fill in all fields.');
    }
  });