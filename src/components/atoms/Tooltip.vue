<template functional>
  <div class="tooltip">
    <slot name="visible"></slot>
    <div class="tooltiptext">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ToolTip",
};
</script>

<style lang="scss">
.tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  left: -190%;
  top: 120%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
  transform: scaleY(-1);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
