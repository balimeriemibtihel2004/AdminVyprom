<template>
    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            {{ currentYear }} © Skote.
          </div>
          <div class="col-sm-6">
            <div class="text-sm-end d-none d-sm-block">
              Design & Develop by Themesbrand
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue'
  
  const currentYear = new Date().getFullYear()
  </script>
  