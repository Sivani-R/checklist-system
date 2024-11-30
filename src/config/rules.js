
module.exports = [
  {
    name: 'Valuation Fee Paid',
    condition: data => data.isValuationFeePaid === true,
  },
  {
    name: 'UK Resident',
    condition: data => data.isUkResident === true,
  },
  {
    name: 'Risk Rating Medium',
    condition: data => data.riskRating === 'Medium',
  },
  {
    name: 'LTV Below 60%',
    condition: data => {
      const loanRequired = parseFloat(data.mortgage.loanRequired.replace(/[^0-9.-]+/g, ""));
      const purchasePrice = parseFloat(data.mortgage.purchasePrice.replace(/[^0-9.-]+/g, ""));
      return (loanRequired / purchasePrice) * 100 < 60;
    },
  },
];
