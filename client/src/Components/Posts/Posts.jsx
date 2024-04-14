import React from 'react'
import './posts.css'
import { MdDelete } from "react-icons/md";
import { FaBan } from "react-icons/fa6";
import Table from '../dataTable/Table';
const Posts = () => {
  const datatable = [
    {
        ban: false,
        action: 1,
        Titre: "Currey Slee",
        Nom_Entreprise: "actia",
        Lieu_travail:"electricite",
        Duree: "Food Chemist",
        Description: "loremedfdfr",
        Salaire: "www.E2ME.com.tn",
        Type_Contrat: "22558866",
        id: 1,
    },
    {
        ban: false,
        action: 2,
        Titre: "Currey Slee",
        Nom_Entreprise: "e2me",
        Lieu_travail:"electricite",
        Duree: "Food Chemist",
        Description: "vous etes prete?",
        Salaire: "www.E2ME.com.tn",
        Type_Contrat: "22558866",
        id: 2,
    },
];
const tableColumns=[
    {
        key:"Titre",
        dataIndex:"Titre",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Nom_Entreprise",
        dataIndex:"Nom_Entreprise",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Lieu_travail",
        dataIndex: "Lieu_travail",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Duree",
        dataIndex:"adresse",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Description",
        dataIndex:"Nom Entreprise",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Salaire",
        dataIndex:"Site Web",
        title: (value) => <th key={value}>{value}</th>,
        render: (value, data, column) => <td key={`${data.id}-${data[column.key]}`}>{value}</td>
    },
    {
        key:"Type_Contrat",
        dataIndex:"Num Tel",
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
    <div className='box-post'>
      <Table data={datatable} columns={tableColumns} />
    </div>
  )
}

export default Posts