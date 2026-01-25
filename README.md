# 🎨 Frontend - Conversor de Arquivos para JSON

Interface web moderna desenvolvida em **React + TypeScript + Vite** para consumir a API de conversão de arquivos.

## 🌐 URL da Aplicação

```
https://conversao-arquivos-luscabr2.vercel.app
```

## 🌐 URL da API
```
https://conversao-arquivos-luscabr2.vercel.app
```

[Repositório GitHub API](https://github.com/luscaBr2/ApiConversaoArquivos)

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones modernos

## 📋 Funcionalidades

- ✅ Upload de arquivos via drag-and-drop
- ✅ Validação de formatos suportados
- ✅ Preview do JSON convertido
- ✅ Download do resultado em JSON
- ✅ Interface responsiva (mobile/desktop)
- ✅ Feedback visual em tempo real
- ✅ Estatísticas do arquivo processado
- ✅ Visualização especial para logs (níveis e erros)

## 🎯 Formatos Suportados

- 📕 PDF (.pdf)
- 📗 Excel (.xlsx, .xls, .xlsm)
- 📘 CSV (.csv)
- 📙 Word (.docx)
- 🔶 XML (.xml)
- 📄 Text (.txt)
- 🖥️ Log (.log)

## 📊 Visualizações Especiais

### PDF

- Total de páginas
- Conteúdo por página

### Excel

- Número de planilhas
- Dados de cada aba

### Word

- Total de parágrafos e tabelas
- Formatação detectada

### Log

- Contagem de erros
- Estatísticas por nível (INFO, WARN, ERROR, etc)
- Timestamps extraídos

### XML

- Elemento raiz
- Estrutura hierárquica

### Text

- Total de linhas
- Linhas vazias identificadas

## 📡 API

O frontend consome a API disponível em:

```
https://apiconversaoarquivos-luscabr2.runasp.net/api/convert/
```

## 📱 Responsividade

O frontend é totalmente responsivo e funciona em:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🔒 Segurança

- ✅ Validação de tipos de arquivo no cliente
- ✅ Sanitização de inputs
- ✅ CORS habilitado na API

## 🆕 Novidades v1.2.0

- ✅ Suporte para XML, TXT e LOG
- ✅ Estatísticas visuais por tipo de arquivo
- ✅ Análise de logs com níveis e erros
- ✅ Grid de formatos responsivo (2 colunas mobile, 4 desktop)
- ✅ Indicadores visuais coloridos por tipo
