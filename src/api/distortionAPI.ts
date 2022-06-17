const overgeneralization = (log: string): boolean => {
   return log.includes('always') || log.includes('never');
}

const perfectionism = (log: string): boolean => {
   return log.includes('have to') || log.includes('must') || log.includes('should');
}

const fortuneTelling = (log: string): boolean => {
   return log.includes('will') || log.includes('going to');
}

export {overgeneralization, perfectionism, fortuneTelling};
