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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","d10d45cc4b0daa330558031a51612873"],["/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/css/reports.css","113d3dd3e7a75253136cd029a46beea9"],["/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","186965615c1d9521c5210c6dfcc07204"],["/js/0.42175dcefae20cc02421.js","1233b3d419d0e898df4e1a2177780b01"],["/js/1.42175dcefae20cc02421.js","817e59d777fcd513e48fe7d858b03eff"],["/js/10.42175dcefae20cc02421.js","f10b9ce3f6c431110ffe3993eb4758f8"],["/js/11.42175dcefae20cc02421.js","479ff09332f31a0e39718c2ced8436a6"],["/js/12.42175dcefae20cc02421.js","a4d388252b3433ac4cb83b338312eb39"],["/js/13.42175dcefae20cc02421.js","1ee7ff6359c57602a48b1aa778a5bf2e"],["/js/14.42175dcefae20cc02421.js","172a79a34674bc75aa8cfeec6bf39a1d"],["/js/15.42175dcefae20cc02421.js","26e46f699bb96e3eb2f82f0435bcfff4"],["/js/16.42175dcefae20cc02421.js","7025d75ea07f0c7a59dd01e7a2007c37"],["/js/17.42175dcefae20cc02421.js","f0228641439b6586ce0676419d664062"],["/js/18.42175dcefae20cc02421.js","5db8d124abad39f54684b1f8ebe6661e"],["/js/19.42175dcefae20cc02421.js","366be991dd4b06605b50d9938d71e10a"],["/js/2.42175dcefae20cc02421.js","b06eecd50de9e8da4809181d61ddfc43"],["/js/20.42175dcefae20cc02421.js","fad557c479a62d9e4f034354f9c407b8"],["/js/21.42175dcefae20cc02421.js","7a409fc8a24862a3c746327011a535ef"],["/js/22.42175dcefae20cc02421.js","cb34240a386db6a588291b15d84619f7"],["/js/23.42175dcefae20cc02421.js","5680fe4a2705627fa1c86a4bc3e381a2"],["/js/24.42175dcefae20cc02421.js","07c89c53dca8b77a8b81bd987bf7db51"],["/js/25.42175dcefae20cc02421.js","9f62cd0023ca216f3e3652698101e5b7"],["/js/26.42175dcefae20cc02421.js","ce3f8b85fa680366e6138ec557e8de4e"],["/js/27.42175dcefae20cc02421.js","295be9cd7c781eb331bb72e900c7bf6f"],["/js/28.42175dcefae20cc02421.js","3bc519af34990da9d4cc5e4248ab3fd9"],["/js/29.42175dcefae20cc02421.js","606e7d71274626e51d15b89654442bd6"],["/js/3.42175dcefae20cc02421.js","a6a54decb6c17a1baae65dd5d3648c13"],["/js/30.42175dcefae20cc02421.js","c575b22248dacabac6f19b616dcbd83b"],["/js/31.42175dcefae20cc02421.js","c8a17e7a0dcc57dc89dc008b75f6a194"],["/js/32.42175dcefae20cc02421.js","96add2d5375e425bb22331bacf4d7ccc"],["/js/33.42175dcefae20cc02421.js","fff6e1ce75328a91464b53ffb7f61826"],["/js/34.42175dcefae20cc02421.js","cfde04159fb01f868f2b408c11adbd8c"],["/js/35.42175dcefae20cc02421.js","3d35c70f78abc9a57f1b6a2fdc9d3e12"],["/js/36.42175dcefae20cc02421.js","8fd530a86d361d727e3cfc78e73c08a5"],["/js/37.42175dcefae20cc02421.js","532305354c44d878030aec3fcecded42"],["/js/38.42175dcefae20cc02421.js","579e0d618b85a48a12b47f4708f76858"],["/js/39.42175dcefae20cc02421.js","22fce91489d117bd527fc6608b783bb2"],["/js/4.42175dcefae20cc02421.js","cf3d8cade78dfcaa553a75ef2d874a01"],["/js/40.42175dcefae20cc02421.js","898f4547b001b5f18d0c7c399d457476"],["/js/404.42175dcefae20cc02421.js","ff23b1333b38eed59beb0529c1be4ce5"],["/js/41.42175dcefae20cc02421.js","9de77f73d9b5b257f1a8d109021d33fd"],["/js/42.42175dcefae20cc02421.js","fb2c8a437a80a7908d90d8ec544352ac"],["/js/43.42175dcefae20cc02421.js","3d14260e097dbacf89dac8db7c771d8d"],["/js/44.42175dcefae20cc02421.js","944893ae3aef008c78172b68a94604df"],["/js/45.42175dcefae20cc02421.js","71303426ec39d961d602808b539ee31a"],["/js/46.42175dcefae20cc02421.js","ead77cbb8791ac75e6d68fdef252a3a5"],["/js/47.42175dcefae20cc02421.js","6e32bd15ec4e385acd257f39c653c6f6"],["/js/48.42175dcefae20cc02421.js","6a226ad0b3107383c6409f75d9ff617b"],["/js/49.42175dcefae20cc02421.js","bbeabbb74c4cabe82fd76b2a91f26e2d"],["/js/5.42175dcefae20cc02421.js","69c993f89be1842867d8bed56442f427"],["/js/50.42175dcefae20cc02421.js","77ceab2b3cefe998547db474f492a973"],["/js/51.42175dcefae20cc02421.js","1cbcde1134b1d533a4fe5072dbf59255"],["/js/52.42175dcefae20cc02421.js","4de91f044f05ddba4940176b39fdb673"],["/js/53.42175dcefae20cc02421.js","d9bcb8da79bc9e59df496fa3db33c95b"],["/js/54.42175dcefae20cc02421.js","b2571feb4c4fd12147e95ec3bd60f63e"],["/js/55.42175dcefae20cc02421.js","241d665084894b71ea38666915dd4c61"],["/js/56.42175dcefae20cc02421.js","05c923b78c19ab44a2ea6fd50f531700"],["/js/57.42175dcefae20cc02421.js","b8be24597b10af7618a0c70a6f4f26b5"],["/js/58.42175dcefae20cc02421.js","f83a9aed22a4231170a5ab876cb052eb"],["/js/59.42175dcefae20cc02421.js","28f3fd75425ea93dda99a786feded1c5"],["/js/6.42175dcefae20cc02421.js","708b42178420e511c518a7c5e70e7f38"],["/js/60.42175dcefae20cc02421.js","aa23198633163391143b95868c37baf4"],["/js/61.42175dcefae20cc02421.js","09b5d17c6cffc1f3093de568ddf604c3"],["/js/62.42175dcefae20cc02421.js","f09a344decfe43dc542dbb0558665dd5"],["/js/63.42175dcefae20cc02421.js","3f7c07a710cdaca03fed20f92e867bde"],["/js/64.42175dcefae20cc02421.js","1e74b4af2ce7f72681d613815e25f60e"],["/js/65.42175dcefae20cc02421.js","73c60481cc1787a7d10498720b2bc482"],["/js/66.42175dcefae20cc02421.js","f7084f7da5908b94769cdce70e7f1bb0"],["/js/67.42175dcefae20cc02421.js","5772983774fc23aaf920ccce40ae3b8b"],["/js/68.42175dcefae20cc02421.js","87128380b22aebadaeb477d33f710a17"],["/js/69.42175dcefae20cc02421.js","47655515dd0fcb2e538cd3ba7abc2f4c"],["/js/7.42175dcefae20cc02421.js","a384bdf43dcf1f0bf3629a66adc898e1"],["/js/70.42175dcefae20cc02421.js","a0fced2348c43b0feab7c093bc85e419"],["/js/71.42175dcefae20cc02421.js","000c2ebe83173af8b97f029e1c828a48"],["/js/72.42175dcefae20cc02421.js","c1d6a50cd6973935a818862f20d51cc1"],["/js/73.42175dcefae20cc02421.js","b20577870ded501c641718d6f74fe375"],["/js/8.42175dcefae20cc02421.js","2cdc3e48ff701de94db6259523b46a3e"],["/js/9.42175dcefae20cc02421.js","1f9c740fbb3ff309bf5f2411649e8e55"],["/js/account-info.42175dcefae20cc02421.js","cdabc1fa5e0759e1ba3d2f2f0d4e97be"],["/js/contract.42175dcefae20cc02421.js","5e76f985b6c9b58f55b4058f38397eea"],["/js/default~open_position~1833eefb.42175dcefae20cc02421.js","fd2b9adaa4627ca13ec0a11d7a1bdc41"],["/js/digits.42175dcefae20cc02421.js","e72b9b6fb6bfe69082bd259ab07cb45b"],["/js/info-box.42175dcefae20cc02421.js","50247f51bc538ad2b20d260c23136ee2"],["/js/modals.42175dcefae20cc02421.js","b25506b8905ecef1684b801c5058535b"],["/js/notification-messages.42175dcefae20cc02421.js","aa9760d88f6525dd9df2e884669d59e4"],["/js/open_positions.42175dcefae20cc02421.js","9a747417adfe0b0d2b72ff24e6505e13"],["/js/profit_table.42175dcefae20cc02421.js","3078e5f7a42f25e20d44b2780f935bb9"],["/js/push-notification.42175dcefae20cc02421.js","222b8b3435d5549cf5f11b023352859f"],["/js/reports.42175dcefae20cc02421.js","435d2316fa0e7cce130f1fbbf52c1c20"],["/js/screen-small.42175dcefae20cc02421.js","7aa234286ff50a000a6dd532bbc97be4"],["/js/settings-chart.42175dcefae20cc02421.js","8936bb0de23eb3d01ae1e33b198be577"],["/js/settings-language.42175dcefae20cc02421.js","d91eacf2b4e9acaebbedf35c77001191"],["/js/settings-theme.42175dcefae20cc02421.js","ea936d083373f03a9bc3344fd0c5e7bc"],["/js/smart_chart.42175dcefae20cc02421.js","6d91eb63c794f88c62eddde59e04ad89"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.42175dcefae20cc02421.js","d74b7b6ada043626df9593d23bb97a12"],["/js/toggle-menu-drawer.42175dcefae20cc02421.js","66fdce7287b4545da6cbdc7d1edb1fcd"],["/js/two-month-picker.42175dcefae20cc02421.js","357968917cf699b68ef5830bf2bb65b5"],["/js/vendors~open_position~7c650be5.42175dcefae20cc02421.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.42175dcefae20cc02421.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/wallet-information.42175dcefae20cc02421.js","51a0f2a96deca0c5938a609f5c5174b8"],["/js/work-in-progress.42175dcefae20cc02421.js","f5e5a577a1d739dc8cc3891bfbbf1604"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







