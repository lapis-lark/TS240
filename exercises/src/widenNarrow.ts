// widening is the process by which the type checker assigns a type to a variable initialized
// with a literal primitive
let p = 3.14; // p's type is number, not the literal 3.14

// widening is important to understand because it can be a source of bugs
type Instruments = 'guitar' | 'trumpet';
let i1: Instruments = 'guitar';
let randoInstrument = 'trumpet';
// i1 = randoInstrument; // type string not assignable to instrument

// NARROWING TOPICS 
  // common approaches
    // typeof
    // truthiness (catches null, undefined, 0, '', NaN . . .)
    // equality narrowing
    // in operator
    // instanceof
    // assignment
    // type predicates
    // discriminated unions

    interface User {
      id: string;
      name: string;
    }
    
    interface Student extends User {
      id: string;
      courses: string[];
    }
