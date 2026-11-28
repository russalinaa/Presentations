// node tools/pdf.js <siteDir> <outDir> : writes Classic.pdf, NG.pdf, Сверка.pdf
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();
const site='file://'+process.argv[2];
for(const [t,n] of [['CL','Classic.pdf'],['NG','NG.pdf']]){await p.goto(site+'/index.html?print='+t);await p.waitForTimeout(1500);
 await p.pdf({path:process.argv[3]+'/'+n,format:'A4',landscape:true,printBackground:true,preferCSSPageSize:true});}
await p.goto(site+'/sverka.html');await p.waitForTimeout(500);await p.pdf({path:process.argv[3]+'/Сверка.pdf',format:'A4',landscape:true,printBackground:true});
await b.close()})();
