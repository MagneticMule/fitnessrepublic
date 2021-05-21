export default {
  title: "Excercise",
  name: "excercise",
  type: "document",
  fields: [
    {
      title:"Active",
      name:"isActive",
      type:"boolean",
      description: `Will this excercise be shown to the client app?`,
      validation: Rule=>Rule.required(),
    },

    {
      title: "Excercise Name",
      name: "excerciseName",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Excercise names should be longer than 2 characters'),
    },
    {
      title: "Instructions",
      name: "instructions",
      type: "text",
      validation: Rule => Rule.required().min(2).warning('Excercise instructions should be longer than 5 characters')
    },
    {
      title: "Video",
      name: "video",
      type: "string",
      description: `Put a link to a youtube video here`,
    },
    {
      title: 'Repetitions',
      name: 'repetitions',
      type: 'number',
    }
  ],
  initialValue: {
    isActive: true
  }
}