<form on:submit|preventDefault={submit}>
    <h1>Tabs</h1>
    <div class="linha">
        <label class="col-25" for="numTabs">Num. Tabs</label>
        <input name="numTabs" type="number" class="col-35" min="1" max="8"
            bind:value={numTabs}
            on:change={e => changeNumTabs(e.target['value'])}
        />
        {#if errors.numTabs }
            <div class="error col-25">{ errors.numTabs }</div>
        {/if}
    </div>

    <hr/>

    {#each tabs as tab, i (`tab_${i}`)}
        <p>Tab {i+1}</p>

        <div class="linha">
            <label for="title" class="col-25">Título</label>
            <input name="title" type="text" bind:value={tab.title} class="col-35"
            on:change={e=> changeTabTitle(i, e.target['value'])}/>
            {#if errors[`tab_title_${i}`]}
                <div class="error col-25">{ errors[`tab_title_${i}`] }</div>
            {/if}
        </div>

        <div class="linha">
            <label for="content" class="col-25">Conteúdo</label>
            <input name="content" type="text" bind:value={tab.content} class="col-35"
            on:change={e=> changeTabContent(i, e.target['value'])}/>
            {#if errors[`tab_content_${i}`]}
            <div class="error col-25">{ errors[`tab_content_${i}`] }</div>
            {/if}
        </div>
        
        {#if i != tabs.length - 1}
            <hr/>
        {/if}
    {/each}

    <div class="b-box">
        <input type="submit" class="button" disabled={numTabs === 0 ? true : false}/>
      </div>
</form>

<script lang="ts">
import { createEventDispatcher } from "svelte";
import type { PanelType } from "../store/panel.store";
import { inRange , required , isInt, maxLength } from "../utils/validation"



    const dispatcher = createEventDispatcher<{
        submit: PanelType
    }>()

    let numTabs = 1
    let tabs: {title: string, content: string}[] = [{title: '', content: ''}]
    let touched: {[name: string]: boolean} = {}
    let errors:  {[name: string]: string} = {}

    function touch(name: string, value: boolean = true) {
        touched[name] = value
    }

    function setError(name: string, error: string) {
        errors[name] = error
    }

    function changeNumTabs(value: string){
        const range = inRange(1, 8)
        const validateFunc = (value: string) => required(value) || isInt(value) || range(value)
        if(check(value, validateFunc, 'numTabs')){
            const num = parseInt(value, 10)
            numTabs = num
            console.log(num, tabs.length)
            if(num <= tabs.length){
                for(let i = num; i < tabs.length; i++){
                    touch(`tab_title_${i}`, false)
                    touch(`tab_content_${i}`, false)
                    setError(`tab_title_${i}`, '')
                    setError(`tab_content_${i}`, '')
                }
                tabs.splice(num, tabs.length - num)
            }
            else{
                for(let i = tabs.length; i < num; i++){
                    tabs.push({title:'', content: ''})
                }
                
            }
        }
    }

    function check(value: string, validateFunc: Function, name: string){
        const error = validateFunc(value)
        setError(name, error)
        return error === null
    }

    function changeTabTitle(index: number, value: string){
        tabs[index].title = value
        touch(`tab_title_${index}`)
    }

    function changeTabContent(index: number, value: string){
        tabs[index].content = value
        touch(`tab_content_${index}`) 
    }

    function submit(){
        const validateFunc = (value: string) => required(value) || maxLength(12, value)
        const tabsTitleOk = tabs.map((tab, i) => check(tab.title, validateFunc, `tab_title_${i}`)).every(t => t)
        const tabsContentOk = tabs.map((tab, i) => check(tab.content, required, `tab_content_${i}`)).every(t => t)
        if(tabsTitleOk && tabsContentOk){
            dispatcher('submit', {tabs: tabs})
            tabs.splice(0, tabs.length)
            numTabs = 0
        }
    }

</script>

<style>
    label {
        font-weight: bold;
    }
    form {
        margin-top: 50px;
        margin-right: 50px;
        border-radius: 10px;
        box-shadow: 0 0 3px 3px rgb(75, 75, 75);
        color: lightslategray;
    }
    h1 {
        font-weight: bold;
        font-size: 30px;
        padding: 15px;
    }
    form p {
        font-weight: bold;
        padding: 25px;
    }
    form input {
        padding: 5px;
    }
    .linha{
        clear: both;
    }

    .linha input, label, .error {
        display: block;
        margin-left: 35px;
        margin-bottom: 10px;
    }

    .col-25 {
        width: 25%;
    }
    .col-35 {
        width: 35%;
    }
    .b-box{
        margin-left: 85%;
    }
    .button{
        background-color: lightslategray;
        color: white;
        padding: 13px;
        border-radius: 10px;
        margin: 5px;
        border: 1px solid transparent;
        font-weight: bold;
        font-size: 15px;
    }
    .button:hover {
        transition: 0.1s;
        background-color: transparent;
        color: lightslategray;
        border: 1px solid lightslategray;
        cursor: pointer;
    }
    .button:disabled{
        opacity: 50%;
    }
    form .error {
        padding: 10px;
        color: red;
    }
    hr {
        color: lightslategray;
    }
    </style>