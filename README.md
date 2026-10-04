# CoFoundTR

CoFoundTR açılış sayfasının kaynak projesi: React 19 + Vite + TypeScript + Tailwind CSS v4.

Bu proje, orijinal kaynak kodu kaybolan Google AI Studio sitesinin production build'inden yeniden oluşturuldu. Eski build, değiştirilmeden `legacy-build/` klasöründe referans olarak duruyor.

## Komutlar

```bash
npm install
npm run dev        # geliştirme sunucusu (http://localhost:5173)
npm run build      # tip kontrolü + production build -> dist/
npm run preview    # dist/ çıktısını yerelde sun
npm run typecheck  # yalnızca TypeScript kontrolü
```

## Klasör yapısı

```
├── index.html               Vite giriş sayfası (Tally embed.js burada yükleniyor)
├── vite.config.ts
├── tsconfig*.json
├── src/
│   ├── main.tsx             React kök render'ı (StrictMode)
│   ├── App.tsx              Sayfa iskeleti, form modalının state'i, scroll kilidi
│   ├── index.css            Google Fonts, Tailwind, tema fontları, body rengi
│   ├── config/site.ts       Tally form URL'si ve sosyal medya linkleri
│   ├── lib/animations.ts    Ortak motion variant'ları (stagger + fade-up)
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── HowItWorks.tsx   → StepCard.tsx
│       ├── ApplyCTA.tsx
│       ├── WhyUs.tsx        → InfoCard.tsx
│       ├── Footer.tsx
│       └── TallyModal.tsx
└── legacy-build/            Kurtarılan eski build (dokunulmadı)
```

## Tally

Başvuru formu, `TallyModal` içinde iframe olarak açılıyor:
`https://tally.so/embed/jaY2P6?hideTitle=1&dynamicHeight=1`.
Form adresini değiştirmek için `src/config/site.ts` dosyasındaki `TALLY_FORM_URL` değerini güncelleyin.

## Deploy

`npm run build` sonrası `dist/` klasörünün içeriği yayınlanır. Asset yolları `/assets/...` şeklinde mutlak olduğundan site alan adının kökünden servis edilmelidir (eski build'le aynı davranış). Bir alt yoldan yayınlanacaksa `vite.config.ts` içindeki `base` değeri güncellenmelidir.
