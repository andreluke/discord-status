import { getDiscordStatus } from "../services/api";
import { IDiscord } from "../types/IDiscord";
import { useCallback, useEffect, useState } from "react";

export const useDiscord = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IDiscord | null>(null);

  const getStatus = async () => {
    setLoading(true);
    setError(null);

    try {
      setLoading(true);
      const response = await getDiscordStatus();
      setData(response);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return {
    loading,
    data,
    error,
    getStatus
  }
};
