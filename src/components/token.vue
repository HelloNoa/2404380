<template>
  <div class="token">
    <v-layout class="feature kv" >
      <div class="obj">
        <div class="logo" v-on:click="mo_header_click()">
          <v-img
            :src="require('../assets/token/logo-white.svg')"
            class="pc-only"
            contain
            height="auto"
          />
        </div>
      </div>
      <div class="txt text-center">
        <h1>
          CANDi Token
        </h1>
        <p>
        CANDi Token은 소프트웨어 개발 생태계를 <br />
        새로 정의하고 이에 필요한 다국적 인적 자원을 연결하는 <br class="mo-only" />
        새로운 가상화폐입니다
        </p>
        <p class="sub">
          working with @CANDi as cryptocurrency.
        </p>
        <a href="#">Explore More</a>
      </div>
    </v-layout>

    <v-layout class="feature f01">
      <div class="obj">
          <v-img
            :src="require('../assets/token/f01-ico.svg')"
            class=""
            contain
            height="auto"
          />
      </div>
      <div class="txt">
        <p class="breadcrumb">Our vision</p>
        <h3 class="feature-title">
          CANDi Token은 <br />
          소프트웨어 개발 생태계를 새로 정의합니다.
        </h3>
        <p class="feature-desc">
          소프트웨어 개발 생태계는 복잡한 프로젝트가 동시 다발적으로 이루어지고 있는 시장 환경에서 다양한 수급 불균형이 일어나고 있습니다. 공급자와 수요자를 상호 만족시키는 것이 갈수록 어려워 지고 있는 상황에서 소프트웨어 개발 시장 환경에서 데이터를 기반으로 한 참여자들의 생태계를 만들어가고 서로 신뢰할 수 있는 시스템을 만들어 누구에게나 평등한 거래의 기회를 제공하는 것입니다
        </p>
      </div>
    </v-layout>
    
    <v-layout class="feature f02">
      <div class="obj">
      </div>
      <div class="txt">
          <v-img
            :src="require('../assets/token/f02-ico.svg')"
            class="logo"
            contain
          />
        <p class="breadcrumb">Our Mission</p>
        <h3 class="feature-title">
          CANDi Token은 <br />
          다국적 인적 자원을 연결합니다
        </h3>
        <p class="feature-desc">
          CANDi Token 개발팀은 전세계 소프트웨어 개발 시장의 다양성을 이해하고 지역마다 다른 프로그래밍 언어 선호도, 업무 방식을 존중합니다. 이를 바탕으로 소프트웨어 개발에 관련된 수요자와 공급자가 활발히 참여할 수 있도록 생태계를 구축할 것입니다. 사업적인 목적 외에 오픈 소스 등의 공익 목적의 프로젝트 모두 포함한 생태계를 제공할 것입니다. 우리는 코로나라는 거대한 팬데믹 현상속에 살고 있습니다. 이러한 현상은 원격 근무량의 증가, 온라인 시장의 거대한 성장을 일으켰습니다. 이에 따라 수요자는 글로벌 시장에서의 훌륭한 개발인재 수급으로 수요자의 성장을 꾀하고 있습니다.
        </p>
      </div>
    </v-layout>

    <v-layout class="feature f03">
      <div class="txt text-center">
        <ul class="">
          <li  v-for="txt in f03txt"
            :key="txt.title"
          >
            <div class="logo">
              <v-img
                :src="require(`../assets/token/${txt.src}`)"
                class="bg"
                contain
                height="auto"
              />
            </div>
            <p class="feature-sub-title">{{txt.title}}</p>
            <p class="feature-desc text-left">{{txt.desc}}</p>
          </li>
        </ul>
      </div>
    </v-layout>

    <v-layout class="feature f04">
      <div class="txt text-left">
        <p class="feature-sub-title">Problems</p>
        <h3 class="feature-title">
          CANDi Token이 주목하는 <br/>
          현재 소프트웨어 개발 시장의 문제점
        </h3>
        <div class="menu-list-wrap">
          <ul>
            <li  v-for="txt in f04txt"
              :key="txt.id"
            >
              <div class="list-box" :style="`background-color:${txt.color}`">
                <p class="list-sub-title">
                  {{txt.title}}
                </p>
                <p class="list-desc">
                  {{txt.desc}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </v-layout>

    <v-layout class="feature f05">
      <div class="obj">
      </div>
      <div class="txt text-center">
        <h3 class="feature-title">
          CANDi와 함께 하시겠습니까?
        </h3>
        <p class="feature-desc">
          CANDi Token에 대해 더 알아보시려면 <br />
          아래의 백서를 확인하세요.
        </p>
        <a href="#" class="btn">White Paper (KR)</a>
        <a href="#" class="btn blank">White Paper (EN)</a>
      </div>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Token',

    data: () => ({
      f03txt: [
        {
          title : "개발자 정보의 비대칭성",
          desc : "정부나 대기업 주도의 규모의 큰 프로젝트는 공급자에 대한 검증 및 경험이 많기 때문에 어려움을 겪지 않겠지만 소상공인이나 스타트업 등은 공급자 정보를 얻기 어렵습니다. 뿐만 아니라 정보를 알았다 하더라도 이를 검증하는 사실 자체가 어렵습니다.",
          src : "f03-ico1.svg",
        },
        {
          title : "해외 아웃소싱의 등장",
          desc : "소프트웨어 개발은 산업의 특성상 지리적인 제약이 없습니다. 노동 임금이 저렴한 해외 국가의 자원을 활용해 공급자(개발자)를 구할 수 있습니다. 유럽, 미국의 수요자들은 세계 인구 1, 2위를 다투는 중국과 인도 그리고 영어가 가능한 필리핀과 같은 동남아시아 인구를 공급자 삼아 아웃소싱을 하는 추세입니다.",
          src : "f03-ico2.svg",
        },
        {
          title : "긱 이코노미 시장",
          desc : "소프트웨어 개발은 산업의 특성상 지리적인 제약이 없습니다. 노동 임금이 저렴한 해외 국가의 자원을 활용해 공급자(개발자)를 구할 수 있습니다. 유럽, 미국의 수요자들은 세계 인구 1, 2위를 다투는 중국과 인도 그리고 영어가 가능한 필리핀과 같은 동남아시아 인구를 공급자 삼아 아웃소싱을 하는 추세입니다.",
          src : "f03-ico3.svg",
        },
      ],
      f04txt: [
        {
          id : 1,
          title : "역할과 책임의 모호함",
          desc : "개발이라 함에 있어 범위가 정확하지 않습니다. 보통 소프트웨어 개발의 경우 요구사항 판단, 시스템 설계, UI/UX 디자인, 코딩, 테스트, 배포 등의 절차를 통해 진행이 됩니다. 프로젝트 상황에 따라 개발자의 역할이 단일 역할에서 전체 관리운영까지 그 역할과 책임의 모호함은 다양하게 나타납니다.",
          color : "#0092C0",
        },
        {
          id : 2,
          title : "개발자 인건비 상승",
          desc : "개발자 인건비의 상승은 기업의 부담을 가져다 줍니다. 힘들게 채용한 경우에도 이직이나 중도 퇴사 등의 사유로 목적을 달성하기 어려운 경우가 많습니다. 개발자 인건비 상승 추세는 국내는 물론이고 해외에도 상승하는 추세입니다.",
          color : "#0F2E63",
        },
        {
          id : 3,
          title : "수요자의 프로젝트 경험부족",
          desc : "외주를 통해 개발하려는 수요자의 경험이 수요자의 상황마다 다릅니다. 공급자의 스킬셋, 숙련도 등에 따라 수요자를 만족 시킬 수도 있고 그렇지 않을 수도 있습니다. CANDi Token을 통해 제공되는 서비스는 단수의 수요자에 복수의 공급자가 붙어 상황을 객관적으로 판단하고 추진할 수 있습니다.",
          color : "#0058C0",
        },
        {
          id : 4,
          title : "역할과 책임의 모호함",
          desc : "개발이라 함에 있어 범위가 정확하지 않습니다. 보통 소프트웨어 개발의 경우 요구사항 판단, 시스템 설계, UI/UX 디자인, 코딩, 테스트, 배포 등의 절차를 통해 진행이 됩니다. 프로젝트 상황에 따라 개발자의 역할이 단일 역할에서 전체 관리운영까지 그 역할과 책임의 모호함은 다양하게 나타납니다.",
          color : "#0092C0",
        },
        {
          id : 5,
          title : "개발자 인건비 상승",
          desc : "개발자 인건비의 상승은 기업의 부담을 가져다 줍니다. 힘들게 채용한 경우에도 이직이나 중도 퇴사 등의 사유로 목적을 달성하기 어려운 경우가 많습니다. 개발자 인건비 상승 추세는 국내는 물론이고 해외에도 상승하는 추세입니다.",
          color : "#0F2E63",
        },
      ],
    }), 
    created() {
    },
    mounted() {
      this.$nextTick(function () {
        window.onresize = ()=>{
          var size = { width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };
          var width = size.width;
          if (width > 768) {
            document.querySelector('.kv .main-menu').style="display:block !important";
          } else {
            document.querySelector('.kv .main-menu').style="display:none !important";
          }
        }
      });
    },
    methods: {
    }
  }
</script>

<style>
@import './../css/token.css';
</style>