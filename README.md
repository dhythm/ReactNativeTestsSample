# Storybook
```bash
npx -p @storybook/cli sb init --type react_native
npm run storybook
npm start
```

# Jest
```bash
npm run test
```

# Detox
```bash
npm install detox --save-dev
detox init -r jest
cd ios && pod install && cd ..

npm start
detox build
detox test
```