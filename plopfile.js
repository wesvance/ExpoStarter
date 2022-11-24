/*
 Plop helps us to generate files and directories via a CLI
*/

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'a common component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/Component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/{{name}}.types.tsx',
        templateFile: 'plop-templates/component/Component.types.hbs'
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/{{name}}.styles.tsx',
        templateFile: 'plop-templates/component/Component.styles.hbs'
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/index.ts',
        templateFile: 'plop-templates/component/index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/tests/{{name}}.stories.tsx',
        templateFile: 'plop-templates/component/tests/Component.stories.hbs'
      }
    ]
  })
}
