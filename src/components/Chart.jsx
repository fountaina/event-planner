import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"
]

const data = {
    labels, 
    datasets: [
        {
            label: "Event Registrations",
            data: [600, 700, 800, 650, 750, 850, 900, 800, 700, 600, 650, 500],
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

const options = {
    responsive: true,
}

const Chart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default Chart

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const options = {
//   responsive: true,
// };

// const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Event Registrations",
//       data: [600, 700, 800, 650, 750, 850, 900, 800, 700, 600, 650, 500],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export default function App() {
//   return <Bar options={options} data={data} />
// }

