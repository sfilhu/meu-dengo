<template>
    <div style="width: 100vw; height: 100vh; background-color: #000;color: #fff">
        <h1 style="margin: 15px 0;text-align: center;">Making of 🌷</h1>

        <v-carousel height="700">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
                <iframe 
                    width="100%" 
                    height="700"
                    :src="`https://www.youtube.com/embed/${item}?autoplay=1&rel=0`" 
                    frameborder="0"
                    allow="accelerometer; autoplay; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </v-carousel-item>
          </v-carousel>
        
    </div>
</template>

<script>
    export default {
        name: 'makinf-of',
        data: () => {
            return {
                items : [
                    'LOGhXNAcYPE',
                    'dQUE7UmAcK8',
                ]
            }
        },
    }
</script>