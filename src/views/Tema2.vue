<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Desinfección del cadáver e instrumentos.
    
    
    
    
    
    
    
    
    
    
    #t_2_1.titulo-segundo
      .h2 2.1 Proceso de desinfección del cadáver.
    
    
    
    
    
    
    
    
    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Desinfección según patologías.
    
    
    
    
    
    
    
    
    separador
    #t_2_3.titulo-segundo
      .h2 2.3 Desinfección de los elementos e insumos.
    
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
