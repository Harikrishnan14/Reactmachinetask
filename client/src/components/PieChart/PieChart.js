import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart } from 'chart.js/auto';
import axios from 'axios';
import './PieChart.css'

const PieChart = () => {

  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [{
      label: 'value',
      data: [],
      borderColor: 'white',
      backgroundColor: ["#67c587", "#88d1a1", "#a9deba", "#c9ead4", "#eaf6ed"],
    }],
  })

  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/pie-chart');
      setGraphData({
        labels: data.map(item => item.label),
        datasets: [{
          label: 'value',
          data: data.map(item => item.value),
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
    <div className='pie-chart-div'>
      <Pie
        data={graphData}
        options={{
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default PieChart
