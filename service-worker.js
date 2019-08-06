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

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","a203ce46ee4978cdca460423740ffea7"],["/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/css/reports.css","4ced5eb3222df6ad2f47db707416313c"],["/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/css/smartcharts.css","9de1fa0effaf3f0fdf3de53d01ad442f"],["/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","7f8ea0561f139170f29bd94b4f6dde22"],["/js/0.9b8cdf1955baf110a0df.js","66dbffde9dd0fd58bf55cc5afa3d3af8"],["/js/1.9b8cdf1955baf110a0df.js","63185939ab1a18a595bc4d44dcf00b7f"],["/js/10.9b8cdf1955baf110a0df.js","5af023c6cb32f1a13826988466751cf2"],["/js/11.9b8cdf1955baf110a0df.js","07a6cbe48b8ec1a2c8694babdd9208f9"],["/js/12.9b8cdf1955baf110a0df.js","a3d3e353871dcb55681132c32c457e76"],["/js/13.9b8cdf1955baf110a0df.js","55e3b07829c190c80a0fba5c8963f262"],["/js/14.9b8cdf1955baf110a0df.js","72b3d09a32871e9244809521ccf1d2ae"],["/js/15.9b8cdf1955baf110a0df.js","f16a17814c2eff6afcac699512a0a687"],["/js/16.9b8cdf1955baf110a0df.js","5c15a0d1f4094cc2d94731194331ed46"],["/js/17.9b8cdf1955baf110a0df.js","c80383cf8de08f48cfe65fa5e303c93c"],["/js/18.9b8cdf1955baf110a0df.js","7289abf5d2774b4217736fc4e801c936"],["/js/19.9b8cdf1955baf110a0df.js","bf3ccd5c5f455b299bd4a7811a454321"],["/js/2.9b8cdf1955baf110a0df.js","f1b8f184283966f0d4812eca4ced0863"],["/js/20.9b8cdf1955baf110a0df.js","88daf4d02458f059f86728ea9169049f"],["/js/21.9b8cdf1955baf110a0df.js","ae05fb6738fbbd3eec33813bfc3da22e"],["/js/22.9b8cdf1955baf110a0df.js","5a02ea95555f54790e1a0a17b73110ff"],["/js/23.9b8cdf1955baf110a0df.js","fe5e26949a2ca831ed444e84631ff098"],["/js/24.9b8cdf1955baf110a0df.js","0e6b5d82269c01cfb1cb20714f69159c"],["/js/25.9b8cdf1955baf110a0df.js","1a73179767f5e2f0c351143546f23379"],["/js/26.9b8cdf1955baf110a0df.js","90aee03bd0a6d900cef2ee927fc782d0"],["/js/27.9b8cdf1955baf110a0df.js","78c475e7020608daf1a265c29ba842c8"],["/js/28.9b8cdf1955baf110a0df.js","e70a39297c4cd95ea30340816386796e"],["/js/29.9b8cdf1955baf110a0df.js","64068b4eea94c22f9df441479339a522"],["/js/3.9b8cdf1955baf110a0df.js","1e7c4a5806450719fb7d38a8ab3fd8b9"],["/js/30.9b8cdf1955baf110a0df.js","cb0d9cdd7d8920181a721f9eccd05d0a"],["/js/31.9b8cdf1955baf110a0df.js","cb77b913bfbf468ac2d42a1ef9213b94"],["/js/32.9b8cdf1955baf110a0df.js","2e332e114e7e12c8293b44c7f607ac4b"],["/js/33.9b8cdf1955baf110a0df.js","f802ba7fab6de9725ac8b1c542a05c6f"],["/js/34.9b8cdf1955baf110a0df.js","af51f15cdbcb2f73ad2a31573ba35fbf"],["/js/35.9b8cdf1955baf110a0df.js","b006c94f416efaf1190ab584e8c97f5f"],["/js/36.9b8cdf1955baf110a0df.js","0d1ed3aae8c6f5d4d55131cdc3a407cc"],["/js/37.9b8cdf1955baf110a0df.js","b2dafeb4d08091be1893f17042b878c9"],["/js/38.9b8cdf1955baf110a0df.js","5d774c586f6e3fd580293215a6b19cdc"],["/js/39.9b8cdf1955baf110a0df.js","4eb36a7bd758b9b52c495632f461f434"],["/js/4.9b8cdf1955baf110a0df.js","a8a56948fd320fd3cfbc723a984972c3"],["/js/40.9b8cdf1955baf110a0df.js","a19dc4b82d05a455662ebd030aeb84cb"],["/js/404.9b8cdf1955baf110a0df.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.9b8cdf1955baf110a0df.js","c4f5bcd80b01727bfc601127bffbbf29"],["/js/42.9b8cdf1955baf110a0df.js","d092b3c2a281a6339ff38f24ced48b06"],["/js/43.9b8cdf1955baf110a0df.js","030f69401fc7e1354ed00bee18a5e7ac"],["/js/44.9b8cdf1955baf110a0df.js","c00604079c5ff2554bc1b7ba65493d03"],["/js/45.9b8cdf1955baf110a0df.js","608cade66c129183d4e2232b87771386"],["/js/46.9b8cdf1955baf110a0df.js","eb72b217c2b0d61aebc10be363292dda"],["/js/47.9b8cdf1955baf110a0df.js","1ad057d866298606a6b72a40ce1a9337"],["/js/48.9b8cdf1955baf110a0df.js","50a87fffec4c2797b14fe43835be5df5"],["/js/49.9b8cdf1955baf110a0df.js","ac8657997338d9f4ec60051e23081d54"],["/js/5.9b8cdf1955baf110a0df.js","1b48c3990838a8589b63761d3eef2b92"],["/js/50.9b8cdf1955baf110a0df.js","1591bc05e0ee7212fb03e26abf998ee5"],["/js/51.9b8cdf1955baf110a0df.js","845e4904d87e00d42cffdeab1e9734c9"],["/js/52.9b8cdf1955baf110a0df.js","bb955be76208b85b128a83ba95039471"],["/js/53.9b8cdf1955baf110a0df.js","bb5ccc44351ecf56baf2553d2b197281"],["/js/54.9b8cdf1955baf110a0df.js","e4f57fb15678dd2c84d4f055fe192e98"],["/js/55.9b8cdf1955baf110a0df.js","12e5e80b59a245c949046096dc0b6186"],["/js/56.9b8cdf1955baf110a0df.js","35c6e597f4c8a546a9a202d36566a6e0"],["/js/57.9b8cdf1955baf110a0df.js","89a49c8de7deab4842f966182cf41add"],["/js/58.9b8cdf1955baf110a0df.js","e279437f2f6d38e9237cd09cedc8cdaf"],["/js/59.9b8cdf1955baf110a0df.js","4ca4f5172b74dccdcf21fddd190799db"],["/js/6.9b8cdf1955baf110a0df.js","26d47857867fd658d33dcfa720dd0619"],["/js/60.9b8cdf1955baf110a0df.js","820385bff3b39c536dc9e10a3ffd674d"],["/js/61.9b8cdf1955baf110a0df.js","83f23a44131e38d5d5e02b4f5c39b79d"],["/js/62.9b8cdf1955baf110a0df.js","1becaea83778d68152f326d632c75842"],["/js/63.9b8cdf1955baf110a0df.js","f887d75ffa7b22affc678338b41d5470"],["/js/64.9b8cdf1955baf110a0df.js","5d46213eb01ae89c1caa5962f79d07ea"],["/js/65.9b8cdf1955baf110a0df.js","834e5aa4da3ff8eee7a03254e30b0e54"],["/js/66.9b8cdf1955baf110a0df.js","120a014df683b7d52937d77eafb86ed3"],["/js/67.9b8cdf1955baf110a0df.js","a5fba165823046328ec4f661c3a82c3e"],["/js/68.9b8cdf1955baf110a0df.js","6d68f5388cd20df9a6664c8dfade73d9"],["/js/69.9b8cdf1955baf110a0df.js","d5000ac925aef3db1fb8689822734472"],["/js/7.9b8cdf1955baf110a0df.js","c23901fc9c05851131221d3f11859c0d"],["/js/70.9b8cdf1955baf110a0df.js","9b1078f8699e4059bd1af07fad4b7e68"],["/js/71.9b8cdf1955baf110a0df.js","24735115f2b5fdfd5fb95fb13af251da"],["/js/72.9b8cdf1955baf110a0df.js","4985e8de7517eee5c7718ebe1d2f29bb"],["/js/73.9b8cdf1955baf110a0df.js","2a41f06d93fd31fdee42c8ab1c122414"],["/js/8.9b8cdf1955baf110a0df.js","5c9fcc2fe6ca2cd9c6a854b81a2b1d2c"],["/js/9.9b8cdf1955baf110a0df.js","61cabaeb7ecf74db918be157c304f229"],["/js/DenialOfServiceModal.9b8cdf1955baf110a0df.js","bca386b2f999825539a0f2ed694e34b2"],["/js/MarketUnavailableModal.9b8cdf1955baf110a0df.js","78a067dd7dc79f699d02ca255e49390a"],["/js/ServicesErrorModal.9b8cdf1955baf110a0df.js","cb4569407fe835a6b6950689f92388b0"],["/js/UnsupportedContractModal.9b8cdf1955baf110a0df.js","58ba2eb5480fe0cffb915d9e286cab1f"],["/js/account-info.9b8cdf1955baf110a0df.js","c73ad94793de10d64fc1328a615b0f98"],["/js/contract.9b8cdf1955baf110a0df.js","bafc13674125706eabf4de95d547ba2d"],["/js/default~open_position~1833eefb.9b8cdf1955baf110a0df.js","0bd95c967974e38c8f4f14eed8d25903"],["/js/digits.9b8cdf1955baf110a0df.js","59cde3c4f5ebb6037af4b31459e11f8c"],["/js/info-box.9b8cdf1955baf110a0df.js","d875b810eca8d18514f47976f1f3cb25"],["/js/notification-messages.9b8cdf1955baf110a0df.js","f9fa1e1fd9591e927fe0d5dcc9e6b9ad"],["/js/open_positions.9b8cdf1955baf110a0df.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.9b8cdf1955baf110a0df.js","d1779b49afa57da1a153b7f2e23d3175"],["/js/push-notification.9b8cdf1955baf110a0df.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.9b8cdf1955baf110a0df.js","672f7bc7d121c1774b23f8015822e33d"],["/js/screen-small.9b8cdf1955baf110a0df.js","192ebe3c28077f8af194da612b0714b9"],["/js/settings-chart.9b8cdf1955baf110a0df.js","00167d361a88af23c1d27b8a9e1ab2af"],["/js/settings-language.9b8cdf1955baf110a0df.js","0c731935668f644467cefdc4e9b95754"],["/js/settings-theme.9b8cdf1955baf110a0df.js","729a0e5e514516e10377a709b0b68fe5"],["/js/smart_chart.9b8cdf1955baf110a0df.js","ec0b18f6da061e900f880b810a5ce0bd"],["/js/smartcharts/chartiq-51b952.smartcharts.js","fcf97473aa6a4b540cdcd8d2d31d7ec1"],["/js/smartcharts/de-po-a30b9f.smartcharts.js","ea6958a42b5d808b9e76e52ae4daa083"],["/js/smartcharts/es-po-cf1cf7.smartcharts.js","f77f5aff51a4082893ff3ad643545656"],["/js/smartcharts/fr-po-7c2247.smartcharts.js","c8d4c9fc66c42ce80c04bd88ca65f6c4"],["/js/smartcharts/html2canvas-7f54a4.smartcharts.js","e882e5deffcb51db874e06e54bc3f109"],["/js/smartcharts/id-po-842869.smartcharts.js","1db9a27de992b08a1bc89b3df809b294"],["/js/smartcharts/it-po-3032cb.smartcharts.js","36931ea43c5249b98e8e09255fef0985"],["/js/smartcharts/nl-po-4913ee.smartcharts.js","0de3e3e842d9289c9ed56728718f6aa8"],["/js/smartcharts/pl-po-68f0a1.smartcharts.js","419c51fd75609798fece101ad191d8a0"],["/js/smartcharts/pt-po-e0a063.smartcharts.js","c0249ab9b1c802abc443705b74a81a52"],["/js/smartcharts/ru-po-00d45f.smartcharts.js","3efaa32922993fb61b1bd26941524914"],["/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/js/smartcharts/th-po-b2c816.smartcharts.js","6351fa6afb43c72d22831a443884ca9c"],["/js/smartcharts/vendors~resize-observer-polyfill-c645ea.smartcharts.js","bfe9606de86a7a3c823f9dd187837755"],["/js/smartcharts/vi-po-aaf38b.smartcharts.js","748daf66b656a4bf05eca6a3aaa2e692"],["/js/smartcharts/zh_cn-po-d077e1.smartcharts.js","3351e42d15313a2d0e327f01069cb892"],["/js/smartcharts/zh_tw-po-b93066.smartcharts.js","592a1b2be8da1f6ffe15272c2d89af44"],["/js/statement.9b8cdf1955baf110a0df.js","0faf79fb5a2f9352d1e6f4a112892fdd"],["/js/toggle-menu-drawer.9b8cdf1955baf110a0df.js","840eaab9122452be0cecd713e903adb2"],["/js/two-month-picker.9b8cdf1955baf110a0df.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~open_position~7c650be5.9b8cdf1955baf110a0df.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.9b8cdf1955baf110a0df.js","513af006e51c8836077cee64e1f1a8ef"],["/js/wallet-information.9b8cdf1955baf110a0df.js","1ba64f13a477069e4be2464f99f9f4b0"],["/js/work-in-progress.9b8cdf1955baf110a0df.js","3b7eb417d4d773b2f639dcdf34cbb507"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







