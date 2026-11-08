$ErrorActionPreference = 'Stop'
$enc = New-Object System.Text.UTF8Encoding($false)

function PatchRe($path, $pattern, $replacement) {
  $txt = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
  $rx = New-Object System.Text.RegularExpressions.Regex($pattern)
  if (-not $rx.IsMatch($txt)) { throw "PATTERN NOT FOUND in $path : $pattern" }
  $txt = $rx.Replace($txt, [System.Text.RegularExpressions.MatchEvaluator]({ param($m) $replacement }), 1)
  [System.IO.File]::WriteAllText($path, $txt, $enc)
  Write-Host "OK $path"
}

# 1) app.js: restore SOON badge for cards flagged soon
PatchRe 'app.js' 'const soon = "[^"]*";[^\r\n]*' 'const soon = p.soon ? `<span class="soon-badge">SOON</span>` : "";'

# 2) programs-data.js: Checker is soon again
PatchRe 'programs-data.js' '\{ name: "Checker", url: null,' '{ name: "Checker", url: null, soon: true,'

# 3) ui-data.js: card date -> 08.11.2026 (body text untouched)
PatchRe 'ui-data.js' 'ruDate: "01\.01\.2027", enDate: "Jan 1, 2027"' 'ruDate: "08.11.2026", enDate: "Nov 8, 2026"'

# 4) fx.css: plain hero title + shimmering SOON badge
$css = [System.IO.File]::ReadAllText('fx.css', [System.Text.Encoding]::UTF8)
$css += @"

/* hero title on Programs page: plain, bold, centered */
.hero-title.plain {
  background: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  color: var(--text);
  -webkit-text-fill-color: currentColor;
  text-align: center;
  margin: 0 auto 22px;
}

/* SOON badge in Checker description: same pink-violet shimmer */
.soon-badge {
  display: inline-block;
  margin-top: 10px;
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff5fa2, #d946ef, #8b5cf6, #ff5fa2);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: shimmer-move 4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .soon-badge { animation: none; }
}
"@
[System.IO.File]::WriteAllText('fx.css', $css, $enc)
Write-Host 'OK fx.css appended'
