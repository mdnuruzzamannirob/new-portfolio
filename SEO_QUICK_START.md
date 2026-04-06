# SEO Quick Start Checklist

Complete these steps to activate SEO for your portfolio:

## ✅ Immediate Actions

### 1. Setup Environment
- [ ] Copy `.env.example` to `.env.local`
- [ ] Update `NEXT_PUBLIC_SITE_URL` with your domain

### 2. Update Configuration (`src/lib/seo.ts`)
- [ ] Change `name` from "Md. Nuruzzaman" to your name
- [ ] Change `title` to your desired SEO title
- [ ] Update `description` with your bio
- [ ] Update `email` with your email
- [ ] Update social media links (LinkedIn, GitHub, etc.)
- [ ] Update `ogImage.url` with your OG image URL (1200x630px)
- [ ] Update `keywords` array with your targeted keywords

### 3. Update Root Layout (`src/app/layout.tsx`)
- [ ] Metadata is already set up, review and customize if needed

### 4. Update Sitemap (`src/app/sitemap.ts`)
- [ ] Update section URLs to match your actual portfolio structure
- [ ] Add routes for any dynamic pages you create

### 5. Add Your Projects (`src/app/projects/[slug]/page.tsx`)
- [ ] Replace sample projects with your actual projects
- [ ] Update project URLs, GitHub links, demo links
- [ ] This enables `/projects/your-project-slug` pages

### 6. Create OG Image (`src/app/opengraph-image.tsx`)
- [ ] Already implemented! You can:
  - [ ] Change the gradient colors to match your brand
  - [ ] Update text (name, title, tagline)
  - [ ] Replace with a static image if preferred

## 🧪 Testing

- [ ] Test sitemap: `https://your-domain.com/sitemap.xml`
- [ ] Test robots.txt: `https://your-domain.com/robots.txt`
- [ ] Test OG image: `https://your-domain.com/opengraph-image.png`
- [ ] Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test social sharing with actual domain
- [ ] Run Lighthouse SEO audit (target: 90+)

## 📤 Search Engine Submission

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Request indexing for your domain

## 📊 Monitoring

- [ ] Set up Google Analytics 4
- [ ] Monitor Core Web Vitals in PageSpeed Insights
- [ ] Track organic search traffic in Google Search Console
- [ ] Monitor keyword rankings over time

## 📁 File Reference

| File | Purpose | Status |
|------|---------|--------|
| `src/lib/seo.ts` | SEO configuration & helpers | ✅ Ready |
| `src/app/layout.tsx` | Root metadata & JSON-LD | ✅ Ready |
| `src/app/sitemap.ts` | XML sitemap generator | ✅ Ready |
| `src/app/robots.ts` | robots.txt generator | ✅ Ready |
| `src/app/opengraph-image.tsx` | OG image (1200x630) | ✅ Ready |
| `src/components/JsonLd.tsx` | JSON-LD component | ✅ Ready |
| `src/app/projects/[slug]/page.tsx` | Dynamic project pages | ✅ Template ready |
| `.env.example` | Environment template | ✅ Ready |

---

## 💡 Pro Tips

1. **Canonical URLs**: Already handled automatically by `constructMetadata()`
2. **Open Graph**: Configure once, reuse everywhere with `constructMetadata()`
3. **Structured Data**: Use `<JsonLd />` component or builders in `seo.ts`
4. **Image Alt Text**: Always include descriptive alt text
5. **Heading Hierarchy**: Use one `<h1>`, then `<h2>` for sections, `<h3>` for subsections
6. **Performance**: Image optimization + font swapping already configured

---

## 🔗 Useful Links

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Types](https://schema.org/docs/schemas.html)
- [Open Graph Documentation](https://ogp.me/)
- [Google Search Central Blog](https://developers.google.com/search/blog)
- [SEO Best Practices](https://developers.google.com/search/docs)

---

## Need Help?

Check the **SEO_IMPLEMENTATION_GUIDE.md** for detailed explanations of each file and implementation decisions.
