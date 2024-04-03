
<template>
   <Header></Header>

   <div id="layout-wrapper">     
 
     
    <RouterView/>
   
    </div>


    <Footer></Footer>
</template>




<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import {  RouterView } from 'vue-router'

</script>
