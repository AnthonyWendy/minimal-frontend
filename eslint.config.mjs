import tsParser from "@typescript-eslint/parser"; // Importação do parser TypeScript
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import standardConfig from "eslint-config-standard"; // Importa a configuração do Standard
import prettierConfig from "eslint-config-prettier"; // Importa a configuração do Prettier
import importPlugin from "eslint-plugin-import"; // Importa o plugin de importações

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser, // Uso do parser TypeScript
      parserOptions: { // Correção: mover parserOptions para dentro de languageOptions
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      import: importPlugin, // Adicionando o plugin import
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...standardConfig.rules, // Inclui as regras do Standard
      ...prettierConfig.rules, // Inclui as regras do Prettier
      ...importPlugin.configs.recommended.rules, // Inclui as regras recomendadas do plugin import
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
  },
];
