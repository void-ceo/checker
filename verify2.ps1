$ErrorActionPreference = 'Stop'
Select-String -Path app.js -Pattern 'soon' | ForEach-Object { "app.js:$($_.LineNumber): $($_.Line.Trim())" }
Select-String -Path programs-data.js -Pattern 'name: "Checker"' | ForEach-Object { "programs:$($_.LineNumber): $($_.Line.Trim().Substring(0,[Math]::Min(80,$_.Line.Trim().Length)))" }
Select-String -Path ui-data.js -Pattern 'ruDate' | ForEach-Object { "ui-data:$($_.LineNumber): $($_.Line.Trim())" }
Select-String -Path fx.css -Pattern 'soon-badge|hero-title\.plain' | ForEach-Object { "fx.css:$($_.LineNumber): $($_.Line.Trim())" }
Select-String -Path index.html -Pattern 'news-rail|hero-title|tabbar' | ForEach-Object { "index:$($_.LineNumber): $($_.Line.Trim())" }
Write-Host 'CHECK DONE'
