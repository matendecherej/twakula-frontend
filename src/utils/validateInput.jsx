export const validateInput = (input, rules) => {
    for (const rule of rules) {
      if (!rule.test(input)) {
        return false;
      }
    }
    return true;
  };
  