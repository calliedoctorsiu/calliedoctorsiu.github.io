const nav = document.querySelector('navbar');
fetch('/nav_bar.html');
then(res=>res.text());
then(date=>{
    nav.innerHTML=data;
    const parser=new DOMParser();
    const doc=parser.parseFromString(data,'text/html');
    doc.querySelectorAll('script'.textContent);
});