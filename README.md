# Memweb

Landing page for MemVerse, deployed via GitHub Pages.

## How to Use

### Local Development

1. **Install dependencies:**
```bash
cd memweb
yarn install
# or: npm install
```

2. **Start development server:**
```bash
yarn dev
# or: npm run dev
```

3. **Access the application:**
   - Open `http://localhost:5173` in your browser

### Build for Production

```bash
yarn build
# or: npm run build
```

The built files will be in the `dist/` directory.

### Deploy to GitHub Pages

1. Push your code to the repository
2. The workflow at `.github/workflows/deploy.yml` will automatically build and deploy
3. Enable Pages: Settings → Pages → Source: GitHub Actions
