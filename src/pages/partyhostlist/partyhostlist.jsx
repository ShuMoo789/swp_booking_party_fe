import React from 'react';
import "./partyhostlist.scss";
import { Avatar, List, Radio, Space } from 'antd';

// Component để hiển thị một người tổ chức tiệc
function PartyHost(props) {
  return (
    <div className="party-host">
      <h2>{props.name}</h2>
      <p>{props.contact}</p>
      <p>ID: {props.id}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Address: {props.address}</p>
    </div>
  );
}

// Component chính để hiển thị danh sách người tổ chức tiệc
function PartyHostList() {
  const hosts = [
    { id: 'PH1', name: 'Toan', email: 'host1@gmail.com', phone: '123-456-7890', address: '123 Main St, City' },
    { id: 'PH2', name: 'Khanh', email: 'host2@gmail.com', phone: '987-654-3210', address: '456 Elm St, Town' },
    { id: 'PH3', name: 'Kiem', email: 'host3@gmail.com', phone: '111-222-3333', address: '789 Oak St, Village' }
  ];

  return (
    <div className="party-host-list">
      <h1>Party Hosts</h1>
      {hosts.map((host, index) => (
        <PartyHost key={index} id={host.id} name={host.name} email={host.email} phone={host.phone} address={host.address} />
      ))}
    </div>
  );
}

export default PartyHostList;
