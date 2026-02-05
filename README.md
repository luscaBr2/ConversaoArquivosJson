# 🎨 Conversor de Arquivos para JSON - Frontend

Interface web desenvolvida em React + TypeScript + Vite para conversão de arquivos para JSON.

## 🌐 Deploy

**Acesse a aplicação:** [https://conversao-arquivos-luscabr2.vercel.app](https://conversao-arquivos-luscabr2.vercel.app)

**API Backend:** [http://apiconversaoarquivos-luscabr2.runasp.net](http://apiconversaoarquivos-luscabr2.runasp.net)

---

## 🚀 Versão 1.3.0 - Novidades

### 🎉 **PowerPoint Suportado!**

- ✅ Conversão de apresentações `.pptx` para JSON
- ✅ Extração de slides, títulos e notas
- ✅ Visualização de estatísticas de slides
- ✅ Card dedicado para PowerPoint com ícone laranja

### 🎯 **Interface Simplificada**

- ✅ Upload de 1 arquivo por vez (design limpo)
- ✅ Drag & drop intuitivo
- ✅ Preview completo do JSON
- ✅ Download individual com nome personalizado
- ✅ Estatísticas dinâmicas por tipo de arquivo

---

## 📋 Formatos Suportados

A aplicação converte **8 formatos** de arquivo para JSON:

| Formato    | Extensão                 | Estatísticas Exibidas |
| ---------- | ------------------------ | --------------------- |
| PDF        | `.pdf`                   | Páginas               |
| PowerPoint | `.pptx`                  | Slides                |
| Excel      | `.xlsx`, `.xls`, `.xlsm` | Planilhas             |
| CSV        | `.csv`                   | -                     |
| Word       | `.docx`                  | Parágrafos, Tabelas   |
| XML        | `.xml`                   | -                     |
| Text       | `.txt`                   | Linhas                |
| Log        | `.log`                   | Linhas, Erros         |

---

## ✨ Funcionalidades

### 📤 Upload de Arquivos

- **Drag & Drop:** Arraste seu arquivo para a área de upload
- **Click to Upload:** Clique para abrir o seletor de arquivos
- **Validação:** Aceita apenas formatos suportados
- **Limite:** Máximo 100MB por arquivo
- **Feedback Visual:** Área de upload muda de cor ao arrastar

### 🔄 Processamento

- **Loading Visual:** Spinner animado durante conversão
- **Feedback Imediato:** Mensagens de sucesso ou erro claras
- **Preview de Arquivo:** Veja o nome e tamanho antes de converter
- **Indicador de Tipo:** Ícone colorido do formato detectado

### 📊 Visualização de Resultados

- **Preview JSON:** Veja o JSON completo formatado com scroll
- **Estatísticas Dinâmicas:** Cards com métricas específicas do arquivo:
    - **PDF:** Total de páginas
    - **PowerPoint:** Total de slides
    - **Excel:** Total de planilhas
    - **Word:** Total de parágrafos e tabelas
    - **Text:** Total de linhas
    - **Log:** Total de linhas e erros encontrados
    - **Todos:** Badge com tipo de arquivo detectado
- **Cores Diferenciadas:** Cada métrica tem cor própria para fácil identificação

### 💾 Download

- **Download JSON:** Baixe o resultado como arquivo `.json`
- **Nome Inteligente:** Arquivo baixado mantém nome original + sufixo
    - Exemplo: `apresentacao.pptx` → `apresentacao_converted.json`
    - Exemplo: `relatorio.pdf` → `relatorio_converted.json`

### 🎨 Design

- **Tema Escuro:** Interface moderna com gradientes azul e roxo
- **Responsivo:** Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves:** Transições e hover effects
- **Cards Informativos:** Formatos suportados em destaque
- **Glassmorphism:** Efeito de vidro fosco nos cards

---

## 🛠️ Tecnologias

| Tecnologia       | Versão  | Descrição                            |
| ---------------- | ------- | ------------------------------------ |
| **React**        | 18.3.1  | Biblioteca de interface              |
| **TypeScript**   | 5.5.3   | Tipagem estática                     |
| **Vite**         | 5.4.2   | Build tool e dev server ultra-rápido |
| **Tailwind CSS** | 3.4.1   | Estilização utility-first            |
| **Lucide React** | 0.344.0 | Ícones SVG modernos                  |

---

## 📱 Responsividade

### Desktop (≥768px)

- Grid de formatos: 5 colunas
- Estatísticas: 4 colunas
- Layout espaçado (p-8)
- Redes sociais: Texto visível

### Tablet (640-767px)

- Grid de formatos: 4 colunas
- Estatísticas: 3 colunas
- Layout médio (p-6)

### Mobile (<640px)

- Grid de formatos: 3 colunas
- Estatísticas: 2 colunas
- Layout compacto (p-4)
- Redes sociais: Apenas ícones
- Tamanhos de fonte reduzidos

---

## 🐛 Troubleshooting

### Erro de CORS

**Problema:** `Access to fetch at '...' has been blocked by CORS policy`  
**Solução:**

- Verifique se a API backend tem CORS habilitado
- Backend deve incluir header: `Access-Control-Allow-Origin: *`

### Arquivo não é aceito

**Problema:** Seletor de arquivos não mostra determinado arquivo  
**Solução:**

- Verifique se a extensão está listada no atributo `accept` do input
- Certifique-se de que o arquivo tem a extensão correta

### Preview do JSON não aparece

**Problema:** Área de preview fica vazia após conversão  
**Solução:**

- Abra o console (F12) e verifique se há erros
- Verifique se `result.data` existe
- Teste com arquivo menor primeiro

---

## 🔄 Changelog

### v1.3.0 (2026-02-05)

- ✅ Suporte a PowerPoint (.pptx)

### v1.2.1 (2026-01-30)

- ✅ Melhorias de performance
- ✅ Correções de responsividade
- ✅ Otimização de bundle

### v1.2.0 (2026-01-24)

- ✅ Suporte a XML, TXT, LOG
- ✅ Estatísticas de logs (erros, níveis)
- ✅ Preview de JSON melhorado
- ✅ Cards de formato reorganizados

### v1.1.0 (2026-01-24)

- ✅ Suporte a Word (.docx)
- ✅ Estatísticas de parágrafos e tabelas
- ✅ Ícones coloridos por tipo

### v1.0.0 (2026-01-23)

- ✅ Lançamento inicial
- ✅ Suporte a PDF, Excel, CSV
- ✅ Upload drag & drop
- ✅ Preview de JSON
- ✅ Download de resultados

---

## 👨‍💻 Desenvolvido por

**Lucas Santos**

🐙 GitHub: [@luscaBr2](https://github.com/luscaBr2)  
💼 LinkedIn: [linkedin.com/in/lucas](https://linkedin.com/in/lucas)

---

**⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!**
