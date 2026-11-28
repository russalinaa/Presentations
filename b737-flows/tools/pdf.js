// node tools/pdf.js <index.html> <outDir> [phaseIds...]
// Classic.pdf / NG.pdf = page 1 flight map (A1 landscape) + procedure slides and text (A4 landscape)
const {chromium}=require('playwright');const {execFileSync}=require('child_process');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage();const site='file://'+process.argv[2];
const out=process.argv[3];const ids=process.argv.slice(4).length?process.argv.slice(4):['epu'];
for(const [t,n] of [['CL','Classic.pdf'],['NG','NG.pdf']]){
  const parts=[];
  await p.goto(site+'?print='+t+'&part=map');await p.waitForFunction('window.__ready');await p.waitForTimeout(500);
  await p.pdf({path:out+'/_map.pdf',width:'841mm',height:'594mm',printBackground:true,margin:{top:'8mm',bottom:'8mm',left:'8mm',right:'8mm'}});parts.push(out+'/_map.pdf');
  for(const id of ids){await p.goto(site+'?print='+t+'&only='+id);await p.waitForFunction('window.__ready');await p.waitForTimeout(500);
    const f=out+'/_'+id+'.pdf';await p.pdf({path:f,format:'A4',landscape:true,printBackground:true,margin:{top:'8mm',bottom:'8mm',left:'8mm',right:'8mm'}});parts.push(f);}
  execFileSync('pdfunite',[...parts,out+'/'+n]);parts.forEach(f=>fs.unlinkSync(f));
}
await b.close()})();
