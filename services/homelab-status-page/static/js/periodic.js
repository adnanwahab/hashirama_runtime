import * as THREE from "three";

import TWEEN from "three/addons/libs/tween.module.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";

let shit = [
  "https://static.observableusercontent.com/thumbnail/0ba641e54c2be034d5ebee3ff1e202a8efb11aab0f55cb4ef1348d7fcfb90a13.jpg",
  "https://static.observableusercontent.com/thumbnail/2dc4b6a2731a7216b2e5e555ba6d21b045aae900c022724e20c14833294380ed.jpg",
  "https://static.observableusercontent.com/thumbnail/969982ef06b8b9ef724799a2c6824301d0cbb3152eb4b2d5e506305123fd5b9a.jpg",
  "https://static.observableusercontent.com/thumbnail/d7fb434ff8508726495d62191283cd9584d599fb42756eb6dcb924563cb11b50.jpg",
  "https://static.observableusercontent.com/thumbnail/9b8e01454902b751ecbe72af2a0b1fcc1fd09dd0caa5f06f422e825ba14d8dcd.jpg",
  "https://static.observableusercontent.com/thumbnail/5f468d0a286a6a173120f7e05abca19944f939e216768e31ef8afccfcf9a84c2.jpg",
  "https://static.observableusercontent.com/thumbnail/c4c3780815c8e3cc1370d67f1596101cbde2d420125db73d33600e249c382e51.jpg",
  "https://static.observableusercontent.com/thumbnail/1a0c15e714b00915cbd845b57731fd6286a97e4e95a7ec2ce289682f39a0ce96.jpg",
  "https://static.observableusercontent.com/thumbnail/4515af68eb89274f28219a2b93dbeb8b192c1dd83d51ade786a87910bba7d795.jpg",
  "https://static.observableusercontent.com/thumbnail/63ba0f4d3b1195d1de9d3097796ec9f7c987785d883d48a6387fa1d387e686c1.jpg",
  "https://static.observableusercontent.com/thumbnail/1c60a3f8bb58cd252d5d2893fc5d3a93345c9c9712c6d586acaabc0367aeede5.jpg",
  "https://static.observableusercontent.com/thumbnail/e1ccc6dd42e7307844136b19c6c6422abfa6e089f7874782afff7f830fc015c9.jpg",
  "https://static.observableusercontent.com/thumbnail/5d33e22bc8da09a4495d5bfe0ff207610f2249dc33cbb98505058a4960e8d668.jpg",
  "https://static.observableusercontent.com/thumbnail/b61d4ba0c713a936f295a1baa5f323c4ef0c69f19830991dbdcbd58627b60ca7.jpg",
  "https://static.observableusercontent.com/thumbnail/6d30eda49a7bfd8b63019064257600a812ad4443f13becd3719db16a467de722.jpg",
  "https://static.observableusercontent.com/thumbnail/718ec24be1b77d9130e3e18f7e922ff092ae634d515924d1cf97b507e26de0dd.jpg",
  "https://static.observableusercontent.com/thumbnail/de7799c54a2a6f500dcea71072bce7895ba5985fd10542b25cc5fb75a981efab.jpg",
  "https://static.observableusercontent.com/thumbnail/d913303efcf3c716d98c7b4c3c32a5f56ca4cb8a07faaf5ce2b26b1ec7890e97.jpg",
  "https://static.observableusercontent.com/thumbnail/e211f246ad6ed28ab4c3a762d63af0a68558aaf781e82ef70c239d052b779f68.jpg",
  "https://static.observableusercontent.com/thumbnail/c657b616efca47883c776c810d080af24ff941b66ba4dfd80613048badeaee7d.jpg",
  "https://static.observableusercontent.com/thumbnail/460d8649a394bfc8afec5e7e534712f7f4910a42d7094ec483b0429d8eebf7b5.jpg",
  "https://static.observableusercontent.com/thumbnail/9728eea74c9ba504efb2f2f7e34a9f6921b01f926e037b093d6ec5c9d6bde617.jpg",
  "https://static.observableusercontent.com/thumbnail/bc9be17651dda21bd6a6053f2ba3b1a631d034f40a195c1c38eefff192e3f002.jpg",
  "https://static.observableusercontent.com/thumbnail/c183df5c146a4423aa088e67949957ea1ab0b67c3ae6e1469e6fd6f92fd757be.jpg",
  "https://static.observableusercontent.com/thumbnail/66a87355e205d820c4556bd80531c497229b8fa69bc2edcc04ad8366824be486.jpg",
  "https://static.observableusercontent.com/thumbnail/40a8ec3212c0cbcdc7cb1643c225fa090de9d8e39f7ceb91689ef9b2f453ef2b.jpg",
  "https://static.observableusercontent.com/thumbnail/e104354751b9fd78d0cb77201625d27401cd1374299233dacec75030e1d5896b.jpg",
  "https://static.observableusercontent.com/thumbnail/623a6386156488b73a3259831b3f2ac5333d045e15130bcf61482257b6dd08ec.jpg",
  "https://static.observableusercontent.com/thumbnail/cd4f14efd1b45ac020b495178bd5467fea6e57ce7eb4b066fca40c9009f0cb26.jpg",
  "https://static.observableusercontent.com/thumbnail/1fb683721dc358ccecf55e84386d5025a69d176517270f71a5143f5734a71c18.jpg",
  "https://static.observableusercontent.com/thumbnail/ee6d1ffcc0b575a74bd6402ed129cea73f7c45727bb1e3e960ef13f9bd5014d1.jpg",
  "https://static.observableusercontent.com/thumbnail/95d34bc68cc84b96f96ca4b073f9fc557df7c9fe4213c43536201e908909da3c.jpg",
  "https://static.observableusercontent.com/thumbnail/bc17217415bc4e5f5510294076bb1022b97792ab67a7d1c4725e144787f1e8da.jpg",
  "https://static.observableusercontent.com/thumbnail/0e48e60d7963b38acb83f73875b6b00b1520504c92de8b4aa1419b1727fcedb2.jpg",
  "https://static.observableusercontent.com/thumbnail/baa8dac553884e09caa3f0611a077594ebdfcfd9416647f1d5c8457d898a52a6.jpg",
  "https://static.observableusercontent.com/thumbnail/c703635d744ecf5e09203afb3e96cf6668364e5029a85c41a6b891178764a3ae.jpg",
  "https://static.observableusercontent.com/thumbnail/12f99b59b32cf0794534d7a4e3f8c86c4a6b25428e135db9e17133bff935a995.jpg",
  "https://static.observableusercontent.com/thumbnail/3bb04e5fdf6e458fc557a3c840fedb0ad3cc8b8d22d7761f0c34446ec329d702.jpg",
  "https://static.observableusercontent.com/thumbnail/27ed7774e1fa36663a857c82f0a056db7e3d1726d532a5b8ec0a38a1d4d2a9c7.jpg",
  "https://static.observableusercontent.com/thumbnail/7c9f5bd32119c0575b9db52adc8f859c07891367f29ed5f463ad878602af67cf.jpg",
  "https://static.observableusercontent.com/thumbnail/6d2e1f16d415ac13f13740b6155fdcfb8d3836e5b2332277de1e26742ffbcb0c.jpg",
  "https://static.observableusercontent.com/thumbnail/6e7bcd6dd272a2e10278955d3433454257bf1bec4bada8176351782459ccd71d.jpg",
  "https://static.observableusercontent.com/thumbnail/9202c28fb40879471231bd0cd718e09e263573552b45ba3292695dde63741038.jpg",
  "https://static.observableusercontent.com/thumbnail/0e8f394a9b90622bf4b422d264f3a199a0d9ec3a4c414b2e6f33788681cc486f.jpg",
  "https://static.observableusercontent.com/thumbnail/ef04371d3b0179ecf2f905d6d46415d8e43b874c0cf2dc50b0d4ec9ee6ab047b.jpg",
  "https://static.observableusercontent.com/thumbnail/d008c0aeb2e945aef84b41961dd335bf81d9e01aed81b0f3c14ee782683ebbe9.jpg",
  "https://static.observableusercontent.com/thumbnail/4f5ad4d8f5d19810c36e332d83eb2d0ed307bdedd4a65071d8e2480c88da8ec4.jpg",
  "https://static.observableusercontent.com/thumbnail/1c7c0e607ef45cf35efa05d291f056b3ccffde40a7833c12c1b72321d7e7006a.jpg",
  "https://static.observableusercontent.com/thumbnail/68a8e7a585cd8cc77279deaa57ad08dfe0b34bdb1ce290de341e299b44144172.jpg",
  "https://static.observableusercontent.com/thumbnail/ec247c2705d1fd141352fa24f7419638d35713cd855ce5fdb6e52678865a6ddb.jpg",
  "https://static.observableusercontent.com/thumbnail/7929711ccf9ca674cc779ce46e64571f7c38796c7778b983e68176af6afeb155.jpg",
  "https://static.observableusercontent.com/thumbnail/b33be4bd1cdafc454f4c2665ce9d4ef6d97aa1bbd42e7297913af3a5cd5b0b26.jpg",
  "https://static.observableusercontent.com/thumbnail/f73b8e79e15aac9acdf74ec25ee7606989356d7fbfc8c8513f7c8675851b6501.jpg",
  "https://static.observableusercontent.com/thumbnail/d0fb65df2bf57366e8ee434bfb58f53af90c0c1dc08b9ae1896b2e552c2166de.jpg",
  "https://static.observableusercontent.com/thumbnail/7e79d7e019ec62049d6cb402c07afebd817817d50dc1402e42e156bd222fc59e.jpg",
  "https://static.observableusercontent.com/thumbnail/f36f862511c45e96cb0e4c26ac6b08024a37266ac7ed1b5d4dbefab2c8b528a6.jpg",
  "https://static.observableusercontent.com/thumbnail/0e8f394a9b90622bf4b422d264f3a199a0d9ec3a4c414b2e6f33788681cc486f.jpg",
  "https://static.observableusercontent.com/thumbnail/cc12c3cfbaea71c89406a433684bfb890997c91d87d7376dc44ccc429a392697.jpg",
  "https://static.observableusercontent.com/thumbnail/636bcd430f65f3358a5afea3e49100bd7236a48cf48b2db9fba906e818338307.jpg",
  "https://static.observableusercontent.com/thumbnail/9a73001277807e217a710e37ffcd7912e9ec13dba0ba11aff65420d09b3edaad.jpg",
  "https://media.giphy.com/headers/2023-09-15-23-1694780588/LHM_BANNER_HP_v17.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2syZTAzcTk4cDhvZ2lieDF4MDl1d2ZsOWp0ZnlreXp3a2psbmVqZCZlcD12MV9naWZzX3RyZW5kaW5nJnRpZD01NDJmYmYxMDI5ZjcwYTVjMzBhN2UxZjJmYjlhYWZlNDA2MzEzODg3MDVjMTllYjU3NWIyNWIzZjEwZDc0OWNmJmN0PWcmYXA9MQ/ghIV9QncxxqQntfBNL/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2syZTAzcTk4cDhvZ2lieDF4MDl1d2ZsOWp0ZnlreXp3a2psbmVqZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/dwI09ZWZ93gIt7uhQm/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2syZTAzcTk4cDhvZ2lieDF4MDl1d2ZsOWp0ZnlreXp3a2psbmVqZCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/hhmBSiOxUhuk6h5lLX/giphy.gif",
  "https://media2.giphy.com/media/iGqP4DYXe4zVJbCY5N/giphy.gif?cid=790b7611gk2e03q98p8ogibx1x09uwfl9jtfykyzwkjlnejd&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/CLQNFY6YIHanjWSEhW/200.gif?cid=790b7611gk2e03q98p8ogibx1x09uwfl9jtfykyzwkjlnejd&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media1.giphy.com/media/l3fQf1OEAq0iri9RC/giphy.gif?cid=790b7611gk2e03q98p8ogibx1x09uwfl9jtfykyzwkjlnejd&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/3ohzdMk3uz9WSpdTvW/200.gif?cid=790b7611gk2e03q98p8ogibx1x09uwfl9jtfykyzwkjlnejd&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/tXL4FHPSnVJ0A/200.gif?cid=790b7611gk2e03q98p8ogibx1x09uwfl9jtfykyzwkjlnejd&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media4.giphy.com/media/9rO5Aksmn0dHQKXJAu/giphy.gif?cid=790b7611gk2e03q98p8ogibx1x09uwfl9jtfykyzwkjlnejd&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/3o6ozrsVQF6Fv1ljNe/giphy.gif?cid=790b7611gk2e03q98p8ogibx1x09uwfl9jtfykyzwkjlnejd&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "https://media2.giphy.com/media/avrlp4ymZdpuwSVI7P/200.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=200.gif&ct=g",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "https://media0.giphy.com/media/IwAZ6dvvvaTtdI8SD5/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media1.giphy.com/media/m48e80jhv4Kk/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/YJ5OlVLZ2QNl6/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media4.giphy.com/media/3oz8xPIblfyMdZwM8w/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media3.giphy.com/media/YlPeYXasYEPpC/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media3.giphy.com/media/ZUomWFktUWpFu/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media0.giphy.com/media/jnQYWZ0T4mkhCmkzcn/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/RNWCNuJtSZjWTtJrTg/giphy.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/dSetRSJcR3PGqkvjRg/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media1.giphy.com/media/SsYyZcduMD9BprMPEO/giphy.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/26tP7vexsaMrS4UpO/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media0.giphy.com/media/26ufcYAkp8e66vanu/giphy.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  // "https://media0.giphy.com/avatars/caromartini/vCv7v456gIT7/80h.png",
  "https://media3.giphy.com/media/d2Z32wTIuPl6iHuw/200.gif?cid=82a1493buqtdxe6r0xb45mbtu4sf1119wtncai2vqvv78qhi&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media4.giphy.com/media/WqRhW40iMtvwVkPtb8/200.gif?cid=82a1493buqtdxe6r0xb45mbtu4sf1119wtncai2vqvv78qhi&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media0.giphy.com/media/ha6vsupXjJVMZ4WJsT/giphy.gif?cid=82a1493buqtdxe6r0xb45mbtu4sf1119wtncai2vqvv78qhi&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/LppUL9xtP9Jf2wRjpB/giphy.gif?cid=82a1493buqtdxe6r0xb45mbtu4sf1119wtncai2vqvv78qhi&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/Xy78avDu4IBAA8IHJb/200.gif?cid=82a1493buqtdxe6r0xb45mbtu4sf1119wtncai2vqvv78qhi&ep=v1_gifs_trending&rid=200.gif&ct=g",
  // "https://media2.giphy.com/avatars/rickandmorty/O2bBTAZhbxI0/80h.png",
  "https://media4.giphy.com/media/l41Yh1olOKd1Tgbw4/giphy.gif?cid=82a1493buqtdxe6r0xb45mbtu4sf1119wtncai2vqvv78qhi&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  // "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "https://media.giphy.com/headers/2023-09-15-23-1694780588/LHM_BANNER_HP_v17.gif",

  "https://media2.giphy.com/media/pbzwwDUTn7oLgGlq0G/200.gif?cid=82a1493bjjt6pwlftjg3gpc8t8nmpimrwc8iywql80nx3gj2&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/H7x1H0veAJlo4/100.gif?cid=82a1493bjjt6pwlftjg3gpc8t8nmpimrwc8iywql80nx3gj2&ep=v1_gifs_trending&rid=100.gif&ct=g",
  "https://media0.giphy.com/media/KJP92WJoGSE5gYUT9O/giphy.gif?cid=82a1493bjjt6pwlftjg3gpc8t8nmpimrwc8iywql80nx3gj2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/FfD45B8kFtGYE/giphy.gif?cid=82a1493bjjt6pwlftjg3gpc8t8nmpimrwc8iywql80nx3gj2&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/doPrWYzSG1Vao/200.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media3.giphy.com/media/PoK6P8YFIom880tdbz/200.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/mtpgD4KBHMgmchNlfm/giphy.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/YOqDymLgjWk0dg3pi3/giphy.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/MVDPX3gaKFPuo/giphy.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/cL4pqu8GGRIihabgSM/giphy.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/qgbOUSNfD0rCZ4IwxV/200.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media1.giphy.com/media/vMAjWyzyAJ2HS/giphy.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/B0s4jnXZFKFkhmRuwt/giphy.gif?cid=82a1493b2bw08uyla21gko41ycu26nqycgu614uhklbkfxgl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/l0MYt5jPR6QX5pnqM/200.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media0.giphy.com/media/DqIb4tYQPRAywC5d18/giphy.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/qL1Ms2ec2pYIqq7o5H/200.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media3.giphy.com/media/Z0Q2mold2ezsXXz71X/giphy.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/xTiN0CNHgoRf1Ha7CM/200.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media0.giphy.com/media/JKskHBDvnIjhGilcX5/giphy.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/PyWQBVqGXsZLwZJyCo/200.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media4.giphy.com/media/piXrzDejeWIM/100.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=100.gif&ct=g",
  "https://media0.giphy.com/media/Pt4ARBAFoiTRuIEWkZ/giphy.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/pArhCgHcVcyRO/200.gif?cid=82a1493bsg2a2wf37jvmfssx2d7zlij8d57qb7l8werv8466&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/opDRL3H2A9iLNuvbOv/giphy.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/l46CekNGcWiKfRumI/200.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/jOcZHGMLaTk6Q/giphy.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/rrmf3fICPZWg1MMXOW/giphy.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/bIYCsTpwj1JxG65eeS/giphy.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/l1J9FiGxR61OcF2mI/giphy.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/Q8N4JhIO9y4yBZ2VAl/200.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media2.giphy.com/media/avrlp4ymZdpuwSVI7P/200.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media1.giphy.com/media/l2Jhok92mZ2PZHjDG/200.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media1.giphy.com/media/33zX3zllJBGY8/200.gif?cid=82a1493b7yxzp8b86n6qi5r5y8y36b88ndchx4kmr0fp24rm&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media0.giphy.com/media/IwAZ6dvvvaTtdI8SD5/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
  "https://media1.giphy.com/media/m48e80jhv4Kk/200.gif?cid=82a1493bsd94sbybkqnf6h4gwk5x5ie5wes89lf3ucrpb79i&ep=v1_gifs_trending&rid=200.gif&ct=g",
];

