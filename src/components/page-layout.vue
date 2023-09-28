<script setup lang="ts">
import RcslLogo from '../components/logo-rcsl.vue';
import { RouterLink } from 'vue-router';

const cdate = new Date().getFullYear();
defineProps({
    hero: String
})
</script>

<template>
    <div class="page h-screen flex flex-col md:flex-row">
        <header class="flex flex-col justify-center min-h-screen w-screen md:w-[33vw] p-4 md:p-6 xl:p-12 bg-jaune-500 relative">
            <div class="absolute top-0 left-0 w-screen md:w-[33vw] h-screen z-0 overflow-hidden">
                <img v-if="hero" :src="hero" class="object-cover object-center min-w-full min-h-full" alt="">
            </div>
            <div class="flex flex-col gap-8 w-full items-center bg-black/50 text-white p-4 md:p-6 xl:p-12 text-center rounded-xl z-10">
                <div class="flex flex-col items-center">
                    <RouterLink to="/" title="Retour à l'accueil"><RcslLogo class="max-w-[35vw] landscape:max-w-[35vh] md:landscape:max-w-[10vw] md:max-w-[10vw]"></RcslLogo></RouterLink>
                    <div class="text-normal">Fondé en 1966</div>
                </div>
                <slot name="header"></slot>
                <a href="#suite" aria-hidden="true"><button class="md:hidden mt-8 font-black text-white bg-rouge-500 py-4 px-6 rounded-xl" ><slot name="header-button">Lire la suite</slot></button></a>
            </div>
        </header>
        
        <div class="flex flex-col overflow-auto min-h-full w-screen md:w-[67vw] gap-y-8">
            <div class="flex-grow flex md:items-center">
                <main id="suite" class="p-6 xl:p-16 text-xl">
                    <slot></slot>            
                </main>          
            </div>
            
            <footer class="flex justify-center flex-wrap gap-x-3 text-base p-4 md:p-6">
                <div>&copy; {{cdate}} Rugby Club Saint-Lô Agglo</div>
                <div>|</div>
                <RouterLink to="/mentions-legales">Mentions Légales</RouterLink>
                <div>|</div>
                <div>Réalisation : <a href="https://www.liqueurdetoile.com" target="_blank">Liqueur de Toile</a></div>
            </footer>
        </div>
    </div>
</template>

<style lang="sass">
main
    h2
        margin: 2rem 0
</style>