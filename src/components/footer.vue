<template>
  <v-layout class="feature footer">
    <div class="obj">
      <div class="logo">
        <v-img
          :src="require('../assets/main/logo-black.png')"
          class=""
          contain
          height="auto"
        />
      </div>
    </div>
    <div class="txt text-left">
        <p class="">
          <strong>주소</strong> 서울 서초구 신반포로 194 본관 2층 르호봇 오피스 <br />
          <strong>전화</strong> (070) 8064-0981 <br />
          <strong>Email</strong> heycandi@heycandi.com <br />
        </p>
    </div>
    <ul>
      <li  v-for="txt in footertxt"
        :key="txt.id"
      >
      </li>
    </ul>
  </v-layout>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      footertxt : [
        {
          id : 1,
        },
        {
          id : 2,
        },
        {
          id : 3,
        },
        {
          id : 4,
        },
        {
          id : 5,
        },
      ],
    }),
  }
</script>
