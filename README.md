# 🎨 Frontend - Conversor de Arquivos para JSON v1.3.0

Interface web moderna desenvolvida em **React + TypeScript + Vite** para consumir a API de conversão de arquivos.

## 🚀 Novidades v1.3.0

### ✅ **Processamento em Lote Automático**
- Detecta automaticamente quando múltiplos arquivos são enviados
- **1 arquivo**: Usa endpoint `/api/convert/` (conversão individual)
- **2-20 arquivos**: Usa endpoint `/api/convert/batch` (processamento paralelo)
- Limite máximo de 20 arquivos por vez

### ✅ **Interface Aprimorada**
- Lista visual de arquivos selecionados
- Indicador de tamanho de cada arquivo
- Botão para remover arquivos individualmente
- Botão para limpar todos os arquivos
- Badge mostrando quantos arquivos estão no lote

### ✅ **Resultados de Batch**
- Resumo visual: Total, Sucesso, Falhas
- Lista detalhada de cada arquivo processado
- Indicadores visuais de sucesso/erro por arquivo
- Download do JSON consolidado

### ✅ **Indicador de OCR**
- Badge visual mostrando se PDF foi processado com OCR
- Diferenciação entre PDF normal e escaneado

## 📋 Funcionalidades Completas

- ✅ Upload via drag-and-drop
- ✅ Upload via seleção (múltiplos arquivos)
- ✅ Validação de formatos suportados (7 tipos)
- ✅ Preview do JSON convertido
- ✅ Download do resultado em JSON
- ✅ Interface responsiva (mobile/desktop)
- ✅ Feedback visual em tempo real
- ✅ Estatísticas do arquivo processado
- ✅ Visualização especial para logs (níveis e erros)
- ✅ Botões de redes sociais (Twitter, LinkedIn, GitHub)
- ✅ **Batch automático até 20 arquivos**
- ✅ **Indicador de OCR para PDFs**

## 🎯 Formatos Suportados

- 📕 PDF (.pdf) - Com OCR para escaneados
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
│   ├── App.tsx      # Componente principal com lógica batch
│   ├── main.tsx     # Entry point
│   └── index.css    # Estilos globais + Tailwind + Botões sociais
├── index.html       # Template HTML
├── package.json     # Dependências
├── tsconfig.json    # Config TypeScript
├── vite.config.ts   # Config Vite
└── tailwind.config.js # Config Tailwind
```

## 🎯 Como Usar

### 1️⃣ Conversão Individual (1 arquivo)
1. Selecione **1 arquivo**
2. Clique em "Converter para JSON"
3. Veja estatísticas e JSON formatado
4. Faça download do arquivo JSON

### 2️⃣ Conversão em Lote (2-20 arquivos)
1. Selecione **2 a 20 arquivos** de uma vez
2. Veja o badge "Processamento em lote ativado"
3. Clique em "Converter para JSON"
4. Veja resumo geral (Total/Sucesso/Falhas)
5. Veja resultados individuais de cada arquivo
6. Faça download do JSON consolidado

### 3️⃣ Remover Arquivos
- Clique no ícone 🗑️ ao lado de cada arquivo para removê-lo
- Clique em "Limpar Tudo" para remover todos

## 📊 Visualizações Especiais

### PDF
- Total de páginas
- **Indicador OCR** (se foi processado com reconhecimento óptico)
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

### Batch
- Resumo: Total/Sucesso/Falhas
- Lista detalhada de cada arquivo
- Status individual com ícones coloridos

## 📡 API

O frontend consome a API disponível em:
```
http://apiconversaoarquivos-luscabr2.runasp.net/api/convert/
```

**Endpoints usados:**
- `POST /api/convert/` - Conversão individual
- `POST /api/convert/batch` - Conversão em lote (automático quando 2+ arquivos)

## 🎨 Personalizar Redes Sociais

Edite os links em `src/App.tsx` (por volta da linha 170):

```typescript
<a href="https://twitter.com/SEUPERFIL" ...>
  <span>@SEUPERFIL</span>
</a>

<a href="https://linkedin.com/in/SEUPERFIL" ...>
  <span>in/SEUPERFIL</span>
</a>

<a href="https://github.com/SEUPERFIL" ...>
  <span>SEUPERFIL</span>
</a>
```

## 🎨 Personalizar URL da API

Edite o arquivo `src/App.tsx` (linha ~24):

```typescript
const API_URL = 'SUA_URL_AQUI/api/convert'
```

## 📱 Responsividade

O frontend é totalmente responsivo e funciona em:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🔒 Segurança

- ✅ Validação de tipos de arquivo no cliente
- ✅ Limite de 20 arquivos por lote
- ✅ Sanitização de inputs
- ✅ CORS habilitado na API

## 🐛 Troubleshooting

### Erro de CORS
Verifique se a API tem CORS configurado para aceitar requisições da origem do frontend.

### Erro 404 na API
Verifique se a URL da API está correta e se a API está online.

### Arquivo não é aceito
Verifique se a extensão do arquivo está na lista de formatos suportados.

### Batch não funciona
Certifique-se de que:
- Selecionou entre 2 e 20 arquivos
- Todos os arquivos têm formatos suportados
- A API está respondendo no endpoint `/batch`

## 🆕 Changelog v1.3.0

- ✅ Adicionado processamento em lote automático (2-20 arquivos)
- ✅ Adicionado lista visual de arquivos com opção de remoção
- ✅ Adicionado resumo de resultados batch
- ✅ Adicionado indicador de OCR para PDFs
- ✅ Melhorado feedback visual de conversão
- ✅ Adicionado botão "Limpar Tudo"
- ✅ Adicionado badge de "Processamento em lote"

## 📄 Licença

MIT

## 👨‍💻 Autor

Desenvolvido por Lucas BR

---

**⭐ Gostou? Considere dar uma estrela no repositório!**
