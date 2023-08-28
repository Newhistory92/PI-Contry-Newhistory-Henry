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
  
  const initialState = {
    countries: [],
    selectCountry: [],
    countriesOrder: [],
    sortContinent: [],
    countriesWithActivities: [],
    sortPopulation: [],
    allActivities: [],
    activity: [],
    details: [],
    error: "",
    loading: false,
    sortBy: null, // Tipo de ordenamiento (ejemplo: 'alphabetical', 'population')
    sortOrder: null, // Orden ascendente o descendente (ejemplo: 'asc', 'desc')
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_COUNTRIES:
        return {
          ...state,
          countries: action.payload,
          loading: false
        };
      case GET_COUNTRIES_DETAIL:
        return {
          ...state,
          details: action.payload,
          loading: false
        };
      case CLEAN_DETAIL:
        return {
          ...state,
          details: [],
          loading: false
        };
      case SEARCH_COUNTRIES:
        return {
          ...state,
          selectCountry: action.payload,
          loading: false,
          error: ""
        };
      case FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case CREATE_ACTIVITY:
        return {
          ...state,
          activity: action.payload,
          loading: false
        };
      case GET_AVTIVITY:
        return {
          ...state,
          allActivities: action.payload,
          loading: false
        };
        case ORDER_BY_POPULATION:
          if(action.payload === 'All'){
            return {
            ...state,
            sortPopulation: state.countries,
            sortBy: 'activity',
            sortOrder: null,
          }}else{
          // Comprueba el tipo de orden recibido en el payload
          if (action.payload === 'Min') {
            // Si el orden es de menor a mayor
            // Utiliza el método sort para ordenar los países por población de menor a mayor
            let countriesMin = [...state.countries].sort((a, b) =>
              a.population > b.population ? 1 : a.population < b.population ? -1 : 0
            );
        
            return {
              ...state,
              sortPopulation: countriesMin,
              sortBy: 'population', // Actualiza el tipo de ordenamiento a 'population'
              sortOrder: 'Min', // Actualiza el orden menor a mayor
            };
          } else {
            // Si el orden es mayor a menor
            // Utiliza el método sort para ordenar los países por población de mayor a menor
            let countriesMax = [...state.countries].sort((a, b) =>
              a.population > b.population ? -1 : a.population < b.population ? 1 : 0
            );
        
            return {
              ...state,
              sortPopulation: countriesMax,
              sortBy: 'population', // Actualiza el tipo de ordenamiento a 'population'
              sortOrder: 'Max', // Actualiza el orden de mayor a menor
            };
          }}
        
          
          case ORDER:
            if(action.payload === 'All'){
              return {
              ...state,
              countriesOrder: state.countries,
              sortBy: 'activity',
              sortOrder: null,
            }}else{
            if (action.payload === 'A-Z') {
              // Si el orden es ascendente
              // Utiliza el método sort para ordenar los países por nombre de la A a la Z
              let countriesAsc = [...state.countries].sort((a, b) =>
                a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
              );
              return {
                ...state,
                countriesOrder: countriesAsc,
                sortBy: 'alphabetical', // Actualiza el tipo de ordenamiento a 'alphabetical'
                sortOrder: 'A-Z', // Actualiza el orden ascendente
              };
            } else {
              // Si el orden es descendente
              // Utiliza el método sort para ordenar los países por nombre de la Z a la A
              let countriesDesc = [...state.countries].sort((a, b) =>
                b.name.localeCompare(a.name, 'es', { sensitivity: 'base' }) // Utiliza el método localeCompare para comparar dos cadenas en base a su idioma, ya que Åland Islands no se ordenaba
              );
              return {
                ...state,
                countriesOrder: countriesDesc,
                sortBy: 'alphabetical', // Actualiza el tipo de ordenamiento a 'alphabetical'
                sortOrder: 'Z-A', // Actualiza el orden descendente
              };
            }}
          
          case FILTER_BY_CONTINENT:
            const continent = action.payload; 
            if(continent === 'All'){
              return {
              ...state,
              sortContinent: state.countries,
              sortBy: 'continent',
              sortOrder: null,
            };
            }else{
            const filteredCountries = 
            state.countries.filter((country) => country.continent === continent);
            return {
              ...state,
              sortContinent: filteredCountries,
              sortBy: 'continent',
              sortOrder: null,
            }
            };
            case FILTER_BY_ACTIVITY:
              const season = action.payload;
              if(season === 'All'){
                return {
                ...state,
                countriesWithActivities: state.countries,
                sortBy: 'activity',
                sortOrder: null,
              }}else{
              
              const countriesWithActivities = state.countries.filter(country => country.activities.length > 0);
              const filteredCountriesByActivity = countriesWithActivities.filter(country => country.activities[0].season === season);
              
              return {
                ...state,
                countriesWithActivities: filteredCountriesByActivity,
                sortBy: 'activity',
                sortOrder: null
              };
              }
            
            
         
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;
  