const i18n = {
  zh: {
    h_title: "在遙遠的天空之下",
    h_desc: "這是一個關於找回純粹與建立永續的故事。在 Base 鏈上，與「穹」一起見證奇蹟。",
    n_title: "穹之收藏",
    n_btn: "立即鑄造",
    a_title: "空投份額",
    a_sub: "你的獎勵份額總覽",
    a_claim: "申請領取",
    p_title: "個人設定",
    p_lang: "介面語言",
    p_conn: "連結錢包",
    p_disconn: "斷開連接",
    c_title: "循環機制",
    c_desc: "1% 交易燃燒、國庫回購計畫與質押分紅機制。",
    g_title: "視覺畫廊",
    back: "返回",
    ab_title: "關於 SORA",
    ab_sub: "我們的願景與使命"
  },
  en: {
    h_title: "Beneath the Sky",
    h_desc: "A story of purity and sustainability on Base chain. Witness miracles with Sora.",
    n_title: "Collection",
    n_btn: "Mint Now",
    a_title: "Allocations",
    a_sub: "Your rewards summary",
    a_claim: "Claim Airdrop",
    p_title: "Settings",
    p_lang: "Language",
    p_conn: "Connect Wallet",
    p_disconn: "Disconnect",
    c_title: "Ecosystem",
    c_desc: "1% burn, buybacks, and staking rewards.",
    g_title: "Gallery",
    back: "Back",
    ab_title: "About SORA",
    ab_sub: "Vision & Mission"
  },
  jp: {
    h_title: "あの空の下で",
    h_desc: "Baseチェーンで、ソラと共に奇跡を。絆の物語がここから始まる。",
    n_title: "コレクション",
    n_btn: "ミントする",
    a_title: "配分",
    a_sub: "報酬の概要",
    a_claim: "請求する",
    p_title: "設定",
    p_lang: "表示言語",
    p_conn: "接続する",
    p_disconn: "切断",
    c_title: "循環メカニズム",
    c_desc: "1% バーン買い戻し、報酬分配。",
    g_title: "ギャラリー",
    back: "戻る",
    ab_title: "SORAについて",
    ab_sub: "ビジョンと使命"
  }
};

let state = {
  lang: 'zh',
  view: 'home',
  wallet: null,
  walletDisplay: null,
  theme: 'light'
};

let web3Modal = null;

function t() {
  return i18n[state.lang];
}

