<script setup lang="ts">
defineProps({
    skip: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="pt-8 my-8 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            <a class="item" href="https://www.facebook.com/RugbyClubSaintLoAgglo" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-facebook" class="icon text-5xl text-blue-500" alt="Facebook" />
              <div class="text">Page du club RCSLA</div>
            </a>

            <a class="item" href="https://www.facebook.com/edrcsl" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-facebook" class="icon text-5xl text-blue-500" />
              <div class="text">Page de l'école de rugby</div>
            </a>

            <a class="item" href="https://rugby-club-st-lo.s2.yapla.com/fr/" target="_blank">
              <FontAwesomeIcon icon="fa-solid fa-id-badge" class="icon text-5xl text-orange-900" />
              <div class="text">Paiement licence en ligne</div>
            </a>

            <a class="item" href="https://bocage.saintlo-rugby.fr" target="_blank">
              <FontAwesomeIcon icon="fa-solid fa-trophy" class="icon text-5xl text-green-900" />
              <div class="text">Tournoi du bocage</div>
            </a>

            <a class="item" href="/files/pp_edr_rcsl_2023_2024.pdf" target="_blank">
              <FontAwesomeIcon icon="fa-solid fa-file-pdf" class="icon text-5xl text-red-500" />
              <div class="text">Projet pédagogique EDR 2023-2024</div>
            </a>
          </div>
</template>

<style lang="sass">
.item
  @apply flex items-center gap-2 border p-2 rounded-lg transition-colors duration-500

  &:hover
    @apply bg-rouge-500 border-rouge-500

    .icon,
    .text
      @apply text-white

  .text
    @apply flex-grow px-4 font-black text-gray-800 text-center

  .icon,
  .text
    @apply transition-colors duration-500
</style>