export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a63d0ee074841a697d13cc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfoliop-studio',
                  apiId: '914ad3d1-b9de-4d13-93f5-3570178d6956'
                },
                {
                  buildHookId: '62a63d0fc984231ad5fa3eb8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfoliop',
                  apiId: 'b418fa5d-897b-4455-ab73-f31ff089ad05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ozanyeni/sanity-gatsby-portfoliop',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfoliop.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
