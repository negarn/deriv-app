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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/1.css","58e98caad0768d109af863e49491dbed"],["/css/AccountSignupModal.css","0005ff5f023a3b76ae833737a733f0dc"],["/css/app.css","724ea9b5855f7113559a8d3197e16992"],["/css/default~open_position~1833eefb.css","130af4e9eb678230b33ebe9901ae9f97"],["/css/digits.css","975831af82a0ab7404f72f47b0a887dd"],["/css/modals.css","b7310b655e9e17d84d770a00e2362c30"],["/css/notification-messages.css","0c369254ed4f4c0da020b71217edbd5c"],["/css/reports.css","dfffea937e37a309c2e930b0e9f61869"],["/css/screen-small.css","3bfc014cb86baa473c34e52598a1641a"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/wallet-information.css","130af4e9eb678230b33ebe9901ae9f97"],["/css/work-in-progress.css","f0eee1d0a3345c4155e0d44cae52729b"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","f57d7cc66976257a0b99d27648fbbed8"],["/js/0.13895c0647a5e68662ef.js","66dbffde9dd0fd58bf55cc5afa3d3af8"],["/js/1.13895c0647a5e68662ef.js","0fd28c8f682771bd8e61c674fd5617d2"],["/js/10.13895c0647a5e68662ef.js","f933fa946b355d576dc589c2b5e46325"],["/js/11.13895c0647a5e68662ef.js","9e042bb92a3d93eae57280c30a0067b3"],["/js/12.13895c0647a5e68662ef.js","a70ecd62918e3e4e288887eaf1edda50"],["/js/13.13895c0647a5e68662ef.js","6a464ae7436166a9463966e823a0a960"],["/js/14.13895c0647a5e68662ef.js","fb796c601de62a8e647d3039e5bf8823"],["/js/15.13895c0647a5e68662ef.js","8a739dbf7f2a01818b99b3148b6e819d"],["/js/16.13895c0647a5e68662ef.js","6099e8f754f697355d14ccfdcedd5dff"],["/js/17.13895c0647a5e68662ef.js","3ba346cf57173c0ac38d4833bbbb9b9d"],["/js/18.13895c0647a5e68662ef.js","52262741b7b0036fffd44d90bd49eb01"],["/js/19.13895c0647a5e68662ef.js","0e0f2c9b4fb1672c854054810721ea4d"],["/js/2.13895c0647a5e68662ef.js","e7f6850a500d9198f0331d2f6b5bf805"],["/js/20.13895c0647a5e68662ef.js","cec84033a99b92c917d0907c7b309b5d"],["/js/21.13895c0647a5e68662ef.js","81a230aeb8de666fb83e6ba6acfdba55"],["/js/22.13895c0647a5e68662ef.js","dc05f9e7d30f9326455db7bfba2e3277"],["/js/23.13895c0647a5e68662ef.js","49bfdcde2e25c594f9e6d6745cc25169"],["/js/24.13895c0647a5e68662ef.js","3334e2861718b2089e814b64611377bf"],["/js/25.13895c0647a5e68662ef.js","7c45a16753931498b1c3d7f18837cd26"],["/js/26.13895c0647a5e68662ef.js","f7d42d7e8e8caf7657ce2e1a668610ec"],["/js/27.13895c0647a5e68662ef.js","5f028f9be552b2066221811c4fcaf06e"],["/js/28.13895c0647a5e68662ef.js","e6f74f76b5bba27e4b536b2cd1bbff55"],["/js/29.13895c0647a5e68662ef.js","85963589620bc6ef65868a9804d70a8a"],["/js/3.13895c0647a5e68662ef.js","adb9e90a7a244c04726b3be352633a2f"],["/js/30.13895c0647a5e68662ef.js","375ec1e0fb047fd5727f2688ecfba284"],["/js/31.13895c0647a5e68662ef.js","c1f2db7b01c5cea6e77b3f6ea5c73d4c"],["/js/32.13895c0647a5e68662ef.js","eb3d7f42404c1d68c0186ba771a885ee"],["/js/33.13895c0647a5e68662ef.js","76da3ff91d47ba8328228430d08014de"],["/js/34.13895c0647a5e68662ef.js","a718c9f378ed516de6f4313011bfd860"],["/js/35.13895c0647a5e68662ef.js","6ccfcd28f414e988c0620e36a247a5c1"],["/js/36.13895c0647a5e68662ef.js","33a43942f191a18e3bbcd3fe9d4b0311"],["/js/37.13895c0647a5e68662ef.js","65e931ea5d7cc2f2204d7af8364c9e47"],["/js/38.13895c0647a5e68662ef.js","d7b3dffd83591d879300502b3a574689"],["/js/39.13895c0647a5e68662ef.js","62932043b5648c616a12f671941950f9"],["/js/4.13895c0647a5e68662ef.js","35e7977f4de6e34d99a8f79ad0a23eaf"],["/js/40.13895c0647a5e68662ef.js","44aa62f442c00092a14596555533f4a1"],["/js/404.13895c0647a5e68662ef.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.13895c0647a5e68662ef.js","4e78c42e197e3c4edfcd6140fe7f88a4"],["/js/42.13895c0647a5e68662ef.js","10a653cfc853cefc6276145e06a4abdb"],["/js/43.13895c0647a5e68662ef.js","e4a6cafc7c8cb2482cd7999379a7184a"],["/js/44.13895c0647a5e68662ef.js","56d580ee621f57ebe9e052627b907e5f"],["/js/45.13895c0647a5e68662ef.js","df3b87603e232ea5855c5adaf6b41fb1"],["/js/46.13895c0647a5e68662ef.js","f5880f9ea037f884f059449a065f6c2a"],["/js/47.13895c0647a5e68662ef.js","e3a50567121be8a384e553345eec8989"],["/js/48.13895c0647a5e68662ef.js","620cf6cd2417081141f0fefb951e6965"],["/js/49.13895c0647a5e68662ef.js","f539711957059777ea14b947017174bf"],["/js/5.13895c0647a5e68662ef.js","e8ada11de71309a04b5d0080c78ee51e"],["/js/50.13895c0647a5e68662ef.js","0543a191f1907e2d7a5780485768d1ab"],["/js/51.13895c0647a5e68662ef.js","b1938f16b58f9a82b5d8a14714d87bf4"],["/js/52.13895c0647a5e68662ef.js","afdd9e505ad4c0515c147152420d3433"],["/js/53.13895c0647a5e68662ef.js","b887144d631b720b9a9fa85007e2d6f6"],["/js/54.13895c0647a5e68662ef.js","5059fd1cfc3c4ccb5f91c17d45d60330"],["/js/55.13895c0647a5e68662ef.js","e6d64f36ac92c4058538f1b453905fbd"],["/js/56.13895c0647a5e68662ef.js","80b2b506ec816f1d586ab3fd4166cdb6"],["/js/57.13895c0647a5e68662ef.js","3ea20565049008e589430ec77a45c672"],["/js/58.13895c0647a5e68662ef.js","4cc9511c8770b4c0f6ce77296decac96"],["/js/59.13895c0647a5e68662ef.js","66786307d4cfaed7e77a10f5b8db324a"],["/js/6.13895c0647a5e68662ef.js","d8dc65888e013e0f14595d0a746f0a6f"],["/js/60.13895c0647a5e68662ef.js","ad1b9f76c97ea35dea1a1914e253b39e"],["/js/61.13895c0647a5e68662ef.js","21cd0360141e28545f04192c85d4ce16"],["/js/62.13895c0647a5e68662ef.js","afb938d0581aa87261c69bc95c1e1746"],["/js/63.13895c0647a5e68662ef.js","5b2dc364c6c76b19d3f42fb72838014b"],["/js/64.13895c0647a5e68662ef.js","c284082f41a1579451a92134b5eef16a"],["/js/65.13895c0647a5e68662ef.js","b1a59e2a8f57ec87c03ff13baf5b036f"],["/js/66.13895c0647a5e68662ef.js","0c0984f9e1cd6f1756fee27143da3d0f"],["/js/67.13895c0647a5e68662ef.js","870820a42a81ac00745154d3b119c304"],["/js/68.13895c0647a5e68662ef.js","3b2ba41629417cdae938c81a1f8966f6"],["/js/69.13895c0647a5e68662ef.js","7855971d4d10802a9d459930cc4b532f"],["/js/7.13895c0647a5e68662ef.js","f50df9b27521de484266a03d476c9b81"],["/js/70.13895c0647a5e68662ef.js","4a992152bee8af2eef17831771530195"],["/js/71.13895c0647a5e68662ef.js","e222e27d646eee9e369911e1a57ebb6f"],["/js/72.13895c0647a5e68662ef.js","04f98b9358fd439803c13506b57196f3"],["/js/73.13895c0647a5e68662ef.js","b4c22de80075eec74ca8f645f87fe874"],["/js/74.13895c0647a5e68662ef.js","cd59fe714e87cb028b6ac06c9534ea95"],["/js/75.13895c0647a5e68662ef.js","cc23663555abf44a6f1dc966d726edc4"],["/js/76.13895c0647a5e68662ef.js","2aa134dda9218118586a2b567ff8bcab"],["/js/77.13895c0647a5e68662ef.js","0b16bbb3f71f0489f08530ba550afcf3"],["/js/78.13895c0647a5e68662ef.js","60e534ff7be4cb5dbf3102d886f44465"],["/js/8.13895c0647a5e68662ef.js","496b6dad34f17f36f26fef44b401f351"],["/js/9.13895c0647a5e68662ef.js","d131ac2eb3bc1f6b1516fd7645a8bfbe"],["/js/AccountSignupModal.13895c0647a5e68662ef.js","b534dd8c7647edfde7e71658d32757c4"],["/js/account-info.13895c0647a5e68662ef.js","3838205d370f6fa50dc4f6c7607487f1"],["/js/contract.13895c0647a5e68662ef.js","49268126c3324856b17aa3f4a8555491"],["/js/default~open_position~1833eefb.13895c0647a5e68662ef.js","a5c9f62e0630ade73894b470a1e4faff"],["/js/digits.13895c0647a5e68662ef.js","84eab769dc13dab518582a7dca094b0d"],["/js/info-box.13895c0647a5e68662ef.js","d875b810eca8d18514f47976f1f3cb25"],["/js/modals.13895c0647a5e68662ef.js","d39c286799633d7444051ffaf9ce5abf"],["/js/notification-messages.13895c0647a5e68662ef.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/js/open_positions.13895c0647a5e68662ef.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.13895c0647a5e68662ef.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/js/push-notification.13895c0647a5e68662ef.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.13895c0647a5e68662ef.js","efb06fc0f8cfbd2b11d8d61963b7016a"],["/js/screen-small.13895c0647a5e68662ef.js","d734d07385981df723afb1c1c66993af"],["/js/settings-chart.13895c0647a5e68662ef.js","3e7c895771c25f13c77650ce64a4f936"],["/js/settings-language.13895c0647a5e68662ef.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/js/settings-theme.13895c0647a5e68662ef.js","1db431702de4710272497cb999444349"],["/js/smart_chart.13895c0647a5e68662ef.js","0bd151447fb09ea7ea7570c5835f6351"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.13895c0647a5e68662ef.js","9a8f9ce973af0c135b292708a3f209dd"],["/js/toggle-menu-drawer.13895c0647a5e68662ef.js","0813b85d87519191489cac92054d1fdd"],["/js/two-month-picker.13895c0647a5e68662ef.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~AccountSignupModal.13895c0647a5e68662ef.js","172a23df096d5da09f3c58030808ed89"],["/js/vendors~open_position~7c650be5.13895c0647a5e68662ef.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.13895c0647a5e68662ef.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/wallet-information.13895c0647a5e68662ef.js","f169b3309cd56ca4f9a9acf1f738a5df"],["/js/work-in-progress.13895c0647a5e68662ef.js","6a9577687a200884d5b6d29f23afc216"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







