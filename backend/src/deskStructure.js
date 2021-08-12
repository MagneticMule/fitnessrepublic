import S from '@sanity/desk-tool/structure-builder';
import { BsFillInfoCircleFill as infoIcon } from 'react-icons/bs';
import { CgGym as excerciseIcon } from 'react-icons/cg';
import { GiWeightLiftingUp as workoutIcon } from 'react-icons/gi';
import { BsSun as workoutBuilderIcon } from 'react-icons/bs';
export default () =>
  S.list()
    .title('Web Platform')
    .items([
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) => !['workout', 'excercise', 'businessDetails', 'hero', 'video'].includes(listItem.getId())
      ),

      S.divider(),

      S.listItem()
        .title('Workout Builder')
        .icon(workoutBuilderIcon)
        .child(
          S.list()
            .title('Excercises, Sets and Workouts')
            .items([
              S.listItem()
                .title('Excercises')
                .child(S.documentTypeList('excercise'))
                .title('Excercises')
                .icon(excerciseIcon),
              S.listItem().title('Workouts').child(S.documentTypeList('workout')).title('Workouts').icon(workoutIcon),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Company Info')
        .icon(infoIcon)
        .child(S.document().schemaType('businessDetails').documentId('companyInfo')),
    ]);
