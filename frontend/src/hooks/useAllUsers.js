import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setUsers(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { users, loading, getUsers };
};

export default useAllUsers;