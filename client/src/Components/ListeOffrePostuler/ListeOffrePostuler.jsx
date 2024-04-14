import React from 'react'
import './ListeOffrePostuler.css'
import Table from '../dataTable/Table';
import { MdDelete } from 'react-icons/md';
import { FaBan } from 'react-icons/fa';
const ListeOffrePostuler = () => {
    const datatable = [
      {
          ban: false,
          action: 1,
          name: "Currey Slee",
          email: "cslee0@netlog.com",
          phone: "22558866",
          adresse: "Food Chemist",
          id: 1,
      },
      {
          ban: false,
          action: 1,
          name: "malek mkaouar",
          email: "cslee0@netlog.com",
          phone: "22558866",
          adresse: "Food Chemist",
          id: 2,
      },
  ];
  const tableColumns=[
      {
          key:"name",
          dataIndex:"name",
          title: (value) => <th key={value}>{value}</th>,
          render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      },
      {
          key:"email",
          dataIndex:"email",
          title: (value) => <th key={value}>{value}</th>,
          render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      },
      {
          key:"phone",
          dataIndex: "Phone",
          title: (value) => <th key={value}>{value}</th>,
          render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      },
      {
          key:"adresse",
          dataIndex:"adresse",
          title: (value) => <th key={value}>{value}</th>,
          render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
      },
  
      {
          key:"action",
          dataIndex:"Actions",
          title: (value) => <th key={value}>{value}</th>,
          render: (value, data) => <td key={`${data.id}-${value}`}><MdDelete onClick={() => handleDelete(data.id)} className="icon"/></td>
      },
      {
          key:"ban",
          dataIndex:"Ban",
          title: (value) => <th key={value}>{value}</th>,
          render: (value, data) => <td key={`${data.id}-${value}`}><FaBan onClick={() => handleBan(data.id)} className="icon" /></td>
      },
  ]
  
  const handleDelete = (id) => {
    console.log("Delete user with ID:", id);
  };
  
  const handleBan = (id) => {
    console.log("Ban user with ID:", id);
  };
    return (
      <div className='box-users'>
        <Table data={datatable} columns={tableColumns} />
      </div>
    )
  }

export default ListeOffrePostuler