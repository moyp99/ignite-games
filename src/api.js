const base_url = 'https://api.rawg.io/api/';

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    
    if(month<10){
        return `0${month}`;
    } else{
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    
    if(day<10){
        return `0${day}`;
    } else{
        return day;
    }
}

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear +1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=6`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=6`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=6`;


export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;
//Game details
export const gameDetailsUrl =  (game_id)=>`${base_url}games/${game_id}` 
//game screenshots
export const gameScreenshotUrl =  (game_id)=>`${base_url}games/${game_id}/screenshots` 
// getCurrentMonth(); //to run this you need to use node js  in terminal

//searched game
export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=5`
