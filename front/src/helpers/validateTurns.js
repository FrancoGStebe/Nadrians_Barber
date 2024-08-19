export function validateTurn(turnData) {
    const { date, time } = turnData;

    
    const turnDate = new Date(date);
    const dayOfWeek = turnDate.getUTCDay(); 
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return "No se pueden programar turnos los fines de semana.";
    }

    
    const turnTime = new Date(`01/01/2000 ${time}`);
    const startOfDay = new Date(`01/01/2000 09:00`);
    const endOfDay = new Date(`01/01/2000 18:00`);
    const minutes = turnTime.getMinutes();
    if (turnTime < startOfDay || turnTime > endOfDay || (minutes !== 0 && minutes !== 30)) {
        return "El horario debe estar entre las 9:00 y las 18:00, y en intervalos de 30 minutos.";
    }

    
    return null;
}