import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import './LineChart.css'

const LineChart = () => {
  
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [{
      label: 'value',
      data: [],
      borderColor: 'rgba(173, 216, 230)',
      backgroundColor: 'rgba(173, 216, 230, 0.2)',
    }],
  });

  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/graph');
      setGraphData({
        labels: data.map(item => item.x),
        datasets: [{
          label: 'value',
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
              ticks: {
                stepSize: 5
              }
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
