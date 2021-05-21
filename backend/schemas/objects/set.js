import { GiWeightLiftingUp as icon} from 'react-icons/gi';
export default {
  title: "Set",
  name: "set",
  type: "object",
  icon,
  fields: [
    {
      title:"Active",
      name:"isActive",
      type:"boolean",
      description: `Will this set be shown to the client?`,
      validation: Rule=>Rule.required(),
    },
    {
      title: "Set Name",
      name: "setName",
      type: "string",
      description: `You can give this set a name or leave blank`,
      validation: Rule => Rule.min(2).warning(`Set names should be longer than 2 characters.`),
    },
     {
      title: 'Excercise',
      name: 'excercise',
      type: 'array',
      editModal: 'fullscreen',
      of: [
        { type: 'excercise'}
      ]
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: Rule => Rule.min(5).warning('Descriptions should be longer than five characters'),
    },
    {
      title: 'Repetitions',
      name: 'repetitions',
      type: 'number',
    }
  ]
}