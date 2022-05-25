<button
on:click={e => clicked(index)}
class={index === selected ? 'selected' : ''}>
    {title}
</button>

<style>
    button {
        transition: 0.4s;
        font-size: medium;
        font-weight: bold;
        background-color: lightslategray;
        color: white;
        border: 2px solid lightslategray;
        padding: 10px;
        margin: 5px;
        margin-left: 0;
        border-radius: 5px;
    }
    .selected {
        background-color: transparent;
        color: lightslategray;
    }
</style>

<script lang="ts">
import { createEventDispatcher } from "svelte";



    export let title: string = 'Título da tab'
    export let index: number = 0
    export let selected: number = 0
    //export let content: string = 'Conteúdo da tab'

    const dispatcher = createEventDispatcher()

    function clicked(idx: number){
        dispatcher('selection', idx)
    }

</script>