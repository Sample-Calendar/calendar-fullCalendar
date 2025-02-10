export const portOptions = [
  { value: 'Any', label: 'All' },
  { value: 'NYK', label: 'New York' },
  { value: 'LSA', label: 'Los Angeles' },
  { value: 'LDN', label: 'London' },
  { value: 'TKY', label: 'Tokyo' },
  { value: 'PRS', label: 'Paris' },
  { value: 'HYD', label: 'Hyderabad' },
  { value: 'JFK', label: 'Kennedy' },
  { value: 'DLS', label: 'Dallas' },
  { value: 'DLH', label: 'Delhi' },
  { value: 'AST', label: 'Austin' },
  { value: 'TPT', label: 'Tirupathi' },
  { value: 'NWL', label: 'New Jersey' },
  { value: 'VZG', label: 'Vizag' },
  { value: 'PSU', label: 'Portland' },
  { value: 'WSL', label: 'Washington' },
  { value: 'PUN', label: 'Pune' },
  { value: 'PST', label: 'Pensylvania' },
  { value: 'DLH', label: 'Delhi' },
  { value: 'CST', label: 'Chicago' },
  { value: 'EST', label: 'Edenberg' },
  { value: 'BLR', label: 'Bangalore' }
];
export const ports = [
  {
    name: 'origin',
    label: 'Origin',
    options: [...portOptions]
  },
  {
    name: 'destination',
    label: 'Destination',
    options: [...portOptions]
  }
];
