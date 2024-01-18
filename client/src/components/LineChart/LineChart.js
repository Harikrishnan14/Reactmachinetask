import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import './LineChart.css'

const LineChart = () => {
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [{
      label: 'Y',
      data: [],
      borderColor: 'rgba(173, 216, 230)', // Light blue color
      backgroundColor: 'rgba(173, 216, 230, 0.2)', // Light blue with reduced opacity
    }],
  });

  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/graph');
      setGraphData({
        labels: data.map(item => item.x),
        datasets: [{
          label: 'Y',
          data: data.map(item => item.y),
        }],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='line-graph-div'>
      <Line
        data={graphData}
        options={{
          scales: {
            x: {
              type: 'category',
              labels: graphData.labels,
            },
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              tension: 0.3,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
