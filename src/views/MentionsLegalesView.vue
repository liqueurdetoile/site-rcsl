<script setup lang="ts">
import PageLayout from '../components/page-layout.vue';
import MenuFooter from '@/components/menu-footer.vue';
</script>

<template>
    <PageLayout>
      <template v-slot:header>        
        <h1>Mentions légales</h1>
      </template>
      <template v-slot:default>
        <h2 class="text-rouge-500">Edition du site</h2>
        <p>Le site est <tt>saintlo-rugby.fr</tt> est édité par le Rugby Club Saint-Lois, rue des Ronchettes 50000 SAINT-LÔ (RNA W504000072, SIRET 40925747400018), association sportive représentée par son président en exercice.</p>
        <h3>Contact</h3>
        <p>Vous pouvez nous contacter par le biais de notre <a href="https://www.facebook.com/RugbyClubSaintLoAgglo" target="_blank">page Facebook</a></p>
        <h3>Hébergement</h3>
        <p>Le site est hébergé par par SAS OVH, dont le siège social est situé 2 rue Kellermann 59 100 Roubaix – FRANCE.</p>
        <h3>Conception et réalisation</h3>
        <p>Le site a été conçu et réalisé par <a href="https://www.liqueurdetoile.com" target="_blank">Liqueur de Toile</a></p>
        <h3>Données personnelles</h3>
        <p>Aucune donnée personnelle n'est collectée via ce site</p>
        <MenuFooter></MenuFooter>
      </template>
    </PageLayout>    
</template>

