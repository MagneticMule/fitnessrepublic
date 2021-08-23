import { GiWeightLiftingUp as icon } from 'react-icons/gi';
export default {
  title: "Set",
  name: "set",
  type: "document",
  icon,
  fields: [
    {
      Title: 'Type of set',
      name: 'setType',
      type: 'string',
      options: {
        list: [
          { title: 'Standard Set', value: 'standard' },
          { title: 'Super Set', value: 'super' },
          { title: 'Drop Set', value: 'drop' },
          { title: 'Giant Set', value: 'giant' },
          { title: 'Circuit Set', value: 'circuit' },
        ],
        layout: 'dropdown',
        direction: 'horizontal'
      }
    },
    {
      title: 'Set Repetitions (how many times should this set be performed?)',
      name: 'setRepetitions',
      type: 'number',
    },
    {
      title: 'Excercise',
      name: 'excercise',
      type: 'array',
      editModal: 'fullscreen',
      of: [
        {
          type: 'object',
          fields: [
            { title: 'Excercise', name: 'excerciseReference', type: 'reference', to: { type: 'excercise' } },
            {
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
          ],
          preview: {
            select: {
              title: 'excerciseReference.excerciseName',
              minReps: 'repFields.minReps',
              maxReps: 'repFields.maxReps',
              image: 'excerciseReference.cover.asset'
            },
            prepare(selection) {
              const { title, minReps, maxReps, image } = selection;
              return {
                title: `${title} | ${minReps} - ${maxReps} Repetitions`,
                media: image
              }
            }
          },
        },
      ],
    },

  ],
  initialValue: {
    setRepetitions: 2,
    setType: 'standard'
  }

}