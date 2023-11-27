

export function localStringToNumber( s ) {
  let var1 = Number( String( s ).replace( /[$]+/g, "" ) )
  let var2 = Number( String( var1).replace( /[^0-9.-]+/g, "" ) )
  return var2;
}

export  function onGenericoFocus( e ) {
    var value = e.target.value;
    e.target.value = value ? localStringToNumber( value ) : ''
}

export function arredondarNumero(numero, casasDecimais) {
  const fatorDeMultiplicacao = 10 ** casasDecimais;
  return Math.round(numero * fatorDeMultiplicacao) / fatorDeMultiplicacao;
}

export function onGenericoBlur( e ) {
  var value = e.target.value
  var options = {
    maximumFractionDigits: 2,
  }
  e.target.value = ( value || value === 0 ) ?
  localStringToNumber( value ).toLocaleString( 'pt-BR', options ) :    '0.00'
}



