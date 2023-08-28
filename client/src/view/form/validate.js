export const validate = (input) => {
    const errors = {
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: "",
    };
  
    if (!input.name) {
      errors.name = "El nombre es obligatorio";
    } else if (input.name.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres";
    } else if (input.name.length > 30) {
      errors.name = "El nombre no debe exceder los 30 caracteres";
    } else if (!/^[a-zA-ZñÑ\s]+$/.test(input.name)) {
      errors.name = "El nombre solo debe contener letras";
    }
    
  
    if (!input.difficulty) {
      errors.difficulty = "Completa el rango de dificultad";
    }
    if (!input.duration) {
      errors.duration = "Completa la duración de tu actividad";
    }
    if (!input.season) {
      errors.season = "Debes seleccionar una temporada";
    }
    if (input.countries.length < 1) {
      errors.countries = "Debe seleccionar al menos un país";
    }
  
    return errors;
  };
  