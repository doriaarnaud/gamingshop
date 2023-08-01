<template>
    <div class="totalcost">
        <div class="totalcost_content">
            <h3 id="total">{{totalcost}} :</h3>
            <h3 id="amount">{{totalamount}} $</h3>
        </div>
    </div>
</template>
<script>
export default 
{
    name:'TotalCost',
    props:
    {
        'totalcost':String,
        'totalamount':Number
    }
}
</script>

<style>
.totalcost{
    width:300px;
    height: 100px;
    margin-left:auto;
    margin-right:auto;
}
.totalcost_content h3#total
{
    float:left;
}
.totalcost_content h3#amount
{
    font-weight:bold;
    font-family: Arial, Helvetica, "sans-serif";
    float:right;
}
</style>