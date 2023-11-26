function BooleanToText(value) {
    if (value == true) {
        return 'Sim';
    } else {
      return 'Não';
    }
}

module.exports = {
  BooleanToText
}
