<template>
  <div class="sidebar-box--container">
      <c-heading class="sidebar-box--title">{{ title }}</c-heading>
      <c-box class="sidebar-box--wrapper">
          <c-box class="sidebar-box--content">
              <slot>
                  <!-- sidebar components goes here. -->
              </slot>
          </c-box>
        </c-box>
  </div>
</template>

<script>
import { CBox, CHeading } from "@chakra-ui/vue";
export default {
    name: "SidebarBox",
    components: {
        CBox,
        CHeading,
    },
    props: {
        title: {
        type: String,
        default: "BoxTitle",
        },
    },
}
</script>

<style scoped>
.sidebar-box--container {
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px;
}

.sidebar-box--wrapper {
    padding: 8px;
}

.sidebar-box--title {
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;;
    padding: 4px;
    color: #757590;
}


</style>