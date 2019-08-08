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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","59013b2d86e545b0b4b4e1a1a6df5a1c"],["/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/css/reports.css","4ced5eb3222df6ad2f47db707416313c"],["/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/css/smartcharts.css","6a8e8a0ef7d5d5e51cb94c680e3f039f"],["/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","793691d127ecbd89ee62b74378b001a7"],["/js/0.939a430715a8ba96c795.js","66dbffde9dd0fd58bf55cc5afa3d3af8"],["/js/1.939a430715a8ba96c795.js","ed80252e99a8548ecf74be05678f3e4f"],["/js/10.939a430715a8ba96c795.js","5af023c6cb32f1a13826988466751cf2"],["/js/11.939a430715a8ba96c795.js","07a6cbe48b8ec1a2c8694babdd9208f9"],["/js/12.939a430715a8ba96c795.js","a3d3e353871dcb55681132c32c457e76"],["/js/13.939a430715a8ba96c795.js","55e3b07829c190c80a0fba5c8963f262"],["/js/14.939a430715a8ba96c795.js","72b3d09a32871e9244809521ccf1d2ae"],["/js/15.939a430715a8ba96c795.js","f16a17814c2eff6afcac699512a0a687"],["/js/16.939a430715a8ba96c795.js","5c15a0d1f4094cc2d94731194331ed46"],["/js/17.939a430715a8ba96c795.js","c80383cf8de08f48cfe65fa5e303c93c"],["/js/18.939a430715a8ba96c795.js","7289abf5d2774b4217736fc4e801c936"],["/js/19.939a430715a8ba96c795.js","bf3ccd5c5f455b299bd4a7811a454321"],["/js/2.939a430715a8ba96c795.js","ff1393867ae05aafff45c040cab4d292"],["/js/20.939a430715a8ba96c795.js","88daf4d02458f059f86728ea9169049f"],["/js/21.939a430715a8ba96c795.js","ae05fb6738fbbd3eec33813bfc3da22e"],["/js/22.939a430715a8ba96c795.js","5a02ea95555f54790e1a0a17b73110ff"],["/js/23.939a430715a8ba96c795.js","fe5e26949a2ca831ed444e84631ff098"],["/js/24.939a430715a8ba96c795.js","0e6b5d82269c01cfb1cb20714f69159c"],["/js/25.939a430715a8ba96c795.js","1a73179767f5e2f0c351143546f23379"],["/js/26.939a430715a8ba96c795.js","90aee03bd0a6d900cef2ee927fc782d0"],["/js/27.939a430715a8ba96c795.js","78c475e7020608daf1a265c29ba842c8"],["/js/28.939a430715a8ba96c795.js","e70a39297c4cd95ea30340816386796e"],["/js/29.939a430715a8ba96c795.js","64068b4eea94c22f9df441479339a522"],["/js/3.939a430715a8ba96c795.js","1e7c4a5806450719fb7d38a8ab3fd8b9"],["/js/30.939a430715a8ba96c795.js","cb0d9cdd7d8920181a721f9eccd05d0a"],["/js/31.939a430715a8ba96c795.js","cb77b913bfbf468ac2d42a1ef9213b94"],["/js/32.939a430715a8ba96c795.js","2e332e114e7e12c8293b44c7f607ac4b"],["/js/33.939a430715a8ba96c795.js","f802ba7fab6de9725ac8b1c542a05c6f"],["/js/34.939a430715a8ba96c795.js","af51f15cdbcb2f73ad2a31573ba35fbf"],["/js/35.939a430715a8ba96c795.js","b006c94f416efaf1190ab584e8c97f5f"],["/js/36.939a430715a8ba96c795.js","0d1ed3aae8c6f5d4d55131cdc3a407cc"],["/js/37.939a430715a8ba96c795.js","b2dafeb4d08091be1893f17042b878c9"],["/js/38.939a430715a8ba96c795.js","5d774c586f6e3fd580293215a6b19cdc"],["/js/39.939a430715a8ba96c795.js","4eb36a7bd758b9b52c495632f461f434"],["/js/4.939a430715a8ba96c795.js","a8a56948fd320fd3cfbc723a984972c3"],["/js/40.939a430715a8ba96c795.js","a19dc4b82d05a455662ebd030aeb84cb"],["/js/404.939a430715a8ba96c795.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.939a430715a8ba96c795.js","c4f5bcd80b01727bfc601127bffbbf29"],["/js/42.939a430715a8ba96c795.js","d092b3c2a281a6339ff38f24ced48b06"],["/js/43.939a430715a8ba96c795.js","030f69401fc7e1354ed00bee18a5e7ac"],["/js/44.939a430715a8ba96c795.js","c00604079c5ff2554bc1b7ba65493d03"],["/js/45.939a430715a8ba96c795.js","608cade66c129183d4e2232b87771386"],["/js/46.939a430715a8ba96c795.js","eb72b217c2b0d61aebc10be363292dda"],["/js/47.939a430715a8ba96c795.js","1ad057d866298606a6b72a40ce1a9337"],["/js/48.939a430715a8ba96c795.js","50a87fffec4c2797b14fe43835be5df5"],["/js/49.939a430715a8ba96c795.js","ac8657997338d9f4ec60051e23081d54"],["/js/5.939a430715a8ba96c795.js","1b48c3990838a8589b63761d3eef2b92"],["/js/50.939a430715a8ba96c795.js","1591bc05e0ee7212fb03e26abf998ee5"],["/js/51.939a430715a8ba96c795.js","845e4904d87e00d42cffdeab1e9734c9"],["/js/52.939a430715a8ba96c795.js","bb955be76208b85b128a83ba95039471"],["/js/53.939a430715a8ba96c795.js","bb5ccc44351ecf56baf2553d2b197281"],["/js/54.939a430715a8ba96c795.js","e4f57fb15678dd2c84d4f055fe192e98"],["/js/55.939a430715a8ba96c795.js","12e5e80b59a245c949046096dc0b6186"],["/js/56.939a430715a8ba96c795.js","35c6e597f4c8a546a9a202d36566a6e0"],["/js/57.939a430715a8ba96c795.js","89a49c8de7deab4842f966182cf41add"],["/js/58.939a430715a8ba96c795.js","e279437f2f6d38e9237cd09cedc8cdaf"],["/js/59.939a430715a8ba96c795.js","4ca4f5172b74dccdcf21fddd190799db"],["/js/6.939a430715a8ba96c795.js","26d47857867fd658d33dcfa720dd0619"],["/js/60.939a430715a8ba96c795.js","820385bff3b39c536dc9e10a3ffd674d"],["/js/61.939a430715a8ba96c795.js","83f23a44131e38d5d5e02b4f5c39b79d"],["/js/62.939a430715a8ba96c795.js","1becaea83778d68152f326d632c75842"],["/js/63.939a430715a8ba96c795.js","f887d75ffa7b22affc678338b41d5470"],["/js/64.939a430715a8ba96c795.js","5d46213eb01ae89c1caa5962f79d07ea"],["/js/65.939a430715a8ba96c795.js","834e5aa4da3ff8eee7a03254e30b0e54"],["/js/66.939a430715a8ba96c795.js","120a014df683b7d52937d77eafb86ed3"],["/js/67.939a430715a8ba96c795.js","a5fba165823046328ec4f661c3a82c3e"],["/js/68.939a430715a8ba96c795.js","6d68f5388cd20df9a6664c8dfade73d9"],["/js/69.939a430715a8ba96c795.js","d5000ac925aef3db1fb8689822734472"],["/js/7.939a430715a8ba96c795.js","c23901fc9c05851131221d3f11859c0d"],["/js/70.939a430715a8ba96c795.js","9b1078f8699e4059bd1af07fad4b7e68"],["/js/71.939a430715a8ba96c795.js","24735115f2b5fdfd5fb95fb13af251da"],["/js/72.939a430715a8ba96c795.js","4985e8de7517eee5c7718ebe1d2f29bb"],["/js/73.939a430715a8ba96c795.js","2a41f06d93fd31fdee42c8ab1c122414"],["/js/8.939a430715a8ba96c795.js","5c9fcc2fe6ca2cd9c6a854b81a2b1d2c"],["/js/9.939a430715a8ba96c795.js","61cabaeb7ecf74db918be157c304f229"],["/js/DenialOfServiceModal.939a430715a8ba96c795.js","bca386b2f999825539a0f2ed694e34b2"],["/js/MarketUnavailableModal.939a430715a8ba96c795.js","78a067dd7dc79f699d02ca255e49390a"],["/js/ServicesErrorModal.939a430715a8ba96c795.js","cb4569407fe835a6b6950689f92388b0"],["/js/UnsupportedContractModal.939a430715a8ba96c795.js","58ba2eb5480fe0cffb915d9e286cab1f"],["/js/account-info.939a430715a8ba96c795.js","c73ad94793de10d64fc1328a615b0f98"],["/js/contract.939a430715a8ba96c795.js","bafc13674125706eabf4de95d547ba2d"],["/js/default~open_position~1833eefb.939a430715a8ba96c795.js","0bd95c967974e38c8f4f14eed8d25903"],["/js/digits.939a430715a8ba96c795.js","59cde3c4f5ebb6037af4b31459e11f8c"],["/js/info-box.939a430715a8ba96c795.js","d875b810eca8d18514f47976f1f3cb25"],["/js/notification-messages.939a430715a8ba96c795.js","f9fa1e1fd9591e927fe0d5dcc9e6b9ad"],["/js/open_positions.939a430715a8ba96c795.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.939a430715a8ba96c795.js","d1779b49afa57da1a153b7f2e23d3175"],["/js/push-notification.939a430715a8ba96c795.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.939a430715a8ba96c795.js","672f7bc7d121c1774b23f8015822e33d"],["/js/screen-small.939a430715a8ba96c795.js","192ebe3c28077f8af194da612b0714b9"],["/js/settings-chart.939a430715a8ba96c795.js","00167d361a88af23c1d27b8a9e1ab2af"],["/js/settings-language.939a430715a8ba96c795.js","0c731935668f644467cefdc4e9b95754"],["/js/settings-theme.939a430715a8ba96c795.js","729a0e5e514516e10377a709b0b68fe5"],["/js/smart_chart.939a430715a8ba96c795.js","6b959daa0470ab097f96dcc8ae276192"],["/js/smartcharts/chartiq-5bb834.smartcharts.js","55b80fceca4ae8de1bbccab6307f03b3"],["/js/smartcharts/de-po-4ebb0d.smartcharts.js","c82388fdf51df760211407057a634f47"],["/js/smartcharts/es-po-c179ee.smartcharts.js","4c1f372f7e674856da87a05da0b27ee0"],["/js/smartcharts/fr-po-b390e4.smartcharts.js","946e71b243e29758a36392ed2004a25b"],["/js/smartcharts/html2canvas-7f0471.smartcharts.js","522651dbbc71ec8c5eca49dfec519476"],["/js/smartcharts/id-po-ee47a9.smartcharts.js","97dc6ca0d1c7bbf575d6d5279bf12223"],["/js/smartcharts/it-po-2f06e4.smartcharts.js","6d18c8d9e4aa76e553e09b50b91b8440"],["/js/smartcharts/nl-po-321630.smartcharts.js","baa11b7e5cf5d1b4ffb250c67af2fd88"],["/js/smartcharts/pl-po-229aeb.smartcharts.js","57548b7ceb5d3173c95ae4d384cad280"],["/js/smartcharts/pt-po-10fbc7.smartcharts.js","eaef7d5d7611189c23d43b3b289a0f6e"],["/js/smartcharts/ru-po-d3ee8c.smartcharts.js","311d37ef72cb9607535669d1e7c74be7"],["/js/smartcharts/sprite-835a41.smartcharts.svg","46891affbcfa9519efa030f5249200ae"],["/js/smartcharts/th-po-1e8510.smartcharts.js","c9ab0a99c8be1b9cf7ecc652549f9494"],["/js/smartcharts/vendors~resize-observer-polyfill-c5c154.smartcharts.js","ccc9eb227784346282ba1d2511f8ba51"],["/js/smartcharts/vi-po-faa561.smartcharts.js","61e682c04c8cd5e0cdee1e22d4916234"],["/js/smartcharts/zh_cn-po-9bf3c6.smartcharts.js","cc14a3e3e274b09a3661ad94d2cd03ac"],["/js/smartcharts/zh_tw-po-68a36e.smartcharts.js","27cd6c639e741588dd99bfe4f5f8bbdd"],["/js/statement.939a430715a8ba96c795.js","0faf79fb5a2f9352d1e6f4a112892fdd"],["/js/toggle-menu-drawer.939a430715a8ba96c795.js","840eaab9122452be0cecd713e903adb2"],["/js/two-month-picker.939a430715a8ba96c795.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~open_position~7c650be5.939a430715a8ba96c795.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.939a430715a8ba96c795.js","51377081049a0f06dfae83d794110d25"],["/js/wallet-information.939a430715a8ba96c795.js","1ba64f13a477069e4be2464f99f9f4b0"],["/js/work-in-progress.939a430715a8ba96c795.js","3b7eb417d4d773b2f639dcdf34cbb507"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







