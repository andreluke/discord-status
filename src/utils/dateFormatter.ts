import { capitalizeFirstLetter } from "./capitalizeLetter";

export const dateFormatter = (date: string) => {
    const dateObj = new Date(date);
  
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // Dia da semana por extenso
      year: 'numeric',
      month: 'long', // Mês por extenso
      day: 'numeric',
      hour: '2-digit', // Hora
      minute: '2-digit', // Minuto
      second: '2-digit', // Segundo
      hour12: true, // Usar formato 12 horas
    };
  
    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(dateObj);
  
   
  
    // Aplica a capitalização à string formatada
    const capitalizedDate = capitalizeFirstLetter(formattedDate);
  
    return capitalizedDate;
  };
  