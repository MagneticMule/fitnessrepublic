import S from '@sanity/desk-tool/structure-builder'
import { BsFillInfoCircleFill as icon} from 'react-icons/bs';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Company Info')
        .icon(icon)
        .child(
          S.document()
            .schemaType('businessDetails')
            .documentId('companyInfo')
        ),
            S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['businessDetails','excercise','hero','video','news'].includes(listItem.getId()))
    ])