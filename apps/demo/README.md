## Adding a shadcn-vue package

1. Cd into bloc-ui folder 
`cd packages/bloc-ui`
2. Add component via CLI : `npx shadcn-vue@latest add <component>`
3. Manually add `export * from '@/components/ui/<component>';` to `./src/main.ts`