function render() {
  const container = document.getElementById('app-content');
  const lang = t();
  let html = "";

  switch(state.view) {
    case 'home':
      html = `
        <div class="page-enter space-y-10">
          <div class="text-center space-y-2">
            <h2 class="serif text-4xl font-black italic tracking-tighter text-slate-700 dark:text-slate-200">Sora Portal</h2>
            <p class="text-[9px] uppercase tracking-[0.5em] font-black text-blue-400/60">${lang.h_title}</p>
          </div>
          <div class="glass-panel rounded-[40px] overflow-hidden shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800" class="w-full h-80 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent flex flex-col justify-end p-8 text-center">
              <p class="serif text-2xl font-bold mb-2">連結與牽絆</p>
              <button onclick="navigate('about')" class="mx-auto px-6 py-2 bg-blue-400 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">探索願景</button>
            </div>
          </div>
          <div class="glass-panel p-8 rounded-[35px] text-center text-xs opacity-60 leading-relaxed">${lang.h_desc}</div>
        </div>
      `;
      break;

    case 'nft':
      html = `
        <div class="page-enter space-y-10">
          <div class="text-center">
            <h2 class="serif text-3xl font-black italic text-slate-700">${lang.n_title}</h2>
            <p class="text-[9px] font-black opacity-30 tracking-[0.4em] uppercase mt-1">Celestial Series</p>
          </div>
          <div class="glass-panel p-4 rounded-[45px] shadow-2xl relative overflow-hidden">
            <div class="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black tracking-widest text-blue-400">SERIES 01</div>
            <img src="https://images.unsplash.com/photo-1634157703702-3c124b455499?auto=format&fit=crop&w=600" class="w-full h-[400px] object-cover rounded-[40px]">
            <div class="p-8 space-y-8">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="serif text-3xl font-black italic">SORA #001</h3>
                  <p class="text-[10px] font-bold opacity-30 uppercase tracking-widest mt-1">Eternal Sky Guardian</p>
                </div>
                <div class="text-right">
                  <p class="text-[10px] font-black opacity-30 uppercase">Price</p>
                  <p class="text-2xl font-black text-blue-400">0.005 <span class="text-xs">ETH</span></p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div class="p-3 bg-slate-50/50 rounded-2xl text-center">
                  <p class="text-[8px] font-black opacity-20 uppercase">Rarity</p>
                  <p class="text-[10px] font-bold">SSR</p>
                </div>
                <div class="p-3 bg-slate-50/50 rounded-2xl text-center">
                  <p class="text-[8px] font-black opacity-20 uppercase">Power</p>
                  <p class="text-[10px] font-bold">99+</p>
                </div>
                <div class="p-3 bg-slate-50/50 rounded-2xl text-center">
                  <p class="text-[8px] font-black opacity-20 uppercase">Vibe</p>
                  <p class="text-[10px] font-bold">Pure</p>
                </div>
              </div>
              <button onclick="connectWallet()" class="w-full py-5 btn-premium text-xs font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-transform">
                ${lang.n_btn}
              </button>
            </div>
          </div>
        </div>
      `;
      break;

    case 'airdrop':
      html = `
        <div class="page-enter space-y-8">
          <div class="text-center">
            <h2 class="serif text-3xl font-black italic">${lang.a_title}</h2>
            <p class="text-[9px] font-black opacity-30 uppercase tracking-[0.4em] mt-1">${lang.a_sub}</p>
          </div>
          <div class="glass-panel p-8 rounded-[40px] space-y-8">
            <div class="text-center space-y-1">
              <p class="text-[10px] font-black opacity-40 uppercase">Total Allocations</p>
              <p class="serif text-5xl font-black italic text-blue-400">12,500</p>
              <p class="text-[9px] font-bold opacity-30">SORA Points / Tokens</p>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between text-xs font-bold px-1"><span class="opacity-40">邀請獎勵</span><span class="text-blue-400">+ 5,000</span></div>
              <div class="flex justify-between text-xs font-bold px-1"><span class="opacity-40">質押權重</span><span class="text-blue-400">+ 4,200</span></div>
              <div class="flex justify-between text-xs font-bold px-1"><span class="opacity-40">早期成員</span><span class="text-blue-400">+ 3,300</span></div>
            </div>
            <div class="pt-4 border-t border-slate-100">
              <div class="flex justify-between text-[9px] font-black opacity-30 uppercase mb-2"><span>Season 1 Pool</span><span>78% Left</span></div>
              <div class="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-blue-300 to-pink-300" style="width: 78%"></div>
              </div>
            </div>
            <button onclick="connectWallet()" class="w-full py-4 btn-premium text-[11px] font-black uppercase tracking-widest">${lang.a_claim}</button>
          </div>
        </div>
      `;
      break;

    case 'about':
      html = `
        <div class="page-enter space-y-10">
          <div class="text-center">
            <h2 class="serif text-3xl font-black italic">${lang.ab_title}</h2>
            <p class="text-[9px] font-black opacity-30 uppercase tracking-[0.4em] mt-1">${lang.ab_sub}</p>
          </div>
          <div class="glass-panel p-10 rounded-[45px] space-y-8 leading-loose text-slate-600">
            <div class="space-y-6">
              <p class="text-xs font-medium"><span class="text-blue-400 font-black">SORA</span> 誕生於對去中心化美學的追求。在資訊爆炸的時代，我們試圖在區塊鏈上建立一個如「穹之空」般純淨、透明且永續的生態系統。</p>
              <div class="h-px w-12 bg-slate-200"></div>
              <p class="text-xs font-medium">我們不只是發行代幣，我們是在編織一個關於連結的網路。透過 Base 鏈的高速與低廉成本，讓每一份價值都能精準傳遞。</p>
            </div>
            <div class="grid grid-cols-2 gap-4 pt-4">
              <div class="p-4 bg-blue-50/50 rounded-3xl">
                <p class="text-[9px] font-black opacity-30 uppercase">Focus</p>
                <p class="text-xs font-bold text-blue-400">Pure Art</p>
              </div>
              <div class="p-4 bg-pink-50/50 rounded-3xl">
                <p class="text-[9px] font-black opacity-30 uppercase">Core</p>
                <p class="text-xs font-bold text-pink-400">Community</p>
              </div>
            </div>
          </div>
          <button onclick="navigate('home')" class="mx-auto block text-[9px] font-black opacity-30 uppercase tracking-widest">${lang.back}</button>
        </div>
      `;
      break;

    case 'profile':
      html = `
        <div class="page-enter space-y-8">
          <h2 class="serif text-3xl font-black italic text-center">${lang.p_title}</h2>
          <div class="glass-panel p-10 rounded-[45px] space-y-8">
            <div class="flex flex-col items-center gap-4">
              <div class="w-24 h-24 rounded-full bg-slate-50 border-4 border-white shadow-xl flex items-center justify-center text-4xl">👤</div>
              <p class="font-mono text-[10px] text-slate-400">${state.walletDisplay ? state.walletDisplay : 'Disconnected'}</p>
            </div>
            <div class="space-y-4">
              <label class="text-[9px] font-black opacity-20 uppercase ml-2">${lang.p_lang}</label>
              <div class="flex gap-2 p-1.5 bg-slate-50 rounded-[20px]">
                <div onclick="setLang('zh')" class="lang-chip flex-1 text-center ${state.lang==='zh'?'active':''}">繁體</div>
                <div onclick="setLang('en')" class="lang-chip flex-1 text-center ${state.lang==='en'?'active':''}">EN</div>
                <div onclick="setLang('jp')" class="lang-chip flex-1 text-center ${state.lang==='jp'?'active':''}">日本語</div>
              </div>
            </div>
            <button onclick="state.wallet ? disconnectWallet() : connectWallet()" class="w-full py-4 glass-panel rounded-2xl text-[11px] font-black uppercase tracking-widest">${state.wallet ? lang.p_disconn : lang.p_conn}</button>
          </div>
        </div>
      `;
      break;

    case 'cycle':
      html = `
        <div class="page-enter space-y-8 text-center">
          <h2 class="serif text-3xl font-black italic">${lang.c_title}</h2>
          <div class="glass-panel p-10 rounded-[40px] text-xs leading-loose opacity-60">${lang.c_desc}</div>
          <button onclick="navigate('home')" class="text-[9px] font-black opacity-30 uppercase tracking-widest">${lang.back}</button>
        </div>
      `;
      break;

    case 'gallery':
      html = `
        <div class="page-enter space-y-8">
          <h2 class="serif text-3xl font-black italic text-center">${lang.g_title}</h2>
          <div class="grid grid-cols-2 gap-4">
            ${[1,2,3,4].map(i => `<div class="aspect-square glass-panel rounded-3xl overflow-hidden shadow-sm" onclick="navigate('nft')"><img src="https://images.unsplash.com/photo-${i==1?'1544005313-94ddf0286df2':i==2?'1554151228-14d9def656e4':i==3?'1506794778202-cad84cf45f1d':'1534528741775-53994a69daeb'}?auto=format&fit=crop&w=400" class="w-full h-full object-cover"></div>`).join('')}
          </div>
        </div>
      `;
      break;
  }

  container.innerHTML = html;
  updateNav();
}

