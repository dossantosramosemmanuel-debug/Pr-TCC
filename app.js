const STORE_KEY = 'ms-cozinha-store-v1';
const ADMIN_PIN = '1234';
const categoriesSeed = [
  { name: 'Todos', icon: '✳' }, { name: 'Panquecas', icon: '◉' }, { name: 'Burritos', icon: '▰' }, { name: 'Crepes', icon: '◇' }
];
const productsSeed = [
  { id: 'pan1', name: 'Panqueca de carne', category: 'Panquecas', description: 'Massa macia recheada com carne moída e temperos do chef.', price: 29.9, oldPrice: 34.9, tag: 'Mais pedida', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', available: true, stock: 24, ingredients: 'Massa de panqueca, carne moída, queijo e temperos', featured: true },
  { id: 'pan2', name: 'Panqueca de frango', category: 'Panquecas', description: 'Frango suculento, queijo derretido e sabor caseiro.', price: 27.9, oldPrice: 0, tag: 'Favorita', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80', available: true, stock: 18, ingredients: 'Massa de panqueca, frango desfiado, queijo e temperos', featured: true },
  { id: 'pan3', name: 'Panqueca de calabresa', category: 'Panquecas', description: 'Calabresa crocante, queijo e molho especial em uma massa leve.', price: 31.9, oldPrice: 0, tag: 'Especial', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', available: true, stock: 16, ingredients: 'Massa de panqueca, calabresa, queijo e molho', featured: true },
  { id: 'pan4', name: 'Panqueca de coração', category: 'Panquecas', description: 'Recheio de coração com cremosidade e sabor irresistível.', price: 32.9, oldPrice: 0, tag: 'Premium', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', available: true, stock: 14, ingredients: 'Massa de panqueca, coração, queijo e temperos', featured: true },
  { id: 'pan5', name: 'Panqueca de brócolis', category: 'Panquecas', description: 'Brócolis fresquinho, queijo derretido e sabor equilibrado.', price: 28.9, oldPrice: 0, tag: 'Saudável', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80', available: true, stock: 15, ingredients: 'Massa de panqueca, brócolis, queijo e temperos', featured: true },
  { id: 'bur4', name: 'Burrito de Costela', category: 'Burritos', description: 'Costela desfiada, arroz, feijão, queijo e molho especial.', price: 35, oldPrice: 0, tag: 'Novo', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80', available: true, stock: 16, ingredients: 'Costela desfiada, alface, tomate, cebola roxa, picles, creme azedo, guacamole, Doritos e pimenta de biquino', featured: true },
  { id: 'bur5', name: 'Burrito de frango', category: 'Burritos', description: 'Frango temperado, arroz, feijão, queijo e legumes frescos.', price: 35, oldPrice: 0, tag: 'Novo', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80', available: true, stock: 18, ingredients: 'Frango em cubos, alface, tomate, cebola roxa, picles, creme azedo, guacamole, Doritos, pimenta de biquino', featured: true },
  { id: 'bur6', name: 'Burrito de Carne suina', category: 'Burritos', description: 'Pernil de porco em cubos com ingredientes frescos e picantes.', price: 35, oldPrice: 0, tag: 'Novo', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80', available: true, stock: 16, ingredients: 'Pernil de porco em cubos, alface, tomate, cebola roxa, picles, creme azedo, guacamole, Doritos e pimenta de biquino', featured: true },
  { id: 'bur7', name: 'Burrito Vegetariano', category: 'Burritos', description: 'Ovo, queijo, vegetais frescos e guacamole com Doritos crocante.', price: 30, oldPrice: 0, tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80', available: true, stock: 14, ingredients: 'Ovo, queijo, alface, tomate, cebola roxa, picles, creme azedo, guacamole, Doritos e pimenta de biquino', featured: true },
  { id: 'cre1', name: 'Crepe de frango com catupiry', category: 'Crepes', description: 'Massa leve recheada com frango temperado e catupiry.', price: 33.9, oldPrice: 0, tag: 'Da casa', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80', available: true, stock: 17, ingredients: 'Massa de crepe, frango desfiado e catupiry', featured: true },
  { id: 'cre2', name: 'Crepe de queijo e tomate', category: 'Crepes', description: 'Queijos derretidos, tomate fresco e manjericão.', price: 29.9, oldPrice: 0, tag: 'Leve', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80', available: true, stock: 15, ingredients: 'Massa de crepe, muçarela, queijo prato, tomate e manjericão', featured: true },
  { id: 'cre3', name: 'Crepe de chocolate e banana', category: 'Crepes', description: 'Crepe quentinho com chocolate e banana caramelizada.', price: 28.9, oldPrice: 0, tag: 'Doce', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80', available: true, stock: 16, ingredients: 'Massa de crepe, chocolate e banana caramelizada', featured: true }
];
const defaultData = {
  catalogVersion: 12, products: productsSeed, categories: categoriesSeed.slice(1).map(item => item.name),
  orders: [], customers: [], favorites: [], cart: [], coupon: '',
  profile: null, address: '', neighborhood: '',
  settings: { name: 'M&S', phone: '', whatsapp: '', address: 'Rua das Flores, 120 · São Paulo, SP', minOrder: 25, preparation: 35, open: true, guestCheckout: true, paymentMethods: ['Pix', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'], areas: [{ name: 'Centro', fee: 5, minimum: 25 }, { name: 'Vila Mariana', fee: 7, minimum: 30 }, { name: 'Pinheiros', fee: 8, minimum: 30 }] }
};
function readStore() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORE_KEY));
    if (!stored || !Array.isArray(stored.products)) return structuredClone(defaultData);
    const state = { ...structuredClone(defaultData), ...stored, settings: { ...structuredClone(defaultData.settings), ...(stored.settings || {}) } };
    if ((stored.catalogVersion || 0) < 2) {
      const legacyIds = new Set(['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9']);
      const legacyCategories = new Set(['Hambúrgueres', 'Combos', 'Porções', 'Bebidas', 'Sobremesas']);
      state.products = [...structuredClone(productsSeed), ...stored.products.filter(product => !legacyIds.has(product.id))];
      state.categories = [...defaultData.categories, ...(stored.categories || []).filter(category => !legacyCategories.has(category) && !defaultData.categories.includes(category))];
      state.cart = (stored.cart || []).filter(item => !legacyIds.has(item.productId));
      state.favorites = (stored.favorites || []).filter(id => !legacyIds.has(id));
    } else if ((stored.catalogVersion || 0) < 3) {
      const newProductIds = new Set(['bur4', 'bur5', 'bur6', 'bur7']);
      const missingProducts = productsSeed.filter(product => newProductIds.has(product.id) && !stored.products.some(saved => saved.id === product.id));
      state.products = [...state.products, ...structuredClone(missingProducts)];
    }
    if ((stored.catalogVersion || 0) < 4) {
      const costela = productsSeed.find(product => product.id === 'bur4');
      const savedCostela = state.products.find(product => product.id === 'bur4');
      if (costela && savedCostela) savedCostela.ingredients = costela.ingredients;
    }
    if ((stored.catalogVersion || 0) < 5) {
      const removedProductIds = new Set(['bur1', 'bur2', 'bur3']);
      state.products = state.products.filter(product => !removedProductIds.has(product.id));
      state.cart = state.cart.filter(item => !removedProductIds.has(item.productId));
      state.favorites = state.favorites.filter(id => !removedProductIds.has(id));
    }
    if ((stored.catalogVersion || 0) < 6) {
      const frango = productsSeed.find(product => product.id === 'bur5');
      const savedFrango = state.products.find(product => product.id === 'bur5');
      if (frango && savedFrango) savedFrango.ingredients = frango.ingredients;
    }
    if ((stored.catalogVersion || 0) < 7) {
      const porco = productsSeed.find(product => product.id === 'bur6');
      const savedPorco = state.products.find(product => product.id === 'bur6');
      if (porco && savedPorco) {
        savedPorco.description = porco.description;
        savedPorco.ingredients = porco.ingredients;
      }
    }
    if ((stored.catalogVersion || 0) < 8) {
      const ingredientCorrections = new Map([
        ['bur4', 'Costela desfiada, alface, tomate, cebola roxa, picles, creme azedo, guacamole, Doritos e pimenta de biquino'],
        ['bur5', 'Frango em cubos, alface, tomate, cebola roxa, picles, creme azedo, guacamole, Doritos, pimenta de biquino']
      ]);
      state.products.forEach(product => {
        if (ingredientCorrections.has(product.id)) product.ingredients = ingredientCorrections.get(product.id);
      });
    }
    if ((stored.catalogVersion || 0) < 9) {
      const vegetariano = productsSeed.find(product => product.id === 'bur7');
      const savedVegetariano = state.products.find(product => product.id === 'bur7');
      if (vegetariano && savedVegetariano) {
        savedVegetariano.description = vegetariano.description;
        savedVegetariano.ingredients = vegetariano.ingredients;
      }
    }
    if ((stored.catalogVersion || 0) < 10) {
      const porco = productsSeed.find(product => product.id === 'bur6');
      const savedPorco = state.products.find(product => product.id === 'bur6');
      if (porco && savedPorco) savedPorco.ingredients = porco.ingredients;
    }
    if ((stored.catalogVersion || 0) < 11) {
      const burritoPrices = new Map([
        ['bur4', 35], ['bur5', 35], ['bur6', 35], ['bur7', 30]
      ]);
      state.products.forEach(product => {
        if (burritoPrices.has(product.id)) product.price = burritoPrices.get(product.id);
      });
      state.catalogVersion = 11;
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    }
    if ((stored.catalogVersion || 0) < 12) {
      const oldPancakeIds = new Set(['pan1', 'pan2', 'pan3']);
      const newPancakes = productsSeed.filter(product => product.category === 'Panquecas');
      state.products = [
        ...state.products.filter(product => product.category !== 'Panquecas'),
        ...structuredClone(newPancakes)
      ];
      state.cart = (state.cart || []).filter(item => !oldPancakeIds.has(item.productId));
      state.favorites = (state.favorites || []).filter(id => !oldPancakeIds.has(id));
      state.catalogVersion = 12;
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    }
    return state;
  } catch { return structuredClone(defaultData); }
}
let state = readStore();
let activeCategory = 'Todos';
let searchQuery = '';
let sortPopular = true;
let activeAdminTab = 'overview';
let editingProductId = null;
let checkoutMode = 'review';
let currentView = 'home';
const $ = selector => document.querySelector(selector);
const money = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value) || 0);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const persist = () => localStorage.setItem(STORE_KEY, JSON.stringify(state));
const byId = id => state.products.find(product => product.id === id);
const productPrice = product => product.oldPrice > product.price && product.oldPrice ? product.price : product.price;
const itemCount = () => state.cart.reduce((sum, item) => sum + item.quantity, 0);
const subtotal = () => state.cart.reduce((sum, item) => sum + item.quantity * (item.unitPrice + item.addons.reduce((total, addon) => total + addon.price, 0)), 0);
const currentArea = () => state.settings.areas.find(area => area.name === state.neighborhood);
const deliveryFee = () => state.neighborhood && currentArea() ? Number(currentArea().fee) : 0;
function couponDiscount(amount, code = state.coupon) {
  const normalized = code.trim().toUpperCase();
  if (normalized === 'BEMVINDO10' && amount >= 35) return Math.min(amount * .1, 20);
  if (normalized === 'VILA5' && amount >= 25) return 5;
  return 0;
}
const orderTotal = () => Math.max(0, subtotal() - couponDiscount(subtotal()) + deliveryFee());
function persistAndRender() { persist(); renderCartCount(); renderShop(); }
function notify(message, error = false) {
  const toast = document.createElement('div');
  toast.className = `toast${error ? ' error' : ''}`;
  toast.textContent = message;
  $('#toast-region').append(toast);
  window.setTimeout(() => toast.remove(), 3000);
}
function showDialog(id) { const dialog = document.getElementById(id); if (dialog && !dialog.open) dialog.showModal(); }
function closeDialog(id) { const dialog = document.getElementById(id); if (dialog?.open) dialog.close(); }
function renderCartCount() {
  const count = itemCount();
  $('#header-cart-count').textContent = count;
  $('#mobile-cart-count').textContent = count;
  $('#mobile-cart-total').textContent = money(orderTotal());
  $('#mobile-cart-button').classList.toggle('hidden', count === 0 || !['home', 'menu'].includes(currentView));
  $('#pending-badge').textContent = state.orders.filter(order => ['Pedido recebido', 'Pedido confirmado'].includes(order.status)).length;
  $('#header-neighborhood').textContent = state.neighborhood || 'Escolha seu endereço';
}
function productCard(product) {
  const favorite = state.favorites.includes(product.id);
  const unavailable = !product.available || Number(product.stock) <= 0;
  return `<article class="product-card"><div class="product-photo"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=75'"><span class="product-tag ${product.tag ? '' : 'hidden'}">${escapeHTML(product.tag)}</span><button class="favorite-button ${favorite ? 'is-favorite' : ''}" data-action="favorite" data-id="${escapeHTML(product.id)}" aria-label="${favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">${favorite ? '♥' : '♡'}</button></div><div class="product-info"><div class="product-heading"><h4>${escapeHTML(product.name)}</h4><span class="product-price">${product.oldPrice > product.price ? `<del>${money(product.oldPrice)}</del>` : ''}${money(product.price)}</span></div><p class="product-description">${escapeHTML(product.description)}</p><div class="product-bottom"><span class="product-category">${unavailable ? 'Indisponível' : escapeHTML(product.category)}</span><button class="add-product-button" data-action="${unavailable ? 'unavailable' : 'product'}" data-id="${escapeHTML(product.id)}" ${unavailable ? 'disabled' : ''} aria-label="${unavailable ? 'Produto indisponível' : 'Ver produto'}">${unavailable ? '–' : '+'}</button></div></div></article>`;
}
function renderCategories() {
  const names = [...new Set([...state.categories, ...state.products.map(product => product.category)])];
  const categories = [{ name: 'Todos', icon: '✳' }, ...names.map(name => categoriesSeed.find(item => item.name === name) || { name, icon: '◈' })];
  const list = $('#category-list');
  if (list) list.innerHTML = categories.map(category => `<button class="category-chip ${activeCategory === category.name ? 'active' : ''}" data-action="category" data-category="${escapeHTML(category.name)}"><span>${category.icon}</span>${escapeHTML(category.name)}</button>`).join('');
}
function renderShop() {
  renderCategories();
  const query = searchQuery.toLocaleLowerCase('pt-BR');
  const availableProducts = state.products.filter(product => product.available && Number(product.stock) > 0);
  const featuredProducts = [...availableProducts].sort((a, b) => Number(b.featured) - Number(a.featured)).slice(0, 3);
  $('#home-product-grid').innerHTML = featuredProducts.map(productCard).join('');
  let products = [...availableProducts];
  if (activeCategory !== 'Todos') products = products.filter(product => product.category === activeCategory);
  if (query) products = products.filter(product => `${product.name} ${product.description} ${product.category} ${product.ingredients}`.toLocaleLowerCase('pt-BR').includes(query));
  if (sortPopular && activeCategory === 'Todos' && !query) products.sort((a, b) => Number(b.featured) - Number(a.featured));
  $('#product-grid').innerHTML = products.map(productCard).join('');
  $('#empty-products').classList.toggle('hidden', products.length > 0);
  $('#menu-title').textContent = query ? 'Resultados da busca' : activeCategory === 'Todos' ? 'Mais pedidos' : activeCategory;
  $('#menu-count').textContent = query ? `${products.length} ${products.length === 1 ? 'resultado' : 'resultados'} encontrados` : `${products.length} opções feitas com cuidado`;
  renderCartCount();
}
function openProduct(id) {
  const product = byId(id);
  if (!product) return;
  const addons = [{ name: 'Bacon crocante', price: 5 }, { name: 'Queijo extra', price: 4 }, { name: 'Cebola caramelizada', price: 3 }];
  $('#product-detail').innerHTML = `<img class="product-detail-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}"><div class="product-detail-body"><div class="eyebrow">${escapeHTML(product.category)}</div><h2>${escapeHTML(product.name)}</h2><p>${escapeHTML(product.description)}</p><p><strong>Ingredientes:</strong> ${escapeHTML(product.ingredients || 'Consulte a loja sobre os ingredientes.')}</p><div class="detail-price">${money(product.price)}</div><div class="option-title">Adicione algo a mais</div><div class="option-list">${addons.map((addon, index) => `<label class="option-row"><input type="checkbox" name="product-addon" value="${index}">${escapeHTML(addon.name)}<span>+ ${money(addon.price)}</span></label>`).join('')}</div><div class="option-title">Observação para a cozinha</div><div class="field"><textarea id="product-note" maxlength="200" placeholder="Ex.: sem cebola"></textarea></div><div class="option-title">Quantidade</div><div class="quantity-picker"><button data-action="detail-qty" data-delta="-1">−</button><strong id="detail-quantity">1</strong><button data-action="detail-qty" data-delta="1">+</button></div><button class="button button-dark modal-cta" data-action="add-custom" data-id="${escapeHTML(product.id)}"><span>Adicionar ao pedido</span><span id="detail-add-total">${money(product.price)}</span></button></div>`;
  $('#product-dialog').dataset.quantity = '1';
  showDialog('product-dialog');
}
function selectedAddons() {
  const options = [{ name: 'Bacon crocante', price: 5 }, { name: 'Queijo extra', price: 4 }, { name: 'Cebola caramelizada', price: 3 }];
  return [...document.querySelectorAll('input[name="product-addon"]:checked')].map(input => options[Number(input.value)]);
}
function updateDetailTotal() {
  const product = byId($('#product-detail').querySelector('[data-action="add-custom"]')?.dataset.id);
  if (!product) return;
  const quantity = Number($('#product-dialog').dataset.quantity || 1);
  const extra = selectedAddons().reduce((sum, addon) => sum + addon.price, 0);
  $('#detail-quantity').textContent = quantity;
  $('#detail-add-total').textContent = money((product.price + extra) * quantity);
}
function addCart(product, quantity = 1, addons = [], note = '') {
  const signature = `${product.id}|${addons.map(addon => addon.name).sort().join(',')}|${note}`;
  const existing = state.cart.find(item => item.signature === signature);
  if (existing) existing.quantity += quantity;
  else state.cart.push({ signature, productId: product.id, name: product.name, unitPrice: product.price, quantity, addons, note });
  persistAndRender();
}
function cartItemMarkup(item, index) {
  const addonLine = item.addons.length ? `<small>${item.addons.map(addon => escapeHTML(addon.name)).join(', ')}</small>` : '';
  return `<div class="cart-line"><div><strong>${escapeHTML(item.name)}</strong>${addonLine}${item.note ? `<small>Obs.: ${escapeHTML(item.note)}</small>` : ''}<span>${money(item.unitPrice + item.addons.reduce((sum, addon) => sum + addon.price, 0))}</span></div><div class="quantity-picker"><button data-action="cart-qty" data-index="${index}" data-delta="-1">−</button><strong>${item.quantity}</strong><button data-action="cart-qty" data-index="${index}" data-delta="1">+</button><button data-action="remove-cart" data-index="${index}" aria-label="Remover">×</button></div></div>`;
}
function renderCartReview() {
  checkoutMode = 'review';
  $('#checkout-content').innerHTML = `<div class="modal-content"><div class="eyebrow">CONFIRA SEU PEDIDO</div><h2>Sua sacola</h2><p>Confira os itens antes de seguir para a entrega.</p>${state.cart.length ? `<div class="form-stack">${state.cart.map(cartItemMarkup).join('')}<div class="field"><label for="coupon-input">Cupom de desconto</label><div style="display:flex;gap:7px"><input id="coupon-input" placeholder="Ex.: BEMVINDO10" value="${escapeHTML(state.coupon)}"><button class="button button-dark button-small" data-action="apply-coupon">Aplicar</button></div><small class="field-hint">Cupons de demonstração: BEMVINDO10 e VILA5.</small></div><div class="field"><label for="review-neighborhood">Bairro de entrega</label><select id="review-neighborhood"><option value="">Selecione seu bairro</option>${state.settings.areas.map(area => `<option value="${escapeHTML(area.name)}" ${state.neighborhood === area.name ? 'selected' : ''}>${escapeHTML(area.name)} · ${money(area.fee)}</option>`).join('')}<option value="__retirada">Retirada no local · grátis</option></select></div><div class="checkout-summary"><div>Subtotal <span style="float:right">${money(subtotal())}</span></div><div>Entrega <span style="float:right">${state.neighborhood ? money(deliveryFee()) : 'A calcular'}</span></div>${couponDiscount(subtotal()) ? `<div>Desconto <span style="float:right">− ${money(couponDiscount(subtotal()))}</span></div>` : ''}<div class="checkout-total">Total <span>${money(orderTotal())}</span></div></div><button class="button button-dark modal-cta" data-action="begin-checkout">Continuar para entrega <span>→</span></button></div>` : '<div class="empty-state"><span>＋</span><strong>Sua sacola está vazia</strong><p>Escolha algo gostoso no cardápio.</p></div>'}</div>`;
  showDialog('checkout-dialog');
}
function renderCheckoutForm() {
  checkoutMode = 'form';
  const profile = state.profile || {};
  const methods = state.settings.paymentMethods.length ? state.settings.paymentMethods : ['Dinheiro'];
  $('#checkout-content').innerHTML = `<div class="modal-content"><div class="eyebrow">QUASE LÁ</div><h2>Onde entregamos?</h2><p>Precisamos de alguns dados para preparar e entregar seu pedido.</p><form id="checkout-form" class="form-stack"><div class="field-grid"><div class="field"><label for="customer-name">Nome *</label><input id="customer-name" name="name" required maxlength="80" value="${escapeHTML(profile.name || '')}"></div><div class="field"><label for="customer-phone">Telefone / WhatsApp *</label><input id="customer-phone" name="phone" required inputmode="tel" maxlength="20" placeholder="(11) 99999-9999" value="${escapeHTML(profile.phone || '')}"></div><div class="field full"><label for="customer-email">E-mail (opcional)</label><input id="customer-email" name="email" type="email" maxlength="120" value="${escapeHTML(profile.email || '')}"></div><div class="field"><label for="fulfillment">Receber como *</label><select id="fulfillment" name="fulfillment"><option value="delivery">Entrega</option><option value="pickup">Retirada no local</option></select></div><div class="field"><label for="payment-method">Pagamento *</label><select id="payment-method" name="payment">${methods.map(method => `<option>${escapeHTML(method)}</option>`).join('')}</select></div><div class="field full" data-address-fields><label for="customer-address">Endereço *</label><input id="customer-address" name="address" required maxlength="150" placeholder="Rua e avenida" value="${escapeHTML(profile.address || state.address)}"></div><div class="field" data-address-fields><label for="customer-number">Número *</label><input id="customer-number" name="number" required maxlength="15"></div><div class="field" data-address-fields><label for="customer-complement">Complemento</label><input id="customer-complement" name="complement" maxlength="60" placeholder="Apto, bloco..."></div><div class="field" data-address-fields><label for="customer-neighborhood">Bairro *</label><select id="customer-neighborhood" name="neighborhood" required><option value="">Selecione</option>${state.settings.areas.map(area => `<option value="${escapeHTML(area.name)}" ${state.neighborhood === area.name ? 'selected' : ''}>${escapeHTML(area.name)} · ${money(area.fee)}</option>`).join('')}</select></div><div class="field" data-address-fields><label for="customer-reference">Ponto de referência</label><input id="customer-reference" name="reference" maxlength="80"></div><div class="field full"><label for="checkout-note">Observações do pedido</label><textarea id="checkout-note" name="note" maxlength="250" placeholder="Alguma orientação para a loja?"></textarea></div><div class="field" id="change-field"><label for="cash-change">Troco para (se pagar em dinheiro)</label><input id="cash-change" name="change" inputmode="decimal" placeholder="Não preciso de troco"></div></div><div class="checkout-summary"><div>Itens (${itemCount()}) <span style="float:right">${money(subtotal())}</span></div><div>Entrega <span id="checkout-fee" style="float:right">${money(deliveryFee())}</span></div><div class="checkout-total">Total estimado <span id="checkout-total">${money(orderTotal())}</span></div></div><div class="disabled-note">Pagamento online não está habilitado. Nenhuma cobrança será processada pelo site. Pix ou cartão devem ser combinados diretamente com a loja.</div><button class="button button-dark modal-cta" type="submit">Confirmar pedido <span>${money(orderTotal())}</span></button></form></div>`;
  showDialog('checkout-dialog');
}
const orderStatuses = ['Pedido recebido', 'Pedido confirmado', 'Em preparação', 'Saiu para entrega', 'Pedido entregue', 'Cancelado'];
function submitOrder(form) {
  const data = new FormData(form);
  const fulfillment = data.get('fulfillment');
  const area = state.settings.areas.find(item => item.name === data.get('neighborhood'));
  if (fulfillment === 'delivery' && !area) { notify('Não atendemos esse bairro. Escolha uma região disponível.', true); return; }
  const minimum = fulfillment === 'delivery' ? Number(area.minimum) : Number(state.settings.minOrder);
  if (subtotal() < minimum) { notify(`O pedido mínimo nesta região é ${money(minimum)}.`, true); return; }
  const name = String(data.get('name')).trim();
  const phone = String(data.get('phone')).trim();
  if (name.length < 2 || phone.replace(/\D/g, '').length < 10) { notify('Confira o nome e informe um telefone válido.', true); return; }
  const id = `MS-${Date.now().toString().slice(-8)}`;
  const fee = fulfillment === 'pickup' ? 0 : Number(area.fee);
  const discount = couponDiscount(subtotal());
  const total = Math.max(0, subtotal() - discount + fee);
  const order = { id, createdAt: new Date().toISOString(), status: 'Pedido recebido', customer: { name, phone, email: String(data.get('email') || '') }, fulfillment, address: fulfillment === 'delivery' ? `${data.get('address')}, ${data.get('number')}${data.get('complement') ? ` · ${data.get('complement')}` : ''}, ${area.name}${data.get('reference') ? ` · Ref.: ${data.get('reference')}` : ''}` : state.settings.address, neighborhood: fulfillment === 'delivery' ? area.name : '', payment: String(data.get('payment')), paymentStatus: 'Pendente de confirmação pela loja', change: data.get('change') || '', note: String(data.get('note') || ''), items: state.cart.map(item => ({ ...item, addons: item.addons.map(addon => ({ ...addon })) })), subtotal: subtotal(), delivery: fee, discount, total, history: [{ status: 'Pedido recebido', at: new Date().toISOString(), by: 'Cliente' }] };
  state.orders.unshift(order);
  let customer = state.customers.find(item => item.phone === phone);
  const profile = { name, phone, email: order.customer.email, address: fulfillment === 'delivery' ? order.address : '' };
  state.profile = profile;
  state.address = fulfillment === 'delivery' ? order.address : '';
  state.neighborhood = fulfillment === 'delivery' ? area.name : '';
  if (customer) { customer.name = name; customer.email = profile.email; customer.lastOrder = order.createdAt; customer.totalSpent = Number(customer.totalSpent || 0) + total; customer.orders = Number(customer.orders || 0) + 1; customer.address = profile.address || customer.address; }
  else state.customers.unshift({ ...profile, lastOrder: order.createdAt, totalSpent: total, orders: 1, note: '' });
  state.cart = [];
  state.coupon = '';
  persist();
  renderShop();
  $('#checkout-content').innerHTML = `<div class="order-success"><span class="success-icon">✓</span><div class="eyebrow">PEDIDO ENVIADO À LOJA</div><h2>Recebemos seu pedido!</h2><div class="order-number">${escapeHTML(id)}</div><p>O resumo e o acompanhamento ficam salvos neste navegador. A loja ainda precisa confirmar o pedido e combinar a forma de pagamento.</p><div class="checkout-summary"><strong>${escapeHTML(order.customer.name)}</strong><br>${order.items.map(item => `${item.quantity}× ${escapeHTML(item.name)}`).join('<br>')}<br><br>${escapeHTML(order.payment)} · ${money(order.total)}<br>${escapeHTML(order.address)}</div><button class="button button-dark" data-action="track-order" data-id="${escapeHTML(id)}">Acompanhar pedido</button></div>`;
  notify('Pedido registrado neste dispositivo.');
}
function renderOrders() {
  const orders = state.orders.filter(order => !state.profile || order.customer.phone === state.profile.phone);
  $('#customer-orders').innerHTML = orders.length ? orders.map(order => {
    const current = Math.max(0, orderStatuses.indexOf(order.status));
    const steps = orderStatuses.slice(0, 5).map((status, index) => `<span class="timeline-step ${order.status === 'Cancelado' ? (status === 'Pedido recebido' ? 'done' : '') : index <= current ? 'done' : ''}" title="${status}"></span>`).join('');
    return `<article class="customer-order"><div class="customer-order-top"><strong>Pedido ${escapeHTML(order.id)}</strong><span class="order-status-label">${escapeHTML(order.status)}</span></div><p>${new Date(order.createdAt).toLocaleString('pt-BR')} · ${order.items.reduce((sum, item) => sum + item.quantity, 0)} itens · ${money(order.total)}</p><p>${order.items.map(item => `${item.quantity}× ${escapeHTML(item.name)}`).join(' · ')}</p><div class="order-timeline">${steps}</div><p>${escapeHTML(order.payment)} · ${escapeHTML(order.paymentStatus)}</p></article>`;
  }).join('') : '<div class="empty-state"><span>◷</span><strong>Seus pedidos aparecerão aqui</strong><p>Faça um pedido para acompanhar cada etapa por aqui.</p><a href="#cardapio" class="button button-dark" data-view="menu">Ver cardápio</a></div>';
  const favorites = state.products.filter(product => state.favorites.includes(product.id) && product.available);
  $('#favorite-grid').innerHTML = favorites.map(productCard).join('');
}
function renderAbout() {
  $('#about-store-name').textContent = state.settings.name;
  $('#about-address').textContent = state.settings.address || 'Endereço não cadastrado';
  $('#about-open-status').textContent = state.settings.open ? 'Recebendo pedidos' : 'Fechada no momento';
  $('#about-preparation').textContent = `${state.settings.preparation} min`;
  $('#about-map-link').href = `https://maps.google.com/?q=${encodeURIComponent(state.settings.address || state.settings.name)}`;
  const whatsappLink = $('#about-whatsapp-link');
  if (state.settings.whatsapp) {
    whatsappLink.href = `https://wa.me/${state.settings.whatsapp}`;
    whatsappLink.textContent = 'Conversar pelo WhatsApp ↗';
    whatsappLink.setAttribute('target', '_blank');
    whatsappLink.classList.remove('disabled');
    $('#about-contact-note').textContent = 'Atendimento da loja pelo WhatsApp.';
  } else {
    whatsappLink.href = '#';
    whatsappLink.textContent = 'WhatsApp não configurado';
    whatsappLink.removeAttribute('target');
    whatsappLink.classList.add('disabled');
    $('#about-contact-note').textContent = 'Configure o WhatsApp da loja no painel para ativar o contato.';
  }
}
function showView(view) {
  currentView = view;
  const isHome = view === 'home';
  const isMenu = view === 'menu';
  const isAbout = view === 'about';
  const isOrders = view === 'orders';
  $('#home-view').classList.toggle('hidden', !isHome);
  $('#menu-view').classList.toggle('hidden', !isMenu);
  $('#about-view').classList.toggle('hidden', !isAbout);
  $('#orders-view').classList.toggle('hidden', !isOrders);
  $('#admin-view').classList.toggle('hidden', view !== 'admin');
  document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.view === view));
  if (isMenu) renderShop();
  if (isAbout) renderAbout();
  if (isOrders) renderOrders();
  if (view === 'admin') renderAdmin();
  renderCartCount();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function orderCard(order) {
  return `<article class="board-order"><div class="board-order-top"><span>${escapeHTML(order.id)}</span><span>${money(order.total)}</span></div><p>${escapeHTML(order.customer.name)} · ${new Date(order.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}<br>${order.items.map(item => `${item.quantity}× ${escapeHTML(item.name)}`).join('<br>')}<br>${escapeHTML(order.address)}</p><div class="board-order-top"><span>${escapeHTML(order.payment)}</span><button class="small-action" data-action="print-order" data-id="${escapeHTML(order.id)}">Imprimir</button></div><select data-order-status="${escapeHTML(order.id)}">${orderStatuses.map(status => `<option ${order.status === status ? 'selected' : ''}>${status}</option>`).join('')}</select>${order.status !== 'Pedido entregue' && order.status !== 'Cancelado' ? `<input data-cancel-reason="${escapeHTML(order.id)}" placeholder="Motivo ao cancelar (opcional)" class="cancel-reason" style="display:none;width:100%;margin-top:6px;font-size:8px;padding:6px;border:1px solid #eee;border-radius:3px"><button class="small-action danger" data-action="cancel-order" data-id="${escapeHTML(order.id)}">Cancelar</button>` : ''}</article>`;
}
function renderOverview() {
  const today = new Date().toLocaleDateString('pt-BR');
  const month = new Date().getMonth();
  const paidOrActive = state.orders.filter(order => order.status !== 'Cancelado');
  const todayOrders = paidOrActive.filter(order => new Date(order.createdAt).toLocaleDateString('pt-BR') === today);
  const monthOrders = paidOrActive.filter(order => new Date(order.createdAt).getMonth() === month);
  const todayRevenue = todayOrders.reduce((sum, order) => sum + order.total, 0);
  const monthRevenue = monthOrders.reduce((sum, order) => sum + order.total, 0);
  const avg = paidOrActive.length ? paidOrActive.reduce((sum, order) => sum + order.total, 0) / paidOrActive.length : 0;
  const days = Array.from({ length: 7 }, (_, index) => { const date = new Date(); date.setDate(date.getDate() - (6 - index)); return date; });
  const dayTotals = days.map(day => paidOrActive.filter(order => new Date(order.createdAt).toLocaleDateString('pt-BR') === day.toLocaleDateString('pt-BR')).reduce((sum, order) => sum + order.total, 0));
  const max = Math.max(1, ...dayTotals);
  const bests = state.products.map(product => ({ product, sold: paidOrActive.reduce((sum, order) => sum + order.items.filter(item => item.productId === product.id).reduce((itemSum, item) => itemSum + item.quantity, 0), 0) })).sort((a, b) => b.sold - a.sold).slice(0, 4);
  return `<div class="admin-page-heading"><div><div class="eyebrow">SEGUNDA-FEIRA · ${new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' }).toUpperCase()}</div><h2>Visão geral</h2><p>Um resumo da operação da sua loja.</p></div><select class="date-filter" id="dashboard-period"><option>Últimos 7 dias</option><option>Últimos 30 dias</option><option>Este mês</option></select></div><div class="metric-grid"><article class="metric-card"><span>Faturamento de hoje</span><strong>${money(todayRevenue)}</strong><small>${todayOrders.length} pedidos registrados</small></article><article class="metric-card"><span>Faturamento do mês</span><strong>${money(monthRevenue)}</strong><small>${monthOrders.length} pedidos registrados</small></article><article class="metric-card"><span>Pedidos pendentes</span><strong>${state.orders.filter(order => ['Pedido recebido', 'Pedido confirmado'].includes(order.status)).length}</strong><small>Aguardando atendimento</small></article><article class="metric-card"><span>Ticket médio</span><strong>${money(avg)}</strong><small>${paidOrActive.length} pedidos no período</small></article></div><div class="admin-columns"><section class="admin-box"><div class="admin-box-heading"><h3>Vendas nos últimos 7 dias</h3><span>Valores em R$</span></div><div class="bars-chart">${days.map((day, index) => `<div class="chart-column"><div class="chart-bar" style="--bar-height:${Math.max(7, dayTotals[index] / max * 100)}%;height:var(--bar-height)" title="${money(dayTotals[index])}"></div><small>${day.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '')}</small></div>`).join('')}</div></section><section class="admin-box"><div class="admin-box-heading"><h3>Mais vendidos</h3><span>Por quantidade</span></div><div class="top-products">${bests.map(({ product, sold }) => `<div class="top-product-row"><img src="${escapeHTML(product.image)}" alt=""><span><strong>${escapeHTML(product.name)}</strong><small>${sold} unidades</small></span><b>${money(product.price * sold)}</b></div>`).join('')}</div></section></div><section class="admin-box" style="margin-top:14px"><div class="admin-box-heading"><h3>Pedidos recentes</h3><button class="small-action" data-action="admin-tab" data-tab="orders">Ver todos →</button></div>${state.orders.length ? `<div class="admin-table-wrap" style="border:0"><table class="admin-table"><thead><tr><th>Pedido</th><th>Cliente</th><th>Data</th><th>Total</th><th>Status</th><th>Pagamento</th></tr></thead><tbody>${state.orders.slice(0, 5).map(order => `<tr><td>${escapeHTML(order.id)}</td><td>${escapeHTML(order.customer.name)}</td><td>${new Date(order.createdAt).toLocaleDateString('pt-BR')}</td><td>${money(order.total)}</td><td><span class="status-pill ${order.status === 'Cancelado' ? 'cancel' : ''}">${escapeHTML(order.status)}</span></td><td>${escapeHTML(order.payment)}</td></tr>`).join('')}</tbody></table></div>` : '<p class="field-hint">Os novos pedidos aparecerão aqui.</p>'}</section>`;
}
function renderAdminOrders() {
  const orders = state.orders;
  const stages = ['Pedido recebido', 'Em preparação', 'Saiu para entrega', 'Pedido entregue'];
  return `<div class="admin-page-heading"><div><div class="eyebrow">ACOMPANHAMENTO DA OPERAÇÃO</div><h2>Pedidos</h2><p>${orders.length} pedidos registrados neste navegador.</p></div><button class="button button-dark button-small" data-action="export-csv">Exportar CSV ↓</button></div><div class="filter-row"><input id="order-filter" placeholder="Buscar por número ou cliente"><select id="order-status-filter"><option value="">Todos os status</option>${orderStatuses.map(status => `<option>${status}</option>`).join('')}</select><input type="date" id="order-date-filter"></div><div class="board-columns">${stages.map(stage => { const items = orders.filter(order => order.status === stage); return `<section class="board-column"><div class="board-column-heading">${stage}<span>${items.length}</span></div>${items.map(orderCard).join('')}</section>`; }).join('')}</div><section class="admin-box" style="margin-top:16px"><div class="admin-box-heading"><h3>Cancelados</h3><span>Registro do motivo no histórico</span></div>${orders.filter(order => order.status === 'Cancelado').map(orderCard).join('') || '<p class="field-hint">Nenhum pedido cancelado.</p>'}</section>`;
}
function renderAdminProducts() {
  return `<div class="admin-page-heading"><div><div class="eyebrow">ESTOQUE E DISPONIBILIDADE</div><h2>Cardápio</h2><p>${state.products.length} produtos · ${state.categories.length} categorias cadastradas</p></div><button class="button button-dark button-small" data-action="new-product">+ Novo produto</button></div><div class="filter-row"><input id="product-admin-filter" placeholder="Buscar produto"></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Produto</th><th>Categoria</th><th>Preço</th><th>Estoque</th><th>Status</th><th>Ações</th></tr></thead><tbody>${state.products.map(product => `<tr data-product-row="${escapeHTML(product.id)}"><td><div class="table-product"><img src="${escapeHTML(product.image)}" alt=""><strong>${escapeHTML(product.name)}</strong></div></td><td>${escapeHTML(product.category)}</td><td>${money(product.price)}</td><td>${Number(product.stock)}</td><td><span class="stock-state ${product.available ? '' : 'off'}">${product.available ? 'Disponível' : 'Oculto'}</span></td><td><div class="table-actions"><button class="small-action" data-action="edit-product" data-id="${escapeHTML(product.id)}">Editar</button><button class="small-action" data-action="toggle-product" data-id="${escapeHTML(product.id)}">${product.available ? 'Ocultar' : 'Ativar'}</button><button class="small-action danger" data-action="delete-product" data-id="${escapeHTML(product.id)}">Excluir</button></div></td></tr>`).join('')}</tbody></table></div><section class="admin-box" style="margin-top:15px"><div class="admin-box-heading"><h3>Categorias</h3><span>Adicionar ou remover</span></div><div class="filter-row"><input id="new-category-name" placeholder="Nome da categoria"><button class="button button-dark button-small" data-action="add-category">Adicionar</button></div><div class="category-list">${state.categories.map(category => `<button class="category-chip" data-action="remove-category" data-category="${escapeHTML(category)}">${escapeHTML(category)} ×</button>`).join('')}</div></section>`;
}
function renderCustomers() {
  return `<div class="admin-page-heading"><div><div class="eyebrow">RELACIONAMENTO</div><h2>Clientes</h2><p>Dados visíveis apenas nesta demonstração local.</p></div><button class="button button-dark button-small" data-action="export-customers">Exportar CSV ↓</button></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Cliente</th><th>Telefone</th><th>E-mail</th><th>Pedidos</th><th>Total gasto</th><th>Último pedido</th><th>Endereço</th></tr></thead><tbody>${state.customers.map(customer => `<tr><td>${escapeHTML(customer.name)}</td><td>${escapeHTML(customer.phone)}</td><td>${escapeHTML(customer.email || '—')}</td><td>${customer.orders || 0}</td><td>${money(customer.totalSpent)}</td><td>${customer.lastOrder ? new Date(customer.lastOrder).toLocaleDateString('pt-BR') : '—'}</td><td>${escapeHTML(customer.address || '—')}</td></tr>`).join('') || '<tr><td colspan="7">Nenhum cliente cadastrado ainda.</td></tr>'}</tbody></table></div><p class="field-hint" style="margin-top:10px">Trate telefone e endereço como dados pessoais. Em produção, restrinja acesso no servidor e aplique a LGPD.</p>`;
}
function renderReports() {
  const active = state.orders.filter(order => order.status !== 'Cancelado');
  const gross = active.reduce((sum, order) => sum + order.subtotal, 0);
  const discounts = active.reduce((sum, order) => sum + order.discount, 0);
  const fees = active.reduce((sum, order) => sum + order.delivery, 0);
  const methods = [...new Set(state.orders.map(order => order.payment))];
  return `<div class="admin-page-heading"><div><div class="eyebrow">RESULTADOS DA OPERAÇÃO</div><h2>Relatórios</h2><p>Consolidado de pedidos salvos neste navegador.</p></div><button class="button button-dark button-small" data-action="export-csv">Exportar vendas CSV ↓</button></div><div class="report-summary"><article class="report-metric"><small>Faturamento bruto</small><strong>${money(gross)}</strong></article><article class="report-metric"><small>Descontos concedidos</small><strong>${money(discounts)}</strong></article><article class="report-metric"><small>Taxas de entrega</small><strong>${money(fees)}</strong></article><article class="report-metric"><small>Pedidos cancelados</small><strong>${state.orders.filter(order => order.status === 'Cancelado').length}</strong></article><article class="report-metric"><small>Pedidos concluídos</small><strong>${state.orders.filter(order => order.status === 'Pedido entregue').length}</strong></article><article class="report-metric"><small>Ticket médio</small><strong>${money(active.length ? active.reduce((sum, order) => sum + order.total, 0) / active.length : 0)}</strong></article></div><section class="admin-box" style="margin-top:15px"><div class="admin-box-heading"><h3>Meios de pagamento</h3><span>${state.orders.length} pedidos</span></div>${methods.length ? methods.map(method => `<p style="font-size:10px">${escapeHTML(method)} <strong style="float:right">${state.orders.filter(order => order.payment === method).length} pedidos · ${money(state.orders.filter(order => order.payment === method).reduce((sum, order) => sum + order.total, 0))}</strong></p>`).join('') : '<p class="field-hint">Os resultados aparecerão depois dos primeiros pedidos.</p>'}</section><p class="field-hint" style="margin-top:10px">PDF não implementado. Os relatórios CSV são gerados localmente.</p>`;
}
function renderSettings() {
  return `<div class="admin-page-heading"><div><div class="eyebrow">SUA LOJA, SUAS REGRAS</div><h2>Configurações</h2><p>Estes dados são guardados apenas neste navegador.</p></div></div><form id="settings-form"><div class="settings-grid"><section class="settings-box"><h3>Identidade e operação</h3><div class="field"><label>Nome do estabelecimento</label><input name="name" value="${escapeHTML(state.settings.name)}" required></div><div class="field"><label>WhatsApp da loja (com DDI e DDD)</label><input name="whatsapp" value="${escapeHTML(state.settings.whatsapp)}" placeholder="5511999999999"></div><div class="field"><label>Endereço da loja</label><input name="address" value="${escapeHTML(state.settings.address)}"></div><div class="field-grid"><div class="field"><label>Pedido mínimo (R$)</label><input name="minOrder" type="number" min="0" step="0.01" value="${Number(state.settings.minOrder)}"></div><div class="field"><label>Preparo estimado (min)</label><input name="preparation" type="number" min="1" value="${Number(state.settings.preparation)}"></div></div><label class="option-row"><input name="open" type="checkbox" ${state.settings.open ? 'checked' : ''}> Loja aberta para pedidos</label><label class="option-row"><input name="guestCheckout" type="checkbox" ${state.settings.guestCheckout ? 'checked' : ''}> Permitir pedido como visitante</label></section><section class="settings-box"><h3>Regiões e taxas de entrega</h3><div id="delivery-area-list">${state.settings.areas.map((area, index) => `<div class="delivery-row"><input name="area-name-${index}" value="${escapeHTML(area.name)}" aria-label="Bairro"><input name="area-fee-${index}" type="number" min="0" step="0.01" value="${Number(area.fee)}" aria-label="Taxa R$"><input name="area-min-${index}" type="number" min="0" step="0.01" value="${Number(area.minimum)}" aria-label="Mínimo R$"><button type="button" data-action="remove-area" data-index="${index}" aria-label="Remover bairro">×</button></div>`).join('')}</div><button type="button" class="small-action" data-action="add-area">+ Adicionar bairro</button><p class="field-hint">Campos: bairro, taxa e pedido mínimo da região.</p></section><section class="settings-box"><h3>Formas de pagamento aceitas</h3>${['Pix', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'].map(method => `<label class="option-row"><input type="checkbox" name="payment-method" value="${method}" ${state.settings.paymentMethods.includes(method) ? 'checked' : ''}>${method}</label>`).join('')}<p class="disabled-note">Pagamento online não está integrado. O site registra a preferência do cliente, sem processar cobrança.</p></section><section class="settings-box"><h3>Cupons de exemplo</h3><p class="field-hint"><strong>BEMVINDO10</strong> · 10% acima de R$ 35 (máx. R$ 20)</p><p class="field-hint"><strong>VILA5</strong> · R$ 5 acima de R$ 25</p><p class="field-hint">Regras estáticas de demonstração; não há gestão completa de campanhas neste protótipo.</p></section></div><button type="submit" class="button button-dark settings-save">Salvar configurações</button></form>`;
}
function renderAdmin() {
  const titles = { overview: 'Visão geral', orders: 'Pedidos', products: 'Cardápio', customers: 'Clientes', reports: 'Relatórios', settings: 'Configurações' };
  $('#admin-breadcrumb').textContent = titles[activeAdminTab];
  document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.adminTab === activeAdminTab));
  const renderers = { overview: renderOverview, orders: renderAdminOrders, products: renderAdminProducts, customers: renderCustomers, reports: renderReports, settings: renderSettings };
  $('#admin-panel').innerHTML = renderers[activeAdminTab]();
}
function openProductForm(id = null) {
  const product = id ? byId(id) : null;
  editingProductId = id;
  $('#product-admin-content').innerHTML = `<div class="modal-content"><div class="eyebrow">GESTÃO DO CARDÁPIO</div><h2>${product ? 'Editar produto' : 'Novo produto'}</h2><form id="product-form" class="form-stack"><div class="field-grid"><div class="field full"><label>Nome *</label><input name="name" required maxlength="70" value="${escapeHTML(product?.name || '')}"></div><div class="field"><label>Categoria *</label><input name="category" list="category-options" required value="${escapeHTML(product?.category || '')}"><datalist id="category-options">${state.categories.map(category => `<option value="${escapeHTML(category)}">`).join('')}</datalist></div><div class="field"><label>Preço (R$) *</label><input name="price" type="number" min="0.01" step="0.01" required value="${product?.price ?? ''}"></div><div class="field"><label>Preço anterior (R$)</label><input name="oldPrice" type="number" min="0" step="0.01" value="${product?.oldPrice || ''}"></div><div class="field"><label>Estoque</label><input name="stock" type="number" min="0" step="1" value="${product?.stock ?? 10}"></div><div class="field full"><label>Descrição *</label><textarea name="description" required maxlength="220">${escapeHTML(product?.description || '')}</textarea></div><div class="field full"><label>Ingredientes</label><input name="ingredients" maxlength="180" value="${escapeHTML(product?.ingredients || '')}"></div><div class="field full"><label>URL da foto</label><input name="image" type="url" value="${escapeHTML(product?.image || '')}" placeholder="https://..."></div><div class="field"><label>Etiqueta</label><input name="tag" maxlength="24" value="${escapeHTML(product?.tag || '')}" placeholder="Novo, promoção..."></div><label class="option-row"><input name="available" type="checkbox" ${product?.available !== false ? 'checked' : ''}>Disponível</label><label class="option-row"><input name="featured" type="checkbox" ${product?.featured ? 'checked' : ''}>Destacar como popular</label></div><div class="form-actions"><button class="button button-dark" type="submit">Salvar produto</button><button class="small-action" type="button" data-close="product-admin-dialog">Cancelar</button></div></form></div>`;
  showDialog('product-admin-dialog');
}
function adminLogin() {
  $('#auth-content').innerHTML = `<div class="modal-content"><div class="eyebrow">ÁREA RESTRITA · DEMONSTRAÇÃO</div><h2>Acesso da loja</h2><p>Esta senha é apenas um bloqueio de interface local; não protege dados reais.</p><form id="admin-login-form" class="form-stack"><div class="field"><label for="admin-pin">Código de demonstração</label><input id="admin-pin" name="pin" type="password" inputmode="numeric" required maxlength="8" placeholder="1234"></div><span class="disabled-note">Código inicial: 1234. Altere em app.js apenas para testes locais. Não use em produção.</span><button class="button button-dark" type="submit">Entrar no painel</button></form></div>`;
  showDialog('auth-dialog');
}
function openAccount() {
  const profile = state.profile || {};
  $('#auth-content').innerHTML = `<div class="modal-content"><div class="eyebrow">SEUS DADOS NESTE DISPOSITIVO</div><h2>${profile.name ? `Olá, ${escapeHTML(profile.name.split(' ')[0])}` : 'Identifique-se'}</h2><p>Cadastro demonstrativo local. Para pedidos, você também pode seguir como visitante.</p><form id="profile-form" class="form-stack"><div class="field"><label>Nome</label><input name="name" required value="${escapeHTML(profile.name || '')}"></div><div class="field"><label>Telefone</label><input name="phone" required inputmode="tel" value="${escapeHTML(profile.phone || '')}"></div><div class="field"><label>E-mail</label><input name="email" type="email" value="${escapeHTML(profile.email || '')}"></div><button class="button button-dark" type="submit">Salvar dados</button></form>${profile.name ? '<button class="small-action" style="margin-top:12px" data-action="clear-profile">Remover dados deste dispositivo</button>' : ''}<p class="disabled-note">Login seguro, recuperação de senha e sincronização exigem um servidor e não estão ativos.</p></div>`;
  showDialog('auth-dialog');
}
function openAddressDialog() {
  $('#address-content').innerHTML = `<div class="modal-content"><div class="eyebrow">ONDE VOCÊ ESTÁ?</div><h2>Escolha seu bairro</h2><p>A taxa e o pedido mínimo são calculados pela região.</p><form id="address-form" class="form-stack"><div class="field"><label for="address-neighborhood">Bairro atendido</label><select id="address-neighborhood" name="neighborhood" required><option value="">Selecione</option>${state.settings.areas.map(area => `<option value="${escapeHTML(area.name)}" ${state.neighborhood === area.name ? 'selected' : ''}>${escapeHTML(area.name)} · taxa ${money(area.fee)} · mínimo ${money(area.minimum)}</option>`).join('')}</select></div><div class="field"><label>Rua e número (opcional)</label><input name="address" value="${escapeHTML(state.address)}" placeholder="Rua, número"></div><button class="button button-dark" type="submit">Salvar endereço</button></form><p class="disabled-note">A cobertura depende das regiões cadastradas pela loja.</p></div>`;
  showDialog('address-dialog');
}
function downloadCsv(filename, rows) {
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(';')).join('\r\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}
function exportOrders() {
  downloadCsv('pedidos-ms-cozinha.csv', [['Pedido', 'Data', 'Cliente', 'Telefone', 'Status', 'Pagamento', 'Subtotal', 'Desconto', 'Entrega', 'Total', 'Endereço'], ...state.orders.map(order => [order.id, new Date(order.createdAt).toLocaleString('pt-BR'), order.customer.name, order.customer.phone, order.status, order.payment, order.subtotal.toFixed(2), order.discount.toFixed(2), order.delivery.toFixed(2), order.total.toFixed(2), order.address])]);
}
function exportCustomers() {
  downloadCsv('clientes-ms-cozinha.csv', [['Nome', 'Telefone', 'E-mail', 'Pedidos', 'Total gasto', 'Endereço'], ...state.customers.map(customer => [customer.name, customer.phone, customer.email, customer.orders, customer.totalSpent, customer.address])]);
}
function updateOrderStatus(id, status, reason = '') {
  const order = state.orders.find(item => item.id === id);
  if (!order || !orderStatuses.includes(status)) return;
  order.status = status;
  order.history.push({ status, at: new Date().toISOString(), by: 'Administração', reason });
  if (status === 'Pedido confirmado') order.paymentStatus = 'Aguardando pagamento';
  if (status === 'Cancelado') order.cancelReason = reason || 'Motivo não informado';
  persist();
  renderAdmin();
  renderOrders();
  notify(`Pedido ${id} atualizado: ${status}.`);
}
function printOrder(id) {
  const order = state.orders.find(item => item.id === id);
  if (!order) return;
  const printWindow = window.open('', '_blank', 'width=500,height=700');
  if (!printWindow) { notify('Permita pop-ups para imprimir a comanda.', true); return; }
  printWindow.document.write(`<html lang="pt-BR"><meta charset="utf-8"><title>Comanda ${escapeHTML(order.id)}</title><style>body{font:14px monospace;max-width:360px;margin:28px auto}hr{border:0;border-top:1px dashed #888}h1{font-size:19px}small{color:#555}</style><h1>M&S · ${escapeHTML(order.id)}</h1><p>${new Date(order.createdAt).toLocaleString('pt-BR')}<br>${escapeHTML(order.customer.name)} · ${escapeHTML(order.customer.phone)}<br>${escapeHTML(order.address)}</p><hr>${order.items.map(item => `<p>${item.quantity}× ${escapeHTML(item.name)} · ${money((item.unitPrice + item.addons.reduce((sum, addon) => sum + addon.price, 0)) * item.quantity)}<br><small>${escapeHTML(item.addons.map(addon => addon.name).join(', '))} ${escapeHTML(item.note || '')}</small></p>`).join('')}<hr><p>Pagamento: ${escapeHTML(order.payment)}<br>Total: ${money(order.total)}</p><p>Observações: ${escapeHTML(order.note || '—')}</p><script>window.print()<\/script></html>`);
  printWindow.document.close();
}
function handleAction(button) {
  const { action, id } = button.dataset;
  if (!action) return;
  if (action === 'category') { activeCategory = button.dataset.category; renderShop(); }
  if (action === 'product') openProduct(id);
  if (action === 'unavailable') notify('Este produto está indisponível.', true);
  if (action === 'favorite') {
    state.favorites = state.favorites.includes(id) ? state.favorites.filter(value => value !== id) : [...state.favorites, id];
    persist(); renderShop(); if (!$('#orders-view').classList.contains('hidden')) renderOrders();
  }
  if (action === 'detail-qty') { $('#product-dialog').dataset.quantity = String(Math.max(1, Number($('#product-dialog').dataset.quantity || 1) + Number(button.dataset.delta))); updateDetailTotal(); }
  if (action === 'add-custom') {
    const product = byId(id); if (!product) return;
    addCart(product, Number($('#product-dialog').dataset.quantity || 1), selectedAddons(), $('#product-note').value.trim());
    closeDialog('product-dialog'); notify(`${product.name} adicionado ao pedido.`);
  }
  if (action === 'cart-qty') {
    const item = state.cart[Number(button.dataset.index)]; if (!item) return;
    item.quantity += Number(button.dataset.delta);
    if (item.quantity <= 0) state.cart.splice(Number(button.dataset.index), 1);
    persistAndRender(); renderCartReview();
  }
  if (action === 'remove-cart') { state.cart.splice(Number(button.dataset.index), 1); persistAndRender(); renderCartReview(); }
  if (action === 'apply-coupon') {
    const code = $('#coupon-input').value.trim().toUpperCase();
    if (!code || !couponDiscount(subtotal(), code)) { notify('Cupom inválido ou pedido abaixo do mínimo.', true); return; }
    state.coupon = code; persist(); renderCartReview(); notify('Cupom aplicado.');
  }
  if (action === 'begin-checkout') {
    if (!state.cart.length) { notify('Adicione um produto antes de continuar.', true); return; }
    if (!state.settings.areas.length) { notify('A loja ainda não configurou as regiões de entrega.', true); return; }
    if (!state.neighborhood) { notify('Escolha seu bairro para calcular a entrega.', true); $('#review-neighborhood').focus(); return; }
    const area = currentArea();
    if (area && subtotal() < Number(area.minimum)) { notify(`Pedido mínimo da região: ${money(area.minimum)}.`, true); return; }
    renderCheckoutForm();
  }
  if (action === 'track-order') { closeDialog('checkout-dialog'); showView('orders'); }
  if (action === 'admin-tab') { activeAdminTab = button.dataset.tab; renderAdmin(); }
  if (action === 'new-product') openProductForm();
  if (action === 'edit-product') openProductForm(id);
  if (action === 'toggle-product') { const product = byId(id); if (product) { product.available = !product.available; persist(); renderAdmin(); renderShop(); notify('Disponibilidade atualizada.'); } }
  if (action === 'delete-product') { if (window.confirm('Excluir este produto do cardápio?')) { state.products = state.products.filter(product => product.id !== id); persist(); renderAdmin(); renderShop(); notify('Produto removido.'); } }
  if (action === 'add-category') {
    const input = $('#new-category-name'); const name = input.value.trim();
    if (!name) { notify('Informe o nome da categoria.', true); return; }
    if (state.categories.some(category => category.toLocaleLowerCase('pt-BR') === name.toLocaleLowerCase('pt-BR'))) { notify('Esta categoria já existe.', true); return; }
    state.categories.push(name); persist(); renderAdmin(); renderShop(); notify('Categoria adicionada.');
  }
  if (action === 'remove-category') {
    const name = button.dataset.category;
    if (state.products.some(product => product.category === name)) { notify('Mova ou exclua os produtos antes de remover esta categoria.', true); return; }
    state.categories = state.categories.filter(category => category !== name); persist(); renderAdmin(); renderShop();
  }
  if (action === 'cancel-order') {
    const order = state.orders.find(item => item.id === id);
    if (!order || !window.confirm(`Cancelar o pedido ${id}?`)) return;
    const reason = document.querySelector(`[data-cancel-reason="${CSS.escape(id)}"]`)?.value.trim() || '';
    updateOrderStatus(id, 'Cancelado', reason);
  }
  if (action === 'print-order') printOrder(id);
  if (action === 'export-csv') exportOrders();
  if (action === 'export-customers') exportCustomers();
  if (action === 'add-area') { state.settings.areas.push({ name: '', fee: 0, minimum: 25 }); persist(); renderAdmin(); }
  if (action === 'remove-area') { state.settings.areas.splice(Number(button.dataset.index), 1); persist(); renderAdmin(); }
  if (action === 'clear-profile') { state.profile = null; persist(); closeDialog('auth-dialog'); notify('Dados removidos deste navegador.'); }
}
document.addEventListener('click', event => {
  const close = event.target.closest('[data-close]');
  if (close) { closeDialog(close.dataset.close); return; }
  const action = event.target.closest('[data-action]');
  if (action) { handleAction(action); return; }
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) {
    event.preventDefault();
    if (viewButton.dataset.view === 'admin') { adminLogin(); return; }
    showView(viewButton.dataset.view);
    return;
  }
  if (event.target.closest('#header-cart-button') || event.target.closest('#mobile-cart-button')) renderCartReview();
  if (event.target.closest('#account-button')) openAccount();
  if (event.target.closest('#address-button')) openAddressDialog();
  if (event.target.closest('#view-store-button')) showView('home');
  if (event.target.closest('#logout-button')) showView('home');
  if (event.target.closest('#sort-button')) { sortPopular = !sortPopular; $('#sort-button').innerHTML = `${sortPopular ? 'Mais populares' : 'Nome A–Z'} <span>⌄</span>`; if (!sortPopular) { const cards = [...state.products].filter(product => product.available && (activeCategory === 'Todos' || product.category === activeCategory)).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')); $('#product-grid').innerHTML = cards.map(productCard).join(''); } else renderShop(); }
});
document.addEventListener('input', event => {
  if (event.target.id === 'product-search') { searchQuery = event.target.value; renderShop(); }
  if (event.target.matches('[data-cancel-reason]')) return;
  if (event.target.id === 'order-filter' || event.target.id === 'order-status-filter' || event.target.id === 'order-date-filter') {
    const query = ($('#order-filter')?.value || '').toLocaleLowerCase('pt-BR');
    const status = $('#order-status-filter')?.value || '';
    const date = $('#order-date-filter')?.value || '';
    document.querySelectorAll('.board-order').forEach(card => {
      const text = card.textContent.toLocaleLowerCase('pt-BR');
      const orderId = card.querySelector('[data-order-status]')?.dataset.orderStatus;
      const order = state.orders.find(item => item.id === orderId);
      const matches = text.includes(query) && (!status || order?.status === status) && (!date || order?.createdAt.slice(0, 10) === date);
      card.style.display = matches ? '' : 'none';
    });
  }
  if (event.target.id === 'product-admin-filter') {
    const query = event.target.value.toLocaleLowerCase('pt-BR');
    document.querySelectorAll('[data-product-row]').forEach(row => row.style.display = row.textContent.toLocaleLowerCase('pt-BR').includes(query) ? '' : 'none');
  }
});
document.addEventListener('change', event => {
  if (event.target.id === 'review-neighborhood') {
    state.neighborhood = event.target.value === '__retirada' ? '' : event.target.value;
    if (event.target.value === '__retirada') { state.address = ''; notify('Retirada selecionada. Escolha entrega no checkout para informar um endereço.'); }
    persist(); renderCartReview();
  }
  if (event.target.matches('input[name="product-addon"]')) updateDetailTotal();
  if (event.target.matches('[data-order-status]')) {
    const id = event.target.dataset.orderStatus;
    if (event.target.value === 'Cancelado') {
      const input = document.querySelector(`[data-cancel-reason="${CSS.escape(id)}"]`);
      if (input) { input.style.display = 'block'; input.focus(); }
      if (!window.confirm(`Confirmar cancelamento do pedido ${id}?`)) { renderAdmin(); return; }
    }
    updateOrderStatus(id, event.target.value);
  }
  if (event.target.id === 'fulfillment') {
    const isDelivery = event.target.value === 'delivery';
    document.querySelectorAll('[data-address-fields]').forEach(field => field.classList.toggle('hidden', !isDelivery));
    $('#customer-address').required = isDelivery; $('#customer-number').required = isDelivery; $('#customer-neighborhood').required = isDelivery;
    const area = currentArea(); const fee = isDelivery && area ? Number(area.fee) : 0;
    $('#checkout-fee').textContent = isDelivery && !area ? 'A calcular' : money(fee);
    $('#checkout-total').textContent = money(Math.max(0, subtotal() - couponDiscount(subtotal()) + fee));
  }
  if (event.target.id === 'payment-method') $('#change-field').classList.toggle('hidden', event.target.value !== 'Dinheiro');
});
document.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  if (form.id === 'checkout-form') { submitOrder(form); return; }
  if (form.id === 'admin-login-form') {
    if (new FormData(form).get('pin') !== ADMIN_PIN) { notify('Código incorreto.', true); return; }
    closeDialog('auth-dialog'); activeAdminTab = 'overview'; showView('admin'); return;
  }
  if (form.id === 'profile-form') {
    const data = new FormData(form); const phone = String(data.get('phone')).trim();
    if (phone.replace(/\D/g, '').length < 10) { notify('Informe um telefone válido.', true); return; }
    state.profile = { name: String(data.get('name')).trim(), phone, email: String(data.get('email') || ''), address: state.address };
    persist(); closeDialog('auth-dialog'); notify('Dados salvos neste dispositivo.'); return;
  }
  if (form.id === 'address-form') {
    const data = new FormData(form); state.neighborhood = String(data.get('neighborhood')); state.address = String(data.get('address') || '').trim(); persist(); closeDialog('address-dialog'); renderCartCount(); notify(`Entrega em ${state.neighborhood} selecionada.`); return;
  }
  if (form.id === 'product-form') {
    const data = new FormData(form); const product = { id: editingProductId || `p${Date.now()}`, name: String(data.get('name')).trim(), category: String(data.get('category')).trim(), description: String(data.get('description')).trim(), ingredients: String(data.get('ingredients') || '').trim(), price: Number(data.get('price')), oldPrice: Number(data.get('oldPrice')) || 0, stock: Math.max(0, Number(data.get('stock'))), image: String(data.get('image') || '').trim() || 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=75', tag: String(data.get('tag') || '').trim(), available: data.has('available'), featured: data.has('featured') };
    if (product.oldPrice && product.oldPrice <= product.price) { notify('O preço anterior precisa ser maior que o preço atual.', true); return; }
    if (editingProductId) state.products = state.products.map(item => item.id === editingProductId ? product : item); else state.products.unshift(product);
    if (!state.categories.includes(product.category)) state.categories.push(product.category);
    persist(); closeDialog('product-admin-dialog'); renderAdmin(); renderShop(); notify(editingProductId ? 'Produto atualizado.' : 'Produto cadastrado.'); return;
  }
  if (form.id === 'settings-form') {
    const data = new FormData(form);
    state.settings.name = String(data.get('name')).trim();
    state.settings.whatsapp = String(data.get('whatsapp') || '').replace(/\D/g, '');
    state.settings.address = String(data.get('address') || '').trim();
    state.settings.minOrder = Math.max(0, Number(data.get('minOrder')) || 0);
    state.settings.preparation = Math.max(1, Number(data.get('preparation')) || 35);
    state.settings.open = data.has('open'); state.settings.guestCheckout = data.has('guestCheckout');
    state.settings.paymentMethods = [...form.querySelectorAll('input[name="payment-method"]:checked')].map(input => input.value);
    const areas = [];
    for (let index = 0; index < state.settings.areas.length; index++) {
      const name = String(data.get(`area-name-${index}`) || '').trim();
      if (name) areas.push({ name, fee: Math.max(0, Number(data.get(`area-fee-${index}`)) || 0), minimum: Math.max(0, Number(data.get(`area-min-${index}`)) || 0) });
    }
    if (new Set(areas.map(area => area.name.toLocaleLowerCase('pt-BR'))).size !== areas.length) { notify('Cada bairro precisa ter um nome único.', true); return; }
    if (!state.settings.paymentMethods.length) { notify('Selecione pelo menos uma forma de pagamento.', true); return; }
    state.settings.areas = areas; persist(); renderAdmin(); renderShop(); notify('Configurações salvas neste navegador.');
  }
});
$('#product-search').addEventListener('keydown', event => { if (event.key === 'Escape') { event.target.value = ''; searchQuery = ''; renderShop(); } });
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#product-search').focus(); }
  if (event.key === 'Escape') document.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
});
$('.admin-sidebar').addEventListener('click', event => {
  const tab = event.target.closest('.admin-tab');
  if (tab) { activeAdminTab = tab.dataset.adminTab; renderAdmin(); }
});
$('#checkout-content').addEventListener('change', event => {
  if (event.target.id === 'review-neighborhood') {
    state.neighborhood = event.target.value === '__retirada' ? '' : event.target.value;
    persist(); renderCartReview();
  }
});
window.addEventListener('storage', event => {
  if (event.key === STORE_KEY) { state = readStore(); renderShop(); if (activeAdminTab) renderAdmin(); }
});
renderShop();
