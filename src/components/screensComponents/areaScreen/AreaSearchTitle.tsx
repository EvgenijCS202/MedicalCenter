const AreaSearchTitle = (title: string) => {
  switch(title) {
      case 'Кардиология': return 'кардиологии'
      case 'Стоматология': return 'стоматологии'
      case 'Анализы': return 'анализам'
      default: return ''
  }
}

export default AreaSearchTitle