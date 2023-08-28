import axios from "axios";
import {
  GET_ALL_COUNTRIES, 
  GET_COUNTRIES_DETAIL,
  CLEAN_DETAIL,
  SEARCH_COUNTRIES,
  CREATE_ACTIVITY,
  FAILURE,
  GET_AVTIVITY,
  ORDER_BY_POPULATION,
  ORDER, 
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY

  } from "./actions-types";

  const URL = "http://localhost:3001";
  
  export const  getAllCountries = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${URL}/countries`);
        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: FAILURE,
          payload: 'Error getting all countries',
        });
      }
    };
  }
  
  
    export const  getCountriesDetail = (id) => {
      return async (dispatch) => {
        try {
          const response = await axios.get(`${URL}/countries/${id}`);
          dispatch({
            type: GET_COUNTRIES_DETAIL,
            payload: response.data,
          });
        } catch (error) {
          dispatch({
            type: FAILURE,
            payload: 'Error getting countries detail',
          });
        }
      };
    }
    
    export const  cleanDetail = () => {
      return (dispatch) => {
          return dispatch({
            type: CLEAN_DETAIL,
            payload: [], 
          });
      };
    }
     export const searchCountries = (name) => {
      return async (dispatch) => {
        try {
          let response;
          if (!name) {
            // Si no se proporciona un nombre, obtén todos los países
            response = await axios.get(`${URL}/countries/`);
          } else {
            // Si se proporciona un nombre, realiza la búsqueda por nombre
            response = await axios.get(`${URL}/countries?name=${name}`);
          }
    
          const countries = response.data;
          dispatch({
            type: SEARCH_COUNTRIES,
            payload: countries,
          });
        } catch (error) {
          dispatch({
            type: FAILURE,
            payload: 'Country not found',
          });
        }
      };
    };
  
    export const  createActivity = (activity)=> {
      return async (dispatch) => {
        try {
          const response = await axios.post(`${URL}/activities/`, activity);
          dispatch({
            type: CREATE_ACTIVITY,
            payload: response.data,
          });
        } catch (error) {
          dispatch({
            type: FAILURE,
            payload: 'Error creating activity',
          });
        }
      };
    }
    export const getActivity = () => {
      return async (dispatch) => {
        try {
          const response = await axios.get(`${URL}/activities/`);
          dispatch({
            type: GET_AVTIVITY,
            payload: response.data,
          });
        } catch (error) {
          dispatch({
            type: FAILURE,
            payload: 'Error getting activity',
          });
        }
      };
    }
    export const orderByPopulation = (order) => {
      return {
        type: ORDER_BY_POPULATION,
        payload: order,
      };
    };
    
    export const order = (order) => {
      return {
        type: ORDER,
        payload: order,
      };
    };
    
    export const filterByContinent = (continent) => {
      return {
        type: FILTER_BY_CONTINENT,
        payload: continent,
      };
    };
    
    export const filterByActivity = (season) => {
      return {
        type: FILTER_BY_ACTIVITY,
        payload: season,
      };
    };
    






  
      
      
  
  