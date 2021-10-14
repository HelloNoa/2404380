<template>
  <div>
  <v-layout class="feature kv">
    <div class="obj">
      <v-img
        :src="require('../assets/main/key-visual.png')"
        class="bg"
        contain
        height="auto"
      />
      <div class="logo">
        <v-img
          :src="require('../assets/main/logo.svg')"
          class=""
          contain
          height="auto"
        />
      </div>
      <v-row
        cols="12"
        class="main-menu"
        style="position: absolute; text-align:right"
      >
        <button v-for="link in links"
          :key="link.text"
          color="transparant"
          style="color:#fff"
          v-on:click="linkto(link.href)"
        >
          {{ link.text }}
        </button>
      </v-row>
    </div>
    <div class="txt text-center">
      <h1>
        전세계 IT전문가를 만나는 곳 <br />
        CANDi Factory
      </h1>
      <p>
      CANDi는 비즈니스에 필요한 IT기술을 지닌 파트너들을 전세계로 부터 효율적인 비용으로 연결시켜주는 글로벌 워킹 협업 플랫폼 입니다. CANDi만의 양방향 작업 모니터링 시스템하에 시스템 설계, UI/UX 개발, 소프트웨어 프로그래밍등 4,096여 스킬을 가진 파트너들을 만나보세요.
      </p>
      <a href="#">Explore More</a>
    </div>
  </v-layout>

    <v-layout class="feature f01">
      <ul>
        <li v-for="txt in f01txt"
          :key="txt.title"
        >
          <p>{{txt.title}}</p>
          <h3>{{txt.desc}}</h3>
        </li>
      </ul>
    </v-layout>

    <v-layout class="feature f02">
      <div class="txt text-left">
        <h3 class="feature-title">
          내 비즈니스를 위한 IT 프로젝트를 등록하고, <br />
          전세계의 전문가를 만나보세요.
        </h3>
      </div>
      <div class="menu-list-wrap">
        <ul class="menu-list" :style="`width:${f02txt.length*300}px`">
          <li  v-for="txt in f02txt"
            :key="txt.id"
            :class="txt.active"
          >
            <a href="#">
              {{txt.title}}
            </a>
          </li>
        </ul>
      </div>
      <div class="menu-info-wrap">
        <ul class="menu-info" :style="`width:${100 * f02txt.length}%`">
          <li  v-for="txt in f02txt"
            :key="txt.id"
            :class="`${txt.active}`"
          >
            <ul class="list-box">
              <li  v-for="listbox in txt.info"
                :key="listbox.id"
                class=""
              >
                <h3 class="list-sub-title">{{listbox.title}}</h3>
                <a class="heart" href="#"></a>
                <ul class="sub-list">
                  <li  v-for="sublist in listbox.sublist"
                    :key="sublist.title"
                  >
                    <p class="sub-list-desc">{{sublist.title}} <strong>{{sublist.desc}}</strong></p>
                  </li>
                </ul>
                <p class="list-desc">{{listbox.desc}}</p>
                <ul class="tag-list">
                  <li  v-for="tag in listbox.tag"
                    :key="tag"
                  >
                    <p class="tag-desc">{{tag}}</p>
                  </li>
                </ul>
                <a class="more-project" href="#">프로젝트 더보기</a>
              </li>
                <a class="request-project" href="#">프로젝트 등록하기</a>
            </ul>
          </li>
        </ul>
      </div>
    </v-layout>

    <v-layout class="feature f03">
      <div class="obj">
        <v-img
          :src="require('../assets/main/f03-bg.png')"
          class="bg"
          contain
          height="auto"
        />
      </div>
      <div class="txt text-left">
        <h3 class="feature-title">
          실시간 프로젝트 진행사항 확인, 단계별 마이크로 검증으로 <br />
          완벽한 결과물을 만드는 CANDi만의 프로세스
        </h3>
      </div>
      <ul class="menu-list">
        <li  v-for="txt in f03txt"
          :key="txt.id"
          :class="txt.active"
        >
          <a href="#">
            {{txt.id+1}}
          </a>
        </li>
      </ul>
      <div class="menu-info-wrap">
        <ul class="menu-info" :style="`width:${100 * f03txt.length}%`">
          <li  v-for="txt in f03txt"
            :key="txt.id"
            :class="txt.active"
          >
            <p class="list-sub-title">step{{txt.id+1}}</p>
            <h3 class="list-title">
              {{txt.title}}
            </h3>
            <div class="list-box">
              <div class="logo">
                <v-img
                  :src="require(`../assets/main/${txt.src}`)"
                  class="bg"
                  contain
                  height="auto"
                />
              </div>
              <p class="list-desc">
                {{txt.desc}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </v-layout>

    <v-layout class="feature f04">
      <div class="txt text-center">
        <h3 class="feature-title">
          캔디팩토리는 <br />
          효율적이고 목표지향적인 개발 생태계를 구축합니다.
        </h3>
        <ul class="">
          <li  v-for="txt in f04txt"
            :key="txt.title"
          >
            <div class="logo">
              <v-img
                :src="require(`../assets/main/${txt.src}`)"
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

    <v-layout class="feature f05">
      <div class="txt text-left">
        <p class="feature-sub-title">Gig Economy</p>
        <h3 class="feature-title">
          최소 업무 단위로 <br/>
          전세계의 수요자와 공급자를 연결합니다.
        </h3>
        <div class="menu-list-wrap">
          <ul :style="`width:150%`">
            <li  v-for="txt in f05txt"
              :key="txt.id"
            >
              <div class="obj">
                <v-img
                  :src="require(`../assets/main/${txt.src}`)"
                  class=""
                  contain
                  height="auto"
                />
              </div>
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
        <a href="#" class="btn">글로벌 IT전문가 만나기</a>
      </div>
    </v-layout>

    <v-layout class="feature f06">
      <div class="obj">
        <v-img
          :src="require('../assets/main/f06-bg.png')"
          class="bg"
          contain
          height="auto"
        />
      </div>
      <div class="txt text-center">
        <p class="feature-sub-title">Global Contribution</p>
        <h3 class="feature-title">CANDi Factory 는 <br />사회적 가치를창출 하고, 과잉의 자원을 분배합니다.</h3>
        <p class="feature-desc text-left">CANDi 이용자들은 우리 모두의 상생의 가치 제고에 기여를 합니다. 구성원들은 하드웨어, 소프트웨어, 리워드 기부를 할 수 있으며 CANDi 팀은 저개발 국가의 부족한 IT 인프라와 IT 교육을 제공합니다. CANDi는 지구촌 곳곳에 선한 영향력을 발휘하여 사람을 가장 중요한 인적 자원으로 탈바꿈합니다. 사회적 가치를 창출하고 과잉의 자원을 분배함으로서 지구 재생 프로젝트를 추진합니다.</p>
        <a href="#" class="btn text-left">CANDi 시작하기</a>
      </div>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Main',

    data: () => ({
      links: [
        {
          text : "About",
          href: '/',
        },
        {
          text : "Work Marketplace",
          href: '/',
        },
        {
          text : "Work Manager",
          href: '/',
        },
        {
          text : "Gig Economy",
          href: '/',
        },
        {
          text : "Global Contribution",
          href: '/',
        },
        {
          text : "Application Field",
          href: '/',
        },
      ],
      f01txt: [
        {
          title : "등록된 프로젝트",
          desc : "109,030개",
        },
        {
          title : "글로벌 IT전문가",
          desc : "239,000명",
        },
        {
          title : "등록된 스킬",
          desc : "57,032개",
        },
        {
          title : "연결금액",
          desc : "123,456,032원",
        },
      ],
      f02txt: [
        {
          id : 1,
          title : "Digital Labeling",
          active : "active",
          info : [
            {
              id : 0,
              title : "LGE Sales Insight 포털 구축",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
            {
              id : 1,
              title : "Cloud 기반 데이터 수집분석 Web플랫폼 ..",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
          ],
        },
        {
          id : 2,
          title : "Mobile Application",
          active : "",
          info : [
            {
              id : 0,
              title : "LGE Sales Insight 포털 구축",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
            {
              id : 1,
              title : "Cloud 기반 데이터 수집분석 Web플랫폼 ..",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
          ],
        },
        {
          id : 3,
          title : "Web Publishing and Development",
          active : "",
          info : [
            {
              id : 0,
              title : "LGE Sales Insight 포털 구축",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
            {
              id : 1,
              title : "Cloud 기반 데이터 수집분석 Web플랫폼 ..",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
          ],
        },
        {
          id : 4,
          title : "Big Data Analysis",
          active : "",
          info : [
            {
              id : 0,
              title : "LGE Sales Insight 포털 구축",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
            {
              id : 1,
              title : "Cloud 기반 데이터 수집분석 Web플랫폼 ..",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
          ],
        },
        {
          id : 5,
          title : "Crowd intelligence",
          active : "",
          info : [
            {
              id : 0,
              title : "LGE Sales Insight 포털 구축",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
            {
              id : 1,
              title : "Cloud 기반 데이터 수집분석 Web플랫폼 ..",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
          ],
        },
        {
          id : 6,
          title : "Metarverse",
          active : "",
          info : [
            {
              id : 0,
              title : "LGE Sales Insight 포털 구축",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
            {
              id : 1,
              title : "Cloud 기반 데이터 수집분석 Web플랫폼 ..",
              sublist : [
                {
                  title : "Budget",
                  desc : "$390",
                },
                {
                  title : "Experience Level",
                  desc : "Intermediate",
                },
              ],
              desc : "프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명 입니다. 프로젝트에 대한 설명입니다...",
              tag : ["# Strategy&Planning","# Cloud","# react"],
            },
          ],
        },
      ],

      f03txt: [
        {
          id : 0,
          title : "내 프로젝트에 딱 맞는 IT파트너 찾기",
          desc : "컨슈머가 진행하고자 하는 프로젝트를 요구사항에 맞추어 올리거나 플랫폼에서 직접 내 프로젝트에 맞는 파트너를 선정하여 컨택합니다. 만일 컨슈머가 비전문가일 경우 빅데이터에 기반한 CANDi의 최첨단 AI 알고리즘에 의해 개발자를 추천받을 수 있으며 개발 사례들을 통해 선정할 수도 있습니다.",
          active : "active",
          src : "f03-ico-1.svg",
        },
        {
          id : 1,
          title : "내 프로젝트에 딱 맞는 IT파트너 찾기",
          desc : "컨슈머가 진행하고자 하는 프로젝트를 요구사항에 맞추어 올리거나 플랫폼에서 직접 내 프로젝트에 맞는 파트너를 선정하여 컨택합니다. 만일 컨슈머가 비전문가일 경우 빅데이터에 기반한 CANDi의 최첨단 AI 알고리즘에 의해 개발자를 추천받을 수 있으며 개발 사례들을 통해 선정할 수도 있습니다.",
          active : "",
          src : "f03-ico-1.svg",
        },
        {
          id : 2,
          title : "내 프로젝트에 딱 맞는 IT파트너 찾기",
          desc : "컨슈머가 진행하고자 하는 프로젝트를 요구사항에 맞추어 올리거나 플랫폼에서 직접 내 프로젝트에 맞는 파트너를 선정하여 컨택합니다. 만일 컨슈머가 비전문가일 경우 빅데이터에 기반한 CANDi의 최첨단 AI 알고리즘에 의해 개발자를 추천받을 수 있으며 개발 사례들을 통해 선정할 수도 있습니다.",
          active : "",
          src : "f03-ico-1.svg",
        },
      ],
      f04txt: [
        {
          title : "실시간으로 진행사항 점검",
          desc : "캔디만의 쌍방향 관리시스템으로  프로젝트 운영을 효율적으로 할 수 있습니다.",
          src : "f04-ico-1.svg",
        },
        {
          title : "안전하고 검증된 계약시스템",
          desc : "캔디만의 쌍방향 관리시스템으로  프로젝트 운영을 효율적으로 할 수 있습니다.",
          src : "f04-ico-2.svg",
        },
        {
          title : "가장 합리적인 프로젝트비용",
          desc : "전세계 전문가를 한눈에 비교하고 합리적인 비용으로 최고의 결과물을 받아보세요",
          src : "f04-ico-3.svg",
        },
      ],
      f05txt: [
        {
          id : 1,
          title : "Candi kim",
          desc : "Ai software \n/Web development",
          src : "f05-list-1.png",
          color : "#0F2E63",
        },
        {
          id : 2,
          title : "Seulki Lee",
          desc : "Mobile UX design \n/Web design",
          src : "f05-list-2.png",
          color : "#0058C0",
        },
        {
          id : 3,
          title : "Seulki Lee",
          desc : "Mobile UX design \n/Web design",
          src : "f05-list-3.png",
          color : "#0092C0",
        },
        {
          id : 4,
          title : "Seulki Lee",
          desc : "Mobile UX design \n/Web design",
          src : "f05-list-4.png",
          color : "#0F2E63",
        },
        {
          id : 5,
          title : "Seulki Lee",
          desc : "Mobile UX design \n/Web design",
          src : "f05-list-1.png",
          color : "#29C1CB",
        },
      ]
    }), 
    methods: {
      linkto: (href) => {
        window.location = href;
      }
    }
  }
</script>

<style>
@import './../css/main.css';
</style>