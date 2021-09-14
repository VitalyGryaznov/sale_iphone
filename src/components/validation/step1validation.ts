export default function validateInfo(values) {

    interface Values {
        model?: string;
        color?: string;
        memory?: string;
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
  
    return errors;
  }