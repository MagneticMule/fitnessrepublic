import { Link } from 'gatsby';
import React from 'react';
import ExcerciseList from './ExcerciseList.js'

const SetList = ( {sets} ) => {

  return (
    <>
      {sets.map((set)=>(
        <section>
          <h1>{set.setName}</h1>
          <h3>{set.description}</h3>
          <h4><strong>Set Repetitions:</strong> {set.repetitions}</h4>
          <ExcerciseList excercises={set.excercise}/>
        </section>
      ))}
</>
  );
}

export default SetList;