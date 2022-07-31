import axios from 'axios';
import {popularGamesUrl,upcomingGamesUrl,newGamesUrl, searchGameUrl} from '../api';

//Action creator

export const loadGames = () => async (dispatch) => { //this is the way to create async functions in thunk
    //fetch axios
    const popularData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    });
};

export const fetchSearch = (game_name) => async (dispatch)=> {
    const searchGames = await axios.get(searchGameUrl(game_name));
    dispatch({type: 'FETCH_SEARCHED', payload: {searched: searchGames.data.results}})
}