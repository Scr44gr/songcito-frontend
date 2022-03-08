<template>
    <div class="sidebar--container">
        <c-heading id="sidebar-header--title"><c-icon id="sidebar-header--icon" name="play"> </c-icon> {{ title }}</c-heading>
        <c-box class="sidebar--wrapper" d="flex">
            <c-box class="sidebar--content" w="100%" h="100%">
                <slot>
                    <!-- sidebar components goes here. -->
                </slot>
            </c-box>
        </c-box>
    </div>
</template>

<script>
import {CBox, CHeading, CIcon} from "@chakra-ui/vue";

export default {
    components: {
        CBox,
        CHeading,
        CIcon
    },
    props: {
        title: {
            type: String,
            default: "Sidebar",
        },
    },
};
</script>

<style>

.sidebar--container {
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 100vh;
    background-color: #494761;
    background-image: linear-gradient(to bottom, #494761, #2D2B4B);
}


#sidebar-header--title {
    font-size: 20px;
    height: 65px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    padding: 8px;
    text-align: left;
    padding-top: 14px;

}
#sidebar-header--icon{
    padding-bottom: 4px;
    margin-right: 4px;
    font-size: 20px;
}


.sidebar--wrapper {
    width: 100%;
    height: 240px;
    margin-top: 5px;
}

</style>