import { IDiscord } from "#types";

export const fetchData = async (url: string): Promise<IDiscord> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  export const getDiscordStatus = async (fetchFunction = fetchData): Promise<IDiscord> => {
    try {
      const data: IDiscord = await fetchFunction('https://discordstatus.com/api/v2/summary.json');
      return data;
    } catch (error) {
      console.error('Erro ao obter status do Discord', error);
      throw new Error('Erro ao buscar status');
    }
  };
  