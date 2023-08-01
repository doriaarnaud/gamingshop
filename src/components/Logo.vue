<template>
    <div class="header">
      <div class="header_content" :style="{'background-color':'rgb('+rouge+','+vert+','+bleu+')'}">
        <div class="titre">
          <h1>Gaming Shop</h1>
        </div>
      </div>
    </div>
  </template>
  <script>
  let rouge=0;
  let vert=0;
  let bleu=255;
  let timer=null;
  let timer_vert=null;
  export default
  {
      name:'Rgb',
      data()
      {
          return {rouge,vert,bleu,timer,timer_vert}
      },
      mounted:function()
      {
          this.start();
          this.start_vert();
      },
      methods:
      {
          start:function()
          {
             clearTimeout(this.timer);
             this.timer=null;
            this.timer=setInterval(this.next,20);
          },
          start_vert:function()
          {
            clearTimeout(this.timer_vert);
             this.timer_vert=null;
             this.timer_vert=setInterval(this.next_vert,25);
          },
          retour:function()
          {
             clearTimeout(this.timer);
             this.timer=null;
             this.timer=setInterval(this.prev,20);
          },
          next:function()
          {
            this.rouge+=3;
            this.bleu-=3;
            if(this.rouge==255)
            {
              this.retour();
            }
          },
          prev:function()
          {
            this.rouge-=3;
            this.bleu+=3;
            if(this.rouge==0)
            {
              this.start();
            }
          },
          next_vert:function()
          {
            this.vert+=3;
            if(this.vert==255)
            {
              this.retour_vert();
            }
          },
          retour_vert:function()
          {
              clearTimeout(this.timer_vert);
              this.timer_vert=null;
              this.timer_vert=setInterval(this.prev_vert,25);
          },
          prev_vert:function()
          {
            this.vert-=3;
            if(this.vert==0)
            {
              this.start_vert();
            }
          }
      }
  }
  </script>
  
  <style>
  .header
  {
    width:100%;
    height:200px;
    background-color: #000000;
  }
  .header_content
  {
    width:950px;
    margin-left: auto;
    margin-right: auto;
    height: 200px;
  }
  span#title1
  {
    font-family: arial;
  }
  </style>