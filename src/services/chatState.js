const chatStates = new Map();

function setPendingCurrency(chatId, value = true) {
  chatStates.set(chatId, { currencyPending: value });
}

function isPendingCurrency(chatId) {
  return chatStates.get(chatId)?.currencyPending || false;
}

function clearPendingCurrency(chatId) {
  chatStates.delete(chatId);
}

module.exports = { setPendingCurrency, isPendingCurrency, clearPendingCurrency };