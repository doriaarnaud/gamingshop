<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useProductTab } from '@/stores/GState'
const productstore=useProductTab()
</script>

<template>
  <div class="header">
    <Logo>

    </Logo>
    <div class="searchbar">
      <input id="searchbar" v-model="productstore.searchtext" type="text" placeholder="(ex:gm14...)" 
      @input="productstore.filteredlist()"/>
      <span id="searchcounter" v-if="productstore.searchtext && productstore.filteredlist().length>=1">
      {{productstore.filteredlist().length}} result<span v-if="productstore.filteredlist().length>=2">s</span> 
      for : <i>{{ productstore.searchtext }}</i>
      </span>
	  <a id="mainhomepage" href="https://doriaarnaud.online">Go to Mainpage</a>
    </div>
  </div>

  <RouterView />
</template>
<script>
import Logo from '@/components/Logo.vue'
  export default
  {
    components:
    {
      Logo
    }
  }
</script>
<style>
@media (min-width: 1200px)
{
  .header
  {
    width:1380px;
    height:200px;
    margin-left:auto;
    margin-right:auto;
    background-image:linear-gradient(#463f3f,#ada5a5);
  }
  .header_content
  {
    width:950px;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
  }
  .header_content h1
  {
    color: #ffffff;
    font-family: arial;
    font-size:2.5em;
  }
  .searchbar
  {
    margin-left:auto;
    margin-right: auto;
    height: 100px;
    width: 400px;
    margin-top: -120px;
    text-align: center;
  }
  input#searchbar
  {
    width:400px;
    height: 25px;
    border-radius: 20px;
    border:none;
    font-family: arial;
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  span#searchcounter
  {
    font-size:1.3em;
    font-family: arial;
    color:#ffffff;
  }
  #mainhomepage
  {
	  display:block;
	  color:#ffffff;
	  font-size:1.5em;
	  text-decoration:none;
	  font-weight:bold;
	  font-family:arial;
  }
}
@media (min-width: 992px) and (max-width: 1199px)
{
  .header
  {
    width:100%;
    height:200px;
    margin-left:auto;
    margin-right:auto;
    background-image:linear-gradient(#463f3f,#ada5a5);
  }
  .header_content
  {
    width:100%;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    padding-top: 20px;
  }
  .header_content h1
  {
    color: #ffffff;
    font-family: arial;
    font-size:2.5em;
    margin-left:0px;
  }
  .searchbar
  {
    margin-left:auto;
    margin-right: auto;
    height: 100px;
    width: 400px;
    margin-top: -100px;
    text-align: center;
  }
  input#searchbar
  {
    width:400px;
    height: 25px;
    border-radius: 20px;
    border:none;
    font-family: arial;
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  span#searchcounter
  {
    font-size:1.3em;
    font-family: arial;
    color:#ffffff;
  }
  #mainhomepage
  {
  	  display:block;
  	  color:#ffffff;
  	  font-size:1.5em;
  	  text-decoration:none;
  	  font-weight:bold;
  	  font-family:arial;
  }
}
@media (min-width: 768px) and (max-width: 991px)
{
  .header
  {
    width:100%;
    height:200px;
    margin-left:auto;
    margin-right:auto;
    background-image:linear-gradient(#463f3f,#ada5a5);
  }
  .header_content
  {
    width:100%;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    padding-top: 20px;
  }
  .header_content h1
  {
    color: #ffffff;
    font-family: arial;
    font-size:2.5em;
    margin-left:0px;
  }
  .searchbar
  {
    margin-left:auto;
    margin-right: auto;
    height: 100px;
    width: 400px;
    margin-top: -100px;
    text-align: center;
  }
  input#searchbar
  {
    width:400px;
    height: 25px;
    border-radius: 20px;
    border:none;
    font-family: arial;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  span#searchcounter
  {
    font-size:1.3em;
    font-family: arial;
    color:#ffffff;
  }
  #mainhomepage
  {
  	  display:block;
  	  color:#ffffff;
  	  font-size:1.5em;
  	  text-decoration:none;
  	  font-weight:bold;
  	  font-family:arial;
  }
}
@media (min-width: 576px) and (max-width: 767px)
{
  .header
  {
    width:100%;
    height:200px;
    margin-left:auto;
    margin-right:auto;
    background-image:linear-gradient(#463f3f,#ada5a5);
  }
  .header_content
  {
    width:100%;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    padding-top: 20px;
  }
  .header_content h1
  {
    color: #ffffff;
    font-family: arial;
    font-size:1.5em;
    margin-left:0px;
  }
  .searchbar
  {
    margin-left:auto;
    margin-right: auto;
    height: 100px;
    width: 400px;
    margin-top: -120px;
    text-align: center;
  }
  input#searchbar
  {
    width:400px;
    height: 25px;
    border-radius: 20px;
    border:none;
    font-family: arial;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  span#searchcounter
  {
    font-size:1.3em;
    font-family: arial;
    color:#ffffff;
  }
  #mainhomepage
  {
  	  display:block;
  	  color:#ffffff;
  	  font-size:1.1em;
  	  text-decoration:none;
  	  font-weight:bold;
  	  font-family:arial;
  }
}
@media (max-width: 575px)
{
  .header
  {
    width:100%;
    height:200px;
    margin-left:auto;
    margin-right:auto;
    background-image:linear-gradient(#463f3f,#ada5a5);
  }
  .header_content
  {
    width:100%;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    padding-top: 20px;
  }
  .header_content h1
  {
    color: #ffffff;
    font-family: arial;
    font-size:1.5em;
    margin-left:0px;
  }
  .searchbar
  {
    margin-left:auto;
    margin-right: auto;
    height: 100px;
    width: 400px;
    margin-top: -120px;
    text-align: center;
  }
  input#searchbar
  {
    width:400px;
    height: 25px;
    border-radius: 20px;
    border:none;
    font-family: arial;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  span#searchcounter
  {
    font-size:1.3em;
    font-family: arial;
    color:#ffffff;
  }
  #mainhomepage
  {
  	  display:block;
  	  color:#ffffff;
  	  font-size:1.1em;
  	  text-decoration:none;
  	  font-weight:bold;
  	  font-family:arial;
  }
}
</style>

