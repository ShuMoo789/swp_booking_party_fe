import React, { useState, useEffect } from "react";

const Packageregisterlist = () => {
  const [packageList, setPackageList] = useState([]);

  useEffect(() => {
    fetchPackageList();
  }, []);

  const fetchPackageList = async () => {
    try {
      // Thay đổi URL bằng API endpoint hoặc đường dẫn phù hợp
      const response = await fetch("/create-packageUpload");
      const data = await response.json();

      setPackageList(data);
    } catch (error) {
      console.error("Error fetching package list:", error);
    }
  };

  const handleDeletePackage = async (packageId) => {
    try {
      // Thay đổi URL bằng API endpoint hoặc đường dẫn phù hợp
      await fetch(`/delete-packageUpload/${packageId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      fetchPackageList();
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  return (
    <div>
      <h2>Package Register List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Theme</th>
            <th>Description</th>
            <th>Venue</th>
            <th>Price Per Child</th>
            <th>Price Total</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {packageList.map((packageItem) => (
            <tr key={packageItem.id}>
              <td>{packageItem.name}</td>
              <td>{packageItem.theme}</td>
              <td>{packageItem.description}</td>
              <td>{packageItem.venue}</td>
              <td>{packageItem.pricePerChild}</td>
              <td>{packageItem.priceTotal}</td>
              <td>{packageItem.quantity}</td>
              <td>
                <button onClick={() => handleDeletePackage(packageItem.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Packageregisterlist;
