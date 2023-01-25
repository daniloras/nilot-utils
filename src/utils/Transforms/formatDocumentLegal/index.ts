const STRICT_STRIP_REGEX_CPF: RegExp = /[.-]/g
const LOOSE_STRIP_REGEX_CPF: RegExp = /[^\d]/g

const STRICT_STRIP_REGEX_CNPJ: RegExp = /[-\\/.]/g
const LOOSE_STRIP_REGEX_CNPJ: RegExp = /[^\d]/g

const stripCpf = (number: string, strict?: boolean): string => {
  const regex: RegExp = strict ? STRICT_STRIP_REGEX_CPF : LOOSE_STRIP_REGEX_CNPJ
  return (number || '').replace(regex, '')
}

const stripCnpj = (number: string, strict?: boolean): string => {
  const regex: RegExp = strict ? STRICT_STRIP_REGEX_CPF : LOOSE_STRIP_REGEX_CNPJ
  return (number || '').replace(regex, '')
}

const formatDocumentLegal = (number: string, type: 'CPF' | 'CNPJ'): string => {
  if (type === 'CPF') {
    return stripCpf(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
  }
  return stripCnpj(number).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
}

export default formatDocumentLegal;
