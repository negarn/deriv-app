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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/1.css","b7977591a06a02cbe8f1b16a22fce194"],["/css/3.css","8c3cea96e507cdcc1808a4b8c52ef208"],["/css/AccountSignupModal.css","c93f0254dcbb098dc2b925a6037c3268"],["/css/app.css","d82d4adfbe5fb9549912436d4e6c02fb"],["/css/default~open_position~1833eefb.css","9520b5103be0661a2fe98a325a37482f"],["/css/digits.css","f488bfe4eb0be9aa002b24bea9a1c61d"],["/css/modals.css","c9159ade4e55483cff9c6d4e83db8cda"],["/css/notification-messages.css","41e4d27d2ad8e62320fbf17f2726492f"],["/css/reports.css","1ebf1633f4c848b89f164794d1dff9b5"],["/css/screen-small.css","52a6a0f9b3651e78e35b701f51c37e5c"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/wallet-information.css","9520b5103be0661a2fe98a325a37482f"],["/css/work-in-progress.css","977ad77642b06567da8f18cc2ff715e4"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","74bcd4b730a52996df468dc88910b5f5"],["/js/0.acf575871ca0d1fab09a.js","cd7a96b4f40ed3f045f8ac7f5ecf8cc1"],["/js/1.acf575871ca0d1fab09a.js","09ded3b32da51b685dd2faf06d676635"],["/js/10.acf575871ca0d1fab09a.js","e9851154950818dcef9f123d1415cef5"],["/js/11.acf575871ca0d1fab09a.js","123b4a1a441ac0f8db199e0244721502"],["/js/12.acf575871ca0d1fab09a.js","290b1671e70efe67f60e8694f7aede23"],["/js/13.acf575871ca0d1fab09a.js","e8d7b1df90993868f6ac149164451fba"],["/js/14.acf575871ca0d1fab09a.js","d2628fbc229a6b6deb8dc922105a7811"],["/js/15.acf575871ca0d1fab09a.js","dceb7e9f83782c4fbab4486f6d98afdc"],["/js/16.acf575871ca0d1fab09a.js","ba91759ee0dd999b3781208fe5f09d9b"],["/js/17.acf575871ca0d1fab09a.js","7e0de77bbd031e2b2006151bcf3582b0"],["/js/18.acf575871ca0d1fab09a.js","da1216224d7070a5034245eefeab5c1d"],["/js/19.acf575871ca0d1fab09a.js","dc01c32949afb6e88750e4affd69d338"],["/js/2.acf575871ca0d1fab09a.js","5d56c8780c26e7868dda384dae716d18"],["/js/20.acf575871ca0d1fab09a.js","8df7d5d2b18c551852c370dada372282"],["/js/21.acf575871ca0d1fab09a.js","cfb86993cf356f9643a0bc8fa09cf7d5"],["/js/22.acf575871ca0d1fab09a.js","9c30b544392cfeb4aa2b5d97f65e323a"],["/js/23.acf575871ca0d1fab09a.js","ce9dda30613d64bd27bca8d8b52c4947"],["/js/24.acf575871ca0d1fab09a.js","7d33cdc712f2fc3346f0024a793d0b65"],["/js/25.acf575871ca0d1fab09a.js","ba63ce8505c0dfc75e59b6a171dbaa6e"],["/js/26.acf575871ca0d1fab09a.js","c224bcf4ae71fc7f7bfeb2ea7be0a47c"],["/js/27.acf575871ca0d1fab09a.js","cf89e12ba351929322c43014a479791a"],["/js/28.acf575871ca0d1fab09a.js","3732667961d024b1bd5eadaffabab0e9"],["/js/29.acf575871ca0d1fab09a.js","cc895faff7c654bb847c9fa3d76eb305"],["/js/3.acf575871ca0d1fab09a.js","aff8e974e0c9cfe83e76bf09855dfdda"],["/js/30.acf575871ca0d1fab09a.js","c7dfb5019bd54e34e39d2e5cb4df250d"],["/js/31.acf575871ca0d1fab09a.js","914c1b5f395ba9aa55d454975ec3054b"],["/js/32.acf575871ca0d1fab09a.js","73ce6e55fcc120659a5b758c3158acb0"],["/js/33.acf575871ca0d1fab09a.js","4bc48a799c71e1d9afdc26d61eb67df6"],["/js/34.acf575871ca0d1fab09a.js","e41e54682788c35f15ceb7ec6361cd03"],["/js/35.acf575871ca0d1fab09a.js","feeb38dfb4d02edf5559a09a12eb80e7"],["/js/36.acf575871ca0d1fab09a.js","689fe2880013221f2af72293a06458d8"],["/js/37.acf575871ca0d1fab09a.js","07856d1f51a2196e79d2dfc8c43dcb11"],["/js/38.acf575871ca0d1fab09a.js","b2d3bdfb43f98e469d10dffabf4ed259"],["/js/39.acf575871ca0d1fab09a.js","b3625351f4acc5177a449f685bce2675"],["/js/4.acf575871ca0d1fab09a.js","8424277384c8e2629b879d09f8562188"],["/js/40.acf575871ca0d1fab09a.js","c5b2f8955f2897432d298b8b46a3635a"],["/js/404.acf575871ca0d1fab09a.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.acf575871ca0d1fab09a.js","f6fb22c4cdb218234d7450891dccd523"],["/js/42.acf575871ca0d1fab09a.js","5e45141c160eeba8b6bc375ada408c42"],["/js/43.acf575871ca0d1fab09a.js","d542e3556177317cff6d39948e4ef1d4"],["/js/44.acf575871ca0d1fab09a.js","c926386169486ccd5f49a164d486c2c0"],["/js/45.acf575871ca0d1fab09a.js","6eee76c6ac31b4c838f6aa182722229a"],["/js/46.acf575871ca0d1fab09a.js","d1ac7812db6ea3a7a62b62734a986c92"],["/js/47.acf575871ca0d1fab09a.js","d420efca5a048e3fe68f74aa3d3b5a20"],["/js/48.acf575871ca0d1fab09a.js","a62f47ca273baf73fd14182773d21971"],["/js/49.acf575871ca0d1fab09a.js","52cb69e4cce87c88000a8d905cbb4a12"],["/js/5.acf575871ca0d1fab09a.js","dcaa26f6c98e9033b018932228e89069"],["/js/50.acf575871ca0d1fab09a.js","f943218b0b1e17ba20b6ad19f2efde4b"],["/js/51.acf575871ca0d1fab09a.js","82c17020bb8d7ea52b3e29c270d7c661"],["/js/52.acf575871ca0d1fab09a.js","83975c8e8499c678de5f9162fc24d6c6"],["/js/53.acf575871ca0d1fab09a.js","dafd07cf19c1097dad89a093d732f7ec"],["/js/54.acf575871ca0d1fab09a.js","c2cee7a4a3f7a38dfdbb3dff0b648335"],["/js/55.acf575871ca0d1fab09a.js","2578eb80e93e6ab0c40634450f092867"],["/js/56.acf575871ca0d1fab09a.js","4208d4f178d000978c13e624230c7077"],["/js/57.acf575871ca0d1fab09a.js","da1d2acb053e06338dafbd62f8c5afb7"],["/js/58.acf575871ca0d1fab09a.js","65224e006c7ac5c2dfda3001fe06a6d0"],["/js/59.acf575871ca0d1fab09a.js","2aa0c1cc60d120e49fad3e516bfddcc6"],["/js/6.acf575871ca0d1fab09a.js","18eb55ee65ae019f6d503c0a81266973"],["/js/60.acf575871ca0d1fab09a.js","6f5ec7d08f40c3a9512579a0dd4d25b0"],["/js/61.acf575871ca0d1fab09a.js","88b5217c14f8e1daabeb2954b2e90ee9"],["/js/62.acf575871ca0d1fab09a.js","58ac3c6de29d8ae399fb39698125b06f"],["/js/63.acf575871ca0d1fab09a.js","26acfe2b475203b8748f9f1c1364abfd"],["/js/64.acf575871ca0d1fab09a.js","ab99d0c282c66e28d3bc5a4b17d31dd4"],["/js/65.acf575871ca0d1fab09a.js","60898fcdc23279da41a4ee275fa83926"],["/js/66.acf575871ca0d1fab09a.js","3b3192ab890cca4cc33ce2c89d681e61"],["/js/67.acf575871ca0d1fab09a.js","aa2d4649bd049c2196aadff728bdef0d"],["/js/68.acf575871ca0d1fab09a.js","c427f3785aae6b6cd701ea8182705c42"],["/js/69.acf575871ca0d1fab09a.js","130aca2307205cb128c296eac620f74f"],["/js/7.acf575871ca0d1fab09a.js","5a31c2b065e1baf688fae236c963642e"],["/js/70.acf575871ca0d1fab09a.js","1e4809372d46359e2ac3876f19a022b0"],["/js/71.acf575871ca0d1fab09a.js","c60d92a589bd56bc83b40d959a61e834"],["/js/72.acf575871ca0d1fab09a.js","2271d0d48318640e7ac04a8915f3a4cd"],["/js/73.acf575871ca0d1fab09a.js","217ee3a91ea4a804e9c7eaadbac681ca"],["/js/74.acf575871ca0d1fab09a.js","7a90abbd54b7a2414bdab1d52155d465"],["/js/75.acf575871ca0d1fab09a.js","11c3bc9be3c0dd760b6ca0a2d1ba313a"],["/js/76.acf575871ca0d1fab09a.js","8c1ef490829052abb08a95c81dc3f47d"],["/js/77.acf575871ca0d1fab09a.js","a637f299b108f7870d03865d6515e573"],["/js/78.acf575871ca0d1fab09a.js","013fe466d629499ccdae1de3bb7ac02c"],["/js/79.acf575871ca0d1fab09a.js","1044d1c320040fa5b7aae0f6def7e4c7"],["/js/8.acf575871ca0d1fab09a.js","8566f14bc8df129062432681c0f67eed"],["/js/80.acf575871ca0d1fab09a.js","620a7f389bd60d44eb0cfae51aca6de4"],["/js/81.acf575871ca0d1fab09a.js","bd16c687afa3d97378f4f0c735f2b2d3"],["/js/9.acf575871ca0d1fab09a.js","63d22e8360cbb2ef485c1fb0b659e96f"],["/js/AccountSignupModal.acf575871ca0d1fab09a.js","e20a55ab266e02f941cd91a6184fa512"],["/js/account-info.acf575871ca0d1fab09a.js","3838205d370f6fa50dc4f6c7607487f1"],["/js/contract.acf575871ca0d1fab09a.js","0d174e795f8c59d24d6f9fb92e9dbf44"],["/js/default~open_position~1833eefb.acf575871ca0d1fab09a.js","c216038c13e68fa87afc249b93092324"],["/js/digits.acf575871ca0d1fab09a.js","dbd1917187e3152d063de6a54e5d458d"],["/js/info-box.acf575871ca0d1fab09a.js","d875b810eca8d18514f47976f1f3cb25"],["/js/modals.acf575871ca0d1fab09a.js","5dc3f1571fe73944a4d660631e8bc243"],["/js/notification-messages.acf575871ca0d1fab09a.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/js/open_positions.acf575871ca0d1fab09a.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.acf575871ca0d1fab09a.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/js/push-notification.acf575871ca0d1fab09a.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.acf575871ca0d1fab09a.js","eaa856f20db5843394697891e5cd7516"],["/js/screen-small.acf575871ca0d1fab09a.js","d734d07385981df723afb1c1c66993af"],["/js/settings-chart.acf575871ca0d1fab09a.js","091060e3cf67db6f92f9a77b7da8b8fc"],["/js/settings-language.acf575871ca0d1fab09a.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/js/settings-theme.acf575871ca0d1fab09a.js","1db431702de4710272497cb999444349"],["/js/smart_chart.acf575871ca0d1fab09a.js","0bd151447fb09ea7ea7570c5835f6351"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.acf575871ca0d1fab09a.js","9a8f9ce973af0c135b292708a3f209dd"],["/js/toggle-menu-drawer.acf575871ca0d1fab09a.js","05ed6159c951aa402f0e8e2041498992"],["/js/two-month-picker.acf575871ca0d1fab09a.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~digits~info-b~897959f6.acf575871ca0d1fab09a.js","29c829d50c1d4afb35e541dad5732db1"],["/js/vendors~open_position~7c650be5.acf575871ca0d1fab09a.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.acf575871ca0d1fab09a.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/wallet-information.acf575871ca0d1fab09a.js","044e1c94c5365b11858530554b62020f"],["/js/work-in-progress.acf575871ca0d1fab09a.js","e4206c2e258b35597fec2b01850ef48e"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







