export default function createReportObject(employeesList) {
  const allEmployees = {};
  
  employeesList.forEach((employee) => {
    const { department, name } = employee;
    
    if (!allEmployees[department]) {
      allEmployees[department] = [];
    }
    
    allEmployees[department] = [...allEmployees[department], name];
  });
  
  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
