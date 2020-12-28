// Module on behaviour and data of employees

let Employee = {
    salary: 100000,
  };

  let payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
  };

  const getCadre = () => {
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
      return 'entryLevel';

    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  }

  const calculateTax = () => {
    return payGrades[getCadre()].taxMultiplier * Employee.salary;
  }

  const getBenefits = () => {
    return payGrades[getCadre()].benefits.join(', ');
  }

  const calculateBonus = () => {
    return .02 * Employee.salary;
  }

  const reimbursementEligibility = () => {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0;
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
  }

  export {Employee, getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility};
