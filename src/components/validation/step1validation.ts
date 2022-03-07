export default function validateInfo(values) {

    interface Values {
        model?: string;
        color?: string;
        memory?: string;
        condition?: string;
      }
      
    let errors: Values = {
    };

    if (!values.model) {
      errors.model = 'Bitte Modell auswählen';
    }
  
    if (!values.color) {
      errors.color = 'Bitte Farbe auswählen';
    }

    if (!values.memory) {
      errors.memory = 'Bitte Speicherkapazität auswählen';
    }

    if (!values.memory) {
      errors.memory = 'Bitte Speicherkapazität auswählen';
    }

    if (!values.condition) {
      errors.condition = 'Bitte Zustand auswählen';
    }
  
    return errors;
  }