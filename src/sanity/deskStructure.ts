import { StructureBuilder } from 'sanity/desk'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Blog related
      S.listItem()
        .title('Post')
        .child(S.documentTypeList('post').title('post')),
      S.listItem()
        .title('Category')
        .child(S.documentTypeList('category').title('category')),
      S.listItem()
        .title('Author')
        .child(S.documentTypeList('author').title('author')),
      // Divider
      S.divider(),
      // Experience/Landing related
      S.listItem().title('Job').child(S.documentTypeList('job').title('job')),
      S.listItem()
        .title('Project')
        .child(S.documentTypeList('project').title('project')),
      S.listItem()
        .title('Skill')
        .child(S.documentTypeList('skill').title('skill'))
    ])
