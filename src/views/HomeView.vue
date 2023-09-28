<script setup lang="ts">
import PageLayout from '../components/page-layout.vue';
import MenuFooter from '@/components/menu-footer.vue';
</script>

<template>
    <PageLayout hero="/img/featured/edr-saint-lo-1296x2430.webp">
      <template v-slot:header>        
        <h1>Rugby club<br>Saint-Lô Agglo</h1>
      </template>
      <template v-slot:default>
        <h2 class="text-rouge-500">Bienvenue sur le site du Rugby Club Saint-Lô Agglo</h2>
        <p>
            Créé en 1966, le club de rugby de Saint-Lô permet de jouer au rugby
            dès le plus jeune âge grâce à son école de rugby.
          </p>
          <p>
            Que ce soit lors des rencontres ou au travers d'évènements spéciaux
            (vide-grenier...), nous allions sourire et
            convivialité pour accueillir tous ceux qui souhaitent passer un bon
            moment et partager l'esprit du rugby.
          </p>
          <p>
            Pour suivre l'actualité du club, connaître nos évènements ou nous contacter, rendez-vous sur nos
            pages facebook.
          </p>
          <p class="font-bold">A très vite !</p>

          <MenuFooter></MenuFooter>
      </template>
    </PageLayout>    
</template>
