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
        align: 'end' as const,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: '페이지 뷰 수',
        data: pageViews,
        borderColor: 'rgba(39, 172, 238, 1)',
        backgroundColor: 'rgba(39, 172, 238, 0.5)',
      },
      {
        label: '방문자 수',
        data: visitor,
        borderColor: 'rgba(252, 187, 69, 1)',
        backgroundColor: 'rgba(252, 187, 69, 0.5)',
      },
    ],
  };

  const plugin = {
    id: 'increase-legend-spacing',
    beforeInit(chart: any) {
      // Get reference to the original fit functin
      const originalFit = chart.legend.fit;

      // Override the fit function
      chart.legend.fit = function fit() {
        // Call original function and bind scope in order to use `this` correctly inside it
        originalFit.bind(chart.legend)();
        // Change the height as suggested in another answers
        this.height += 20;
      };
    },
  };

  return (
    <Line height="100%" plugins={[plugin]} options={options} data={data} />
  );
};

export default VisitorChart;
