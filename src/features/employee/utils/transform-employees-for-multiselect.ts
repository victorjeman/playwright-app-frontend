import { Employee, EmployeeMultiSelect } from 'features/employee/types/employee-types';

export const transformEmployeesForMultiselect = (
  technologies: Employee[] = []
): EmployeeMultiSelect[] =>
  technologies.map((employee) => ({
    value: `employee/${employee.name}`,
    label: `employee/${employee.name}`,
    group: 'Employees',
  }));
