<template>
    <div>
        <p>this is header</p>
      <div>
        <router-link to="/">Go to index</router-link>
        <router-link to="/login">Go to login</router-link>
      </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
