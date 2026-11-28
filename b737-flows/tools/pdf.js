// node tools/pdf.js <siteDir> <outDir> [phaseIds...]
// Classic.pdf / NG.pdf = page 1 flight map (A1 landscape) + one procedure per page block (A4 landscape)
const {chromium}=require('playwright');const {execFileSync}=require('child_process');
(async()=>{const b=await chromium.launch();const p=await b.newPage();const site='file://'+process.argv[2]+'/index.html';
const out=process.argv[3];const ids=process.argv.slice(4).length?process.argv.slice(4):['epu'];
for(const [t,n] of [['CL','Classic.pdf'],['NG','NG.pdf']]){
  const parts=[];
  await p.goto(site+'?print='+t+'&part=map');await p.waitForTimeout(1500);
  await p.pdf({path:out+'/_map.pdf',width:'841mm',height:'594mm',printBackground:true,margin:{top:'8mm',bottom:'8mm',left:'8mm',right:'8mm'}});parts.push(out+'/_map.pdf');
  for(const id of ids){await p.goto(site+'?print='+t+'&only='+id);await p.waitForTimeout(1500);
    const f=out+'/_'+id+'.pdf';await p.pdf({path:f,format:'A4',landscape:true,printBackground:true,margin:{top:'10mm',bottom:'10mm',left:'10mm',right:'10mm'}});parts.push(f);}
  execFileSync('pdfunite',[...parts,out+'/'+n]);parts.forEach(f=>require('fs').unlinkSync(f));
}
await b.close()})();