const table = [
  "H",
  "Hydrogen",
  "1.00794",
  1,
  1,
  "He",
  "Helium",
  "4.002602",
  18,
  1,
  "Li",
  "Lithium",
  "6.941",
  1,
  2,
  "Be",
  "Beryllium",
  "9.012182",
  2,
  2,
  "B",
  "Boron",
  "10.811",
  13,
  2,
  "C",
  "Carbon",
  "12.0107",
  14,
  2,
  "N",
  "Nitrogen",
  "14.0067",
  15,
  2,
  "O",
  "Oxygen",
  "15.9994",
  16,
  2,
  "F",
  "Fluorine",
  "18.9984032",
  17,
  2,
  "Ne",
  "Neon",
  "20.1797",
  18,
  2,
  "Na",
  "Sodium",
  "22.98976...",
  1,
  3,
  "Mg",
  "Magnesium",
  "24.305",
  2,
  3,
  "Al",
  "Aluminium",
  "26.9815386",
  13,
  3,
  "Si",
  "Silicon",
  "28.0855",
  14,
  3,
  "P",
  "Phosphorus",
  "30.973762",
  15,
  3,
  "S",
  "Sulfur",
  "32.065",
  16,
  3,
  "Cl",
  "Chlorine",
  "35.453",
  17,
  3,
  "Ar",
  "Argon",
  "39.948",
  18,
  3,
  "K",
  "Potassium",
  "39.948",
  1,
  4,
  "Ca",
  "Calcium",
  "40.078",
  2,
  4,
  "Sc",
  "Scandium",
  "44.955912",
  3,
  4,
  "Ti",
  "Titanium",
  "47.867",
  4,
  4,
  "V",
  "Vanadium",
  "50.9415",
  5,
  4,
  "Cr",
  "Chromium",
  "51.9961",
  6,
  4,
  "Mn",
  "Manganese",
  "54.938045",
  7,
  4,
  "Fe",
  "Iron",
  "55.845",
  8,
  4,
  "Co",
  "Cobalt",
  "58.933195",
  9,
  4,
  "Ni",
  "Nickel",
  "58.6934",
  10,
  4,
  "Cu",
  "Copper",
  "63.546",
  11,
  4,
  "Zn",
  "Zinc",
  "65.38",
  12,
  4,
  "Ga",
  "Gallium",
  "69.723",
  13,
  4,
  "Ge",
  "Germanium",
  "72.63",
  14,
  4,
  "As",
  "Arsenic",
  "74.9216",
  15,
  4,
  "Se",
  "Selenium",
  "78.96",
  16,
  4,
  "Br",
  "Bromine",
  "79.904",
  17,
  4,
  "Kr",
  "Krypton",
  "83.798",
  18,
  4,
  "Rb",
  "Rubidium",
  "85.4678",
  1,
  5,
  "Sr",
  "Strontium",
  "87.62",
  2,
  5,
  "Y",
  "Yttrium",
  "88.90585",
  3,
  5,
  "Zr",
  "Zirconium",
  "91.224",
  4,
  5,
  "Nb",
  "Niobium",
  "92.90628",
  5,
  5,
  "Mo",
  "Molybdenum",
  "95.96",
  6,
  5,
  "Tc",
  "Technetium",
  "(98)",
  7,
  5,
  "Ru",
  "Ruthenium",
  "101.07",
  8,
  5,
  "Rh",
  "Rhodium",
  "102.9055",
  9,
  5,
  "Pd",
  "Palladium",
  "106.42",
  10,
  5,
  "Ag",
  "Silver",
  "107.8682",
  11,
  5,
  "Cd",
  "Cadmium",
  "112.411",
  12,
  5,
  "In",
  "Indium",
  "114.818",
  13,
  5,
  "Sn",
  "Tin",
  "118.71",
  14,
  5,
  "Sb",
  "Antimony",
  "121.76",
  15,
  5,
  "Te",
  "Tellurium",
  "127.6",
  16,
  5,
  "I",
  "Iodine",
  "126.90447",
  17,
  5,
  "Xe",
  "Xenon",
  "131.293",
  18,
  5,
  "Cs",
  "Caesium",
  "132.9054",
  1,
  6,
  "Ba",
  "Barium",
  "132.9054",
  2,
  6,
  "La",
  "Lanthanum",
  "138.90547",
  4,
  9,
  "Ce",
  "Cerium",
  "140.116",
  5,
  9,
  "Pr",
  "Praseodymium",
  "140.90765",
  6,
  9,
  "Nd",
  "Neodymium",
  "144.242",
  7,
  9,
  "Pm",
  "Promethium",
  "(145)",
  8,
  9,
  "Sm",
  "Samarium",
  "150.36",
  9,
  9,
  "Eu",
  "Europium",
  "151.964",
  10,
  9,
  "Gd",
  "Gadolinium",
  "157.25",
  11,
  9,
  "Tb",
  "Terbium",
  "158.92535",
  12,
  9,
  "Dy",
  "Dysprosium",
  "162.5",
  13,
  9,
  "Ho",
  "Holmium",
  "164.93032",
  14,
  9,
  "Er",
  "Erbium",
  "167.259",
  15,
  9,
  "Tm",
  "Thulium",
  "168.93421",
  16,
  9,
  "Yb",
  "Ytterbium",
  "173.054",
  17,
  9,
  "Lu",
  "Lutetium",
  "174.9668",
  18,
  9,
  "Hf",
  "Hafnium",
  "178.49",
  4,
  6,
  "Ta",
  "Tantalum",
  "180.94788",
  5,
  6,
  "W",
  "Tungsten",
  "183.84",
  6,
  6,
  "Re",
  "Rhenium",
  "186.207",
  7,
  6,
  "Os",
  "Osmium",
  "190.23",
  8,
  6,
  "Ir",
  "Iridium",
  "192.217",
  9,
  6,
  "Pt",
  "Platinum",
  "195.084",
  10,
  6,
  "Au",
  "Gold",
  "196.966569",
  11,
  6,
  "Hg",
  "Mercury",
  "200.59",
  12,
  6,
  "Tl",
  "Thallium",
  "204.3833",
  13,
  6,
  "Pb",
  "Lead",
  "207.2",
  14,
  6,
  "Bi",
  "Bismuth",
  "208.9804",
  15,
  6,
  "Po",
  "Polonium",
  "(209)",
  16,
  6,
  "At",
  "Astatine",
  "(210)",
  17,
  6,
  "Rn",
  "Radon",
  "(222)",
  18,
  6,
  "Fr",
  "Francium",
  "(223)",
  1,
  7,
  "Ra",
  "Radium",
  "(226)",
  2,
  7,
  "Ac",
  "Actinium",
  "(227)",
  4,
  10,
  "Th",
  "Thorium",
  "232.03806",
  5,
  10,
  "Pa",
  "Protactinium",
  "231.0588",
  6,
  10,
  "U",
  "Uranium",
  "238.02891",
  7,
  10,
  "Np",
  "Neptunium",
  "(237)",
  8,
  10,
  "Pu",
  "Plutonium",
  "(244)",
  9,
  10,
  "Am",
  "Americium",
  "(243)",
  10,
  10,
  "Cm",
  "Curium",
  "(247)",
  11,
  10,
  "Bk",
  "Berkelium",
  "(247)",
  12,
  10,
  "Cf",
  "Californium",
  "(251)",
  13,
  10,
  "Es",
  "Einstenium",
  "(252)",
  14,
  10,
  "Fm",
  "Fermium",
  "(257)",
  15,
  10,
  "Md",
  "Mendelevium",
  "(258)",
  16,
  10,
  "No",
  "Nobelium",
  "(259)",
  17,
  10,
  "Lr",
  "Lawrencium",
  "(262)",
  18,
  10,
  "Rf",
  "Rutherfordium",
  "(267)",
  4,
  7,
  "Db",
  "Dubnium",
  "(268)",
  5,
  7,
  "Sg",
  "Seaborgium",
  "(271)",
  6,
  7,
  "Bh",
  "Bohrium",
  "(272)",
  7,
  7,
  "Hs",
  "Hassium",
  "(270)",
  8,
  7,
  "Mt",
  "Meitnerium",
  "(276)",
  9,
  7,
  "Ds",
  "Darmstadium",
  "(281)",
  10,
  7,
  "Rg",
  "Roentgenium",
  "(280)",
  11,
  7,
  "Cn",
  "Copernicium",
  "(285)",
  12,
  7,
  "Nh",
  "Nihonium",
  "(286)",
  13,
  7,
  "Fl",
  "Flerovium",
  "(289)",
  14,
  7,
  "Mc",
  "Moscovium",
  "(290)",
  15,
  7,
  "Lv",
  "Livermorium",
  "(293)",
  16,
  7,
  "Ts",
  "Tennessine",
  "(294)",
  17,
  7,
  "Og",
  "Oganesson",
  "(294)",
  18,
  7,
];

