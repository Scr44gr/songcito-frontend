<template>
    <div class="sidebar-button--container">
        <c-box as="button" class="sidebar-button" @click="callback"> <c-icon id="sidebar-button--icon" :name="icon"> </c-icon> {{ title }} </c-box>
    </div>
</template>

<script>
import { CBox, CIcon } from "@chakra-ui/vue";
export default {
    name: "SidebarButton",
    components: {
        CBox,
        CIcon,
    },
    props: {
        title: {
            type: String,
            default: "Sidebar",
        },
        icon: {
            type: String,
            default: "",
        },
        callback: {
            type: Function,
            default: () => {},
        },
    },
};
</script>

<style>

.sidebar-button--container {
    width: 100%;
    height: 45px;
    margin-bottom: 4px;
}

.sidebar-button {
    text-align: start;
    border-radius: 14px;
    padding: 8px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    color: white;
}

#sidebar-button--icon {
    margin-right: 8px;
    color: #BD9EFC;
}

.sidebar-button:hover {
    background-color: #60607A;
}
</style>