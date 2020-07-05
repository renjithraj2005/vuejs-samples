<template>
    <div>
    <div class="top-row">
      <!-- v-once will evaluvate only once-->
      <!-- <div class="robot-name">
          {{selectedRobot.title}}
          v-if (Element will be removed)/ v-show (display none)
          <span v-if="selectedRobot.onSale" class="sale">Sale!</span>
      </div> -->
      <PartSelector />
    </div>
    <div class="middle-row">
      <PartSelector />
      <PartSelector />
      <PartSelector />
    </div>
    <div class="bottom-row">
      <PartSelector />
    </div>
  </div>
</template>

<script>

import availableParts from '../data/parts';
import PartSelector from './PartSelector.vue';
import mixins from './mixin';

export default {
  name: 'Robotbuilder',
  components: { PartSelector },
  data() {
    return {
      availableParts,
      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
    };
  },
  mixins: [mixins],
  computed: {
    selectedRobotOld() {
      return availableParts;
    },
  },
  methods: {

  },
};
</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}

.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
    position: absolute;
    top: -25px;
    text-align:  center;
    width: 100%;
}
.sale {
    color: red;
}

</style>
