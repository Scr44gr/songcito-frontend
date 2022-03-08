<template>
    <SidebarMenu title="Songcito Player">
        <SidebarBox title="My Zone">
            <SidebarButton title="History" icon="history" />
            <SidebarButton title="Liked Song" icon="heart" />
            <SidebarButton title="Playlist" icon="list" />
        </SidebarBox>
    </SidebarMenu>
</template>

<script>
import SidebarMenu from "../components/SidebarMenu.vue";
import SidebarBox from "../components/SidebarBox.vue";
import SidebarButton from "../components/SidebarButton.vue";

export default {
    name: "SidebarLayout",
    components: {
        SidebarMenu,
        SidebarBox,
        SidebarButton,
    },
};
</script>

<style>
</style>