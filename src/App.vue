<template>
    <c-theme-provider>
        <c-reset />
        <SidebarLayout />
    </c-theme-provider>
</template>

<script>
import { CThemeProvider, CReset } from "@chakra-ui/vue";
import SidebarLayout from "./layouts/SidebarLayout.vue";

export default {
    name: "App",
    components: {
        CThemeProvider,
        CReset,
        SidebarLayout,
    },
};
</script>
