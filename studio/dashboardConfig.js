export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e3bf36d8d6adf6519edf798',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ae8cr7wk',
                  apiId: 'ec904e16-697b-4bb1-ba1c-c145cb754bb1'
                },
                {
                  buildHookId: '5e3bf36dcc5644d32c579e6f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ihzzfsn4',
                  apiId: '10cd062e-0b17-47c0-8036-0bec4c55d4f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runarno/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ihzzfsn4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
