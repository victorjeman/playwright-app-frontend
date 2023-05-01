// This function was written with the help of GitHub copilot :)
// The code was generated based on the function name
export const projectGetColorByPriority = (priority: string) => {
  switch (priority) {
    case 'low':
      return 'green';
    case 'medium':
      return 'blue';
    case 'high':
      return 'orange';
    case 'hot':
      return 'red';
    default:
      return 'green';
  }
};