let camera, scene, renderer;
let controls;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000,
  );
  camera.position.z = 3000;

  scene = new THREE.Scene();

  // table

  for (let i = 0; i < table.length; i += 5) {
    const element = document.createElement("div");
    element.className = "element";
    element.style.backgroundColor =
      "rgba(0,127,127," + (Math.random() * 0.5 + 0.25) + ")";

    const img = document.createElement("img");
    // number.className = "number";
    // number.textContent = i / 5 + 1;
    // element.appendChild(number);
    img.src = shit[Math.floor(i / 5)];
    element.appendChild(img);
    // const number = document.createElement("div");
    // number.className = "number";
    // number.textContent = i / 5 + 1;
    // element.appendChild(number);

    // const symbol = document.createElement("div");
    // symbol.className = "symbol";
    // symbol.textContent = table[i];
    // element.appendChild(symbol);

    // const details = document.createElement("div");
    // details.className = "details";
    // details.innerHTML = table[i + 1] + "<br>" + table[i + 2];
    // element.appendChild(details);

    const objectCSS = new CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;
    scene.add(objectCSS);

    objects.push(objectCSS);

    //

    const object = new THREE.Object3D();
    object.position.x = table[i + 3] * 140 - 1330;
    object.position.y = -(table[i + 4] * 180) + 990;

    targets.table.push(object);
  }

  // sphere

  const vector = new THREE.Vector3();

  for (let i = 0, l = objects.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    vector.copy(object.position).multiplyScalar(2);

    object.lookAt(vector);

    targets.sphere.push(object);
  }

  // helix

  for (let i = 0, l = objects.length; i < l; i++) {
    const theta = i * 0.175 + Math.PI;
    const y = -(i * 8) + 450;

    const object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.helix.push(object);
  }

  // grid

  for (let i = 0; i < objects.length; i++) {
    const object = new THREE.Object3D();

    object.position.x = (i % 5) * 400 - 800;
    object.position.y = -(Math.floor(i / 5) % 5) * 400 + 800;
    object.position.z = Math.floor(i / 25) * 1000 - 2000;

    targets.grid.push(object);
  }

  //

  renderer = new CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("container").appendChild(renderer.domElement);

  //

  controls = new TrackballControls(camera, renderer.domElement);
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener("change", render);

  const buttonTable = document.getElementById("table");
  buttonTable.addEventListener("click", function () {
    transform(targets.table, 2000);
  });

  const buttonSphere = document.getElementById("sphere");
  buttonSphere.addEventListener("click", function () {
    transform(targets.sphere, 2000);
  });

  const buttonHelix = document.getElementById("helix");
  buttonHelix.addEventListener("click", function () {
    transform(targets.helix, 2000);
  });

  const buttonGrid = document.getElementById("grid");
  buttonGrid.addEventListener("click", function () {
    transform(targets.grid, 2000);
  });

  transform(targets.table, 2000);

  //

  window.addEventListener("resize", onWindowResize);
}

function transform(targets, duration) {
  TWEEN.removeAll();

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const target = targets[i];

    new TWEEN.Tween(object.position)
      .to(
        { x: target.position.x, y: target.position.y, z: target.position.z },
        Math.random() * duration + duration,
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to(
        { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z },
        Math.random() * duration + duration,
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  }

  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

function animate() {
  requestAnimationFrame(animate);

  TWEEN.update();

  controls.update();
}

function render() {
  renderer.render(scene, camera);
}
