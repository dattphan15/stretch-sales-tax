const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



/* Expected Results:

{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}

*/


const calculateSalesTax = function(salesData, taxRates) {
  // Implement your code here
  let results = {};

  for (company in salesData) {
    let totalSales = salesData[company].sales.reduce(function(a, b) {
      return a + b;
    });
    
    let afterTax = totalSales * taxRates[salesData[company].province];
    let companyName = salesData[company].name;
    
    if (results.hasOwnProperty(companyName)) {
      results[companyName].totalSales += totalSales;
      results[companyName].totalTaxes += afterTax;
    } else {
      results[companyName] = {
        totalSales: totalSales,
        totalTaxes: afterTax
      }
    }
  }
  return results;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));
