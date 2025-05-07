<template>
  <NuxtLayout name="vans">
    <VansIntro
      tema="light"
      titulo="Nuestros asesores"
      imagenURL="/images/vans/asesorate/nuestros-asesores/"
    >
    </VansIntro>

    <section id="asesores">
      <div class="pageWidth">
        <ul>
          <!-- Asesor comercial -->
          <VansCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </VansCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <VansCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </VansCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <VansCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </VansCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <VansCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </VansCardsAsesorComercialCard>

          <!-- Asesor comercial -->
          <VansCardsAsesorComercialCard
            nombre="Nombre Apellido"
            mail="mail@concesionario.com.ar"
            telefono="+54 11 1234-5678"
            zona="Sucursal, localidad"
          >
          </VansCardsAsesorComercialCard>
        </ul>
      </div>
    </section>

    <!-- Shortcuts-->
    <div id="shortcuts">
      <div class="pageWidth">
        <ul>
          <VansCardsShortcutCard
            titulo="Contacto"
            descripcion="Comunicate con nosotros por diferentes vías."
            icon="/images/vans/icons/phone.svg"
            link="enlace"
          >
          </VansCardsShortcutCard>

          <VansCardsShortcutCard
            titulo="Realizar consulta"
            descripcion="Enviá tu consulta y te responderemos a la brevedad."
            icon="/images/vans/icons/mail.svg"
            link="enlace"
          >
          </VansCardsShortcutCard>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
@import url("~/assets/css/vans/nuestros-asesores.css");
</style>
