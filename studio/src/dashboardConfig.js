export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ebeb370ae847e01c5498b25',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c1vkv6bn',
                  apiId: '128167a0-89e4-4a81-82f2-a3475f37c7a1'
                },
                {
                  buildHookId: '5ebeb37044c0c701b5cd3069',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-29givnma',
                  apiId: '5561e41d-bd4c-4b93-8fc4-5ba259f0a59f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lucaandrade/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-29givnma.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
