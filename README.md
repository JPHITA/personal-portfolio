# Juan Nicolas Piedrahita Salas

Personal portfolio — backend and data engineer. Next.js app, Nixie Counter chassis.

## Getting started

```bash
npm install
npm run dev    # http://localhost:3000
npm run lint
npm run build
npm run start  # production server after build
```

## Project images

There are no real project images yet. Each figure is a marked placeholder PNG. Replace the file in place, keep the same name, and update the `alt` text in the matching module under `src/content/projects/` so it describes the real image.

| Project | Drop-in path | Slot |
|---|---|---|
| Production Airflow ETL platform on AWS | `public/projects/airflow-etl-aws/diagram.png` | Architecture diagram |
| Production Airflow ETL platform on AWS | `public/projects/airflow-etl-aws/schedule.png` | DAG schedule |
| Computer-vision speed detection API | `public/projects/speed-detection-api/diagram.png` | Architecture diagram |
| Computer-vision speed detection API | `public/projects/speed-detection-api/service.png` | API and CI release |
| Load-tested ML APIs and 3-model OCR | `public/projects/ml-api-load-tests/diagram.png` | Load-test diagram |
| Load-tested ML APIs and 3-model OCR | `public/projects/ml-api-load-tests/results.png` | Latency and success |
| Report automation and KPI dashboard | `public/projects/report-automation/diagram.png` | Automation flow |
| Report automation and KPI dashboard | `public/projects/report-automation/dashboard.png` | KPI dashboard screenshot |
| Distributed trading RPA | `public/projects/trading-rpa/diagram.png` | Architecture diagram |
| Distributed trading RPA | `public/projects/trading-rpa/miniapp.png` | Telegram Mini App screenshot |
| Real-time CCTV vehicle monitoring | `public/projects/cctv-vehicle-monitor/diagram.png` | Architecture diagram |
| Real-time CCTV vehicle monitoring | `public/projects/cctv-vehicle-monitor/pipeline.png` | Ingest pipeline |
| Purchase prediction for a gaming platform | `public/projects/purchase-prediction/diagram.png` | Model setup |
| Purchase prediction for a gaming platform | `public/projects/purchase-prediction/results.png` | Recall and precision |
| Research-grant ML platform | `public/projects/research-grant-ml/diagram.png` | Architecture diagram |
| Research-grant ML platform | `public/projects/research-grant-ml/frontend.png` | Frontend screenshot |

The home card uses the first image of each project (`diagram.png`). Detail pages list every slot in the caption, including the repo path.

After replacing a file, restart `npm run dev` if the old plate is still cached, and run `npm run build` before a production deploy so the optimized image updates.

## Adding a project

See `AGENTS.md`. Copy `src/content/projects/airflow-etl-aws.tsx`, register it in `src/content/projects/index.ts`, and add PNGs under `public/projects/<slug>/`.
