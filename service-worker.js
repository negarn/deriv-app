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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/1.css","cfc0b9c7ae9d5e6a329da79ef0024289"],["/css/3.css","8cdb8ce5ceab93ec59b1345b492897fe"],["/css/AccountSignupModal.css","738a6f7dfd8eaa6a08e5295b87c165c8"],["/css/app.css","2f34f35e36af042477dbde991d45d640"],["/css/default~open_position~1833eefb.css","3c09f0263b3c66b791b91e2788470b51"],["/css/digits.css","f488bfe4eb0be9aa002b24bea9a1c61d"],["/css/modals.css","c9159ade4e55483cff9c6d4e83db8cda"],["/css/notification-messages.css","41e4d27d2ad8e62320fbf17f2726492f"],["/css/reports.css","4e830cfdb5e3b2ab03affd8bf351d539"],["/css/screen-small.css","52a6a0f9b3651e78e35b701f51c37e5c"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/wallet-information.css","3c09f0263b3c66b791b91e2788470b51"],["/css/work-in-progress.css","977ad77642b06567da8f18cc2ff715e4"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","362b88cd46baa7f602589ac369d9f058"],["/js/0.2220b084a84c5a7a5abd.js","cd7a96b4f40ed3f045f8ac7f5ecf8cc1"],["/js/1.2220b084a84c5a7a5abd.js","9990cb8599ae65fb40985afe25bb5e95"],["/js/10.2220b084a84c5a7a5abd.js","e9851154950818dcef9f123d1415cef5"],["/js/11.2220b084a84c5a7a5abd.js","123b4a1a441ac0f8db199e0244721502"],["/js/12.2220b084a84c5a7a5abd.js","290b1671e70efe67f60e8694f7aede23"],["/js/13.2220b084a84c5a7a5abd.js","e8d7b1df90993868f6ac149164451fba"],["/js/14.2220b084a84c5a7a5abd.js","d2628fbc229a6b6deb8dc922105a7811"],["/js/15.2220b084a84c5a7a5abd.js","dceb7e9f83782c4fbab4486f6d98afdc"],["/js/16.2220b084a84c5a7a5abd.js","ba91759ee0dd999b3781208fe5f09d9b"],["/js/17.2220b084a84c5a7a5abd.js","7e0de77bbd031e2b2006151bcf3582b0"],["/js/18.2220b084a84c5a7a5abd.js","da1216224d7070a5034245eefeab5c1d"],["/js/19.2220b084a84c5a7a5abd.js","dc01c32949afb6e88750e4affd69d338"],["/js/2.2220b084a84c5a7a5abd.js","5d56c8780c26e7868dda384dae716d18"],["/js/20.2220b084a84c5a7a5abd.js","8df7d5d2b18c551852c370dada372282"],["/js/21.2220b084a84c5a7a5abd.js","cfb86993cf356f9643a0bc8fa09cf7d5"],["/js/22.2220b084a84c5a7a5abd.js","9c30b544392cfeb4aa2b5d97f65e323a"],["/js/23.2220b084a84c5a7a5abd.js","ce9dda30613d64bd27bca8d8b52c4947"],["/js/24.2220b084a84c5a7a5abd.js","7d33cdc712f2fc3346f0024a793d0b65"],["/js/25.2220b084a84c5a7a5abd.js","ba63ce8505c0dfc75e59b6a171dbaa6e"],["/js/26.2220b084a84c5a7a5abd.js","c224bcf4ae71fc7f7bfeb2ea7be0a47c"],["/js/27.2220b084a84c5a7a5abd.js","cf89e12ba351929322c43014a479791a"],["/js/28.2220b084a84c5a7a5abd.js","3732667961d024b1bd5eadaffabab0e9"],["/js/29.2220b084a84c5a7a5abd.js","4e57f8c137bf2620563ab3743015e3c4"],["/js/3.2220b084a84c5a7a5abd.js","f9e42296de096d40d61fcd6682f3c3c5"],["/js/30.2220b084a84c5a7a5abd.js","38a082e44b8814a4b368d87e4b00a18a"],["/js/31.2220b084a84c5a7a5abd.js","4fb810155729562f439326138e78344b"],["/js/32.2220b084a84c5a7a5abd.js","e585e9cf6f056f67fbc90443e1444e45"],["/js/33.2220b084a84c5a7a5abd.js","1faabdb08a3fdaffa0cec7b75b47d346"],["/js/34.2220b084a84c5a7a5abd.js","f0e6f1b8ee99da2db79b13ec132c35f8"],["/js/35.2220b084a84c5a7a5abd.js","848d49a5ed88bee47854cf8c0e4b75df"],["/js/36.2220b084a84c5a7a5abd.js","5395e06737ae1b7a3e9993079a3071f2"],["/js/37.2220b084a84c5a7a5abd.js","e2251008ca9decaf91132717f9f0cc55"],["/js/38.2220b084a84c5a7a5abd.js","40a50b5c1182b7c9106f23730607be60"],["/js/39.2220b084a84c5a7a5abd.js","e112c25d0ca931eb37ac803a66d912bb"],["/js/4.2220b084a84c5a7a5abd.js","456fc4840fd94f1be84ed12191145807"],["/js/40.2220b084a84c5a7a5abd.js","c3f7ec22ebfb7e5ff1d4dc1eda9773b1"],["/js/404.2220b084a84c5a7a5abd.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.2220b084a84c5a7a5abd.js","aa117804c8f3483f74ff026d3a6759f6"],["/js/42.2220b084a84c5a7a5abd.js","3a02b6469b4191f915001bc33403fecf"],["/js/43.2220b084a84c5a7a5abd.js","a6aff182c4df4fb3c34f401bdffb57cc"],["/js/44.2220b084a84c5a7a5abd.js","c3e8b3582b23418a5271957768ceca4f"],["/js/45.2220b084a84c5a7a5abd.js","519a5f9a2a94e1fb5b88ba91e0429a45"],["/js/46.2220b084a84c5a7a5abd.js","9e036856bd85ff09240c2077f48b26d0"],["/js/47.2220b084a84c5a7a5abd.js","dd746040e053c13320efd0cb7fc3f487"],["/js/48.2220b084a84c5a7a5abd.js","dc46094bf63d01ddfc579b7b142a1b5c"],["/js/49.2220b084a84c5a7a5abd.js","b6ccc1f84900e805fc4c59ebbc075b0a"],["/js/5.2220b084a84c5a7a5abd.js","2c134504ffa9b10c740704a2ca66019d"],["/js/50.2220b084a84c5a7a5abd.js","057faea1fa746c60d2a49c6cd53c7ccf"],["/js/51.2220b084a84c5a7a5abd.js","9d4c5938428d90dc1b82d916dee082b8"],["/js/52.2220b084a84c5a7a5abd.js","ab96b6ed9d6811b0189ee3a6e4558b84"],["/js/53.2220b084a84c5a7a5abd.js","6127c8b509eaec52272845f43b8ddfd9"],["/js/54.2220b084a84c5a7a5abd.js","c2f0590b7b2675d9f83564458a1c243f"],["/js/55.2220b084a84c5a7a5abd.js","9229574a317235529316999ca03eb8d6"],["/js/56.2220b084a84c5a7a5abd.js","a86273c6b120e472703c511253e6cd8d"],["/js/57.2220b084a84c5a7a5abd.js","955186512fa7cd96c6ae3acafb14c40c"],["/js/58.2220b084a84c5a7a5abd.js","76651ac5c9b82a257bd5ad5a14b4116f"],["/js/59.2220b084a84c5a7a5abd.js","cdf8d21946dee35489f95fda0243f4fd"],["/js/6.2220b084a84c5a7a5abd.js","18eb55ee65ae019f6d503c0a81266973"],["/js/60.2220b084a84c5a7a5abd.js","43cd6509c3a55219aba8bdd6c9fd6d07"],["/js/61.2220b084a84c5a7a5abd.js","6e2c9046e47571d5f4c91fa733ca03e8"],["/js/62.2220b084a84c5a7a5abd.js","d095d91769ccb7c298962b2f17b0f5bf"],["/js/63.2220b084a84c5a7a5abd.js","af9f17cf32f2ec1b552f0f45ac9d079a"],["/js/64.2220b084a84c5a7a5abd.js","b0cb9a381cd09b0cc5be83b32a716c49"],["/js/65.2220b084a84c5a7a5abd.js","e7d92790173a7294003359c31897598c"],["/js/66.2220b084a84c5a7a5abd.js","2e790d576adf07ab7a70eaea5bd21273"],["/js/67.2220b084a84c5a7a5abd.js","75acdcb5a940a17b39afbdf58c68c482"],["/js/68.2220b084a84c5a7a5abd.js","c8966e4bf6c92d1651f5384e2f34d8ae"],["/js/69.2220b084a84c5a7a5abd.js","83fb93852d646876004005a40f89585c"],["/js/7.2220b084a84c5a7a5abd.js","5a31c2b065e1baf688fae236c963642e"],["/js/70.2220b084a84c5a7a5abd.js","dcd506d37de65cfb6b49fe319bac698d"],["/js/71.2220b084a84c5a7a5abd.js","52860071087381dad3eb292c711336ad"],["/js/72.2220b084a84c5a7a5abd.js","4c970f89add4603bbe55894f3509d834"],["/js/73.2220b084a84c5a7a5abd.js","c50f536eac701c84e988f8615eae5f94"],["/js/74.2220b084a84c5a7a5abd.js","fc81a7dd0ef02580d3225019cf375973"],["/js/75.2220b084a84c5a7a5abd.js","2e12b48fea2c0471a41c8eb8b66d4237"],["/js/76.2220b084a84c5a7a5abd.js","81f6fb6b1c838ccd19bbbf80aaf590d6"],["/js/77.2220b084a84c5a7a5abd.js","c19e4d7ae561a1daef695e51b3121b43"],["/js/78.2220b084a84c5a7a5abd.js","d0e6651cb72ad2e62cd41c814385d22c"],["/js/79.2220b084a84c5a7a5abd.js","a59aa715b060128012f0dbcdc8b0fe6b"],["/js/8.2220b084a84c5a7a5abd.js","8566f14bc8df129062432681c0f67eed"],["/js/80.2220b084a84c5a7a5abd.js","af24ecd13a3f17524f26b3ab0310fb13"],["/js/9.2220b084a84c5a7a5abd.js","63d22e8360cbb2ef485c1fb0b659e96f"],["/js/AccountSignupModal.2220b084a84c5a7a5abd.js","20f6dab41848745c7373996d67b83811"],["/js/account-info.2220b084a84c5a7a5abd.js","3838205d370f6fa50dc4f6c7607487f1"],["/js/contract.2220b084a84c5a7a5abd.js","0d174e795f8c59d24d6f9fb92e9dbf44"],["/js/default~open_position~1833eefb.2220b084a84c5a7a5abd.js","b141d50484a72d7c8a9df1c9f566de44"],["/js/digits.2220b084a84c5a7a5abd.js","dbd1917187e3152d063de6a54e5d458d"],["/js/info-box.2220b084a84c5a7a5abd.js","d875b810eca8d18514f47976f1f3cb25"],["/js/modals.2220b084a84c5a7a5abd.js","5dc3f1571fe73944a4d660631e8bc243"],["/js/notification-messages.2220b084a84c5a7a5abd.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/js/open_positions.2220b084a84c5a7a5abd.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.2220b084a84c5a7a5abd.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/js/push-notification.2220b084a84c5a7a5abd.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.2220b084a84c5a7a5abd.js","f4bf5616a12cccd33bf563ee51dd22e4"],["/js/screen-small.2220b084a84c5a7a5abd.js","d734d07385981df723afb1c1c66993af"],["/js/settings-chart.2220b084a84c5a7a5abd.js","091060e3cf67db6f92f9a77b7da8b8fc"],["/js/settings-language.2220b084a84c5a7a5abd.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/js/settings-theme.2220b084a84c5a7a5abd.js","1db431702de4710272497cb999444349"],["/js/smart_chart.2220b084a84c5a7a5abd.js","0bd151447fb09ea7ea7570c5835f6351"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.2220b084a84c5a7a5abd.js","9a8f9ce973af0c135b292708a3f209dd"],["/js/toggle-menu-drawer.2220b084a84c5a7a5abd.js","05ed6159c951aa402f0e8e2041498992"],["/js/two-month-picker.2220b084a84c5a7a5abd.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~digits~info-b~897959f6.2220b084a84c5a7a5abd.js","29c829d50c1d4afb35e541dad5732db1"],["/js/vendors~open_position~7c650be5.2220b084a84c5a7a5abd.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.2220b084a84c5a7a5abd.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/wallet-information.2220b084a84c5a7a5abd.js","2eae53813b1ad84a9bd17659a9abd786"],["/js/work-in-progress.2220b084a84c5a7a5abd.js","e4206c2e258b35597fec2b01850ef48e"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







