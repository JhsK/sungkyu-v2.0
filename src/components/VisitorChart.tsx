'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

interface VisitorChartProps {
  visitor: number[];
  pageViews: number[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const VisitorChart = ({ visitor, pageViews }: VisitorChartProps) => {
  const options = {
    responsive: true,
    transitions: {
      show: {
        animations: {
          x: {
            from: 0,
          },
          y: {
            from: 0,
          },
        },
      },
      hide: {
        animations: {
          x: {
            to: 0,
          },
          y: {
            to: 0,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: '방문자 수',
        data: visitor,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '페이지 뷰 수',
        data: pageViews,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default VisitorChart;
