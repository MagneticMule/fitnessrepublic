export default {
  type: 'object',
  name: 'repFields',
  title: 'Excercise Repetitions',
  options: {
    columns: 2
  },
  fieldsets: [
    { name: 'excerciseRepetitionsFieldSet' }
  ],
  fields: [
    { title: 'Minimum Number of Repetitions', name: 'minReps', type: 'number' },
    { title: 'Maximum Number of Repetitions', name: 'maxReps', type: 'number' },
  ],
  initialValue: {
    minReps: 10,
    maxReps: 15
  }
}