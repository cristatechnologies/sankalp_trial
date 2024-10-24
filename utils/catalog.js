import { useState, useEffect } from "react";
import axios from "axios";

export const GetCatalogStatus = () => {
  const [catalogStatus, setCatalogStatus] = useState({
    catalogModeStatus: false,
    showPriceStatus: false,
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/website-setup`)
      .then((res) => {
        if (res.data && res.data.catalog_mode) {
          setCatalogStatus({
            catalogModeStatus: res.data.catalog_mode.status === 1,
            showPriceStatus: res.data.catalog_mode.show_price === 1,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching website setup:", error);
      });
  }, []);

  return catalogStatus;
};

export default GetCatalogStatus;
