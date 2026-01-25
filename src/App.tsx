import { useState } from "react";
import {
    Upload,
    FileText,
    FileSpreadsheet,
    FileCode,
    Download,
    Loader2,
    CheckCircle2,
    XCircle,
    File,
    Terminal,
    Braces,
} from "lucide-react";

interface ConversionResponse {
    success: boolean;
    message: string;
    data: any;
    error: string | null;
}

function App() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ConversionResponse | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const API_DOC_URL = "https://apiconversaoarquivos-luscabr2.runasp.net/";
    const API_URL =
        "https://apiconversaoarquivos-luscabr2.runasp.net/api/convert/";

    const supportedFormats = [
        { ext: ".pdf", name: "PDF", icon: FileText, color: "text-red-500" },
        {
            ext: ".xlsx",
            name: "Excel",
            icon: FileSpreadsheet,
            color: "text-green-500",
        },
        {
            ext: ".xls",
            name: "Excel 97-2003",
            icon: FileSpreadsheet,
            color: "text-green-600",
        },
        { ext: ".csv", name: "CSV", icon: FileCode, color: "text-blue-500" },
        { ext: ".docx", name: "Word", icon: File, color: "text-indigo-500" },
        { ext: ".xml", name: "XML", icon: Braces, color: "text-orange-500" },
        { ext: ".txt", name: "Text", icon: FileText, color: "text-gray-400" },
        { ext: ".log", name: "Log", icon: Terminal, color: "text-yellow-500" },
    ];

    const getFileIcon = (fileName: string) => {
        const ext = fileName.toLowerCase().substring(fileName.lastIndexOf("."));
        const format = supportedFormats.find((f) => f.ext === ext);
        return format || { icon: FileText, color: "text-gray-500" };
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setResult(null);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            setResult(null);
        }
    };

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        setResult(null);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch(API_URL, {
                method: "POST",
                body: formData,
            });

            const data: ConversionResponse = await response.json();
            setResult(data);
        } catch (error) {
            setResult({
                success: false,
                message: "Erro ao conectar com a API",
                data: null,
                error: error instanceof Error ? error.message : "Unknown error",
            });
        } finally {
            setLoading(false);
        }
    };

    const downloadJSON = () => {
        if (!result?.data) return;

        const jsonString = JSON.stringify(result.data, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${file?.name.replace(/\.[^/.]+$/, "")}_converted.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const resetForm = () => {
        setFile(null);
        setResult(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4 md:p-8">
            {/* Social Media Links */}
            <div className="social-links">
                <a
                    href="https://www.linkedin.com/in/lucas-santos387/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="linkedin"
                    className="social-btn"
                    title="LinkedIn"
                >
                    <svg
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                    </svg>
                    <span>in/lucas-santos387</span>
                </a>

                <a
                    href="https://github.com/luscaBr2/ConversaoArquivosJson"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="github"
                    className="social-btn"
                    title="GitHub"
                >
                    <svg
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                    <span>luscaBr2</span>
                </a>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Conversor de Arquivos para JSON
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Converta PDF, Excel, CSV, Word, XML, TXT e LOG para JSON
                        em segundos
                    </p>
                </div>

                {/* Supported Formats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {supportedFormats.map((format) => (
                        <div
                            key={format.ext}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all"
                        >
                            <format.icon
                                className={`w-8 h-8 ${format.color} mx-auto mb-2`}
                            />
                            <p className="text-sm text-gray-300">
                                {format.name}
                            </p>
                            <p className="text-xs text-gray-500">
                                {format.ext}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Upload Area */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border-2 border-dashed border-gray-700 mb-8">
                    <div
                        className={`transition-all ${isDragging ? "scale-105 border-blue-500" : ""}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {!file ? (
                            <div className="text-center">
                                <Upload className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">
                                    Arraste um arquivo ou clique para selecionar
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Suporte para PDF, Excel, CSV, Word, XML, TXT
                                    e LOG
                                </p>
                                <label className="inline-block">
                                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors">
                                        Selecionar Arquivo
                                    </span>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        accept=".pdf,.xlsx,.xls,.xlsm,.csv,.docx,.xml,.txt,.log"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        ) : (
                            <div className="text-center">
                                {(() => {
                                    const { icon: Icon, color } = getFileIcon(
                                        file.name,
                                    );
                                    return (
                                        <Icon
                                            className={`w-16 h-16 ${color} mx-auto mb-4`}
                                        />
                                    );
                                })()}
                                <h3 className="text-xl font-semibold mb-2">
                                    {file.name}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {(file.size / 1024).toFixed(2)} KB
                                </p>
                                <button
                                    onClick={resetForm}
                                    className="text-red-400 hover:text-red-300 transition-colors"
                                >
                                    Remover arquivo
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Convert Button */}
                {file && (
                    <div className="text-center mb-8">
                        <button
                            onClick={handleConvert}
                            disabled={loading}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 inline-flex items-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Convertendo...
                                </>
                            ) : (
                                <>
                                    <FileCode className="w-5 h-5" />
                                    Converter para JSON
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* Result */}
                {result && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                {result.success ? (
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                ) : (
                                    <XCircle className="w-8 h-8 text-red-500" />
                                )}
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {result.success
                                            ? "Conversão Concluída!"
                                            : "Erro na Conversão"}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        {result.message}
                                    </p>
                                </div>
                            </div>
                            {result.success && (
                                <button
                                    onClick={downloadJSON}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Baixar JSON
                                </button>
                            )}
                        </div>

                        {/* Stats Summary */}
                        {result.success && result.data && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                {result.data.fileType && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Tipo
                                        </p>
                                        <p className="text-lg font-semibold text-blue-400">
                                            {result.data.fileType}
                                        </p>
                                    </div>
                                )}
                                {result.data.totalPages !== undefined && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Páginas
                                        </p>
                                        <p className="text-lg font-semibold text-green-400">
                                            {result.data.totalPages}
                                        </p>
                                    </div>
                                )}
                                {result.data.totalSheets !== undefined && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Planilhas
                                        </p>
                                        <p className="text-lg font-semibold text-green-400">
                                            {result.data.totalSheets}
                                        </p>
                                    </div>
                                )}
                                {result.data.totalParagraphs !== undefined && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Parágrafos
                                        </p>
                                        <p className="text-lg font-semibold text-purple-400">
                                            {result.data.totalParagraphs}
                                        </p>
                                    </div>
                                )}
                                {result.data.totalTables !== undefined && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Tabelas
                                        </p>
                                        <p className="text-lg font-semibold text-purple-400">
                                            {result.data.totalTables}
                                        </p>
                                    </div>
                                )}
                                {result.data.totalLines !== undefined && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Linhas
                                        </p>
                                        <p className="text-lg font-semibold text-yellow-400">
                                            {result.data.totalLines}
                                        </p>
                                    </div>
                                )}
                                {result.data.errorCount !== undefined && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Erros
                                        </p>
                                        <p className="text-lg font-semibold text-red-400">
                                            {result.data.errorCount}
                                        </p>
                                    </div>
                                )}
                                {result.data.rootElement && (
                                    <div className="bg-gray-900/50 rounded-lg p-3">
                                        <p className="text-xs text-gray-500">
                                            Root Element
                                        </p>
                                        <p className="text-lg font-semibold text-orange-400">
                                            {result.data.rootElement}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Log Level Stats */}
                        {result.success && result.data?.logLevelStats && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-300 mb-2">
                                    Níveis de Log
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {Object.entries(
                                        result.data.logLevelStats,
                                    ).map(([level, count]) => (
                                        <div
                                            key={level}
                                            className="bg-gray-900/50 rounded p-2 flex justify-between items-center"
                                        >
                                            <span
                                                className={`text-xs font-mono ${
                                                    level === "ERROR" ||
                                                    level === "FATAL"
                                                        ? "text-red-400"
                                                        : level === "WARN" ||
                                                            level === "WARNING"
                                                          ? "text-yellow-400"
                                                          : level === "INFO"
                                                            ? "text-blue-400"
                                                            : "text-gray-400"
                                                }`}
                                            >
                                                {level}
                                            </span>
                                            <span className="text-sm font-semibold text-white">
                                                {count as number}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* JSON Preview */}
                        <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-96">
                            <pre className="text-sm text-gray-300 text-left">
                                {JSON.stringify(
                                    result.success ? result.data : result,
                                    null,
                                    2,
                                )}
                            </pre>
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="text-center mt-12 text-gray-500 text-sm">
                    <p>
                        Desenvolvido por Lucas Santos usando React + TypeScript
                        + Vite
                    </p>
                    <p className="mt-2">API v1.2.0</p>

                    <p className="mt-2">
                        Documentação da API e Endpoint:{" "}
                        <a
                            href={API_DOC_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            {API_DOC_URL}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
