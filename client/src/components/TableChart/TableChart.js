import React, { useEffect, useState } from 'react'
import './TableChart.css'
import axios from 'axios';

const TableChart = () => {

  const [tableData, setTableData] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/api/table")
      setTableData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='table-div'>
      <table className="table table-bordered border-muted">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
            </tr>))}
        </tbody>
      </table>
      <div className="button-group">
        <div className="button">
          <input type="button" value="<" disabled={true} />
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="..." />
          <input type="button" value="9" />
          <input type="button" value="10" />
          <input type="button" value=">" />
        </div>
      </div>
    </div>
  )
}

export default TableChart
