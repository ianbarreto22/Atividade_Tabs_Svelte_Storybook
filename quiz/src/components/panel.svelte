<main>
    {#each tabs as tab, index (tab)}
        <Tab {...tabs[index]} 
        index={index}
        selected={currentTab}
        on:selection={e => onSelection(e.detail)}/>
    {/each}
    <div class="box">
        <p>{tabs[currentTab].content}</p>
    </div>
</main>

<style>
    main{
        margin: 100px;
    }
    .box{
        border: 3px solid lightslategray;
        border-radius: 0px 10px 10px 10px;
        padding: 15px;
    }
</style>

<script lang="ts">
    import Tab from './tab.svelte'

    export let tabs: {
        title: string,
        content: string
    }[]

    let currentTab = 0;

    function onSelection(idx: number){
        currentTab = idx
    }
</script>