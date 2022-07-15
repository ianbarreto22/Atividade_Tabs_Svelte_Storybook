<template>
    <div class="linha">
      <div class="coluna-50">
        <PanelForm on:submit={e => panel.change(e.detail)}></PanelForm>
      </div>
      <div class="coluna-50">
        <div class="container">
          <h1>Conteúdo</h1>
          <Panel tabs={$panel.tabs}/>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
import './assets/base.css';
import Panel from './components/panel.svelte'
import PanelForm from './components/panel-form.svelte';
import { panel } from './store/panel.store'
</script>

<style>
    .linha{
      margin: 50px;
      display: flex;
      flex-flow: row wrap;
    }
    .coluna-50{
      width: 50%;
    }
    .container{
      margin-top: 50px;
      margin-right: 50px;
      border-radius: 10px;
      padding: 15px;
      padding-top: 0px;
      border: lightslategray;
      box-shadow: 0 0 3px 3px rgb(75, 75, 75);
      color: lightslategray;
    }
    h1 {
        font-weight: bold;
        font-size: 30px;
        padding: 15px;
    }
    </style>

