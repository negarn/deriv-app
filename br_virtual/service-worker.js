/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_virtual/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_virtual/css/1.css","e258203ae30c953024a1f9e5ce05442e"],["/br_virtual/css/AccountSignupModal.css","15f51f8a9cc631f8f69aeae8495c3c0b"],["/br_virtual/css/account.css","e8303ac7fab93c1cb5beb74e4c17856f"],["/br_virtual/css/app.css","1e4c5d13afb43aa3867c37d3e576f1b8"],["/br_virtual/css/default~modals~mt5.css","a5ff7f4c776148c414e4a1fb9f6ad6d2"],["/br_virtual/css/modals.css","2cbba40be5425e95e65857cf91f0a144"],["/br_virtual/css/mt5.css","3ea5fd5413968a0221383603b37be397"],["/br_virtual/css/notification-messages.css","c7fd1420d9c26acf7b97e464c8359a9c"],["/br_virtual/css/reports.css","f70e420952e60ac7f03f6b13b700a073"],["/br_virtual/css/screen-small.css","82a3cd3c1f88683306606ec4365f287e"],["/br_virtual/css/settings-chart.css","9833db4e5ce2a50ec3350a305334d6da"],["/br_virtual/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/br_virtual/css/work-in-progress.css","f933769638de07be2252cd6b1e839c38"],["/br_virtual/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_virtual/index.html","9422807d90d572ed25bd4067caef6fa6"],["/br_virtual/js/0.71b90cccdc762b47c3cd.js","f766d9078798a16bd5e47041bc124976"],["/br_virtual/js/1.71b90cccdc762b47c3cd.js","39abe194e1782b2155ad286f9ecf863a"],["/br_virtual/js/10.71b90cccdc762b47c3cd.js","c5198e433881b262f2601e226f097682"],["/br_virtual/js/11.71b90cccdc762b47c3cd.js","58b9f41004779bad07908ae22c92571b"],["/br_virtual/js/12.71b90cccdc762b47c3cd.js","405e986ed9c2a33245a6db1ffa6a79f0"],["/br_virtual/js/13.71b90cccdc762b47c3cd.js","c0a9df882380b3dab58c8565277f1005"],["/br_virtual/js/14.71b90cccdc762b47c3cd.js","37468cd85338f22b09c2b5737fb70a45"],["/br_virtual/js/15.71b90cccdc762b47c3cd.js","5882e6d8aaf6cb8ef15cfc13e14d36ac"],["/br_virtual/js/16.71b90cccdc762b47c3cd.js","9e120c0ec1f8dc5791d5c7f598d13751"],["/br_virtual/js/17.71b90cccdc762b47c3cd.js","362dcfc884c2a666a34e499340b3a2c3"],["/br_virtual/js/18.71b90cccdc762b47c3cd.js","069c2943a288e9d862419d3d60496bbd"],["/br_virtual/js/19.71b90cccdc762b47c3cd.js","58eae6dbc7ec9dc85e48fdf02eddb217"],["/br_virtual/js/2.71b90cccdc762b47c3cd.js","051b8e4095fcf7d856abe43ee85f74aa"],["/br_virtual/js/20.71b90cccdc762b47c3cd.js","fa9fd3bced6c2eda39e3fb4547d639b2"],["/br_virtual/js/21.71b90cccdc762b47c3cd.js","b9400cd35424434c033039617d6b5a85"],["/br_virtual/js/22.71b90cccdc762b47c3cd.js","3f9dc8a42e57d185081821c6a702cd60"],["/br_virtual/js/23.71b90cccdc762b47c3cd.js","a1d5df2883cf4cd99da0c965f2f52afa"],["/br_virtual/js/24.71b90cccdc762b47c3cd.js","20780f690489510f7322451c8d232319"],["/br_virtual/js/25.71b90cccdc762b47c3cd.js","0674dc963dd0b461e1306c00e0bbe865"],["/br_virtual/js/26.71b90cccdc762b47c3cd.js","8b69507df39b1633966c9b8a049e9a90"],["/br_virtual/js/27.71b90cccdc762b47c3cd.js","99569555aae9bc62bceb134f2a057c0f"],["/br_virtual/js/28.71b90cccdc762b47c3cd.js","b974e2b754e2d0b1311454bd293bf717"],["/br_virtual/js/29.71b90cccdc762b47c3cd.js","a0e89e5803b2955ccea4689e0ee8ccf8"],["/br_virtual/js/3.71b90cccdc762b47c3cd.js","af876b5118cd31dc20680f142317bf5b"],["/br_virtual/js/30.71b90cccdc762b47c3cd.js","1d2f378a28be00fe6c9598d7ac69f313"],["/br_virtual/js/31.71b90cccdc762b47c3cd.js","f80bb2ce825c8127b5016f129b432515"],["/br_virtual/js/32.71b90cccdc762b47c3cd.js","8bc3e74609ecd2db78dfaa9252bc6616"],["/br_virtual/js/33.71b90cccdc762b47c3cd.js","20afb725ae2b66d6689b9a566f22101e"],["/br_virtual/js/34.71b90cccdc762b47c3cd.js","88de3ac87f1ec327ffdda5ccf6172c1c"],["/br_virtual/js/35.71b90cccdc762b47c3cd.js","db91c681eaa677e0dfd0087d9e099da1"],["/br_virtual/js/36.71b90cccdc762b47c3cd.js","f82902e4eddcac8687e9d7d62df64535"],["/br_virtual/js/37.71b90cccdc762b47c3cd.js","dd8bd6820f1eec80fd9f85da835b2b81"],["/br_virtual/js/38.71b90cccdc762b47c3cd.js","2dc075e5f59fd94f540db55989e42c05"],["/br_virtual/js/39.71b90cccdc762b47c3cd.js","4652c8f8317283e19519bbc692433709"],["/br_virtual/js/4.71b90cccdc762b47c3cd.js","e568cb3808545b2038252a11c8931c8b"],["/br_virtual/js/40.71b90cccdc762b47c3cd.js","ec7ac06704f2f85589cd4d31d66f616f"],["/br_virtual/js/404.71b90cccdc762b47c3cd.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_virtual/js/41.71b90cccdc762b47c3cd.js","29381716c084dba2aee8b075a898d3ee"],["/br_virtual/js/42.71b90cccdc762b47c3cd.js","f0ae09fdee7fa87f68a9324faeab5bc5"],["/br_virtual/js/43.71b90cccdc762b47c3cd.js","f4c399dc97a8122cf6ebcb2cba037983"],["/br_virtual/js/44.71b90cccdc762b47c3cd.js","be2159e9f4388d9e05554371948a0f8c"],["/br_virtual/js/45.71b90cccdc762b47c3cd.js","4380f59877fb868e1a26ccc784a03543"],["/br_virtual/js/46.71b90cccdc762b47c3cd.js","045b041720984b2ffbea71bd94cc4d0d"],["/br_virtual/js/47.71b90cccdc762b47c3cd.js","cc294036c07094e47f532219bcfb884f"],["/br_virtual/js/48.71b90cccdc762b47c3cd.js","e43ffed9a2c4a165df7a573b37810935"],["/br_virtual/js/49.71b90cccdc762b47c3cd.js","778b07adad62698ecb59e1ad661cde4c"],["/br_virtual/js/5.71b90cccdc762b47c3cd.js","8fdb31fb3fdb8b73a66b8fae911db9b7"],["/br_virtual/js/50.71b90cccdc762b47c3cd.js","4d444be4281d2866a16b9265e05190c4"],["/br_virtual/js/51.71b90cccdc762b47c3cd.js","2b6f0df078d4cd5404fa60bdcbc39415"],["/br_virtual/js/52.71b90cccdc762b47c3cd.js","a4ee4ec954ae3c0cfb83e8eba17e5d0c"],["/br_virtual/js/53.71b90cccdc762b47c3cd.js","0df503e8436863c3231af0d957add404"],["/br_virtual/js/54.71b90cccdc762b47c3cd.js","736459d69130ea54c811223cdaf8a891"],["/br_virtual/js/55.71b90cccdc762b47c3cd.js","361c2e97d203d674f31f5b43c8f2f55e"],["/br_virtual/js/56.71b90cccdc762b47c3cd.js","e7159cd560f43c04d51aa09b63fb994a"],["/br_virtual/js/57.71b90cccdc762b47c3cd.js","5a28b88c98a0bee1e71e5f189ff5cec0"],["/br_virtual/js/58.71b90cccdc762b47c3cd.js","acf171b24fcbc53870089136e84434e0"],["/br_virtual/js/59.71b90cccdc762b47c3cd.js","b2d9cc53cda22a2983a592f7e4cd1a8c"],["/br_virtual/js/6.71b90cccdc762b47c3cd.js","18eb55ee65ae019f6d503c0a81266973"],["/br_virtual/js/60.71b90cccdc762b47c3cd.js","da3efa90d14908bb140add37b77e2ef2"],["/br_virtual/js/61.71b90cccdc762b47c3cd.js","c7f3ebab315e69a9e0c6aed9161c0276"],["/br_virtual/js/62.71b90cccdc762b47c3cd.js","da72401d0817076c55b8b98dd09273d5"],["/br_virtual/js/63.71b90cccdc762b47c3cd.js","1214ace7e93eba4563b5dcbd5fa51790"],["/br_virtual/js/64.71b90cccdc762b47c3cd.js","48b90c64577f419bdcd36f6878f041b2"],["/br_virtual/js/65.71b90cccdc762b47c3cd.js","73b5c3593274af00581ed9732c9ff771"],["/br_virtual/js/66.71b90cccdc762b47c3cd.js","ca068b7847ab4954a63c99619908860b"],["/br_virtual/js/67.71b90cccdc762b47c3cd.js","584e764dcc6fcd5d4892f0c8b1d4ec5d"],["/br_virtual/js/68.71b90cccdc762b47c3cd.js","e9b8c25b21fe7f09c6048b3ca80ad6a6"],["/br_virtual/js/69.71b90cccdc762b47c3cd.js","6374691a6e4bae68affad0ad515e297a"],["/br_virtual/js/7.71b90cccdc762b47c3cd.js","44ad42496ee4e631d190e47ae9a06ec9"],["/br_virtual/js/70.71b90cccdc762b47c3cd.js","743fe34f40c191d1c64d708a6206c7f4"],["/br_virtual/js/71.71b90cccdc762b47c3cd.js","1ee4bc9f2dbf937537db9d7ddc3e7a0d"],["/br_virtual/js/72.71b90cccdc762b47c3cd.js","c259fb13657052a223ddf93fccca66a9"],["/br_virtual/js/73.71b90cccdc762b47c3cd.js","c339dce7f85b91e63fa089847477bfb1"],["/br_virtual/js/74.71b90cccdc762b47c3cd.js","9444ebe01e1abe891296b5c8068c9b36"],["/br_virtual/js/75.71b90cccdc762b47c3cd.js","7dc28712ad783bf097a36e672b082529"],["/br_virtual/js/76.71b90cccdc762b47c3cd.js","e1e3b0cf2cbd4168a77406ade4e79eb4"],["/br_virtual/js/77.71b90cccdc762b47c3cd.js","9428b1407c5ec6de2ed8ed797a80f0e9"],["/br_virtual/js/78.71b90cccdc762b47c3cd.js","27b418d222873587e8fa574074ed1e79"],["/br_virtual/js/79.71b90cccdc762b47c3cd.js","2d6ebfa99a4e86a2b7878a46a4dac95d"],["/br_virtual/js/8.71b90cccdc762b47c3cd.js","7cf75cc8a2086c64b9ac065e87c4c2fd"],["/br_virtual/js/80.71b90cccdc762b47c3cd.js","3ed96f67a6f5b6f9e7d91a1f72fb9020"],["/br_virtual/js/81.71b90cccdc762b47c3cd.js","cbbe1f785163cdc94f38767992378f67"],["/br_virtual/js/82.71b90cccdc762b47c3cd.js","13e023493d3fde0030269610322c9646"],["/br_virtual/js/83.71b90cccdc762b47c3cd.js","ada8eeb47099b3e25b4e82c44608f802"],["/br_virtual/js/84.71b90cccdc762b47c3cd.js","a42672a549e600e48f16596c5ebdf565"],["/br_virtual/js/85.71b90cccdc762b47c3cd.js","73c866d6051c7eeb83f63588ab87e91d"],["/br_virtual/js/86.71b90cccdc762b47c3cd.js","23eaf5de2f310ef0609fa0dc38f12831"],["/br_virtual/js/87.71b90cccdc762b47c3cd.js","1c550330e15abe526a014e5afe11e36f"],["/br_virtual/js/88.71b90cccdc762b47c3cd.js","3a871ca4045525cd14e96393a89e0aca"],["/br_virtual/js/89.71b90cccdc762b47c3cd.js","eb71ffd4e351bda1e8724fa9e65dd470"],["/br_virtual/js/9.71b90cccdc762b47c3cd.js","af5fcbbbc7a87df286289358c855a2bb"],["/br_virtual/js/90.71b90cccdc762b47c3cd.js","da679376cd3a5932269858d7180d79c7"],["/br_virtual/js/91.71b90cccdc762b47c3cd.js","9284338421fd23a39df914583af4ddeb"],["/br_virtual/js/92.71b90cccdc762b47c3cd.js","f43bd3d7c5bd6f6c538430964c536ed8"],["/br_virtual/js/93.71b90cccdc762b47c3cd.js","b75091b6e72b108b25a3436e9ef051ba"],["/br_virtual/js/94.71b90cccdc762b47c3cd.js","43d434c417323ac2b5d132e18740f9b2"],["/br_virtual/js/95.71b90cccdc762b47c3cd.js","3b0480bf3ebf7876f5f72cb512071d29"],["/br_virtual/js/96.71b90cccdc762b47c3cd.js","713375a4d6f68fa380c9fa8b0ca8c56e"],["/br_virtual/js/AccountSignupModal.71b90cccdc762b47c3cd.js","3f9cdeed6b78255df05f0841062a0b39"],["/br_virtual/js/ResetPasswordModal.71b90cccdc762b47c3cd.js","c4a36d41dd3d0e89c76caab62ae5f798"],["/br_virtual/js/account-info.71b90cccdc762b47c3cd.js","491b4b5e267492d07b2e5c7a2a12178e"],["/br_virtual/js/account.71b90cccdc762b47c3cd.js","29cc2fb3dcc71270f77496c1eff60f43"],["/br_virtual/js/contract.71b90cccdc762b47c3cd.js","9b44e6a77b9df5969218138e1e7233b2"],["/br_virtual/js/default~modals~mt5.71b90cccdc762b47c3cd.js","d0162e6bbff972f32033470730aba9c6"],["/br_virtual/js/modals.71b90cccdc762b47c3cd.js","4433e93549d2b8a77f5a5d7534d6c775"],["/br_virtual/js/mt5.71b90cccdc762b47c3cd.js","ae52bae3f96126ce51761422ba9dcc53"],["/br_virtual/js/notification-messages.71b90cccdc762b47c3cd.js","27594c506ac828f2ab8f3b0641fd343d"],["/br_virtual/js/push-notification.71b90cccdc762b47c3cd.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_virtual/js/reports.71b90cccdc762b47c3cd.js","3ce2ac1c893b7ec0f9c99c4424375b6e"],["/br_virtual/js/screen-small.71b90cccdc762b47c3cd.js","2a5e918f77b02d51f1ca71af6f442c58"],["/br_virtual/js/settings-chart.71b90cccdc762b47c3cd.js","1a46449d9b2e0293f1108f0ed5e495c5"],["/br_virtual/js/settings-language.71b90cccdc762b47c3cd.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_virtual/js/settings-theme.71b90cccdc762b47c3cd.js","eaf1703cf4e4a92d77975b3d92347ac1"],["/br_virtual/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/br_virtual/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/br_virtual/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/br_virtual/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/br_virtual/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/br_virtual/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/br_virtual/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/br_virtual/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/br_virtual/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/br_virtual/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/br_virtual/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/br_virtual/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_virtual/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/br_virtual/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/br_virtual/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/br_virtual/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/br_virtual/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/br_virtual/js/toggle-menu-drawer.71b90cccdc762b47c3cd.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_virtual/js/two-month-picker.71b90cccdc762b47c3cd.js","7ffcebff91118e847097df8afcb893b7"],["/br_virtual/js/vendors~smart_chart.71b90cccdc762b47c3cd.js","93fb3cec2734211bb4a690d4c34080a3"],["/br_virtual/js/work-in-progress.71b90cccdc762b47c3cd.js","694c057ec7838bb4b68034d289016484"],["/br_virtual/manifest.json","000cbfe0aa6f074ee765c8905eca6745"],["/br_virtual/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_virtual/public/images/app/cashier/account_switcher.jpg","b43d0519255cad2406f09f0c7d75e958"],["/br_virtual/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_virtual/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_virtual/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_virtual/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_virtual/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_virtual/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_virtual/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_virtual/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_virtual/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_virtual/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_virtual/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_virtual/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_virtual/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_virtual/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_virtual/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_virtual/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_virtual/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_virtual/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_virtual/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_virtual/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_virtual/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_virtual/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_virtual/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_virtual/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_virtual/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/br_virtual/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});






