// node tools/check.js <index.html> <outDir> : opens via file://, collects console errors, screenshots
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const errs=[];const f='file://'+process.argv[2];const out=process.argv[3];
async function pg(vp){const p=await b.newPage({viewport:vp});p.on('pageerror',e=>errs.push('pageerror: '+e.message));p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')errs.push(m.type()+': '+m.text())});p.on('requestfailed',r=>errs.push('requestfailed: '+r.url().slice(0,80)));return p;}
const p=await pg({width:1600,height:1000});
await p.goto(f);await p.waitForFunction('window.__ready');await p.waitForTimeout(500);await p.screenshot({path:out+'/1-map-classic.png'});
const n=await p.$$eval('#map .node',e=>e.length);console.log('map nodes',n);
await p.click('#tabs button[data-t=NG]');await p.waitForTimeout(400);await p.screenshot({path:out+'/2-map-ng.png'});
for(const [t,ph] of [['CL','epu'],['NG','epu'],['CL','prelim'],['NG','prelim'],['CL','refuel'],['CL','pfo'],['NG','pfo'],['CL','pcap'],['NG','pcap'],['CL','bstart'],['NG','bstart'],['CL','push'],['NG','estart'],['CL','estart'],['CL','btaxi'],['NG','btaxi'],['CL','taxi'],['NG','bto'],['CL','bto'],['CL','to'],['NG','to']]){await p.goto(f+'#'+t+'/'+ph);await p.reload();await p.waitForFunction('window.__ready');await p.waitForTimeout(400);
  const k=await p.$$eval('#proc .slide',e=>e.length);console.log(t,ph,'slides',k);
  for(let i=0;i<k;i++){const s=await p.$('#sl'+i);await s.screenshot({path:out+`/3-${t}-${ph}-slide${i}.png`});}}
await p.goto(f+'#CL/pfo');await p.reload();await p.waitForTimeout(400);await p.screenshot({path:out+'/4-CL-pfo-text.png'});
const m=await pg({width:390,height:844});await m.goto(f);await m.waitForFunction('window.__ready');await m.waitForTimeout(400);await m.screenshot({path:out+'/5-phone-map.png'});
await m.goto(f+'#NG/epu');await m.reload();await m.waitForTimeout(500);await m.screenshot({path:out+'/6-phone-epu.png'});
const ipad=await pg({width:1024,height:1366});await ipad.goto(f+'#CL/epu');await ipad.waitForTimeout(600);await ipad.screenshot({path:out+'/7-ipad-epu.png'});
console.log('console errors:',errs.length?errs:'none');await b.close()})();
