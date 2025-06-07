export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Encurta um texto adicionando reticências no final se ele ultrapassar o limite.
 * @param {string} text - Texto original
 * @param {number} maxLength - Tamanho máximo permitido
 * @returns {string} - Texto encurtado com "..."
 */
export function shortText(text, maxLength = 100) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}