/* =========================================================
   LUXORA FASHION — Core Script (Vanilla JS)
   Handles: product data, cart, wishlist, theme, nav,
   filters/sort, product rendering, forms, animations
   ========================================================= */

/* ---------------------------------------------------------
   1. PRODUCT DATA (mock catalogue)
--------------------------------------------------------- */
const LUXORA_PRODUCTS = [
  { id:1,  name:"Cashmere Wool Overcoat",     category:"Men",   sub:"Coats",     price:485, oldPrice:620, rating:4.8, reviews:112, badges:["bestseller"],           colors:["#111111","#7a6a58","#333333"], sizes:["S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&q=80", img2:"https://images.unsplash.com/photo-1520975916090-3105956dac38?w=900&q=80", date:"2026-06-02" },
  { id:2,  name:"Silk Draped Evening Gown",   category:"Women", sub:"Dresses",   price:690, oldPrice:null, rating:4.9, reviews:87,  badges:["new"],                  colors:["#000000","#D4AF37","#8a1f2d"], sizes:["XS","S","M","L"],
    img1:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80", img2:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80", date:"2026-07-01" },
  { id:3,  name:"Tailored Wool Blazer",       category:"Women", sub:"Jackets",   price:340, oldPrice:410, rating:4.6, reviews:64,  badges:["sale"],                 colors:["#111111","#c9c2b4"], sizes:["XS","S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=900&q=80", img2:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=900&q=80", date:"2026-05-20" },
  { id:4,  name:"Classic Leather Chelsea Boots", category:"Men", sub:"Footwear", price:295, oldPrice:null, rating:4.7, reviews:143, badges:["bestseller"],          colors:["#3b2418","#111111"], sizes:["40","41","42","43","44"],
    img1:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80", img2:"https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&q=80", date:"2026-04-18" },
  { id:5,  name:"Kids Cotton Knit Sweater",   category:"Kids",  sub:"Knitwear",  price:78,  oldPrice:96,  rating:4.5, reviews:39,  badges:["sale"],                colors:["#D4AF37","#c94f4f","#3d5a80"], sizes:["4Y","6Y","8Y","10Y"],
    img1:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=900&q=80", img2:"https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&q=80", date:"2026-06-28" },
  { id:6,  name:"Gold-Trim Silk Blouse",      category:"Women", sub:"Tops",      price:225, oldPrice:null, rating:4.4, reviews:52,  badges:["new"],                colors:["#F5F5F5","#D4AF37"], sizes:["XS","S","M","L"],
    img1:"https://images.unsplash.com/photo-1551803091-e20673f15770?w=900&q=80", img2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80", date:"2026-07-05" },
  { id:7,  name:"Merino Crewneck Sweater",    category:"Men",   sub:"Knitwear",  price:165, oldPrice:null, rating:4.6, reviews:71,  badges:["trending"],           colors:["#111111","#4a4a4a","#7a6a58"], sizes:["S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=900&q=80", img2:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&q=80", date:"2026-03-14" },
  { id:8,  name:"Structured Leather Handbag", category:"Women", sub:"Accessories", price:520, oldPrice:640, rating:4.9, reviews:203, badges:["bestseller","sale"], colors:["#111111","#5a2a1e","#D4AF37"], sizes:["One Size"],
    img1:"https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=80", img2:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80", date:"2026-02-09" },
  { id:9,  name:"Kids Denim Overall Set",     category:"Kids",  sub:"Sets",      price:92,  oldPrice:null, rating:4.3, reviews:28,  badges:["new"],                colors:["#3d5a80","#111111"], sizes:["2Y","4Y","6Y","8Y"],
    img1:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80", img2:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900&q=80", date:"2026-06-15" },
  { id:10, name:"Pleated Midi Skirt",         category:"Women", sub:"Skirts",    price:145, oldPrice:180, rating:4.5, reviews:61,  badges:["sale"],                colors:["#D4AF37","#111111","#c9c2b4"], sizes:["XS","S","M","L"],
    img1:"https://images.unsplash.com/photo-1583496661160-fb5886a13f0d?w=900&q=80", img2:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&q=80", date:"2026-01-22" },
  { id:11, name:"Linen Tailored Trousers",    category:"Men",   sub:"Trousers",  price:158, oldPrice:null, rating:4.4, reviews:44,  badges:["trending"],          colors:["#c9c2b4","#111111"], sizes:["30","32","34","36"],
    img1:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=80", img2:"https://images.unsplash.com/photo-1473187983305-f615310e7daa?w=900&q=80", date:"2026-05-02" },
  { id:12, name:"Gold Chain Statement Necklace", category:"Women", sub:"Jewelry", price:210, oldPrice:null, rating:4.8, reviews:96, badges:["bestseller"],        colors:["#D4AF37"], sizes:["One Size"],
    img1:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80", img2:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80", date:"2026-04-30" },
  { id:13, name:"Kids Party Tulle Dress",     category:"Kids",  sub:"Dresses",   price:110, oldPrice:135, rating:4.7, reviews:33,  badges:["sale","new"],         colors:["#D4AF37","#8a1f2d","#F5F5F5"], sizes:["4Y","6Y","8Y","10Y"],
    img1:"https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&q=80", img2:"https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&q=80", date:"2026-06-20" },
  { id:14, name:"Premium Denim Jacket",       category:"Men",   sub:"Jackets",   price:180, oldPrice:null, rating:4.5, reviews:58,  badges:["trending"],          colors:["#3d5a80","#111111"], sizes:["S","M","L","XL"],
    img1:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80", img2:"https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=900&q=80", date:"2026-03-27" },
  { id:15, name:"Satin Slip Evening Dress",   category:"Women", sub:"Dresses",   price:265, oldPrice:320, rating:4.6, reviews:77,  badges:["sale"],                colors:["#8a1f2d","#111111","#D4AF37"], sizes:["XS","S","M","L"],
    img1:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80", img2:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80", date:"2026-02-28" },
  { id:16, name:"Leather Ankle Strap Heels",  category:"Women", sub:"Footwear",  price:245, oldPrice:null, rating:4.7, reviews:84,  badges:["bestseller"],        colors:["#111111","#8a1f2d","#D4AF37"], sizes:["36","37","38","39","40"],
    img1:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80", img2:"https://images.unsplash.com/photo-1560343090-f0409e92791a?w=900&q=80", date:"2026-01-10" }
];
const money = n => '$' + Number(n).toFixed(2);

/* ---------------------------------------------------------
   2. STORAGE HELPERS (cart / wishlist)
--------------------------------------------------------- */
const Store = {
  get(key){ try{ return JSON.parse(localStorage.getItem(key)) || []; }catch(e){ return []; } },
  set(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
};

const Cart = {
  key:'luxora_cart',
  all(){ return Store.get(this.key); },
  add(item){
    const cart = this.all();
    const existing = cart.find(c => c.id===item.id && c.size===item.size && c.color===item.color);
    if(existing){ existing.qty += item.qty; } else { cart.push(item); }
    Store.set(this.key, cart);
    updateNavCounts();
    toast('Added to Bag', item.name);
  },
  remove(index){ const cart = this.all(); cart.splice(index,1); Store.set(this.key, cart); updateNavCounts(); },
  updateQty(index, qty){ const cart = this.all(); if(cart[index]){ cart[index].qty = Math.max(1, qty); Store.set(this.key, cart); } },
  clear(){ Store.set(this.key, []); updateNavCounts(); },
  total(){ return this.all().reduce((s,i)=> s + i.price*i.qty, 0); },
  count(){ return this.all().reduce((s,i)=> s + i.qty, 0); }
};

const Wishlist = {
  key:'luxora_wishlist',
  all(){ return Store.get(this.key); },
  toggle(id){
    let list = this.all();
    if(list.includes(id)){ list = list.filter(x=>x!==id); toast('Removed from Wishlist', ''); }
    else { list.push(id); toast('Added to Wishlist', ''); }
    Store.set(this.key, list);
    updateNavCounts();
    return list.includes(id);
  },
  has(id){ return this.all().includes(id); },
  count(){ return this.all().length; }
};

function updateNavCounts(){
  document.querySelectorAll('.js-cart-count').forEach(el=> el.textContent = Cart.count());
  document.querySelectorAll('.js-wishlist-count').forEach(el=> el.textContent = Wishlist.count());
}

/* ---------------------------------------------------------
   3. TOAST NOTIFICATIONS
--------------------------------------------------------- */
function toast(title, msg){
  let stack = document.getElementById('toastStack');
  if(!stack){
    stack = document.createElement('div');
    stack.id = 'toastStack';
    document.body.appendChild(stack);
  }
  const el = document.createElement('div');
  el.className = 'luxora-toast';
  el.innerHTML = `<i class="fa-solid fa-circle-check"></i><div class="msg"><strong>${title}</strong>${msg||''}</div>`;
  stack.appendChild(el);
  setTimeout(()=>{ el.style.transition='all .4s ease'; el.style.opacity='0'; el.style.transform='translateX(30px)'; setTimeout(()=>el.remove(), 400); }, 2600);
}

/* ---------------------------------------------------------
   4. THEME (Dark / Light)
--------------------------------------------------------- */
function initTheme(){
  const saved = localStorage.getItem('luxora_theme');
  if(saved==='dark'){ document.documentElement.setAttribute('data-theme','dark'); }
  document.querySelectorAll('.js-theme-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const isDark = document.documentElement.getAttribute('data-theme')==='dark';
      if(isDark){ document.documentElement.removeAttribute('data-theme'); localStorage.setItem('luxora_theme','light'); }
      else{ document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('luxora_theme','dark'); }
    });
  });
}

/* ---------------------------------------------------------
   5. NAVIGATION (sticky shadow, mobile menu, search flyout)
--------------------------------------------------------- */
function initNav(){
  const nav = document.querySelector('.navbar-luxora');
  if(nav){
    window.addEventListener('scroll', ()=>{
      nav.classList.toggle('scrolled', window.scrollY > 12);
    });
  }
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', ()=>{
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
      toggle.classList.remove('open'); links.classList.remove('open'); document.body.style.overflow='';
    }));
  }
  const searchBtn = document.querySelector('.js-search-open');
  const searchFly = document.querySelector('.search-flyout');
  const searchClose = document.querySelector('.search-close');
  if(searchBtn && searchFly){
    searchBtn.addEventListener('click', ()=>{ searchFly.classList.add('open'); setTimeout(()=>searchFly.querySelector('input')?.focus(),300); });
    searchClose?.addEventListener('click', ()=> searchFly.classList.remove('open'));
    searchFly.querySelector('form')?.addEventListener('submit', e=>{
      e.preventDefault();
      const q = searchFly.querySelector('input').value.trim();
      window.location.href = 'shop.html' + (q ? ('?q=' + encodeURIComponent(q)) : '');
    });
  }
  // highlight active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
}

/* ---------------------------------------------------------
   6. BACK TO TOP
--------------------------------------------------------- */
function initBackToTop(){
  const btn = document.getElementById('backToTop');
  if(!btn) return;
  window.addEventListener('scroll', ()=> btn.classList.toggle('show', window.scrollY > 500));
  btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
}

/* ---------------------------------------------------------
   7. SCROLL REVEAL (lightweight AOS alternative)
--------------------------------------------------------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal, .reveal-zoom, .reveal-left, .reveal-right');
  if(!('IntersectionObserver' in window)){ els.forEach(el=>el.classList.add('in')); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const delay = entry.target.dataset.delay || 0;
        setTimeout(()=> entry.target.classList.add('in'), delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  els.forEach(el=> io.observe(el));
}

/* ---------------------------------------------------------
   8. PRELOADER
--------------------------------------------------------- */
function initPreloader(){
  const pre = document.getElementById('preloader');
  if(!pre) return;
  window.addEventListener('load', ()=> setTimeout(()=> pre.classList.add('hide'), 400));
  setTimeout(()=> pre.classList.add('hide'), 2200); // fallback
}

/* ---------------------------------------------------------
   9. STAR RATING RENDER
--------------------------------------------------------- */
function starsHTML(rating){
  let html = '';
  for(let i=1;i<=5;i++){
    if(rating >= i) html += '<i class="fa-solid fa-star"></i>';
    else if(rating >= i-0.5) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    else html += '<i class="fa-regular fa-star"></i>';
  }
  return html;
}

/* ---------------------------------------------------------
   10. PRODUCT CARD TEMPLATE
--------------------------------------------------------- */
function productCard(p){
  const wished = Wishlist.has(p.id);
  const badges = p.badges.map(b=>{
    const label = b==='new'?'New': b==='sale'?'Sale': b==='bestseller'?'Best Seller':'Trending';
    return `<span class="tag ${b}">${label}</span>`;
  }).join('');
  const swatches = p.colors.slice(0,4).map(c=>`<span class="swatch" style="background:${c}"></span>`).join('');
  return `
  <div class="product-card reveal" data-id="${p.id}" data-category="${p.category}" data-price="${p.price}" data-date="${p.date}" data-rating="${p.rating}" data-name="${p.name.toLowerCase()}">
    <div class="product-media">
      <a href="product.html?id=${p.id}">
        <img src="${p.img1}" alt="${p.name}" class="img-a" loading="lazy">
        <img src="${p.img2}" alt="${p.name}" class="img-b" loading="lazy">
      </a>
      <div class="product-tags">${badges}</div>
      <div class="product-quick">
        <button class="pq-btn js-wishlist-toggle ${wished?'active':''}" data-id="${p.id}" title="Add to Wishlist" aria-label="Add to wishlist"><i class="fa-${wished?'solid':'regular'} fa-heart"></i></button>
        <button class="pq-btn js-quickview" data-id="${p.id}" title="Quick View" aria-label="Quick view"><i class="fa-regular fa-eye"></i></button>
      </div>
      <button class="product-atc js-quick-add" data-id="${p.id}">Add to Bag</button>
    </div>
    <div class="product-info">
      <span class="product-cat">${p.category} — ${p.sub}</span>
      <h3 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="product-price"><span class="new">${money(p.price)}</span>${p.oldPrice?`<span class="old">${money(p.oldPrice)}</span>`:''}</div>
      <div class="product-rating stars">${starsHTML(p.rating)}<span>(${p.reviews})</span></div>
      <div class="swatches">${swatches}</div>
    </div>
  </div>`;
}

function renderGrid(container, products, colClass){
  if(!container) return;
  colClass = colClass || 'col-xl-3 col-lg-4 col-md-6 col-6';
  if(!products.length){
    container.innerHTML = `<div class="empty-state w-100"><i class="fa-solid fa-shirt"></i><h3>No products found</h3><p class="text-soft mt-2">Try adjusting your filters or search terms.</p></div>`;
    return;
  }
  container.innerHTML = products.map(p => `<div class="${colClass}">${productCard(p)}</div>`).join('');
  bindProductCardEvents(container);
  initReveal();
}

function bindProductCardEvents(scope=document){
  scope.querySelectorAll('.js-wishlist-toggle').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = Number(btn.dataset.id);
      const active = Wishlist.toggle(id);
      btn.classList.toggle('active', active);
      const icon = btn.querySelector('i');
      icon.className = active ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    });
  });
  scope.querySelectorAll('.js-quick-add').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const p = LUXORA_PRODUCTS.find(x=>x.id===Number(btn.dataset.id));
      if(!p) return;
      Cart.add({ id:p.id, name:p.name, price:p.price, img:p.img1, size:p.sizes[0], color:p.colors[0], qty:1 });
    });
  });
  scope.querySelectorAll('.js-quickview').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      window.location.href = 'product.html?id=' + btn.dataset.id;
    });
  });
}

