<template>
    <div class="container">
        <input v-model="input" @input="apiCall" @focus="isFocus = true" @blur="isFocus = false; isNotFocus()" id="input" type="search"/>
        <button id="vonButton" @click="toggleIfClicked" class="vonAnimation">
            <p class="von">Von</p>
        </button>
        
        <ul id="item_container">
            <li id="item" v-for="item in items" :key="item.name">
                <a v-on:click="selectItem(item.name)"><img id="img" img src="./assets/train.svg" />{{ item.name }}</a>
            </li>
        </ul>
    </div>
</template>
<script src="./App.js" />
<style src="./App.css" />
