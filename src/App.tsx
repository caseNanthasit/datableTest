import "./styles.css";
// Importing the Car interface
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const CarList: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  const fetchCarData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log("data:", response.data);
      setPhotos(response.data);
    } catch (error) {
      console.log("Error fetching car data:", error);
    }
  };
  useEffect(() => {
    fetchCarData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "title", width: 130 }
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={photos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default CarList;
