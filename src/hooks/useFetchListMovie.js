import { useEffect, useState } from "react";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../constants";
const useFetchListMovie = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // Mong muốn của hoosk này mình sẽ trả ra data , isLoading ,error
  useEffect(() => {
    // call api
    setIsLoading(true);
    axios
      .get(
        "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
        {
          headers: {
            // key: value
            TokenCybersoft: TOKEN_CYBERSOFT,
          },
        }
      )
      .then((result) => {
        // console.log("result", result.data);
        setData(result.data.content);
      })
      .catch((error) => {
        console.log("error", error);
        setErrorO(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { data, isLoading, error };
};

export default useFetchListMovie;
