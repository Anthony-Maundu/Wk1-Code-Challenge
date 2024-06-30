function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE (Tax)
  let paye;
  if (grossSalary <= 24000) {
      paye = grossSalary * 0.10;
  } else if (grossSalary <= 32333) {
      paye = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
  } else if (grossSalary <= 500000) {
      paye = 24000 * 0.10 + 8333 * 0.25 + (grossSalary - 32333) * 0.30;
  } else if (grossSalary <= 800000) {
      paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + (grossSalary - 500000) * 0.325;
  } else {
      paye = 24000 * 0.10 + 8333 * 0.25 + 467667 * 0.30 + 300000 * 0.325 + (grossSalary - 800000) * 0.35;
  }

  // Personal Relief
  const personalRelief = 2400;

  // Calculate NHIF Deductions
  let nhifDeduction;
  if (grossSalary <= 5999) {
      nhifDeduction = 150;
  } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
  } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
  } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
  } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
  } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
  } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
  } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
  } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
  } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
  } else if (grossSalary <= 49999) {
      nhifDeduction = 1100;
  } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
  } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
  } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
  } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
  } else if (grossSalary <= 99999) {
      nhifDeduction = 1600;
  } else {
      nhifDeduction = 1700;
  }

  // Calculate NSSF Deductions
  const nssfTierI = Math.min(grossSalary, 7000) * 0.06;
  const nssfTierII = Math.max(Math.min(grossSalary, 36000) - 7000, 0) * 0.06;
  const nssfDeduction = nssfTierI + nssfTierII;

  // Calculate Housing Levy
  const housingLevy = grossSalary * 0.015;

  // Calculate Net Salary
  const netSalary = grossSalary - paye + personalRelief - nhifDeduction - nssfDeduction - housingLevy;

  return {
      grossSalary,
      paye,
      personalRelief,
      nhifDeduction,
      nssfDeduction,
      housingLevy,
      netSalary
  };
}
