import { render, screen } from '@testing-library/react';
import App from './App';
import MachineCard from './components/MachineCard';

test('renders machines list component', () => {
  render(<App />);
  const machineslistElement = screen.getByRole('heading', {level:1});
  expect(machineslistElement).toBeInTheDocument();
});

test('renders list of machines upon request', () => {
  const mockData = [
    {
        "id": "1",
        "name": "Name-1",
        "manufacturer": "Lantek-Manufacturer-1"
    },
    {
      "id": "2",
      "name": "Name-2",
      "manufacturer": "Lantek-Manufacturer-2"
    },
    {
      "id": "3",
      "name": "Name-3",
      "manufacturer": "Lantek-Manufacturer-3"
    }
]
  {mockData && mockData.length > 1 && mockData.map((mockData, i) => {
    return <div key={i}><MachineCard props={mockData} id={i}/></div>})}

})
