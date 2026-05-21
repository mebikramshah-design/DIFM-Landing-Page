# DIFM landing page → Power Pages (iframe path)

End-to-end recipe to deploy `docs/index.html` as a Power Pages site
without rewriting it for Liquid or Dataverse. Time: about 1 hour.

## Step 1 — Pick a static host

The HTML is fully self-contained. You only need any static host that
allows iframing (most do by default).

### Option A: Azure Static Web Apps (recommended for Microsoft stack)

1. [portal.azure.com](https://portal.azure.com) → **Create a resource → Static Web App**.
2. Plan: **Free**.
3. Source: **GitHub** → authorize → pick this repo and the branch.
4. Build details:
   - Build presets: **Custom**
   - App location: `docs`
   - Output location: *(leave blank)*
5. **Create.** Azure provisions a URL like
   `https://difm-fm-xxxxxxxx.azurestaticapps.net`.

### Option B: GitHub Pages (also free, no Azure needed)

1. Repo → **Settings → Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `claude/fm-lead-generation-62pb8` (or whichever branch holds `docs/index.html`),
   folder: `/docs`.
4. **Save.** URL appears within a minute as
   `https://mebikramshah-design.github.io/difm-landing-page/`.

Either way, open the URL in your browser to confirm the page renders
before moving on.

## Step 2 — Create the Power Pages page

1. [make.powerpages.microsoft.com](https://make.powerpages.microsoft.com) → open your site (or create a new one from a blank template).
2. **Design Studio → Pages →** *+ Page* → choose **Blank**.
3. Name it (e.g. `Home`) and set the URL slug to `/` if you want this to be the landing page.
4. Click the **`</>` Source / Code** toggle at the top right of the page editor.
5. Paste the entire contents of `power-pages/embed.html`.
6. Replace `YOUR_HOST_URL` with the URL from Step 1.
7. **Save → Preview → Sync → Publish.**

## Step 3 — (Optional) full-bleed look

By default Power Pages wraps the iframe in its own site header / footer.
If you want the embedded page to look like *the* page (no Power Pages
chrome):

- **Easiest:** in Design Studio, open the page's **Settings (gear icon)**
  → **Page template** → pick a "Full-width" or "Blank" template.
- **More thorough:** create a new **Web Template** that overrides the
  master layout to render only `{{ page.content }}`, and assign it as
  the page template.

## Step 4 — Wire the QR code

Generate a QR pointing at the Power Pages URL (e.g.
`https://services.difm.qa` once you bind your custom domain in Power
Pages → **Site Settings → Domain names**). Print and deploy.

## Limitations of Path C (be honest with stakeholders)

- The inquiry form still routes via `mailto:` — it does **not** land in
  Dataverse, does **not** trigger Power Automate, and cannot use Azure AD
  authentication.
- Search engines see the Power Pages URL, not the iframe content; SEO
  works but is weaker than a native build.
- When you outgrow this, **Path B** (native Power Pages + Dataverse +
  Power Automate) reuses the same visual design with proper backend
  integration.
