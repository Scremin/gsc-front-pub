<style scoped>
    @import url("../Linha3Front-style.scss");
</style>

<template>
    <div class="main_position">

    <div class="config_video_posi">

        <div class="elem_video">

            <!-- teste novo
            <iframe 
                width="560" 
                height="615" 
                src="https://www.youtube.com/embed/uTYq9UmQ1-0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe> -->
            <video controls class="elem_video_int">
                <source type="video/mp4" src="@/assets/vxx.mp4" />
            </video>

            <!--<iframe class="elem_video_int"
                width="560" 
                height="615" 
                src="https://www.youtube.com/embed/uTYq9UmQ1-0"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            -->

            <v-btn icon class="elem_btn green--text">
                <span class=""></span>
                <v-icon icon>mdi-cannabis</v-icon>
            </v-btn>
            
        </div>

    </div>

    <div :style="{
        
        'box-shadow': '0px 10px 60px yellow',
        'margin-top':'-2px',
        'font-size': '0.3rem',
    }"
    >.</div>

    </div>
</template>

<script>

export default {
  components: {
  }
}
</script>