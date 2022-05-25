import Panel from "../components/panel.svelte"

export default{
    title: "Panel/Panel",
    component: Panel,
}

const Template = (args) => ({
    Component: Panel,
    props: args,
})

export const TP1 = Template.bind({})
TP1.args = {
    tabs: [
        {
            title: "Tab 1",
            content: "Conteúdo 1",
        },
        {
          title: "Tab 2",
          content: "Conteúdo 2",
      },
      {
          title: "Tab 3",
          content: "Conteúdo 3",
      },
      {
          title: "Tab 4",
          content: "Conteúdo 4",
      },
    ]
}

export const TP2 = Template.bind({})
TP2.args = {
    tabs: [
        {
            title: "Tab 1",
            content: "Conteúdo 1",
        },
        {
          title: "Tab 2",
          content: "Conteúdo 2",
      },
      {
          title: "Tab 3",
          content: "Conteúdo 3",
      },
      {
          title: "Tab 4",
          content: "Conteúdo 4",
      },
      {
        title: "Tab 5",
        content: "Conteúdo 5",
    },
    {
        title: "Tab 6",
        content: "Conteúdo 6",
    },
    ]
}