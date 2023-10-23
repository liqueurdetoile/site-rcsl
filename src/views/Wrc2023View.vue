<script setup lang="ts">
import PageLayout from '../components/page-layout.vue';
import MenuFooter from '@/components/menu-footer.vue';
</script>

<template>
    <PageLayout hero="/img/featured/xv-france-portrait-1296x2430.webp">
      <template v-slot:header>        
        <h1>Retransmissions en direct des rencontres de la coupe du monde de rugby 2023</h1>
      </template>
      <template v-slot:default>
        <h2 class="text-rouge-500">Réservez vos places pour être certain de pouvoir nous retrouver !</h2>
        <p>Vous pouvez utiliser notre plate-forme de réservation et de paiement sécurisé pour prendre vos places et être certain d'accéder à nos retransmissions sur écran géant des plus belles rencontres de la coupe du monde rugby 2023</p>
        <div class="flex justify-center items-center gap-8">
            <a href="https://rugby-club-st-lo.s2.yapla.com/fr/event-47537" target="_blank" title="Accéder à la plate-forme de réservation">
                <img src="/img/28_octobre_nouvelle-zelande_afrique-du-sud.webp" alt="Afrique du Sud vs Nouvelle-Zélande, 28 octobre 2023" />
            </a>
        </div>
        <MenuFooter :skip="[0]"></MenuFooter>
      </template>
    </PageLayout>    
</template>

