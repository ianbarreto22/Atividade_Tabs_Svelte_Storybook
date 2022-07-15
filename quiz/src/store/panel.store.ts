import { writable } from "svelte/store"

export interface PanelType {
    tabs: {
        title: string,
        content: string
    }[]
}

const { update, subscribe } = writable({tabs: [{title:'Tab', content: 'Sem conteúdo'}]})

function change(p: PanelType){
    update(panel => {
        panel = {...p}
        panel.tabs = [...p.tabs]
        return panel
    })

}

export const panel =  {
    change, subscribe
}
