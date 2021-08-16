(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0m2K":function(e,a,t){"use strict";t.r(a);var r=t("HaE+"),n=(t("ls82"),t("2B1R"),t("TeQF"),t("sMBO"),t("tkto"),t("ma9I"),t("QWBl"),t("FZtP"),t("vDqi")),s=t.n(n),l={metaInfo:{title:"文章參數產生器"},components:{gameCard:t("I6u/").a},data:function(){return{game:null,isLevel:!1,gameData:null,level:null,category:null,categoryVariable:{},code:null}},computed:{GameCategories:function(){return this.gameData&&!this.isLevel?this.gameData.categories.data.filter((function(e){return"per-game"===e.type})).map((function(e){return{text:e.name,value:e}})):this.isLevel&&this.level?this.level.categories.data.filter((function(e){return"per-level"===e.type})).map((function(e){return{text:e.name,value:e}})):[]},GameCategoriesVariables:function(){return this.category?this.category.variables.data:[]},GameLevels:function(){return this.gameData?this.gameData.levels.data.map((function(e){return{text:e.name,value:e}})):[]}},watch:{game:function(){this.gameData&&(this.resetVal(),this.gameData=null)},isLevel:function(){this.resetVal()}},methods:{searchGame:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.resetVal(),e.gameData=null,e.game){a.next=4;break}return a.abrupt("return");case 4:return t="https://www.speedrun.com/api/v1/games/".concat(e.game,"?embed=categories.variables,levels.categories.variables"),a.prev=5,a.next=8,s.a.get(t);case 8:r=a.sent,e.gameData=r.data.data,a.next=15;break;case 12:a.prev=12,a.t0=a.catch(5),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[5,12]])})))()},resetVal:function(){this.code=null,this.level=null,this.category=null,this.categoryVariable={}},objectToItems:function(e){return Object.keys(e).map((function(a){return{text:e[a].label,value:a}}))},genCode:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.code=e.game,e.level&&(e.code="".concat(e.code,"/").concat(e.level.id)),e.category&&(e.code="".concat(e.code,"#").concat(e.category.id)),Object.keys(e.categoryVariable).forEach((function(a,t){e.categoryVariable[a]&&(0===t&&(e.code="".concat(e.code,"?")),e.code="".concat(e.code,"&var-").concat(a,"=").concat(e.categoryVariable[a]))}));case 4:case"end":return a.stop()}}),a)})))()}}},c=t("KHd+"),i=Object(c.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Layout",[t("section",{staticClass:"SpeedrunCom container"},[t("h1",[e._v("Speedrun.com 文章參數產生器")]),t("v-card",{staticClass:"mt-5",attrs:{dark:""}},[t("v-card-title",[e._v("1. 輸入遊戲名稱縮寫")]),t("v-card-text",[t("v-text-field",{attrs:{label:"遊戲縮寫",outlined:""},model:{value:e.game,callback:function(a){e.game=a},expression:"game"}}),t("v-btn",{on:{click:function(a){return a.stopPropagation(),e.searchGame.apply(null,arguments)}}},[e._v("查詢")])],1)],1),e.gameData?t("v-card",{staticClass:"mt-5",attrs:{dark:""}},[t("v-card-title",[e._v("2. 選擇Speedrun關卡/項目")]),t("v-card-text",[t("v-checkbox",{staticClass:"mb-3",attrs:{label:"為個別關卡"},model:{value:e.isLevel,callback:function(a){e.isLevel=a},expression:"isLevel"}}),e.isLevel?t("v-select",{attrs:{label:"Speedrun關卡",items:e.GameLevels,outlined:""},model:{value:e.level,callback:function(a){e.level=a},expression:"level"}}):e._e(),t("v-select",{attrs:{label:"Speedrun項目",items:e.GameCategories,outlined:""},model:{value:e.category,callback:function(a){e.category=a},expression:"category"}}),e.GameCategoriesVariables.length?t("v-divider",{staticClass:"mx-4"}):e._e(),e._l(e.GameCategoriesVariables,(function(a){return[t("v-select",{key:a.id,attrs:{label:a.name,items:e.objectToItems(a.values.values),clearable:"",outlined:""},model:{value:e.categoryVariable[a.id],callback:function(t){e.$set(e.categoryVariable,a.id,t)},expression:"categoryVariable[v.id]"}})]})),t("v-btn",{attrs:{disabled:!e.category},on:{click:function(a){return a.stopPropagation(),e.genCode.apply(null,arguments)}}},[e._v("產生")])],2)],1):e._e(),e.code?t("v-card",{staticClass:"mt-5",attrs:{dark:""}},[t("v-card-title",[e._v("3. 複製並貼至文章內")]),t("v-card-text",[t("v-text-field",{attrs:{value:e.code,readonly:"",outlined:""}}),t("div",{staticClass:"my-2"},[t("game-card",{attrs:{gameUrl:e.code}})],1)],1)],1):e._e()],1)])}),[],!1,null,null,null);a.default=i.exports},Goad:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t("rB9j"),t("Rm1S");var r={methods:{getGamesVar:function(e){var a=e.match(/([a-zA-Z0-9_]*)[/]?([a-zA-Z0-9_]*)[#]?([a-zA-Z0-9_]*)[?]?([a-zA-Z0-9_&=-]*)*/);return{game:a[1]||null,level:a[2]||null,category:a[3]||null,var:a[4]||null}},getPostImg:function(e){if(!e)return null;var a=e.match(/<img src="([a-zA-Z0-9:/.]*)"/);return a&&a[1]||null}}}},"I6u/":function(e,a,t){"use strict";var r=t("HaE+"),n=(t("ls82"),t("E9XD"),t("QWBl"),t("FZtP"),t("tkto"),t("07d7"),t("3bBZ"),t("ma9I"),t("vDqi")),s=t.n(n),l=t("Goad"),c={props:{gameUrl:{type:String,default:null}},mixins:[l.a],data:function(){return{gameVar:null,gameData:null}},computed:{userList:function(){return this.gameData?this.gameData.players.data.reduce((function(e,a){return e[a.id]={name:a.names.international,color:a["name-style"]["color-from"].dark},e}),{}):{}},boxArt:function(){return this.gameData?"https://static-cdn.jtvnw.net/ttv-boxart/".concat(this.gameData.game.data.names.twitch,"-285x380.jpg"):"https://static-cdn.jtvnw.net/ttv-static/404_boxart-285x380.jpg"},varriableList:function(){var e={};return this.gameData.variables.data.forEach((function(a){Object.keys(a.values.values).forEach((function(t){e[t]=a.values.values[t].label}))})),e}},watch:{gameUrl:function(){this.getGameData()}},methods:{getGameData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.gameData=null,e.gameVar=e.getGamesVar(e.gameUrl),t=e.gameVar.level?"https://www.speedrun.com/api/v1/leaderboards/".concat(e.gameVar.game,"/level/").concat(e.gameVar.level,"/").concat(e.gameVar.category,"?top=3&embed=players,game,category,level,game.platforms,variables"):"https://www.speedrun.com/api/v1/leaderboards/".concat(e.gameVar.game,"/category/").concat(e.gameVar.category,"?top=3&embed=players,game,category,level,game.platforms,variables"),e.gameVar.var&&(t="".concat(t).concat(e.gameVar.var)),a.prev=4,a.next=7,s.a.get(t);case 7:r=a.sent,e.gameData=r.data.data,a.next=14;break;case 11:a.prev=11,a.t0=a.catch(4),e.gameData=null;case 14:case"end":return a.stop()}}),a,null,[[4,11]])})))()}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.getGameData();case 1:case"end":return a.stop()}}),a)})))()},created:function(){this.rankList={0:"-",1:"1st",2:"2nd",3:"3rd"}}},i=(t("oD+q"),t("KHd+")),o=Object(i.a)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",{staticClass:"GameCard pa-3 mx-auto",class:{"GameCard--vertical":e.$vuetify.breakpoint.smAndDown},attrs:{color:"#252525"}},[e.gameData?[t("div",{staticClass:"GameCard__img"},[t("v-img",{attrs:{"aspect-ratio":"0.75","min-width":"200","max-width":"285",src:e.boxArt}})],1),t("div",{staticClass:"GameCard__text"},[t("div",{staticClass:"GameCard__title"},[e._v(e._s(e.gameData.game.data.names.international))]),t("div",{staticClass:"GameCard__platforms white--text text--darken-1"},e._l(e.gameData.game.data.platforms.data,(function(a,r){return t("div",{key:a.id},[0!==r?[e._v(", ")]:e._e(),e._v(e._s(a.name)+"\n        ")],2)})),0),t("div",{staticClass:"GameCard__category white--text text--darken-1"},[t("a",{attrs:{href:e.gameData.weblink,target:"_blank",rel:"noreferer"}},[e.gameData.level.data.name?t("span",[e._v("\n            "+e._s(e.gameData.level.data.name+" - ")+"\n          ")]):e._e(),t("span",[e._v(e._s(e.gameData.category.data.name))])]),e._l(e.gameData.values,(function(a){return t("span",{key:"var-"+a},[e._v("\n          "+e._s(" / "+e.varriableList[a])+"\n        ")])}))],2),t("table",{staticClass:"GameCard__table my-2 white--text text--darken-1"},[t("thead",[t("tr",[t("th",[e._v("Rank")]),t("th",[e._v("Player")]),t("th",[e._v("Time")])])]),t("tbody",e._l(e.gameData.runs,(function(a){return t("tr",{key:a.run.id},[t("td",{staticClass:"text-center"},[a.place>=1&&a.place<=3?t("img",{staticClass:"GameCard__trophy",attrs:{src:"https://www.speedrun.com/themes/Default/"+e.rankList[a.place]+".png"}}):e._e(),e._v("\n              "+e._s(e.rankList[a.place])+"\n            ")]),t("td",e._l(a.run.players,(function(r){return t("span",{key:a.run.id+"-"+r.id,staticClass:"mr-2",style:"color:"+e.userList[r.id].color},[e._v("\n                "+e._s(e.userList[r.id].name)+"\n              ")])})),0),t("td",{staticClass:"text-center"},[e._v(e._s(e._f("time")(a.run.times.primary)))])])})),0)])])]:[t("div",{staticClass:"GameCard__img"},[t("v-skeleton-loader",{attrs:{type:"image","min-width":"200","max-width":"285"}})],1),t("v-skeleton-loader",{staticClass:"GameCard__text",attrs:{type:"article"}})]],2)}),[],!1,null,null,null);a.a=o.exports},QpkI:function(e,a,t){},"oD+q":function(e,a,t){"use strict";t("QpkI")}}]);