<template>
    <div class="bouton">
        <div class="bouton_container">
            <button id="cartshow">{{cartshowlabel}} {{cartquantity}}</button>
        </div>
    </div>

</template>
<script>
export default 
{
    name:'CartShow',
    props:
    {
        'cartshowlabel':String,
        'cartquantity':Number
    }
}
</script>

<style>
button#cartshow
{
    width:150px;
    height: 50px;
    font-family:arial;
    font-weight:bold;
    font-size:1.1em;
    border:none;
    background-color:#ada5a5;
    color:#ffffff;
}
button#cartshow:hover
{
    cursor:pointer;
}
</style>