/* ---------------------------------------------------------
   11. NEWSLETTER + CONTACT FORM (mock submit)
--------------------------------------------------------- */
function initForms(){
  document.querySelectorAll('.js-newsletter-form').forEach(f=>{
    f.addEventListener('submit', e=>{
      e.preventDefault();
      const input = f.querySelector('input[type="email"]');
      if(input && input.checkValidity()){
        toast('Subscribed!', 'Welcome to LUXORA — enjoy 10% off.');
        f.reset();
      } else { input.reportValidity(); }
    });
  });

  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e=>{
      e.preventDefault();
      if(contactForm.checkValidity()){
        toast('Message Sent', "We'll reply within 24 hours.");
        contactForm.reset();
        contactForm.classList.remove('was-validated');
      } else {
        contactForm.classList.add('was-validated');
      }
    });
  }

  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', e=>{
      e.preventDefault();
      if(loginForm.checkValidity()){
        toast('Welcome back', 'Signing you in…');
        setTimeout(()=> window.location.href='index.html', 900);
      } else { loginForm.classList.add('was-validated'); }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if(registerForm){
    registerForm.addEventListener('submit', e=>{
      e.preventDefault();
      const pw = document.getElementById('regPassword');
      const pw2 = document.getElementById('regPasswordConfirm');
      let ok = registerForm.checkValidity();
      if(pw && pw2 && pw.value !== pw2.value){ ok = false; pw2.setCustomValidity('mismatch'); } else if(pw2){ pw2.setCustomValidity(''); }
      if(ok){
        toast('Account Created', 'Welcome to LUXORA FASHION.');
        setTimeout(()=> window.location.href='login.html', 900);
      } else {
        registerForm.classList.add('was-validated');
      }
    });
  }
}

/* ---------------------------------------------------------
   12. INIT (runs on every page)
--------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  initPreloader();
  initTheme();
  initNav();
  initBackToTop();
  initForms();
  updateNavCounts();
  initReveal();

  // year in footer
  document.querySelectorAll('.js-year').forEach(el=> el.textContent = new Date().getFullYear());
});
