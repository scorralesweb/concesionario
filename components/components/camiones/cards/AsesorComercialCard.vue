<template>
  <li
    data-aos="fade"
    data-aos-duration="800"
  >
    <h3>{{ nombre }}</h3>
    <div>
      <img
        src="~/public/images/camiones/icons/mail.svg"
        alt="Mail"
      />
      <span
        ><NuxtLink :to="'mailto:' + mail"> {{ mail }}</NuxtLink>
      </span>
    </div>
    <div>
      <img
        src="~/public/images/camiones/icons/phone.svg"
        alt="Teléfono"
      />
      <span
        ><NuxtLink :to="'tel:' + telefono">{{ telefono }}</NuxtLink>
      </span>
    </div>
    <div>
      <img
        src="~/public/images/camiones/icons/location.svg"
        alt="Dirección"
      /><span>{{ zona }}</span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineNuxtComponent } from "#app";

export default defineNuxtComponent({
  props: {
    nombre: {
      type: String,
      required: true
    },
    mail: {
      type: String
    },
    telefono: {
      type: String
    },
    zona: {
      type: String
    }
  }
});
</script>
