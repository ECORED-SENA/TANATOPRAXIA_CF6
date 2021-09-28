<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.mb-2.fondo-bg
      .col-lg-12.px-md-5
        .row.justify-content-around.fondo-intro.mb-4(style="border-radius: 8px;")
          .col-md-3.col-sm-1
            //vacio
          .col-lg-7.py-md-5.my-5
            .row.justify-content-center
              .col-auto.align-self-center
                figure
                  img.mx-auto(src='@/assets/curso/img-intro1.svg', alt='imagen ambiental', style='width: 110px;')
              .col
                p.mb-0
                  b(style="color: #008F85;") Apreciado aprendiz 
                  b-none , bienvenido a esta experiencia de aprendizaje pensada desde la 
                  b desinfección del cadáver, de acuerdo con técnicas de asepsia, normas de bioseguridad y salud laboral. 
                  b-none Le sugerimos observar el siguiente recurso educativo para obtener información antes de iniciar su aprendizaje. 
                  b(style="color: #008F85;") Bienvenido
                  b-none .

        .row.justify-content-center.mb-4
          .col-lg-11.px-md-5
            PasosA.color-primario.mb-5(tipo="n")
              .row
                .col-md-12.mb-4.mb-md-0
                  .tarjeta-avatar-b.mb-0
                    .tarjeta-avatar-b__img(style='')
                      img.mx-auto(src='@/assets/curso/img-intro2.svg' alt='AvatarTop' style='width: 86px;')
                    .tarjeta
                      .p-4
                        p.mb-0 El presente componente de formación surge con la intención que usted identifique cuáles son los procesos a considerar para desinfectar un cadáver e instrumentos. La desinfección es el primer paso del proceso del embalsamamiento, ya que luego continúa la preservación química y la tanatoestética.
              .row
                .col-md-12.mb-4.mb-md-0
                  .tarjeta-avatar-b.mb-0
                    .tarjeta
                      .p-4.text-start
                        p.mb-0 La desinfección es el primer paso del proceso de embalsamamiento, ya que luego continúa la preservación química y la tanatoestética.
                    .tarjeta-avatar-b__img(style='')
                      img.mx-auto(src='@/assets/curso/img-intro3.svg' alt='AvatarTop' style='width: 96px;')
                      
              .row
                .col-md-12.mb-4.mb-md-0
                  .tarjeta-avatar-b.mb-0
                    .tarjeta-avatar-b__img(style='')
                      img.mx-auto(src='@/assets/curso/img-intro4.svg' alt='AvatarTop' style='width: 80px;')
                    .tarjeta
                      .p-4
                        p.mb-0 Recuerde que la práctica de embalsamamiento supone que todos los cuerpos poseen agentes infecciosos por eso se desarrollan temáticas en este componente relacionadas con  la asepsia y sus técnicas y los momentos de la desinfección esperada en el laboratorio de tanatopraxia.
              .row
                .col-md-12.mb-4.mb-md-0
                  .tarjeta-avatar-b.mb-0
                    .tarjeta
                      .p-4.text-start
                        p.mb-0 Comprendido las temáticas dadas en este componente mantenga presente en sus prácticas el uso de elementos de bioseguridad para cuidar la salud de su entorno y la suya.
                    .tarjeta-avatar-b__img(style='')
                      img.mx-auto(src='@/assets/curso/img-intro5.svg' alt='AvatarTop' style='width: 80px;')
                      
              .row
                .col-md-12.mb-4.mb-md-0
                  .tarjeta-avatar-b.mb-0
                    .tarjeta-avatar-b__img(style='')
                      img.mx-auto(src='@/assets/curso/img-intro6.svg' alt='AvatarTop' style='width: 70px;')
                    .tarjeta
                      .p-4.text-start
                        p.mb-0 Para su aprendizaje debe seguir las orientaciones dadas por su instructor y comprender el contenido para así desarrollar conocimientos, habilidades y actitudes que lo lleven a desempeñarse como un buen técnico.
                      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
