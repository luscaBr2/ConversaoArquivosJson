# 🎨 Frontend - Conversor de Arquivos para JSON

Interface web moderna desenvolvida em **React + TypeScript + Vite** para consumir a API de conversão de arquivos.

## 🌐 URL da Aplicação

```
https://conversao-arquivos-luscabr2.vercel.app
```

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones modernos

## 📋 Funcionalidades

- ✅ Upload de arquivos via drag-and-drop
- ✅ Validação de formatos suportados (7 tipos)
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

## 🔧 Instalação

```bash
# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📂 Estrutura de Pastas

```
frontend/
├── public/           # Arquivos públicos estáticos
├── src/
│   ├── App.tsx      # Componente principal
│   ├── main.tsx     # Entry point
│   └── index.css    # Estilos globais + Tailwind
├── index.html       # Template HTML
├── package.json     # Dependências
├── tsconfig.json    # Config TypeScript
├── vite.config.ts   # Config Vite
└── tailwind.config.js # Config Tailwind
```

## 🎯 Como Usar

1. **Selecione um arquivo** - Clique ou arraste para a área de upload
2. **Converta** - Clique no botão "Converter para JSON"
3. **Visualize** - Veja estatísticas e JSON formatado na tela
4. **Baixe** - Faça download do arquivo JSON

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
http://apiconversaoarquivos-luscabr2.runasp.net/api/convert/
```

## 🎨 Personalizações

### Alterar URL da API

Edite o arquivo `src/App.tsx`:

```typescript
const API_URL = 'SUA_URL_AQUI/api/convert/'
```

### Adicionar novos formatos

Edite o array `supportedFormats` em `src/App.tsx`:

```typescript
const supportedFormats = [
  { ext: '.pdf', name: 'PDF', icon: FileText, color: 'text-red-500' },
  // Adicione aqui...
]
```

### Customizar cores (Tailwind)

Edite `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#yourcolor',
    }
  },
}
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

## 🐛 Troubleshooting

### Erro de CORS

Se encontrar erro de CORS, verifique se a API tem CORS configurado para aceitar requisições da origem do frontend.

### Erro 404 na API

Verifique se a URL da API está correta e se a API está online.

### Arquivo não é aceito

Verifique se a extensão do arquivo está na lista de formatos suportados.

## 🆕 Novidades v1.2.0

- ✅ Suporte para XML, TXT e LOG
- ✅ Estatísticas visuais por tipo de arquivo
- ✅ Análise de logs com níveis e erros
- ✅ Grid de formatos responsivo (2 colunas mobile, 4 desktop)
- ✅ Indicadores visuais coloridos por tipo

## 📄 Licença

MIT

## 👨‍💻 Autor

Desenvolvido por Lucas BR

---

**⭐ Gostou? Considere dar uma estrela no repositório!**
