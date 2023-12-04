import { ERROR_TYPE } from 'src/validator/src/errors'

type ErrorMapper = {
  title: Record<string, string>
  [key: string]: {
    [item: string]: string
  }
}

export const defaultGroup = 'Інші помилки в оформлені роботи'
export const defaultRule = 'Інші група помилок'

export const errorMapper: ErrorMapper = {
  title: {
    [ERROR_TYPE.frame]: 'Помилки оформлення рамки',
    [ERROR_TYPE.referenceList]: 'Помилки в списку використаних джерел',
    [ERROR_TYPE.pagesFidelity]: 'Помилки в  змісті',
    [ERROR_TYPE.picturesAndTables]: 'Помилки надписів рисунків та таблиці',
    [ERROR_TYPE.referenceOrder]: 'Помилки порядку літературних джерел в роботі',
    [ERROR_TYPE.abbreviation]: 'Помилки в абривіатурах',
    [ERROR_TYPE.addition]: 'Помилки в додатках',
  },
  [ERROR_TYPE.referenceList]: {
    rule0: 'Неправильна назва у Списку використаних джерел',
    rule1: 'Кількість використаних джерел',
    rule2: 'Непправильний порядок джерел',
    rule3: 'Неправильна нумерація джерел',
    rule4: 'Відсутні обовязкові атрибути у джерелах',
    rule5: 'Відсутні обовязкові атрибути у джерелах',
  },
  [ERROR_TYPE.referenceOrder]: {
    rule1: 'Неправильний формат чисел',
    rule2: 'Помилка в розділових знаках перед джерелом',
    rule3: 'Не може бути джерело після крапки або коми',
    rule4: 'Помилка в розділових знаках після джерела',
    rule5: 'Порядок вживання літературних джерел',
    rule6: 'Літературні джерела без посилань',
  },
  [ERROR_TYPE.pagesFidelity]: {
    rule1: 'Неправильно оформлений зміст',
    rule2: 'Неправильний регістр',
    rule3: 'Неправильна нумерація розділів',
    rule4: 'Неправильна нумерація підрозділів',
    rule5: 'Неправильнa кількість підрозділів',
    rule6: 'Неправильно оформлена нумерація підрозділів',
    rule7: 'Неправильний символ у нумерація підрозділів',
    rule8: 'Відсутні висновки до розділу',
    rule10: 'Відсутній елемент змісту',
    rule10_1: 'Неправильний порядок',
    rule11: 'Неспівпадіння в назвах',
    rule12: 'Неспівпадіння в регістрі назв',
  },
  [ERROR_TYPE.frame]: {
    rule1: 'Невірний номер сторінки',
    rule2: 'Неправильно вказана загальна к-сть сторінок',
    rule3: 'Не заповнені поля',
    rule4: 'Не відповідність полів',
  },
  [ERROR_TYPE.abbreviation]: {
    rule1: 'Неправильне розташування',
    rule2: 'Неправильний порядок',
    rule3: 'Неправильний символ',
    rule4: 'Відсутнє посилання',
  },
  [ERROR_TYPE.addition]: {
    rule1: 'Неправильний порядок',
    rule2: 'Неправильний підпис',
  },
}