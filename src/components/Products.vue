<template>
    <div class="card">
        <div class="card_content">
            <div class="image_container">
                <img id="thumbs" @click="$emit('describe')"
				:src="thumbs" 
				alt="Products_Images" />
                <h3>Id : {{productid}}<br/>{{thumbtitle}} | $ {{productprice}}</h3>
                <p>
                    {{thumbdescription}}
                </p>
                <ProductControler @ajouter="$emit('ajouter')" @retirer="$emit('retirer')">
                </ProductControler>
            </div>
        </div>
    </div>
</template>

<script>
import ProductControler from '@/components/ProductControler.vue'
export default 
{
    name:'Products',
    props:
    {
        'id':Number,
        'productid':String,
		'productprice':Number,
		'thumbid':Number,
		'thumbs':String,
        'thumbwidth':Number,
        'thumbheight':Number,
        'thumbtitle':String,
        'thumbdescription':String
    },
    components:
    {
        ProductControler
    }
}
</script>

<style>
@media (min-width: 1200px)
{
    .card_content
    {
        width:310px;
        height: 200px;
        margin:30px 10px 150px 50px;
        margin-top: 70px;
        text-align:center;
    }
    .card_content img
    {
        width:300px;
        height: 200px;
    }
    .card_content img:hover
    {
        box-shadow: 1px 1px 5px 5px #c0c0c0;
        width:301px;
        height: 201px;
    }
    .card_content img:hover
    {
        cursor:pointer;
    } 
    button:hover
    {
        cursor:pointer;
    }
}
@media (min-width: 992px) and (max-width: 1199px)
{
    .card_content
    {
        width:200px;
        height: 200px;
        margin:0px 80px 80px 50px;
        margin-top: 70px;
        text-align:center;
    }
    .card_content img
    {
        width:200px;
        height: 150px;
    }
    .card_content img:hover
    {
        cursor:pointer;
    }
    button:hover
    {
        cursor:pointer;
    }
}
@media (min-width: 768px) and (max-width: 991px)
{
    .card_content
    {
        width:310px;
        height:200px;
        margin:0px 0px 150px -20px;
        margin-top: 70px;
        text-align:center;
    }
    .card_content img
    {
        width:250px;
        height: 180px;
    }
    .card_content img:hover
    {
        cursor:pointer;
    }
    button:hover
    {
        cursor:pointer;
    }
}
@media (min-width: 576px) and (max-width: 767px)
{
    .card_content
    {
        width:280px;
        height:200px;
        margin:0px 40px 100px 0px;
        margin-top: 70px;
        text-align:center;
    }
    .card_content img
    {
        width:240px;
        height: 160px;
    }
    .card_content img:hover
    {
        cursor:pointer;
    }
    button:hover
    {
        cursor:pointer;
    }
}
@media (max-width: 575px)
{
    .card_content
    {
        width:310px;
        height: 200px;
        margin:30px 10px 150px 50px;
        text-align:center;
    }
    .card_content img
    {
        width:300px;
        height: 200px;
    }
    .card_content img:hover
    {
        cursor:pointer;
    }
    button:hover
    {
        cursor:pointer;
    }
}
</style>