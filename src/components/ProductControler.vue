<template>
    <div class="bouton">
        <div class="bouton_container">
            <button id="addcartbutton" @click="$emit('ajouter')" @mouseup="$emit('incrementqtt')">Add to cart</button>
        </div>
    </div>
</template>
<script>
export default 
{
    name:'ProductControler'
}
</script>

<style>
button#addcartbutton
{
    width:150px;
    height: 30px;
    font-family:arial;
    font-weight:bold;
    border:2px solid black;
}
button#addcartbutton:hover
{
    cursor:pointer;
}
</style>