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
    Presentation,
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

    const API_DOC_URL = "http://apiconversaoarquivos-luscabr2.runasp.net/";
    const API_URL =
        "http://apiconversaoarquivos-luscabr2.runasp.net/api/convert/";

    const supportedFormats = [
        { ext: ".pdf", name: "PDF", icon: FileText, color: "text-red-500" },
        {
            ext: ".pptx",
            name: "PowerPoint",
            icon: Presentation,
            color: "text-orange-500",
        },
        {
            ext: ".xlsx",
            name: "Excel",
            icon: FileSpreadsheet,
            color: "text-green-500",
        },
        {
            ext: ".xls",
            name: "Excel 97",
            icon: FileSpreadsheet,
            color: "text-green-600",
        },
        { ext: ".csv", name: "CSV", icon: FileCode, color: "text-blue-500" },
        { ext: ".docx", name: "Word", icon: File, color: "text-indigo-500" },
        { ext: ".xml", name: "XML", icon: Braces, color: "text-purple-500" },
        { ext: ".txt", name: "Text", icon: FileText, color: "text-gray-400" },
        { ext: ".log", name: "Log", icon: Terminal, color: "text-yellow-500" },
    ];

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
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
            setResult(null);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setResult(null);
        }
    };

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        setResult(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao processar arquivo. Verifique a conexão com a API.");
        } finally {
            setLoading(false);
        }
    };

    const downloadJSON = () => {
        if (!result?.data || !file) return;

        const jsonStr = JSON.stringify(result.data, null, 2);
        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${file.name.replace(/\.[^/.]+$/, "")}_converted.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    };

    const getFileIcon = () => {
        if (!file) return FileText;
        const ext = "." + file.name.split(".").pop()?.toLowerCase();
        const format = supportedFormats.find((f) => f.ext === ext);
        return format?.icon || FileText;
    };

    const getFileColor = () => {
        if (!file) return "text-gray-400";
        const ext = "." + file.name.split(".").pop()?.toLowerCase();
        const format = supportedFormats.find((f) => f.ext === ext);
        return format?.color || "text-gray-400";
    };

    const getStatistics = () => {
        if (!result?.data) return [];

        const stats = [];
        const data = result.data;

        if (data.totalPages) {
            stats.push({
                label: "Páginas",
                value: data.totalPages,
                color: "text-green-400",
            });
        }
        if (data.totalSlides) {
            stats.push({
                label: "Slides",
                value: data.totalSlides,
                color: "text-orange-400",
            });
        }
        if (data.totalSheets) {
            stats.push({
                label: "Planilhas",
                value: data.totalSheets,
                color: "text-green-400",
            });
        }
        if (data.totalParagraphs) {
            stats.push({
                label: "Parágrafos",
                value: data.totalParagraphs,
                color: "text-purple-400",
            });
        }
        if (data.totalTables) {
            stats.push({
                label: "Tabelas",
                value: data.totalTables,
                color: "text-purple-400",
            });
        }
        if (data.totalLines) {
            stats.push({
                label: "Linhas",
                value: data.totalLines,
                color: "text-yellow-400",
            });
        }
        if (data.errorCount !== undefined) {
            stats.push({
                label: "Erros",
                value: data.errorCount,
                color: "text-red-400",
            });
        }
        if (data.fileType) {
            stats.push({
                label: "Tipo",
                value: data.fileType,
                color: "text-blue-400",
            });
        }

        return stats;
    };

    const FileIcon = getFileIcon();

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
                    <span>lucas-santos387</span>
                </a>

                <a
                    href="https://github.com/luscaBr2"
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

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Conversor de Arquivos para JSON
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Converta PDF, PowerPoint, Excel, CSV, Word, XML, TXT e
                        LOG para JSON
                    </p>
                    <p className="text-gray-500 text-sm mt-2">v1.3.0</p>
                </div>

                {/* Supported Formats */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8">
                    {supportedFormats.map((format) => (
                        <div
                            key={format.ext}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700 hover:border-gray-600 transition-all hover:scale-105 text-center"
                        >
                            <format.icon
                                className={`w-6 h-6 ${format.color} mx-auto mb-2`}
                            />
                            <p className="text-xs font-medium">{format.name}</p>
                            <p className="text-xs text-gray-500">
                                {format.ext}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Upload Area */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border-2 border-dashed border-gray-700 hover:border-gray-600 transition-colors mb-8">
                    <div className="text-center">
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`transition-all ${isDragging ? "scale-105" : "scale-100"}`}
                        >
                            <Upload
                                className={`w-16 h-16 mx-auto mb-4 ${isDragging ? "text-blue-400" : "text-gray-400"}`}
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                {file ? file.name : "Arraste seu arquivo aqui"}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Ou clique para selecionar | Máximo 100MB
                            </p>

                            <label className="inline-block">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition-all transform hover:scale-105 inline-flex items-center gap-2">
                                    <Upload className="w-5 h-5" />
                                    Selecionar Arquivo
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        accept=".pdf,.pptx,.xlsx,.xls,.xlsm,.csv,.docx,.xml,.txt,.log"
                                        className="hidden"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* File Selected */}
                {file && !result && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <FileIcon
                                    className={`w-8 h-8 ${getFileColor()}`}
                                />
                                <div>
                                    <p className="font-semibold">{file.name}</p>
                                    <p className="text-sm text-gray-400">
                                        {formatFileSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setFile(null)}
                                className="text-red-400 hover:text-red-300 transition-colors"
                            >
                                <XCircle className="w-6 h-6" />
                            </button>
                        </div>

                        <button
                            onClick={handleConvert}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-4 rounded-lg transition-all inline-flex items-center justify-center gap-2 font-semibold text-lg"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    Convertendo...
                                </>
                            ) : (
                                <>
                                    <Upload className="w-6 h-6" />
                                    Converter para JSON
                                </>
                            )}
                        </button>
                    </div>
                )}

                {/* Result */}
                {result && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 space-y-6">
                        {/* Status */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {result.success ? (
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                ) : (
                                    <XCircle className="w-8 h-8 text-red-500" />
                                )}
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {result.message}
                                    </h3>
                                    {result.success && file && (
                                        <p className="text-sm text-gray-400">
                                            {file.name}
                                        </p>
                                    )}
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

                        {/* Statistics */}
                        {result.success && getStatistics().length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {getStatistics().map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-900/50 rounded-lg p-3 text-center"
                                    >
                                        <p className="text-xs text-gray-500 mb-1">
                                            {stat.label}
                                        </p>
                                        <p
                                            className={`text-2xl font-bold ${stat.color}`}
                                        >
                                            {stat.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* JSON Preview */}
                        {result.success && (
                            <div className="bg-gray-900 rounded-lg p-4 max-h-96 overflow-auto border border-gray-700">
                                <pre className="text-xs text-gray-300 whitespace-pre-wrap break-words">
                                    {JSON.stringify(result.data, null, 2)}
                                </pre>
                            </div>
                        )}

                        {/* Error */}
                        {!result.success && (
                            <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
                                <p className="text-red-400">{result.error}</p>
                            </div>
                        )}

                        {/* New Conversion Button */}
                        <button
                            onClick={() => {
                                setFile(null);
                                setResult(null);
                            }}
                            className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <Upload className="w-5 h-5" />
                            Converter Novo Arquivo
                        </button>
                    </div>
                )}

                {/* Footer */}
                <div className="text-center mt-12 text-gray-500 text-sm space-y-2">
                    <p>Desenvolvido usando React + TypeScript + Vite</p>
                    <p>API v1.3.0</p>
                    <p>
                        Documentação da API e Endpoint::{" "}
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
