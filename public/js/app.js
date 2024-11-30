document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/checklist');
    const results = await response.json();
    
    const checklistBody = document.getElementById('checklist-body');
    results.forEach(result => {
      const row = document.createElement('tr');
      
      const ruleCell = document.createElement('td');
      ruleCell.textContent = result.name;
      row.appendChild(ruleCell);
      
      const statusCell = document.createElement('td');
      statusCell.textContent = result.passed ? 'Passed' : 'Failed';
      statusCell.className = result.passed ? 'status-passed' : 'status-failed';
      row.appendChild(statusCell);
      
      checklistBody.appendChild(row);
    });
  } catch (error) {
    console.error('Error fetching checklist results:', error);
  }
});
