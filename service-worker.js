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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/1.css","cd39a4ddd69f1c5d3b9f5987b96e75a2"],["/css/3.css","fdf75204216a6aa2bb0db1b19469e986"],["/css/AccountSignupModal.css","6cbb35b4901a87562b3bc40b99bfbdcb"],["/css/app.css","9e05c716c62b8f8d021acdf1dc89758e"],["/css/default~open_position~1833eefb.css","68f0f941424072a8839005fae754ea56"],["/css/modals.css","36ac27218506985cdfe4fff51007b959"],["/css/notification-messages.css","3a4c941d74380bc59f328d97d3d5a29f"],["/css/reports.css","dec2ce4997d7a792e672d40a818d6361"],["/css/screen-small.css","6ef029a4ce7a534a440630f047658efb"],["/css/settings-chart.css","1d923915f7edff10ce7ff315282a9567"],["/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/css/wallet-information.css","68f0f941424072a8839005fae754ea56"],["/css/work-in-progress.css","d50fe922cdf426bafc8e8f12c106e137"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","af5ac8a9944af8ac965832f06ee191a4"],["/js/0.228ff32b9f1ff7e62a1c.js","6290c7f6f722e56f18b4c918a4f8284b"],["/js/1.228ff32b9f1ff7e62a1c.js","ca950bf0c3a058a0028e201eae4e9fe9"],["/js/10.228ff32b9f1ff7e62a1c.js","e9851154950818dcef9f123d1415cef5"],["/js/11.228ff32b9f1ff7e62a1c.js","54e1c166d48172d36a1c8f10edd93d2e"],["/js/12.228ff32b9f1ff7e62a1c.js","d086dd7bfca88aff416b763147eb830b"],["/js/13.228ff32b9f1ff7e62a1c.js","6c4621f5c2d92ee609dd2faec3f0704d"],["/js/14.228ff32b9f1ff7e62a1c.js","7d023a554b11d935d8224f70ddd260cc"],["/js/15.228ff32b9f1ff7e62a1c.js","a3a284275650afbdf4b6672b8fb8bd20"],["/js/16.228ff32b9f1ff7e62a1c.js","52058da97be2312f78a63f8beae0e1d4"],["/js/17.228ff32b9f1ff7e62a1c.js","b63f1145a06a01452344647827f8c4cd"],["/js/18.228ff32b9f1ff7e62a1c.js","0444344e94c68d555c3becc5b61d4ce7"],["/js/19.228ff32b9f1ff7e62a1c.js","b986de0db245576868b56cdebdf096ac"],["/js/2.228ff32b9f1ff7e62a1c.js","5d56c8780c26e7868dda384dae716d18"],["/js/20.228ff32b9f1ff7e62a1c.js","4f7c84970acf2e055e1e54371228548c"],["/js/21.228ff32b9f1ff7e62a1c.js","19689846bbdc539fb7281519775f4401"],["/js/22.228ff32b9f1ff7e62a1c.js","e38aadd978b0d3f164637c87dbda111f"],["/js/23.228ff32b9f1ff7e62a1c.js","2f0e37997d391fd31018147f61fef2eb"],["/js/24.228ff32b9f1ff7e62a1c.js","c883c83101d6e4e6113466a9d4384477"],["/js/25.228ff32b9f1ff7e62a1c.js","64bd32b8f89377cd159fac93473dc436"],["/js/26.228ff32b9f1ff7e62a1c.js","954ca8f27e8f4e78a871a392e8d0027b"],["/js/27.228ff32b9f1ff7e62a1c.js","4c2d1ad55e2c59dc75258946377896ef"],["/js/28.228ff32b9f1ff7e62a1c.js","27641c30b5c71fbe4607e6e9d4420148"],["/js/29.228ff32b9f1ff7e62a1c.js","ab9dad6addf3a879bc4793fb31c445e0"],["/js/3.228ff32b9f1ff7e62a1c.js","c9e4195816efecfecde887bd18955633"],["/js/30.228ff32b9f1ff7e62a1c.js","49e2ec22f4e2af8145ea240cd5d56a0f"],["/js/31.228ff32b9f1ff7e62a1c.js","46c593ee4e31c17de05a576bde682c90"],["/js/32.228ff32b9f1ff7e62a1c.js","548c05bd4bbb0a116c9b90aa9a29d48c"],["/js/33.228ff32b9f1ff7e62a1c.js","1cad622875b625b38b222a0c54abb9bb"],["/js/34.228ff32b9f1ff7e62a1c.js","b29c2cc13328e398cb530427c9fc9988"],["/js/35.228ff32b9f1ff7e62a1c.js","9915eb07ea4f032f95f287c093174fdd"],["/js/36.228ff32b9f1ff7e62a1c.js","2f5a8f07e3e103bfdcfb250567c3842e"],["/js/37.228ff32b9f1ff7e62a1c.js","9c044e2f11ff9b46134d93fa0cd84a0a"],["/js/38.228ff32b9f1ff7e62a1c.js","f6eb4a119b7667a4723a9dc387cc5ee4"],["/js/39.228ff32b9f1ff7e62a1c.js","f92ed401cf864b52b670b64a59952d3f"],["/js/4.228ff32b9f1ff7e62a1c.js","1f678aba0bf88806556724fd7192552b"],["/js/40.228ff32b9f1ff7e62a1c.js","44844d6f6a50f5a75790f8618cd55a9a"],["/js/404.228ff32b9f1ff7e62a1c.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.228ff32b9f1ff7e62a1c.js","414da90d6dd89537836c3b8a7c79eefa"],["/js/42.228ff32b9f1ff7e62a1c.js","1b8f145e77eeb93c9db02b55aa41b58d"],["/js/43.228ff32b9f1ff7e62a1c.js","0751f03ab942e8be64b2382dbb2ff89a"],["/js/44.228ff32b9f1ff7e62a1c.js","25e1ab4db7a879c083fa98aae67a047d"],["/js/45.228ff32b9f1ff7e62a1c.js","a9ee08acfc04978d6d5a0578ae052e31"],["/js/46.228ff32b9f1ff7e62a1c.js","c474137027bc3e6aca29f8cdb1df04ff"],["/js/47.228ff32b9f1ff7e62a1c.js","7d267bbcd8f9a97620f75790c420685c"],["/js/48.228ff32b9f1ff7e62a1c.js","c2e0f5e1314ba028b18ea7f703debbfa"],["/js/49.228ff32b9f1ff7e62a1c.js","cf228b88a9277a91b788afdeaa0fca66"],["/js/5.228ff32b9f1ff7e62a1c.js","dcaa26f6c98e9033b018932228e89069"],["/js/50.228ff32b9f1ff7e62a1c.js","2ac77b0ccf4cecb5c3ed1c6024661375"],["/js/51.228ff32b9f1ff7e62a1c.js","61c40b59e7ba1903b1b9aac0685220de"],["/js/52.228ff32b9f1ff7e62a1c.js","3a80f9f6417f1fd40f588943e61af851"],["/js/53.228ff32b9f1ff7e62a1c.js","7dc7f69e330292961c87af99a8aa0baf"],["/js/54.228ff32b9f1ff7e62a1c.js","082e074c6e6a381e91c7eb4e7e4d8823"],["/js/55.228ff32b9f1ff7e62a1c.js","e6259beb2d708abcd994b4c22262fc2c"],["/js/56.228ff32b9f1ff7e62a1c.js","453db894013fbf5c38f3dcf18338a97a"],["/js/57.228ff32b9f1ff7e62a1c.js","90ef1a0baf5fd66386735272ad4221ac"],["/js/58.228ff32b9f1ff7e62a1c.js","6b7b65ad8b7013c850965e7c58b5e4f8"],["/js/59.228ff32b9f1ff7e62a1c.js","1fea4c7cd19021770326fd3be289aecf"],["/js/6.228ff32b9f1ff7e62a1c.js","18eb55ee65ae019f6d503c0a81266973"],["/js/60.228ff32b9f1ff7e62a1c.js","52c071a9cb0446d954142048c16a6f3b"],["/js/61.228ff32b9f1ff7e62a1c.js","d03576174b16dfeddd16d007af30d0df"],["/js/62.228ff32b9f1ff7e62a1c.js","bd2fdd4bf7c46a82e3bbf0c8dc596d83"],["/js/63.228ff32b9f1ff7e62a1c.js","1f94bf27b8c393597041b96b16d0d1fa"],["/js/64.228ff32b9f1ff7e62a1c.js","47a1928e5a651d315d7b535b16f6aefe"],["/js/65.228ff32b9f1ff7e62a1c.js","a850ca2f0e4255abc1c3dc40761bb305"],["/js/66.228ff32b9f1ff7e62a1c.js","e7eef8a3c771efb7d44ac01134612c1a"],["/js/67.228ff32b9f1ff7e62a1c.js","3b6f59a0b027f268271d0488c30e9560"],["/js/68.228ff32b9f1ff7e62a1c.js","c05a5e2d515e639199df6a37108e1f71"],["/js/69.228ff32b9f1ff7e62a1c.js","46a26e99f8cf78901cb7b83a00e89a72"],["/js/7.228ff32b9f1ff7e62a1c.js","5a31c2b065e1baf688fae236c963642e"],["/js/70.228ff32b9f1ff7e62a1c.js","3f2b4874c93eee71e9938c269e151e31"],["/js/71.228ff32b9f1ff7e62a1c.js","b3029b59053ccce1a2ff164b7326a0ee"],["/js/72.228ff32b9f1ff7e62a1c.js","51f19489db189fc9cf8eb6607cc3c6f0"],["/js/73.228ff32b9f1ff7e62a1c.js","2e63b37fde810e78a55df0b3f7b0e5fd"],["/js/74.228ff32b9f1ff7e62a1c.js","89c2fdd2a5318c005450fe40bd9a1ca7"],["/js/75.228ff32b9f1ff7e62a1c.js","aa9f1eca1c74e539947f0cacaac94c16"],["/js/76.228ff32b9f1ff7e62a1c.js","c63c72f1f33928252c07d927a1a4e75a"],["/js/77.228ff32b9f1ff7e62a1c.js","19c002d57300a9a516dcc5382408f6d3"],["/js/78.228ff32b9f1ff7e62a1c.js","476d35d60b74e6cd157da3f6ec9aac0d"],["/js/79.228ff32b9f1ff7e62a1c.js","366b08f860eed445b3762b3d01e2dcd1"],["/js/8.228ff32b9f1ff7e62a1c.js","8566f14bc8df129062432681c0f67eed"],["/js/80.228ff32b9f1ff7e62a1c.js","7fe8acad26726a37b8b054d91e019aee"],["/js/81.228ff32b9f1ff7e62a1c.js","a37cb0ee080effa931817c54f9889993"],["/js/82.228ff32b9f1ff7e62a1c.js","1ce006b094edb103844afbf08dae81b2"],["/js/83.228ff32b9f1ff7e62a1c.js","8c55aa047bcd2b3fdaaa7c68a8ed9358"],["/js/84.228ff32b9f1ff7e62a1c.js","ebec889d105c05431f747a9ccdbcca39"],["/js/85.228ff32b9f1ff7e62a1c.js","d3ebad702085ec0d762aa11edd9dbc22"],["/js/9.228ff32b9f1ff7e62a1c.js","63d22e8360cbb2ef485c1fb0b659e96f"],["/js/AccountSignupModal.228ff32b9f1ff7e62a1c.js","4eb0f2f079b7c867487e6e8f923090aa"],["/js/account-info.228ff32b9f1ff7e62a1c.js","3838205d370f6fa50dc4f6c7607487f1"],["/js/contract.228ff32b9f1ff7e62a1c.js","dd14b7908cbbb4e52c1c171119864396"],["/js/default~open_position~1833eefb.228ff32b9f1ff7e62a1c.js","a58642a710b447b15a8e142502bbe9fd"],["/js/modals.228ff32b9f1ff7e62a1c.js","aa950abe355191207f1ae96a5afe2441"],["/js/notification-messages.228ff32b9f1ff7e62a1c.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/js/open_positions.228ff32b9f1ff7e62a1c.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.228ff32b9f1ff7e62a1c.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/js/push-notification.228ff32b9f1ff7e62a1c.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.228ff32b9f1ff7e62a1c.js","ad618da4b6bcdff6d94b9eed65b53aea"],["/js/screen-small.228ff32b9f1ff7e62a1c.js","664bbb2d0aef4cff89948ba049e0fea6"],["/js/settings-chart.228ff32b9f1ff7e62a1c.js","311d5aeff99f61ba2de5c64ff1990b42"],["/js/settings-language.228ff32b9f1ff7e62a1c.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/js/settings-theme.228ff32b9f1ff7e62a1c.js","4cf6d2931d25953751dbfbf45465bc5b"],["/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/js/statement.228ff32b9f1ff7e62a1c.js","9a8f9ce973af0c135b292708a3f209dd"],["/js/toggle-menu-drawer.228ff32b9f1ff7e62a1c.js","957045e951e2eee5ca1ddb24057a8d22"],["/js/two-month-picker.228ff32b9f1ff7e62a1c.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~open_position~7c650be5.228ff32b9f1ff7e62a1c.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.228ff32b9f1ff7e62a1c.js","0265f8a9d600ee235a15a15723158f34"],["/js/wallet-information.228ff32b9f1ff7e62a1c.js","31c98d0679088717540cf8bb33eef309"],["/js/work-in-progress.228ff32b9f1ff7e62a1c.js","e4206c2e258b35597fec2b01850ef48e"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/';
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







