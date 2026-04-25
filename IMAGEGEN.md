## Generacion de imagenes de productos

El lote de prompts para los 14 productos esta listo en:

- [tmp/imagegen/insumossm-products.jsonl](c:/Users/silva/OneDrive/Documentos/insumossm-web/tmp/imagegen/insumossm-products.jsonl)

Cuando `OPENAI_API_KEY` este configurada, ejecuta:

```powershell
$env:CODEX_HOME = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { "$HOME\.codex" }
python "$env:CODEX_HOME\skills\.system\imagegen\scripts\image_gen.py" generate-batch `
  --input "tmp/imagegen/insumossm-products.jsonl" `
  --out-dir "public/products" `
  --concurrency 3
```

Archivos esperados:

- `public/products/gasa-esteril-10x10cm.png`
- `public/products/aposito-transparente.png`
- `public/products/jeringa-5ml-con-aguja.png`
- `public/products/aguja-hipodermica-23g.png`
- `public/products/sutura-nylon-2-0.png`
- `public/products/sutura-vicryl-3-0.png`
- `public/products/cateter-venoso-periferico-18g.png`
- `public/products/guante-latex-s-m-l.png`
- `public/products/guante-nitrilo-azul.png`
- `public/products/mascarilla-quirurgica-3-pliegues.png`
- `public/products/mascarilla-ffp2-kn95.png`
- `public/products/canula-nasal-adulto.png`
- `public/products/estetoscopio-doble-campana.png`
- `public/products/oximetro-de-pulso-digital.png`

Si quieres, el siguiente paso es que me confirmes cuando dejes la variable configurada y yo corro el lote por ti.
