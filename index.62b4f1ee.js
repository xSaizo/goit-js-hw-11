function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequirea610;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequirea610=r);var o=r("fZKcF"),i=r("7Y9D8");function s(e){document.getElementById("gallery").innerHTML=e}const l=async(e,t=1)=>{try{const n=await fetch(`https://pixabay.com/api/?key=40064667-dee000e37b39a04836075971b&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=20`),a=await n.json();if(a.hits&&a.hits.length>0){a.hits.map((e=>e.tags));return a.hits}s("<p>No results found.</p>")}catch(e){s(`<p>${e}</p>`),console.error(e)}};const c=document.getElementById("search-form"),d=document.querySelector(".gallery"),u=document.querySelector(".load-more"),f=new(e(o))(".gallery a",{animationSlide:!1});let p=1;c.addEventListener("submit",(async e=>{e.preventDefault(),p=1;const t=e.currentTarget.elements.searchQuery.value;await y(t,p)})),u.addEventListener("click",(async()=>{p+=1;const e=c.elements.searchQuery.value;await y(e,p)}));let m=!1;async function y(t,n=1){try{1===n&&(d.innerHTML="",m=!1);const a=await l(t,n);if(0===a.length&&!m)return void e(i).Report.failure("Sorry!","There are no images matching your search query.","Please try again.");const r=t.toLowerCase();a.forEach((e=>{if(e.tags.toLowerCase().split(",").some((e=>e.trim()===r))){m=!0;const t=document.createElement("div");t.classList.add("photo-card"),t.innerHTML=`\n                    <a href="${e.largeImageURL}" title="${e.tags}">\n                        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">\n                    </a>\n                    <div class="info">\n                        <p class="info-item"><b>Likes:</b> ${e.likes}</p>\n                        <p class="info-item"><b>Views:</b> ${e.views}</p>\n                        <p class="info-item"><b>Comments:</b> ${e.comments}</p>\n                        <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>\n                    </div>\n                `,d.appendChild(t)}})),f.refresh(),1===n&&(u.style.display="flex")}catch(e){console.error(e)}}
//# sourceMappingURL=index.62b4f1ee.js.map
