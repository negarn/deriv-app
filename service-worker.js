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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/1.css","ccb08085cda0daef638907971484ea37"],["/css/3.css","394d446d095efc5a70561fb147339581"],["/css/AccountSignupModal.css","25fa141ea582ed3d0ec5f69844572b4f"],["/css/app.css","748abfbef0db9ca0af039a7f2abb1d0a"],["/css/default~open_position~1833eefb.css","f773063eb5e63497603c32b633f8e2fe"],["/css/digits.css","8e0c3639dc5d97daf805bd355f6bd61f"],["/css/modals.css","045a32a6bb423576ebe2b85b5635ee6c"],["/css/notification-messages.css","3a4c941d74380bc59f328d97d3d5a29f"],["/css/reports.css","06f0af224205b5688df5cd2a75865d28"],["/css/screen-small.css","6ef029a4ce7a534a440630f047658efb"],["/css/settings-chart.css","debb4e95c90d4f046697bb8e9444a0a7"],["/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/css/wallet-information.css","f773063eb5e63497603c32b633f8e2fe"],["/css/work-in-progress.css","d50fe922cdf426bafc8e8f12c106e137"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","b6fde1b36ccfd49bd18c83ae972d7e1a"],["/js/0.e0c0c0621b1bdbc239ab.js","9abc613accd670b59bbd6ddaa89c8cc9"],["/js/1.e0c0c0621b1bdbc239ab.js","d2132fd5a1948587d560c9ea4d87e468"],["/js/10.e0c0c0621b1bdbc239ab.js","e9851154950818dcef9f123d1415cef5"],["/js/11.e0c0c0621b1bdbc239ab.js","123b4a1a441ac0f8db199e0244721502"],["/js/12.e0c0c0621b1bdbc239ab.js","290b1671e70efe67f60e8694f7aede23"],["/js/13.e0c0c0621b1bdbc239ab.js","e8d7b1df90993868f6ac149164451fba"],["/js/14.e0c0c0621b1bdbc239ab.js","d2628fbc229a6b6deb8dc922105a7811"],["/js/15.e0c0c0621b1bdbc239ab.js","dceb7e9f83782c4fbab4486f6d98afdc"],["/js/16.e0c0c0621b1bdbc239ab.js","ba91759ee0dd999b3781208fe5f09d9b"],["/js/17.e0c0c0621b1bdbc239ab.js","7e0de77bbd031e2b2006151bcf3582b0"],["/js/18.e0c0c0621b1bdbc239ab.js","da1216224d7070a5034245eefeab5c1d"],["/js/19.e0c0c0621b1bdbc239ab.js","dc01c32949afb6e88750e4affd69d338"],["/js/2.e0c0c0621b1bdbc239ab.js","5d56c8780c26e7868dda384dae716d18"],["/js/20.e0c0c0621b1bdbc239ab.js","8df7d5d2b18c551852c370dada372282"],["/js/21.e0c0c0621b1bdbc239ab.js","cfb86993cf356f9643a0bc8fa09cf7d5"],["/js/22.e0c0c0621b1bdbc239ab.js","9c30b544392cfeb4aa2b5d97f65e323a"],["/js/23.e0c0c0621b1bdbc239ab.js","ce9dda30613d64bd27bca8d8b52c4947"],["/js/24.e0c0c0621b1bdbc239ab.js","7d33cdc712f2fc3346f0024a793d0b65"],["/js/25.e0c0c0621b1bdbc239ab.js","ba63ce8505c0dfc75e59b6a171dbaa6e"],["/js/26.e0c0c0621b1bdbc239ab.js","c224bcf4ae71fc7f7bfeb2ea7be0a47c"],["/js/27.e0c0c0621b1bdbc239ab.js","cf89e12ba351929322c43014a479791a"],["/js/28.e0c0c0621b1bdbc239ab.js","3732667961d024b1bd5eadaffabab0e9"],["/js/29.e0c0c0621b1bdbc239ab.js","8d09b69510f20c72bc5b7c00e3dde76e"],["/js/3.e0c0c0621b1bdbc239ab.js","d21dd4612c240068c6e63ee13b3a0572"],["/js/30.e0c0c0621b1bdbc239ab.js","6e57f5b1a9d72dfb80269e0b9cbbc4a5"],["/js/31.e0c0c0621b1bdbc239ab.js","03b9a39cab9c15b509af4e7a1d8ef16c"],["/js/32.e0c0c0621b1bdbc239ab.js","9f784070cd5bf69f690a9a8abe39a68f"],["/js/33.e0c0c0621b1bdbc239ab.js","9c175dcea4399e73b0625a07c116ee9e"],["/js/34.e0c0c0621b1bdbc239ab.js","cb1b7f8e5f0922d661263abaf37568b6"],["/js/35.e0c0c0621b1bdbc239ab.js","109db955a8ccf97db4a469665f939fe0"],["/js/36.e0c0c0621b1bdbc239ab.js","0a24287b500d1090b9fb3637444554c9"],["/js/37.e0c0c0621b1bdbc239ab.js","76bc1e00974ffcd16cb824f53c638f5a"],["/js/38.e0c0c0621b1bdbc239ab.js","0ad522904ebc4fb09d67c0721036cc3b"],["/js/39.e0c0c0621b1bdbc239ab.js","6f106c2be595f377684c595a26ce0a3d"],["/js/4.e0c0c0621b1bdbc239ab.js","db038ee552c90c2241a38fa7f7c07a82"],["/js/40.e0c0c0621b1bdbc239ab.js","5c4a281ff6a778cac8efbe2125ce8a26"],["/js/404.e0c0c0621b1bdbc239ab.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/js/41.e0c0c0621b1bdbc239ab.js","04bb627ef548cd15ac87e21c1ceff0ac"],["/js/42.e0c0c0621b1bdbc239ab.js","1c59b327a5601121e6476576acaa7d21"],["/js/43.e0c0c0621b1bdbc239ab.js","86fc1aa59614cfa347ceab5e3dcbef81"],["/js/44.e0c0c0621b1bdbc239ab.js","43ce8c567f09c94f0e2136aeea752b6f"],["/js/45.e0c0c0621b1bdbc239ab.js","d62358a712bf33cfcca0782ac93d2920"],["/js/46.e0c0c0621b1bdbc239ab.js","156b367467d22d62dcd4fb0cb2406807"],["/js/47.e0c0c0621b1bdbc239ab.js","49d2ee02ebd564fb0bda16d4bc118fd5"],["/js/48.e0c0c0621b1bdbc239ab.js","35123dd64e5320debfd76e25f12f0367"],["/js/49.e0c0c0621b1bdbc239ab.js","6735015a3ae3ec6ec0343a6bed7f3c04"],["/js/5.e0c0c0621b1bdbc239ab.js","dcaa26f6c98e9033b018932228e89069"],["/js/50.e0c0c0621b1bdbc239ab.js","d8df825f46dc904b0021be11dab7eeeb"],["/js/51.e0c0c0621b1bdbc239ab.js","f9eea8f7f1048617cbd9c64895a55cb0"],["/js/52.e0c0c0621b1bdbc239ab.js","9e97bb6b7ccfdce3e8afa725567c8748"],["/js/53.e0c0c0621b1bdbc239ab.js","005ea117dbafb5cccc5fba49a5a4a7b5"],["/js/54.e0c0c0621b1bdbc239ab.js","8a6b89ed17de42fcb04fc80c1c05173b"],["/js/55.e0c0c0621b1bdbc239ab.js","31dbd660bbbeb5aa54a6da3200776128"],["/js/56.e0c0c0621b1bdbc239ab.js","ab8f8175d1c81219d3d12f909de5fa42"],["/js/57.e0c0c0621b1bdbc239ab.js","f36b1cd3218e4c5b3b178b936ee685b7"],["/js/58.e0c0c0621b1bdbc239ab.js","b6ca034a2fb7a26b06cb68691dcb0a0d"],["/js/59.e0c0c0621b1bdbc239ab.js","5c9051ce8eb459a04be4f17cb46d854f"],["/js/6.e0c0c0621b1bdbc239ab.js","18eb55ee65ae019f6d503c0a81266973"],["/js/60.e0c0c0621b1bdbc239ab.js","5a14581f85a8184d59906826d2a25375"],["/js/61.e0c0c0621b1bdbc239ab.js","afff86b1d937cdb2c032ae01fd77ac97"],["/js/62.e0c0c0621b1bdbc239ab.js","4a9aa2880d63f4516037be4245f61a03"],["/js/63.e0c0c0621b1bdbc239ab.js","0b464c9921cd1e106b149de640a422af"],["/js/64.e0c0c0621b1bdbc239ab.js","4c0ce5ff3e3ab337242a284ed389a3a3"],["/js/65.e0c0c0621b1bdbc239ab.js","cbb2f00af89d6c6f9daa01cd9a2f816c"],["/js/66.e0c0c0621b1bdbc239ab.js","87a58e9d0677bb67e1f2ed71a0878a1a"],["/js/67.e0c0c0621b1bdbc239ab.js","dbb6a01d8a4fc567fd775cab7207f97f"],["/js/68.e0c0c0621b1bdbc239ab.js","0a27d2883df5657d0b3ce441cef795c7"],["/js/69.e0c0c0621b1bdbc239ab.js","755bbeea09e87d22573161cda98c2809"],["/js/7.e0c0c0621b1bdbc239ab.js","5a31c2b065e1baf688fae236c963642e"],["/js/70.e0c0c0621b1bdbc239ab.js","2adf1de14e2f043441030980d2f21cb9"],["/js/71.e0c0c0621b1bdbc239ab.js","813d38d6ca74c40caa7494df43cecbce"],["/js/72.e0c0c0621b1bdbc239ab.js","c5b38fa76610ab6a1ca8ba1b1f5d9567"],["/js/73.e0c0c0621b1bdbc239ab.js","5679e3ae2aefbc6ec5488cd3593e6f78"],["/js/74.e0c0c0621b1bdbc239ab.js","c1c963ce81dd13b96e31373dac3790c9"],["/js/75.e0c0c0621b1bdbc239ab.js","349eea34e9e53adc3021f334eadaac6d"],["/js/76.e0c0c0621b1bdbc239ab.js","4e717b22e70d249e906ba6ec6788d3fd"],["/js/77.e0c0c0621b1bdbc239ab.js","4a4364c2533b0faff31ef382f37f7082"],["/js/78.e0c0c0621b1bdbc239ab.js","02d1e2eff1c09b2ed79b8202f47c6b27"],["/js/79.e0c0c0621b1bdbc239ab.js","724bb3f9a11f60fbe4c507168cb2ecc0"],["/js/8.e0c0c0621b1bdbc239ab.js","8566f14bc8df129062432681c0f67eed"],["/js/80.e0c0c0621b1bdbc239ab.js","303b37ca59c66e853ab14c0ca89e4f60"],["/js/81.e0c0c0621b1bdbc239ab.js","673cda3ef0f20bebb8daa99bb0604244"],["/js/82.e0c0c0621b1bdbc239ab.js","a7cb66128020b3fd22ed04771b3882ad"],["/js/9.e0c0c0621b1bdbc239ab.js","63d22e8360cbb2ef485c1fb0b659e96f"],["/js/AccountSignupModal.e0c0c0621b1bdbc239ab.js","b084efc29f5bdf34c8b2c0e6f8c12624"],["/js/account-info.e0c0c0621b1bdbc239ab.js","3838205d370f6fa50dc4f6c7607487f1"],["/js/contract.e0c0c0621b1bdbc239ab.js","0d174e795f8c59d24d6f9fb92e9dbf44"],["/js/default~open_position~1833eefb.e0c0c0621b1bdbc239ab.js","9a186604b79cb86e26254bf1992e76ec"],["/js/digits.e0c0c0621b1bdbc239ab.js","dbd1917187e3152d063de6a54e5d458d"],["/js/info-box.e0c0c0621b1bdbc239ab.js","d875b810eca8d18514f47976f1f3cb25"],["/js/modals.e0c0c0621b1bdbc239ab.js","9e6d7ab66662cb170109a3f11ac06b30"],["/js/notification-messages.e0c0c0621b1bdbc239ab.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/js/open_positions.e0c0c0621b1bdbc239ab.js","1fc1b7b908937b9cd37fa021895fed7b"],["/js/profit_table.e0c0c0621b1bdbc239ab.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/js/push-notification.e0c0c0621b1bdbc239ab.js","0b12df6e5ba12101d9d791943e5994ca"],["/js/reports.e0c0c0621b1bdbc239ab.js","5566c54a03988fd229eca57422b7494e"],["/js/screen-small.e0c0c0621b1bdbc239ab.js","664bbb2d0aef4cff89948ba049e0fea6"],["/js/settings-chart.e0c0c0621b1bdbc239ab.js","4eb13451abc1b6bfe2fa946017eb7f91"],["/js/settings-language.e0c0c0621b1bdbc239ab.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/js/settings-theme.e0c0c0621b1bdbc239ab.js","1db431702de4710272497cb999444349"],["/js/smart_chart.e0c0c0621b1bdbc239ab.js","0bd151447fb09ea7ea7570c5835f6351"],["/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/js/statement.e0c0c0621b1bdbc239ab.js","9a8f9ce973af0c135b292708a3f209dd"],["/js/toggle-menu-drawer.e0c0c0621b1bdbc239ab.js","05ed6159c951aa402f0e8e2041498992"],["/js/two-month-picker.e0c0c0621b1bdbc239ab.js","7ffcebff91118e847097df8afcb893b7"],["/js/vendors~digits~info-b~897959f6.e0c0c0621b1bdbc239ab.js","29c829d50c1d4afb35e541dad5732db1"],["/js/vendors~open_position~7c650be5.e0c0c0621b1bdbc239ab.js","96370a09a14169069e4993fc9b50456a"],["/js/vendors~smart_chart.e0c0c0621b1bdbc239ab.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/js/wallet-information.e0c0c0621b1bdbc239ab.js","9f18b363bf628867340e751b2ef691ee"],["/js/work-in-progress.e0c0c0621b1bdbc239ab.js","e4206c2e258b35597fec2b01850ef48e"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