function navigate(view) {
  const container = document.getElementById('app-content');
  container.style.opacity = '0';
  setTimeout(() => {
    state.view = view;
    render();
    container.style.opacity = '1';
    toggleSideMenu(false);
    window.scrollTo({top:0, behavior:'smooth'});
  }, 300);
}

function updateNav() {
  document.querySelectorAll('nav button').forEach(btn => {
    if (btn.id === `nav-${state.view}`) btn.classList.add('nav-active');
    else btn.classList.remove('nav-active');
  });
}

function setLang(l) {
  state.lang = l;
  render();
}

function toggleSideMenu(show) {
  const drawer = document.getElementById('side-drawer');
  const overlay = document.getElementById('side-overlay');
  drawer.style.transform = show ? 'translateX(0)' : 'translateX(-100%)';
  overlay.classList.toggle('hidden', !show);
  setTimeout(() => overlay.style.opacity = show ? '1' : '0', 50);
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

async function connectWallet() {
  const { createWeb3Modal, defaultConfig } = window;
  
  if (!createWeb3Modal || !defaultConfig) {
    alert('正在加載錢包組件，請稍後再試');
    return;
  }

  try {
    const metadata = {
      name: 'SORA - 穹之空',
      description: 'SORA Portal on Base Chain',
      url: window.location.origin,
      icons: ['https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=200']
    };

    web3Modal = createWeb3Modal({
      ethersConfig: defaultConfig({ metadata }),
      chains: [8453],
      projectId: 'YOUR_PROJECT_ID_HERE',
      enableAnalytics: false,
      enableEIP6963: true
    });

    web3Modal.subscribeProvider((newProvider) => {
      if (newProvider.isConnected && newProvider.address) {
        const address = newProvider.address;
        state.wallet = { type: 'wallet', address };
        state.walletDisplay = address.slice(0,6) + "..." + address.slice(-4);
        localStorage.setItem('walletConnected', 'true');
        localStorage.setItem('walletType', 'wallet');
        const indicator = document.getElementById('status-indicator');
        if (indicator) {
          indicator.classList.replace('bg-red-400', 'bg-green-400');
        }
        render();
      } else if (!newProvider.isConnected) {
        disconnectWallet();
      }
    });

    web3Modal.open();

  } catch (e) {
    console.error('Wallet connection error:', e);
    alert('錢包連接失敗，請確認已安裝錢包擴充功能');
  }
}

function disconnectWallet() {
  state.wallet = null;
  state.walletDisplay = null;
  localStorage.removeItem('walletConnected');
  localStorage.removeItem('walletType');
  if (web3Modal) {
    web3Modal.clearCachedProvider();
  }
  document.getElementById('status-indicator').classList.replace('bg-green-400', 'bg-red-400');
  render();
}

async function checkConnection() {
  const { createWeb3Modal, defaultConfig } = window;
  
  if (createWeb3Modal && defaultConfig) {
    try {
      const metadata = {
        name: 'SORA - 穹之空',
        description: 'SORA Portal on Base Chain',
        url: window.location.origin,
        icons: ['https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=200']
      };

      web3Modal = createWeb3Modal({
        ethersConfig: defaultConfig({ metadata }),
        chains: [8453],
        projectId: 'YOUR_PROJECT_ID_HERE',
        enableAnalytics: false,
        enableEIP6963: true
      });

      web3Modal.subscribeProvider((newProvider) => {
        if (newProvider.isConnected && newProvider.address) {
          const address = newProvider.address;
          state.wallet = { type: 'wallet', address };
          state.walletDisplay = address.slice(0,6) + "..." + address.slice(-4);
          const indicator = document.getElementById('status-indicator');
          if (indicator) {
            indicator.classList.replace('bg-red-400', 'bg-green-400');
          }
          render();
        } else if (!newProvider.isConnected) {
          disconnectWallet();
        }
      });
    } catch (e) {
      console.error('Check connection error:', e);
    }
  }
}

if (typeof window !== 'undefined') {
  window.navigate = navigate;
  window.setLang = setLang;
  window.toggleTheme = toggleTheme;
  window.toggleSideMenu = toggleSideMenu;
  window.connectWallet = connectWallet;
  window.disconnectWallet = disconnectWallet;
  window.render = render;
  
  console.log('Wallet functions loaded:', { navigate, toggleSideMenu, connectWallet, render });
}