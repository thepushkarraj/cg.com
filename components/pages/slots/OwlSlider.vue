<template>
  <client-only>
    <carousel
      :nav="false"
      :autoplay="true"
      :dots="false"
      style="max-width:100%; width:100%;"
      :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}"
    >
      <slot />
    </carousel>
  </client-only>
</template>

<script>
export default {

}
</script>

<style>
.owl-theme .owl-nav {
  margin-top: 0px;
  height: 0px;
  position: absolute;
  top: 50%;
  z-index: 999;
  font-size: 50px;
  color: white;
  text-shadow: 2px 2px 2px #333;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px !important;
}
.owl-carousel .owl-nav button.owl-prev{
  left: 20px;
  position: absolute;
}
.owl-carousel .owl-nav button.owl-next{
  right: 20px;
  position: absolute;
}
</style>
